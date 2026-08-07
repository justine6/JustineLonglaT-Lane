import { NextResponse } from "next/server";
import { getCurrentAuthorization } from "@/lib/auth/effectiveRole";
import { hasMinimumRole } from "@/lib/auth/roles";

export async function GET() {
  const { user, email, role } = await getCurrentAuthorization();

  if (!user) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  if (!hasMinimumRole(role, "premium")) {
    return NextResponse.json(
      { ok: false, error: "Forbidden" },
      { status: 403 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Premium API access granted",
    email,
    role,
  });
}
