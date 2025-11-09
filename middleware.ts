// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "jutellane.com"; // apex; www -> apex is handled by vercel.json

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  // Redirect *.vercel.app to canonical domain
  if (host.endsWith(".vercel.app") && host !== CANONICAL_HOST) {
    const url = new URL(req.url);
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

// Apply middleware to app routes, but SKIP static assets (incl. PDFs)
export const config = {
  matcher: [
    // Exclude: API, Next internals, favicons, robots/sitemap, and common static file types
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|css|js|map|txt|xml|pdf)).*)',
  ],
};
