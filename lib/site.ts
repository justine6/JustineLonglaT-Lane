// lib/site.ts
export const site = {
  name: "Jutellane Solutions",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  ogDefault: "/brand/og-default.png",
  twitterHandle: "@justinelongla", // or "@jutellane" — your call
};
