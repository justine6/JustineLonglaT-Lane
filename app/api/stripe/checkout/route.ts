import Stripe from "stripe";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

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
  "arch-review": "subscription",
  "retainer": "subscription",
};

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

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

    console.log("checkout plan:", plan);
    console.log("price id:", PRICE_IDS[plan]);
    console.log("mode:", PLAN_MODES[plan]);
    console.log("clerk user id:", userId ?? "anonymous");

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
        ...(userId ? { clerkUserId: userId } : {}),
      },
      subscription_data:
        PLAN_MODES[plan] === "subscription"
          ? {
              metadata: {
                plan,
                ...(userId ? { clerkUserId: userId } : {}),
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