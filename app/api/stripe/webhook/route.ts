import Stripe from "stripe";

export const runtime = "nodejs"; // keep Node runtime for Stripe signature verify

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) return new Response("Missing signature", { status: 400 });

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new Response("Bad signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // TODO: Your platform fulfillment:
    // - record paid order
    // - email client + notify admin
    // - store customer/subscription ids for portal
    console.log("✅ Payment completed:", session.id, session.customer);
  }

  return new Response("ok", { status: 200 });
}
