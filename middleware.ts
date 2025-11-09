// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.jutellane.com";

export const config = {
  // never run middleware for files in /_next or /docs (static)
  matcher: ["/((?!_next/|docs/|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)"],
};

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  if (host.endsWith(".vercel.app") && host !== CANONICAL_HOST) {
    const url = new URL(req.url);
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}
