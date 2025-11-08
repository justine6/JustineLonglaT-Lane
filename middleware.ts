// middleware.ts
import type { NextRequest } from "next/server";
import { LINKS } from '@/config/links';
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.jutellane.com";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  // Redirect vercel.app hostnames to canonical domain
  if (host.endsWith(".vercel.app") && host !== CANONICAL_HOST) {
    const url = new URL(req.url);
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}


