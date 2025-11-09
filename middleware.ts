// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.jutellane.com";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  if (host.endsWith(".vercel.app") && host !== CANONICAL_HOST) {
    const url = new URL(req.url);
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/:path*",
    "!/(_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml)",
    "!/(images|img|assets|public)(/.*)?",
    "!/docs/:path*", // << important for PDFs
    "!.+\\.(png|jpg|jpeg|svg|webp|gif|ico|pdf|txt|json|webmanifest)"
  ]
};
