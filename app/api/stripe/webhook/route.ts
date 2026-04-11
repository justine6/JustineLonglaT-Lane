import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import {
  deactivateMembershipBySubscriptionId,
  upsertMembership,
} from "@/lib/membership";
import { markProposalPaid } from "@/lib/proposal-store";
import {
  deactivateClerkRoleByEmail,
  setClerkRoleByEmail,
  type SupportedPlanKey,
} from "@/lib/clerk-role-sync";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

function normalizePlan(value: string | undefined | null): SupportedPlanKey {
  if (
    value === "intro-call" ||
    value === "arch-review" ||
    value === "retainer"
  ) {
    return value;
  }

  return "arch-review";
}

function mapSubscriptionStatus(status: Stripe.Subscription.Status) {
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

async function getCustomerEmail(customerId: string): Promise<string | null> {
  const customer = await stripe.customers.retrieve(customerId);

  if ("deleted" in customer) return null;
  return customer.email ?? null;
}

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = (await headers()).get("stripe-signature");

    if (!signature) {
      return new NextResponse("Missing stripe-signature header", {
        status: 400,
      });
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("Missing STRIPE_WEBHOOK_SECRET");
      return new NextResponse("Webhook not configured", { status: 500 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        const plan = normalizePlan(session.metadata?.plan);

        const email =
          session.customer_details?.email || session.customer_email || null;

        const customerId =
          typeof session.customer === "string" ? session.customer : null;

        const subscriptionId =
          typeof session.subscription === "string"
            ? session.subscription
            : null;

        const paid =
          session.payment_status === "paid" ||
          (session.status === "complete" && session.payment_status !== "unpaid");

        if (email) {
          await upsertMembership({
            email,
            stripeCustomerId: customerId,
            subscriptionId,
            checkoutSessionId: session.id,
            plan,
            status: paid ? "active" : "incomplete",
          });
        }

        if (paid && session.id) {
          try {
            markProposalPaid(
              session.id,
              session.amount_total ?? undefined,
              session.currency ?? undefined
            );
          } catch (e) {
            console.error("Failed to mark proposal paid:", e);
          }
        }

        if (paid && email) {
          await setClerkRoleByEmail(email, plan);
        }

        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;

        const customerId =
          typeof subscription.customer === "string"
            ? subscription.customer
            : subscription.customer.id;

        const email = await getCustomerEmail(customerId);
        const plan = normalizePlan(subscription.metadata?.plan);
        const status = mapSubscriptionStatus(subscription.status);

        if (email) {
          await upsertMembership({
            email,
            stripeCustomerId: customerId,
            subscriptionId: subscription.id,
            plan,
            status,
          });
        }

        const activeLike =
          subscription.status === "active" ||
          subscription.status === "trialing";

        if (activeLike) {
          if (email) {
            await setClerkRoleByEmail(email, plan);
          }
        } else {
          if (email) {
            await deactivateClerkRoleByEmail(email);
          }
        }

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        await deactivateMembershipBySubscriptionId(subscription.id);

        const customerId =
          typeof subscription.customer === "string"
            ? subscription.customer
            : subscription.customer.id;

        const email = await getCustomerEmail(customerId);

        if (email) {
          await deactivateClerkRoleByEmail(email);
        }

        break;
      }

      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("stripe webhook error", error);
    return new NextResponse("Webhook Error", { status: 400 });
  }
}