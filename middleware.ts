// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Allow Cal.com embeds */
const CAL = [
  "https://cal.com",
  "https://*.cal.com",
  "https://embed.cal.com",
  "https://assets.cal.com",
  "https://app.cal.com",
].join(" ");

/** Content Security Policy */
const csp = [
  `default-src 'self'`,
  `frame-src 'self' ${CAL}`,
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${CAL}`,
  `style-src 'self' 'unsafe-inline' ${CAL}`,
  `img-src 'self' data: blob: ${CAL}`,
  `connect-src 'self' ${CAL}`,
  `font-src 'self'`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `frame-ancestors 'self'`,
].join("; ");

const securityHeaders: Array<{ key: string; value: string }> = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  for (const h of securityHeaders) res.headers.set(h.key, h.value);
  return res;
}

/**
 * Exclude Next.js internals & static assets so we don’t add headers to them.
 * Adjust the regex if you serve other file types.
 */
export const config = {
  matcher: [
    "/((?!_next/|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|pdf)).*)",
  ],
};
