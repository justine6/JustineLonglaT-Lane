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
  const metadataRole = user.publicMetadata?.role as AppRole | undefined;

  const role: AppRole = isAdminEmail(email)
    ? "admin"
    : metadataRole ?? "user";

  console.log("ROLE CHECK:", {
    email,
    metadataRole,
    effectiveRole: role,
    requiredRole,
  });

  if (ROLE_RANK[role] < ROLE_RANK[requiredRole]) {
    redirect("/");
  }

  return user;
}