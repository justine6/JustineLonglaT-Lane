// config/links.ts

// ---------------------------
// Canonical origins (single source of truth)
// ---------------------------
export const ORIGINS = {
  consulting: "https://consulting.justinelonglat-lane.com",
  main: "https://justinelonglat-lane.com",
  blog: "https://blogs.justinelonglat-lane.com",
  docs: "https://docs.justinelonglat-lane.com",
} as const;

// ---------------------------
// Runtime base (useful for internal absolute URLs if needed)
// ---------------------------
const RUNTIME_BASE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  ORIGINS.consulting;

// ---------------------------
// IMPORTANT:
// Force Cal success redirects to the *consulting* canonical domain,
// so it never bounces users to main/docs/blog by accident.
// ---------------------------
const SUCCESS_BASE = ORIGINS.consulting;

function normalizeCalInput(input: string) {
  const raw = (input ?? "").trim();
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  const path = raw.startsWith("/") ? raw.slice(1) : raw;
  return `https://cal.com/${path}`;
}

function joinUrl(origin: string, path: string) {
  const cleanOrigin = origin.replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanOrigin}${cleanPath}`;
}

export function buildCalUrl(opts: {
  env?: string;
  fallback: string;
  successPath?: string;
  successBase?: string;
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
    const base = opts.successBase ?? SUCCESS_BASE;
    const successUrl = new URL(
      opts.successPath.startsWith("/") ? opts.successPath : `/${opts.successPath}`,
      base
    );
    url.searchParams.set("success_url", successUrl.toString());
  }

  return url.toString();
}

export const LINKS = {
  // ---------------------------
  // Internal navigation (this app)
  // ---------------------------
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
  readme: "/readme",
  videos: "/videos",
  files: "/files",

  // Keep internal /blog route if you still use it elsewhere
  blog: "/blog",

  // ---------------------------
  // Engineering Mesh (internal on main site)
  // ---------------------------
  engineeringMesh: "/engineering-mesh",

  // ---------------------------
  // Résumé & brochure (served from /public/files)
  // ---------------------------
  resume: "/resume",
  brochure: "/files/JLT-Consulting-Brochure.pdf",
  resumePdf: "/files/justine-longla-resume-2025.pdf",

  // ---------------------------
  // Scheduling pages (this app routes)
  // ---------------------------
  introCall: "/availability",
  hireMe: "/hire-me",

  // ---------------------------
  // Absolute CTA links (cross-site safe)
  // ---------------------------
  consultingIntroAbsolute: joinUrl(ORIGINS.consulting, "/availability"),
  consultingHireAbsolute: joinUrl(ORIGINS.consulting, "/hire-me"),

  // ---------------------------
  // Success redirects (absolute)
  // ---------------------------
  successIntro: joinUrl(SUCCESS_BASE, "/availability?booked=1"),
  successHire: joinUrl(SUCCESS_BASE, "/hire-me?booked=1"),

  // ---------------------------
  // Cal.com embeds
  // ---------------------------
  calIntro: buildCalUrl({
    env: process.env.NEXT_PUBLIC_CAL_INTRO_URL,
    fallback: "https://cal.com/justine-longla-ptq4no",
    successPath: "/availability?booked=1",
    successBase: SUCCESS_BASE,
  }),

  calHire: buildCalUrl({
    env: process.env.NEXT_PUBLIC_CAL_HIRE_URL,
    fallback: "https://cal.com/justine-longla-ptq4no",
    successPath: "/hire-me?booked=1",
    successBase: SUCCESS_BASE,
  }),

  // Backward compatibility
  calEmbed: buildCalUrl({
    env: process.env.NEXT_PUBLIC_CAL_URL,
    fallback: "https://cal.com/justine-longla-ptq4no",
  }),

  // ---------------------------
  // External ecosystem links
  // ---------------------------
  consultingSite: ORIGINS.consulting,
  mainSite: ORIGINS.main,
  blogSite: ORIGINS.blog,
  docsSite: ORIGINS.docs,

  // Canonical cross-site destinations
  docs: ORIGINS.docs,
  blogCanonical: ORIGINS.blog,

  // Specific platform entry points
  toolkit: joinUrl(ORIGINS.docs, "/toolkit.html"),
  automationPlatform: joinUrl(ORIGINS.docs, "/automation-toolkit.html"),
  publishingPlatform: ORIGINS.blog,

  // ---------------------------
  // Stripe (external checkout links)
  // ---------------------------
  stripeBookSession: process.env.NEXT_PUBLIC_STRIPE_BOOK_SESSION_URL ?? "",
  stripeCompletePayment: process.env.NEXT_PUBLIC_STRIPE_COMPLETE_PAYMENT_URL ?? "",

  // Optional: per-service checkout links
  stripeServiceIntro: process.env.NEXT_PUBLIC_STRIPE_SERVICE_INTRO_URL ?? "",
  stripeServiceReview: process.env.NEXT_PUBLIC_STRIPE_SERVICE_REVIEW_URL ?? "",
  stripeServiceRetainer: process.env.NEXT_PUBLIC_STRIPE_SERVICE_RETAINER_URL ?? "",

  // Runtime base if ever needed
  runtimeBase: RUNTIME_BASE,
} as const;