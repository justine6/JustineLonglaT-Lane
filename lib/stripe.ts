// lib/stripe.ts
import Stripe from "stripe";

let stripeSingleton: Stripe | null = null;

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;

  if (!key) {
    // Important: throw a clear error only when the route is actually used.
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to .env.local (local) and Vercel env vars (prod)."
    );
  }

  if (!stripeSingleton) {
    stripeSingleton = new Stripe(key, {
      apiVersion: "2026-01-28.clover",
    });
  }

  return stripeSingleton;
}