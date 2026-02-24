import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function tierAmountCents(tier: string) {
  if (tier === "essential") return Number(process.env.PROPOSAL_ESSENTIAL_USD_CENTS || 0);
  if (tier === "standard") return Number(process.env.PROPOSAL_STANDARD_USD_CENTS || 0);
  if (tier === "premium") return Number(process.env.PROPOSAL_PREMIUM_USD_CENTS || 0);
  return 0;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { intent, service, tier, name, email, phone } = body ?? {};

    if (!intent || !service || !tier) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const amount = tierAmountCents(String(tier));
    if (!amount || Number.isNaN(amount) || amount < 50) {
      // 50 cents is just a sanity guard; set what you want
      return NextResponse.json(
        {
          ok: false,
          error:
            "Pricing is not configured yet. Set PROPOSAL_*_USD_CENTS in .env.local / Vercel.",
        },
        { status: 400 }
      );
    }

    // Create a Checkout Session (dynamic price_data)
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Consulting Engagement — ${String(intent)}`,
              description: `Service: ${String(service)} • Tier: ${String(tier)}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/proposal?intent=${encodeURIComponent(
        String(intent)
      )}&service=${encodeURIComponent(String(service))}&name=${encodeURIComponent(
        String(name || "")
      )}&email=${encodeURIComponent(String(email || ""))}`,
      metadata: {
        intent: String(intent),
        service: String(service),
        tier: String(tier),
        name: String(name || ""),
        email: String(email || ""),
        phone: String(phone || ""),
      },
      payment_intent_data: {
        metadata: {
          intent: String(intent),
          service: String(service),
          tier: String(tier),
          name: String(name || ""),
          email: String(email || ""),
          phone: String(phone || ""),
        },
      },
      automatic_tax: { enabled: true },
    });

    console.log("✅ Proposal accepted + checkout session created:", {
      intent,
      service,
      tier,
      sessionId: session.id,
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch (e) {
    console.error("proposal accept error:", e);
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}
