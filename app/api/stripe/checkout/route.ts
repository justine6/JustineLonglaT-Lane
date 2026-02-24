import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const PRICE_ALLOWLIST = new Set(
  [
    process.env.STRIPE_PRICE_INTRO_CALL,
    process.env.STRIPE_PRICE_ARCH_REVIEW,
    process.env.STRIPE_PRICE_RETAINER,
  ].filter(Boolean)
);

export async function POST(req: Request) {
  try {
    const { priceId, mode } = (await req.json()) as {
      priceId?: string;
      mode?: "payment" | "subscription";
    };

    if (!priceId || !PRICE_ALLOWLIST.has(priceId)) {
      return NextResponse.json({ error: "Invalid priceId" }, { status: 400 });
    }

    const checkoutMode: "payment" | "subscription" =
      mode === "subscription" ? "subscription" : "payment";

    const session = await stripe.checkout.sessions.create({
      mode: checkoutMode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/pricing`,
      automatic_tax: { enabled: true },
    });

    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error("stripe checkout error:", e);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
