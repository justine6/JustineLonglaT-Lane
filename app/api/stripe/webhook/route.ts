import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { markProposalPaid } from "@/lib/proposal-store";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const stripe = getStripe();

  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json(
      { error: "Missing stripe-signature or STRIPE_WEBHOOK_SECRET" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: `Webhook Error: ${err?.message || "Invalid signature"}` },
      { status: 400 }
    );
  }

  try {
    // Handle only what you need
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const sessionId = session.id;
      const paid =
        session.payment_status === "paid" ||
        session.status === "complete" ||
        session.payment_intent != null;

      if (paid && sessionId) {
        try {
          markProposalPaid(
            sessionId,
            session.amount_total ?? undefined,
            session.currency ?? undefined
          );
        } catch (e) {
          console.error("Failed to mark proposal paid:", e);
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (e: any) {
    console.error("stripe webhook handler error:", e);
    return NextResponse.json(
      { error: e?.message || "Webhook handler failed" },
      { status: 500 }
    );
  }
}