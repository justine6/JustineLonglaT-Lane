// src/config/links.ts

// ---------------------------
// Base site URL (for Cal.com success redirects)
// ---------------------------
const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://consulting.justinelonglat-lane.com";

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
  // Résumé & Brochure
  // ---------------------------
  resume: "/resume",                   // ⭐ Internal résumé page
  resumePdf: "/files/resume.pdf",      // ⭐ Public PDF in /public/files/
  brochure: "/files/JLT-Consulting-Brochure.pdf",

  // ---------------------------
  // Scheduling pages
  // ---------------------------
  introCall: "/intro-call",
  hireMe: "/hire-me",

  // ---------------------------
  // Success redirects
  // ---------------------------
  successIntro: `${BASE}/intro-call?booked=1`,
  successHire: `${BASE}/hire-me?booked=1`,

  // ---------------------------
  // Cal.com embeds
  // ---------------------------
  calIntro:
    (process.env.NEXT_PUBLIC_CAL_INTRO_URL ??
      "https://cal.com/jutellane/intro-call?hide_event_type_details=1&primary_color=2563eb") +
    `&success_url=${encodeURIComponent(`${BASE}/intro-call?booked=1`)}`,

  calHire:
    (process.env.NEXT_PUBLIC_CAL_HIRE_URL ??
      "https://cal.com/jutellane/hire-me?hide_event_type_details=1&primary_color=2563eb") +
    `&success_url=${encodeURIComponent(`${BASE}/hire-me?booked=1`)}`,

  // Backward compatibility
  calEmbed:
    process.env.NEXT_PUBLIC_CAL_URL ??
    "https://cal.com/jutellane/intro-call?hide_event_type_details=1&primary_color=2563eb",

  // ---------------------------
  // External ecosystem links
  // ---------------------------
  docs: "https://docs.justinelonglat-lane.com",
  toolkit: "https://docs.justinelonglat-lane.com/toolkit.html",
} as const;
