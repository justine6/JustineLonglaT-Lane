import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function POST(req: Request) {
  try {
    const stripe = getStripe();

    const { customerId } = (await req.json()) as { customerId?: string };

    if (!customerId) {
      return NextResponse.json({ error: "Missing customerId" }, { status: 400 });
    }

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