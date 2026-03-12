import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import {
  deactivateMembershipBySubscriptionId,
  upsertMembership,
} from "@/lib/membership";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

type SupportedPlanKey =
  | "intro-call"
  | "arch-review"
  | "retainer";

function normalizePlan(value: string | undefined | null): SupportedPlanKey {
  if (value === "intro-call" || value === "arch-review" || value === "retainer") {
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

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = (await headers()).get("stripe-signature");

    if (!signature) {
      return new NextResponse("Missing stripe-signature header", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        const plan = normalizePlan(session.metadata?.plan);
        const email =
          session.customer_details?.email ||
          session.customer_email;

        const customerId =
          typeof session.customer === "string"
            ? session.customer
            : null;

        const subscriptionId =
          typeof session.subscription === "string"
            ? session.subscription
            : null;

        if (email) {
          await upsertMembership({
            email,
            stripeCustomerId: customerId,
            subscriptionId,
            checkoutSessionId: session.id,
            plan,
            status: "active",
          });
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

        const customer = await stripe.customers.retrieve(customerId);

        const email =
          !("deleted" in customer)
            ? customer.email
            : null;

        const plan = normalizePlan(subscription.metadata?.plan);

        if (email) {
          await upsertMembership({
            email,
            stripeCustomerId: customerId,
            subscriptionId: subscription.id,
            plan,
            status: mapSubscriptionStatus(subscription.status),
          });
        }

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await deactivateMembershipBySubscriptionId(subscription.id);
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("stripe webhook error", error);
    return new NextResponse("Webhook Error", { status: 400 });
  }
}
