// middleware.ts (safe minimal pass-through)
import { NextResponse } from 'next/server';

export function middleware() {
  // If you need logic later, add it—right now we want zero interceptions.
  return NextResponse.next();
}

/**
 * Exclude Next.js internals, static files, and PDFs under /docs.
 * This matcher includes ONLY routes that are *likely* to be app/pages—NOT static assets.
 */
export const config = {
  matcher: [
    // Match all paths EXCEPT those starting with these segments or having typical static extensions
    '/((?!_next|assets|images|static|public|docs|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|txt|xml|css|js|map|pdf|docx|pptx|xlsx)).*)',
  ],
};
