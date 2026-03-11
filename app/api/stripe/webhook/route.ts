import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import {
  deactivateMembershipBySubscriptionId,
  upsertMembership,
} from "@/lib/membership";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

type SupportedPlanKey =
  | "consulting-session"
  | "platform-access"
  | "platform-architect";

export async function POST(req: Request) {
  const body = await req.text();
  const headerStore = await headers();
  const signature = headerStore.get("stripe-signature");

  if (!signature) {
    return new NextResponse("Missing stripe-signature header", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error: any) {
    console.error("Webhook signature verification failed:", error.message);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  try {
    console.log("Webhook route hit");
    console.log("Webhook event type:", event.type);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        const email =
          session.customer_details?.email ||
          session.customer_email ||
          undefined;

        const planKey = (session.metadata?.planKey || "") as SupportedPlanKey;

        console.log("Session metadata:", session.metadata);

        if (!email || !planKey) {
          console.warn("Missing email or planKey on checkout.session.completed", {
            sessionId: session.id,
            email,
            planKey,
          });
          break;
        }

        const mode = session.mode === "subscription" ? "subscription" : "payment";

        upsertMembership({
          email,
          stripeCustomerId:
            typeof session.customer === "string" ? session.customer : undefined,
          stripeSubscriptionId:
            typeof session.subscription === "string"
              ? session.subscription
              : undefined,
          stripeCheckoutSessionId: session.id,
          planKey,
          mode,
          status: "active",
          grantedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });

        console.log("Access granted", {
          email,
          planKey,
          mode,
          sessionId: session.id,
        });

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        deactivateMembershipBySubscriptionId(subscription.id);

        console.log("Access revoked", {
          subscriptionId: subscription.id,
          status: subscription.status,
        });

        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        console.log("Subscription updated", {
          subscriptionId: subscription.id,
          status: subscription.status,
        });
        break;
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log("invoice.paid", {
          id: invoice.id,
          customer: invoice.customer,
        });
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log("invoice.payment_failed", {
          id: invoice.id,
          customer: invoice.customer,
        });
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return new NextResponse("Webhook handler failed", { status: 500 });
  }
}