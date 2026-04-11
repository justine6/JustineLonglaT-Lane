import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function POST(req: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const primaryEmail = user.primaryEmailAddress?.emailAddress ?? null;

    if (!primaryEmail) {
      return NextResponse.json(
        { error: "No primary email found for signed-in user" },
        { status: 400 }
      );
    }

    const stripe = getStripe();

    const { customerId } = (await req.json()) as { customerId?: string };

    if (!customerId) {
      return NextResponse.json(
        { error: "Missing customerId" },
        { status: 400 }
      );
    }

    const customer = await stripe.customers.retrieve(customerId);

    if ("deleted" in customer) {
      return NextResponse.json(
        { error: "Customer not found" },
        { status: 404 }
      );
    }

    const customerEmail = customer.email?.toLowerCase() ?? null;
    const signedInEmail = primaryEmail.toLowerCase();

    if (!customerEmail || customerEmail !== signedInEmail) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
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