// src/config/links.ts

// Base site URL (used for success_url redirects)
const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jutellane-main.vercel.app";

export const LINKS = {
  // ---------------------------
  // App navigation routes
  // ---------------------------
  home: "/",
  projects: "/projects",
  blog: "/blog",
  contact: "/contact",
  resume: "/resume",
  resumePdf: "/files/resume.pdf",
  brochure: "/files/brochure.pdf",

  // Scheduling page routes
  introCall: "/intro-call",
  hireMe: "/hire-me",

  // ---------------------------
  // Success URLs (for banners + redirects)
  // ---------------------------
  successIntro: `${BASE}/intro-call?booked=1`,
  successHire: `${BASE}/hire-me?booked=1`,

  // ---------------------------
  // Cal.com embed URLs
  // ---------------------------

  // Intro Call embed (uses success_url)
  calIntro:
    (process.env.NEXT_PUBLIC_CAL_INTRO_URL ??
      "https://cal.com/jutellane/intro-call?hide_event_type_details=1&primary_color=2563eb") +
    `&success_url=${encodeURIComponent(`${BASE}/intro-call?booked=1`)}`,

  // Hire Me embed (uses success_url)
  calHire:
    (process.env.NEXT_PUBLIC_CAL_HIRE_URL ??
      "https://cal.com/jutellane/hire-me?hide_event_type_details=1&primary_color=2563eb") +
    `&success_url=${encodeURIComponent(`${BASE}/hire-me?booked=1`)}`,

  // Back-compat (optional)
  calEmbed:
    process.env.NEXT_PUBLIC_CAL_URL ??
    "https://cal.com/jutellane/intro-call?hide_event_type_details=1&primary_color=2563eb",
} as const;
