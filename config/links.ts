export const LINKS = {
  home: "/",
  projects: "/projects",
  blog: "/blog",
  contact: "/contact",
  resume: "/resume",
  resumePdf: "/files/resume.pdf",
  brochure: "/files/brochure.pdf",

  // Scheduling
  introCall: "/intro-call",
  hireMe: "/hire-me",

  // Cal.com (public embed URL; override via env if needed)
  calEmbed:
    process.env.NEXT_PUBLIC_CAL_URL ??
    "https://cal.com/jutellane/intro-call?hide_event_type_details=1&primary_color=2563eb",
} as const;
