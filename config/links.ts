// config/links.ts

export const ORIGINS = {
  main: "https://justinelonglat-lane.com",
  blog: "https://blogs.justinelonglat-lane.com",
  docs: "https://docs.justinelonglat-lane.com",
} as const;

const RUNTIME_BASE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  ORIGINS.main;

const SUCCESS_BASE = ORIGINS.main;

function normalizeCalInput(input: string) {
  const raw = (input ?? "").trim();
  if (!raw) return "";
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
  const raw =
    opts.env && opts.env.trim() !== ""
      ? opts.env
      : opts.fallback;

  const normalized = normalizeCalInput(raw);

  if (!normalized || normalized.trim() === "") {
    throw new Error("Invalid Cal URL: empty input");
  }

  const url = new URL(normalized);

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
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
  readme: "/readme",
  blog: "/blog",
  videos: "/videos",
  files: "/files",
  services: "/services-solutions",

  engineeringMesh: "/engineering-mesh",

  resume: "/resume",
  brochure: "/files/JLT-Consulting-Brochure.pdf",
  resumePdf: "/files/justine-longla-resume-2025.pdf",

  introCall: "/availability",
  hireMe: "/hire-me",
  
  successIntro: joinUrl(SUCCESS_BASE, "/availability?booked=1"),
  successHire: joinUrl(SUCCESS_BASE, "/hire-me?booked=1"),

  introAbsolute: joinUrl(ORIGINS.main, "/availability"),
  hireAbsolute: joinUrl(ORIGINS.main, "/hire-me"),

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

  calEmbed: buildCalUrl({
    env: process.env.NEXT_PUBLIC_CAL_URL,
    fallback: "https://cal.com/justine-longla-ptq4no",
  }),

  consultingSite: ORIGINS.main,
  mainSite: ORIGINS.main,
  blogSite: ORIGINS.blog,
  docsSite: ORIGINS.docs,

  docs: ORIGINS.docs,
  blogCanonical: ORIGINS.blog,

  toolkit: joinUrl(ORIGINS.docs, "/toolkit.html"),
  automationPlatform: joinUrl(ORIGINS.docs, "/automation-toolkit.html"),
  publishingPlatform: ORIGINS.blog,

  stripeBookSession: process.env.NEXT_PUBLIC_STRIPE_BOOK_SESSION_URL ?? "",
  stripeCompletePayment: process.env.NEXT_PUBLIC_STRIPE_COMPLETE_PAYMENT_URL ?? "",

  stripeServiceIntro: process.env.NEXT_PUBLIC_STRIPE_SERVICE_INTRO_URL ?? "",
  stripeServiceReview: process.env.NEXT_PUBLIC_STRIPE_SERVICE_REVIEW_URL ?? "",
  stripeServiceRetainer: process.env.NEXT_PUBLIC_STRIPE_SERVICE_RETAINER_URL ?? "",

  runtimeBase: RUNTIME_BASE,
} as const;