// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "jutellane.com"; // or "www.jutellane.com"

function wantsHTML(req: NextRequest) {
  const accept = req.headers.get("accept") || "";
  return accept.includes("text/html");
}

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  if (host.endsWith(".vercel.app") && wantsHTML(req)) {
    const url = new URL(req.url);
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}
