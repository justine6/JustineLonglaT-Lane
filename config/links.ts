// src/config/links.ts

// ---------------------------
// Base site URL (for Cal.com success redirects)
// ---------------------------
const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  "https://consulting.justinelonglat-lane.com";

function normalizeCalInput(input: string) {
  const raw = (input ?? "").trim();
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  const path = raw.startsWith("/") ? raw.slice(1) : raw;
  return `https://cal.com/${path}`;
}

export function buildCalUrl(opts: {
  env?: string;
  fallback: string;
  successPath?: string;
}) {
  const raw = opts.env ?? opts.fallback;
  const url = new URL(normalizeCalInput(raw));

  url.searchParams.set(
    "hide_event_type_details",
    url.searchParams.get("hide_event_type_details") ?? "1"
  );
  url.searchParams.set(
    "primary_color",
    url.searchParams.get("primary_color") ?? "2563eb"
  );

  if (opts.successPath) {
    const successUrl = new URL(
      opts.successPath.startsWith("/") ? opts.successPath : `/${opts.successPath}`,
      BASE
    );
    url.searchParams.set("success_url", successUrl.toString());
  }

  return url.toString();
}

export const LINKS = {
  // ---------------------------
  // Internal Navigation
  // ---------------------------
  home: "/",
  projects: "/projects",
  contact: "/contact",
  readme: "/readme",
  blog: "/blog",
  videos: "/videos",

  // ---------------------------
  // Engineering Mesh
  // ---------------------------
  engineeringMesh: "/engineering-mesh",

  // ---------------------------
  // Résumé & Brochure (must match /public/files exactly)
  // ---------------------------
  resume: "/resume",
  brochure: "/files/JLT-Consulting-Brochure.pdf",
  resumePdf: "/files/justine-longla-resume-2025.pdf",

  // ---------------------------
  // Scheduling pages (your site routes)
  // ---------------------------
  introCall: "/availability",
  hireMe: "/hire-me",

  // ---------------------------
  // Success redirects (your site URLs)
  // ---------------------------
  successIntro: `${BASE}/intro-call?booked=1`,
  successHire: `${BASE}/hire-me?booked=1`,

  // ---------------------------
  // Cal.com embeds
  // ---------------------------
  calIntro: buildCalUrl({
    env: process.env.NEXT_PUBLIC_CAL_INTRO_URL,
    fallback: "https://cal.com/justine-longla-ptq4no",
    successPath: "/intro-call?booked=1",
  }),

  calHire: buildCalUrl({
    env: process.env.NEXT_PUBLIC_CAL_HIRE_URL,
    fallback: "https://cal.com/justine-longla-ptq4no",
    successPath: "/hire-me?booked=1",
  }),

  // Backward compatibility
  calEmbed: buildCalUrl({
    env: process.env.NEXT_PUBLIC_CAL_URL,
    fallback: "https://cal.com/justine-longla-ptq4no",
  }),

  // ---------------------------
  // External ecosystem links
  // ---------------------------
  consultingSite: "https://consulting.justinelonglat-lane.com",
  mainSite: "https://justinelonglat-lane.com",
  blogSite: "https://blogs.justinelonglat-lane.com",
  docsSite: "https://docs.justinelonglat-lane.com",
  docs: "https://docs.justinelonglat-lane.com",
  toolkit: "https://docs.justinelonglat-lane.com/toolkit.html",

  // ---------------------------
  // Stripe (external checkout links)
  // ---------------------------
  stripeBookSession: process.env.NEXT_PUBLIC_STRIPE_BOOK_SESSION_URL ?? "",
  stripeCompletePayment: process.env.NEXT_PUBLIC_STRIPE_COMPLETE_PAYMENT_URL ?? "",

  // Optional: per-service checkout links (for your BookingSection cards)
  stripeServiceIntro: process.env.NEXT_PUBLIC_STRIPE_SERVICE_INTRO_URL ?? "",
  stripeServiceReview: process.env.NEXT_PUBLIC_STRIPE_SERVICE_REVIEW_URL ?? "",
  stripeServiceRetainer: process.env.NEXT_PUBLIC_STRIPE_SERVICE_RETAINER_URL ?? "",
} as const;
