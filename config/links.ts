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

  // Full URL already
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;

  // Remove leading slash if present
  const path = raw.startsWith("/") ? raw.slice(1) : raw;

  // Treat as cal.com path
  return `https://cal.com/${path}`;
}

/**
 * Build a Cal.com URL with common query params + success_url.
 * Uses URL/searchParams to avoid broken strings.
 */
export function buildCalUrl(opts: {
  env?: string;
  fallback: string;
  successPath?: string; // e.g. "/booking/success"
}) {
  const raw = opts.env ?? opts.fallback;
  const url = new URL(normalizeCalInput(raw));

  // Common params
  url.searchParams.set(
    "hide_event_type_details",
    url.searchParams.get("hide_event_type_details") ?? "1"
  );
  url.searchParams.set(
    "primary_color",
    url.searchParams.get("primary_color") ?? "2563eb"
  );

  // success_url (absolute URL required)
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
  engineeringMesh: "/engineering-mesh", // ✅ canonical route

  // ---------------------------
  // Résumé & Brochure
  // ---------------------------
  resume: "/resume",
  resumePdf: "/files/resume.pdf",
  brochure: "/files/JLT-Consulting-Brochure.pdf",

  // ---------------------------
  // Scheduling pages (your site routes)
  // ---------------------------
  introCall: "/intro-call",
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
    fallback: "https://cal.com/justine-longla-ptq4no", // change later if you create a separate Hire event
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
} as const;
