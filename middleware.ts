import { NextResponse } from 'next/server';

// --- Minimal pass-through middleware ---
export function middleware(request: Request) {
  // We do NO logic here — just pass everything through.
  return NextResponse.next();
}

/**
 * Match everything EXCEPT:
 *   - API routes
 *   - _next (Next.js internals)
 *   - static assets (favicon, images, etc.)
 *   - XML/robots.txt/sitemap.xml
 *   - anything under /files or /docs (PDFs)
 */
export const config = {
  matcher: [
    '/((?!api|_next|favicon\\.ico|robots\\.txt|sitemap\\.xml|badges/|files/|docs/).*)',
  ],
};
