import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("Missing STRIPE_SECRET_KEY (set it in .env.local / Vercel).");
  }

  return new Stripe(key, {
    apiVersion: "2026-01-28.clover",
  });
}

export async function POST(req: Request) {
  try {
    const { customerId } = (await req.json()) as { customerId?: string };

    if (!customerId) {
      return NextResponse.json({ error: "Missing customerId" }, { status: 400 });
    }

    const stripe = getStripe();

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${SITE_URL}/billing`,
    });

    return NextResponse.json({ url: portalSession.url });
  } catch (e: any) {
    console.error("stripe portal error:", e);
    return NextResponse.json(
      { error: e?.message || "Portal failed" },
      { status: 500 }
    );
  }
}