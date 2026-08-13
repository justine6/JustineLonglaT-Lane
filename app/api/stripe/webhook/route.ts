import { headers } from "next/headers";
import { NextResponse } from "next/server";

import type Stripe from "stripe";

import {
  deactivateClerkRoleById,
  setClerkRoleById,
} from "@/lib/clerk-role-sync";
import {
  deactivateMembershipBySubscriptionId,
  upsertMembership,
} from "@/lib/membership";
import { markProposalPaid } from "@/lib/proposal-store";
import { getStripe } from "@/lib/stripe";
import {
  classifyCheckoutFulfillment,
  classifySubscriptionFulfillment,
} from "@/lib/stripe-fulfillment";

function mapSubscriptionStatus(
  status: Stripe.Subscription.Status
) {
  switch (status) {
    case "active":
      return "active";
    case "trialing":
      return "trialing";
    case "past_due":
      return "past_due";
    case "canceled":
      return "canceled";
    case "incomplete":
      return "incomplete";
    case "unpaid":
      return "unpaid";
    default:
      return "incomplete";
  }
}

async function getCustomerEmail(
  stripe: Stripe,
  customerId: string
): Promise<string | null> {
  const customer = await stripe.customers.retrieve(customerId);

  if ("deleted" in customer) return null;
  return customer.email ?? null;
}

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = (await headers()).get(
      "stripe-signature"
    );

    if (!signature) {
      return new NextResponse(
        "Missing stripe-signature header",
        {
          status: 400,
        }
      );
    }

    const webhookSecret =
      process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("Missing STRIPE_WEBHOOK_SECRET");
      return new NextResponse("Webhook not configured", {
        status: 500,
      });
    }

    const stripe = getStripe();

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    switch (event.type) {
      case "checkout.session.completed": {
        const session =
          event.data.object as Stripe.Checkout.Session;

        const subscriptionId =
          typeof session.subscription === "string"
            ? session.subscription
            : null;

        const fulfillment =
          classifyCheckoutFulfillment({
            metadata: session.metadata,
            subscriptionId,
          });

        if (fulfillment.kind === "invalid") {
          console.error(
            "Checkout fulfillment classification failed",
            {
              sessionId: session.id,
              reason: fulfillment.reason,
            }
          );
          break;
        }

        const paid =
          session.payment_status === "paid" ||
          (session.status === "complete" &&
            session.payment_status !== "unpaid");

        if (fulfillment.kind === "service") {
          break;
        }

        if (fulfillment.kind === "proposal") {
          if (paid) {
            try {
              markProposalPaid(
                session.id,
                session.amount_total ?? undefined,
                session.currency ?? undefined
              );
            } catch (error) {
              console.error(
                "Failed to mark proposal paid:",
                error
              );
            }
          }

          break;
        }

        const clerkUserId =
          session.metadata?.clerkUserId ?? null;

        const email =
          session.customer_details?.email ||
          session.customer_email ||
          null;

        const customerId =
          typeof session.customer === "string"
            ? session.customer
            : null;

        if (email) {
          await upsertMembership({
            email,
            stripeCustomerId: customerId,
            subscriptionId,
            checkoutSessionId: session.id,
            plan: fulfillment.plan,
            status: paid ? "active" : "incomplete",
          });
        }

        if (paid && clerkUserId) {
          await setClerkRoleById(
            clerkUserId,
            fulfillment.plan
          );
        }

        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription =
          event.data.object as Stripe.Subscription;

        const fulfillment =
          classifySubscriptionFulfillment(
            subscription.metadata
          );

        if (fulfillment.kind === "invalid") {
          console.error(
            "Subscription fulfillment classification failed",
            {
              subscriptionId: subscription.id,
              reason: fulfillment.reason,
            }
          );
          break;
        }

        const customerId =
          typeof subscription.customer === "string"
            ? subscription.customer
            : subscription.customer.id;

        const email = await getCustomerEmail(
          stripe,
          customerId
        );

        const status = mapSubscriptionStatus(
          subscription.status
        );

        const clerkUserId =
          subscription.metadata?.clerkUserId ?? null;

        if (email) {
          await upsertMembership({
            email,
            stripeCustomerId: customerId,
            subscriptionId: subscription.id,
            plan: fulfillment.plan,
            status,
          });
        }

        const activeLike =
          subscription.status === "active" ||
          subscription.status === "trialing";

        if (activeLike) {
          if (clerkUserId) {
            await setClerkRoleById(
              clerkUserId,
              fulfillment.plan
            );
          }
        } else if (clerkUserId) {
          await deactivateClerkRoleById(clerkUserId);
        }

        break;
      }

      case "customer.subscription.deleted": {
        const subscription =
          event.data.object as Stripe.Subscription;

        await deactivateMembershipBySubscriptionId(
          subscription.id
        );

        const clerkUserId =
          subscription.metadata?.clerkUserId ?? null;

        if (clerkUserId) {
          await deactivateClerkRoleById(clerkUserId);
        }

        break;
      }

      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("stripe webhook error", error);
    return new NextResponse("Webhook Error", {
      status: 400,
    });
  }
}
