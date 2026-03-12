import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

type SupportedPlanKey =
  | "intro-call"
  | "arch-review"
  | "retainer";

const PRICE_IDS: Record<SupportedPlanKey, string | undefined> = {
  "intro-call": process.env.STRIPE_PRICE_INTRO_CALL,
  "arch-review": process.env.STRIPE_PRICE_ARCH_REVIEW,
  "retainer": process.env.STRIPE_PRICE_RETAINER,
};

const PLAN_MODES: Record<SupportedPlanKey, "payment" | "subscription"> = {
  "intro-call": "payment",
  "arch-review": "payment",
  "retainer": "subscription",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const plan = body?.plan as SupportedPlanKey;
    const email = body?.email as string | undefined;

    if (!plan || !PRICE_IDS[plan]) {
      return NextResponse.json(
        { error: "Invalid or unconfigured plan." },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      new URL(req.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: PLAN_MODES[plan],
      customer_email: email,
      line_items: [
        {
          price: PRICE_IDS[plan],
          quantity: 1,
        },
      ],
      metadata: {
        plan,
      },
      subscription_data:
        PLAN_MODES[plan] === "subscription"
          ? {
              metadata: {
                plan,
              },
            }
          : undefined,
      success_url: `${baseUrl}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/membership/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("checkout route error", error);

    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 }
    );
  }
}
