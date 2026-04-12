import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

type AppRole = "public" | "user" | "client" | "premium" | "admin";

const ROLE_RANK: Record<AppRole, number> = {
  public: 0,
  user: 1,
  client: 2,
  premium: 3,
  admin: 4,
};

function normalizeRole(value: unknown): AppRole {
  if (
    value === "public" ||
    value === "user" ||
    value === "client" ||
    value === "premium" ||
    value === "admin"
  ) {
    return value;
  }

  return "user";
}

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const role = normalizeRole(user.publicMetadata?.role);

  if (ROLE_RANK[role] < ROLE_RANK.premium) {
    return NextResponse.json(
      { ok: false, error: "Forbidden" },
      { status: 403 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Premium API access granted",
    role,
  });
}