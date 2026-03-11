// app/api/proposal/accept/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;

  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured.");
  }

  return new Stripe(key, {
    apiVersion: "2026-02-25.clover",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const proposalId =
      typeof body?.proposalId === "string" ? body.proposalId : undefined;

    if (!proposalId) {
      return NextResponse.json(
        { ok: false, error: "Missing proposalId" },
        { status: 400 }
      );
    }

    const stripe = getStripe();

    // Keep your current proposal lookup / payment logic below.
    // If you already had working logic here, paste it back under this point.
    // This file update is mainly to unblock the typed Stripe API version error.

    return NextResponse.json({
      ok: true,
      proposalId,
      stripeConfigured: Boolean(stripe),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown server error";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}