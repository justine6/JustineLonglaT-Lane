// src/config/links.ts
export const LINKS = {
  home: "/",
  projects: "/projects",
  blog: "/blog",
  contact: "/contact",
  resume: "/resume",
  resumePdf: "/files/resume.pdf",
  brochure: "/files/brochure.pdf",

  // App routes
  introCall: "/intro-call",
  hireMe: "/hire-me",

  // Cal.com embeds (override in env when needed)
  calIntro:
    process.env.NEXT_PUBLIC_CAL_INTRO_URL ??
    "https://cal.com/jutellane/intro-call?hide_event_type_details=1&primary_color=2563eb",
  calHire:
    process.env.NEXT_PUBLIC_CAL_HIRE_URL ??
    "https://cal.com/jutellane/hire-me?hide_event_type_details=1&primary_color=2563eb",

  // Back-compat (optional; can remove later)
  calEmbed:
    process.env.NEXT_PUBLIC_CAL_URL ??
    "https://cal.com/jutellane/intro-call?hide_event_type_details=1&primary_color=2563eb",
} as const;
