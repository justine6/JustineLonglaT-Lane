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

function getSuccessUrl(baseUrl: string, plan: SupportedPlanKey) {
  switch (plan) {
    case "intro-call":
      return `${baseUrl}/consulting/success?service=intro&session_id={CHECKOUT_SESSION_ID}`;
    case "arch-review":
      return `${baseUrl}/consulting/success?service=review&session_id={CHECKOUT_SESSION_ID}`;
    case "retainer":
      return `${baseUrl}/consulting/success?service=retainer&session_id={CHECKOUT_SESSION_ID}`;
    default:
      return `${baseUrl}/membership/success?session_id={CHECKOUT_SESSION_ID}`;
  }
}

export async function POST(req: Request) {
  try {
    let userId: string | null = null;

    try {
      const authResult = await auth();
      userId = authResult?.userId ?? null;
    } catch {
      console.warn("Clerk auth unavailable in checkout route, continuing as guest");
    }

    const body = await req.json();
    const plan = body?.plan as SupportedPlanKey;
    const email = body?.email as string | undefined;

    if (!plan || !PRICE_IDS[plan]) {
      console.error("checkout config error", {
        receivedPlan: plan,
        introCallPrice: process.env.STRIPE_PRICE_INTRO_CALL ? "set" : "missing",
        archReviewPrice: process.env.STRIPE_PRICE_ARCH_REVIEW ? "set" : "missing",
        retainerPrice: process.env.STRIPE_PRICE_RETAINER ? "set" : "missing",
      });

      return NextResponse.json(
        { error: "Invalid or unconfigured plan." },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      new URL(req.url).origin;

    const successUrl = getSuccessUrl(baseUrl, plan);

    console.log("checkout request", {
      plan,
      priceId: PRICE_IDS[plan],
      mode: PLAN_MODES[plan],
      clerkUserId: userId ?? "anonymous",
      hasEmail: Boolean(email),
      baseUrl,
      successUrl,
    });

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
      success_url: successUrl,
      cancel_url: `${baseUrl}/membership/cancel`,
    });

    console.log("checkout session created", {
      plan,
      sessionId: session.id,
      hasUrl: Boolean(session.url),
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("checkout route error", {
      message: error?.message,
      type: error?.type,
      code: error?.code,
      raw: error,
    });

    return NextResponse.json(
      { error: error?.message || "Unable to create checkout session." },
      { status: 500 }
    );
  }
}