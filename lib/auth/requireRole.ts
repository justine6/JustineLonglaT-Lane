import { redirect } from "next/navigation";
import { getCurrentAuthorization } from "@/lib/auth/effectiveRole";
import { hasMinimumRole, type AppRole } from "@/lib/auth/roles";

export async function requireRole(requiredRole: AppRole) {
  const { user, role } = await getCurrentAuthorization();

  if (!user) {
    redirect("/sign-in");
  }

  if (!hasMinimumRole(role, requiredRole)) {
    redirect("/");
  }

  return {
    user,
    role,
  };
}
