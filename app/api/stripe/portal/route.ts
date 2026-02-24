import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function POST(req: Request) {
  try {
    const { customerId } = (await req.json()) as { customerId?: string };

    if (!customerId) {
      return NextResponse.json({ error: "Missing customerId" }, { status: 400 });
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${SITE_URL}/billing`,
    });

    return NextResponse.json({ url: portalSession.url });
  } catch (e) {
    console.error("stripe portal error:", e);
    return NextResponse.json({ error: "Portal failed" }, { status: 500 });
  }
}
