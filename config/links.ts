// src/config/links.ts

// ---------------------------
// Base site URL
// Used to generate success_url redirects for Cal.com
// ---------------------------
const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://projects.justinelonglat-lane.com";

export const LINKS = {
  // ---------------------------
  // Internal site navigation
  // ---------------------------
  home: "/",
  projects: "/projects",
  blog: "/blog",
  contact: "/contact",

  resume: "/resume",
  resumePdf: "/files/resume.pdf",
  brochure: "/files/brochure.pdf",

  // ---------------------------
  // Scheduling pages
  // ---------------------------
  introCall: "/intro-call",
  hireMe: "/hire-me",

  // ---------------------------
  // Success banners + redirects
  // Triggered by ?booked=1
  // ---------------------------
  successIntro: `${BASE}/intro-call?booked=1`,
  successHire: `${BASE}/hire-me?booked=1`,

  // ---------------------------
  // Cal.com embed URLs
  // Environment overrides supported
  // ---------------------------

  /** Intro Call embed */
  calIntro:
    (process.env.NEXT_PUBLIC_CAL_INTRO_URL ??
      "https://cal.com/jutellane/intro-call?hide_event_type_details=1&primary_color=2563eb") +
    `&success_url=${encodeURIComponent(`${BASE}/intro-call?booked=1`)}`,

  /** Hire Me embed */
  calHire:
    (process.env.NEXT_PUBLIC_CAL_HIRE_URL ??
      "https://cal.com/jutellane/hire-me?hide_event_type_details=1&primary_color=2563eb") +
    `&success_url=${encodeURIComponent(`${BASE}/hire-me?booked=1`)}`,

  // Backward-compat embed
  calEmbed:
    process.env.NEXT_PUBLIC_CAL_URL ??
    "https://cal.com/jutellane/intro-call?hide_event_type_details=1&primary_color=2563eb",

  // ➕ NEW: docs site
  docs: "https://docs.justinelonglat-lane.com",
} as const;
