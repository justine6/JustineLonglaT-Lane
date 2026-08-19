import { ORIGINS } from "@/config/links";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { resolveDirectCheckoutOffering } from "@/lib/checkout-offering";
import { getStripe } from "@/lib/stripe";

type CheckoutRequestBody = {
  plan?: unknown;
  email?: unknown;
};

function getSuccessUrl(baseUrl: string): string {
  return (
    `${baseUrl}/consulting/success` +
    "?session_id={CHECKOUT_SESSION_ID}"
  );
}

export async function POST(req: Request) {
  try {
    let userId: string | null = null;

    try {
      const authResult = await auth();
      userId = authResult?.userId ?? null;
    } catch {
      console.warn(
        "Clerk auth unavailable in checkout route, continuing as guest"
      );
    }

    const body = (await req.json()) as CheckoutRequestBody;
    const requestedPlan =
      typeof body?.plan === "string" ? body.plan : null;
    const email =
      typeof body?.email === "string" ? body.email : undefined;

    const offering =
      resolveDirectCheckoutOffering(requestedPlan);

    if (!offering) {
      console.error("checkout offering rejected", {
        receivedPlan: requestedPlan,
      });

      return NextResponse.json(
        { error: "Invalid checkout offering." },
        { status: 400 }
      );
    }

    const priceEnvironmentKey =
      offering.stripePriceEnvironmentKey;
    const priceId = priceEnvironmentKey
      ? process.env[priceEnvironmentKey]
      : undefined;

    if (!priceEnvironmentKey || !priceId) {
      console.error("checkout configuration missing", {
        offeringKey: offering.offeringKey,
        priceEnvironmentKey:
          priceEnvironmentKey ?? "not-configured",
      });

      return NextResponse.json(
        { error: "Checkout offering is not configured." },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const baseUrl = ORIGINS.main;
    const successUrl = getSuccessUrl(baseUrl);

    const metadata = {
      plan: offering.offeringKey,
      offeringKey: offering.offeringKey,
      purchaseType: offering.purchaseType,
      authorizationEffect:
        offering.authorizationEffect,
      ...(userId ? { clerkUserId: userId } : {}),
    };


    const session =
      await stripe.checkout.sessions.create({
        mode: offering.stripeMode,
        customer_email: email,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        metadata,
        subscription_data:
          offering.stripeMode === "subscription"
            ? { metadata }
            : undefined,
        success_url: successUrl,
        cancel_url: `${baseUrl}/pricing`,
      });


    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const checkoutError =
      error instanceof Error
        ? error
        : new Error(String(error));

    console.error("checkout route error", {
      message: checkoutError.message,
      raw: error,
    });

    return NextResponse.json(
      {
        error:
          "We could not start checkout. Please try again or contact us for assistance.",
      },
      { status: 500 }
    );
  }
}
