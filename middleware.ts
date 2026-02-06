// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const isProd = process.env.NODE_ENV === "production";

/**
 * Cal.com sources
 * - Keep both base + wildcard.
 * - The embed may touch multiple subdomains (app, embed, assets, api, etc.)
 */
const CAL = ["https://cal.com", "https://*.cal.com"].join(" ");

/** Content Security Policy (scoped via matcher) */
const csp = [
  `default-src 'self'`,

  // Cal embed runs in an iframe
  `frame-src 'self' ${CAL}`,

  // Cal injects scripts; unsafe-eval only in dev to avoid Next/webpack dev tooling issues
  `script-src 'self' 'unsafe-inline' ${isProd ? "" : "'unsafe-eval'"} ${CAL}`.trim(),

  // Cal may inject inline styles; keep inline allowed
  `style-src 'self' 'unsafe-inline' ${CAL}`,

  // Cal + your app may load https images and data/blob URLs
  `img-src 'self' data: blob: https:`,

  // The embed uses fetch/XHR/websocket-ish calls to Cal subdomains/APIs
  `connect-src 'self' ${CAL}`,

  // Allow fonts from https (Cal can serve fonts/assets)
  `font-src 'self' data: https:`,

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

export function middleware(_req: NextRequest) {
  const res = NextResponse.next();
  for (const h of securityHeaders) res.headers.set(h.key, h.value);
  return res;
}

export const config = {
  matcher: ["/booking/:path*"],
};

