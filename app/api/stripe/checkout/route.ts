import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const PLAN_MAP = {
  "consulting-session": {
    priceId: process.env.STRIPE_CONSULTING_SESSION_PRICE_ID,
    mode: "payment" as const,
  },
  "platform-access": {
    priceId: process.env.STRIPE_PLATFORM_ACCESS_PRICE_ID,
    mode: "subscription" as const,
  },
  "platform-architect": {
    priceId: process.env.STRIPE_PLATFORM_ARCHITECT_PRICE_ID,
    mode: "subscription" as const,
  },
} as const;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { planKey } = body as {
      planKey?: keyof typeof PLAN_MAP | "enterprise";
    };

    if (!planKey || planKey === "enterprise" || !(planKey in PLAN_MAP)) {
      return NextResponse.json(
        { error: "Invalid or unsupported plan." },
        { status: 400 }
      );
    }

    const plan = PLAN_MAP[planKey];

    if (!plan.priceId) {
      return NextResponse.json(
        { error: "Stripe price is not configured for this plan." },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: plan.mode,
      payment_method_types: ["card"],
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      metadata: {
        planKey,
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/#booking`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Stripe checkout failed." },
      { status: 500 }
    );
  }
}