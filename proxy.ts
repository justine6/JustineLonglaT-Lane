import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isProtectedClerkRoute = createRouteMatcher([
  "/toolkit(.*)",
]);

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin Dashboard"',
    },
  });
}

function handleAdminBasicAuth(req: NextRequest) {
  const user = process.env.ADMIN_BASIC_USER;
  const pass = process.env.ADMIN_BASIC_PASS;

  // Fail closed if not configured
  if (!user || !pass) return unauthorized();

  const authHeader = req.headers.get("authorization") || "";
  const [scheme, encoded] = authHeader.split(" ");

  if (scheme !== "Basic" || !encoded) return unauthorized();

  let decoded = "";
  try {
    decoded = Buffer.from(encoded, "base64").toString("utf8");
  } catch {
    return unauthorized();
  }

  const idx = decoded.indexOf(":");
  const u = idx >= 0 ? decoded.slice(0, idx) : "";
  const p = idx >= 0 ? decoded.slice(idx + 1) : "";

  if (u !== user || p !== pass) return unauthorized();

  return null;
}

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  // Keep your existing Basic Auth on /admin
  if (pathname.startsWith("/admin")) {
    const adminResponse = handleAdminBasicAuth(req);
    if (adminResponse) return adminResponse;
  }

  // Protect Clerk routes like /toolkit
  if (isProtectedClerkRoute(req)) {
    await auth.protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Run on app routes, excluding Next internals and common static assets
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|png|gif|svg|webp|ico|ttf|woff2?|csv|docx?|xlsx?|zip|webmanifest|xml|txt|pdf)).*)",
    // Also run on API-style routes
    "/(api|trpc)(.*)",
  ],
};