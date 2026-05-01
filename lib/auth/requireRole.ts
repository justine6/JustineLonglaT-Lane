import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type { AppRole } from "@/lib/auth/roles";

const ROLE_RANK: Record<AppRole, number> = {
  public: 0,
  user: 1,
  client: 2,
  premium: 3,
  admin: 4,
};

function isAppRole(value: unknown): value is AppRole {
  return (
    value === "public" ||
    value === "user" ||
    value === "client" ||
    value === "premium" ||
    value === "admin"
  );
}

function isAdminEmail(email?: string | null) {
  const adminEmails = process.env.ADMIN_EMAILS ?? "";

  return adminEmails
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)
    .includes((email ?? "").toLowerCase());
}

export async function requireRole(requiredRole: AppRole) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const email = user.emailAddresses?.[0]?.emailAddress;
  const rawRole = user.publicMetadata?.role;

  const metadataRole: AppRole = isAppRole(rawRole) ? rawRole : "user";

  const effectiveRole: AppRole = isAdminEmail(email)
    ? "admin"
    : metadataRole;

  console.log("ROLE CHECK:", {
    email,
    rawRole,
    metadataRole,
    effectiveRole,
    requiredRole,
  });

  if (ROLE_RANK[effectiveRole] < ROLE_RANK[requiredRole]) {
    redirect("/");
  }

  return user;
}