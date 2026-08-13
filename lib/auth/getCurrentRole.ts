import { getCurrentAuthorization } from "@/lib/auth/effectiveRole";
import type { AppRole } from "@/lib/auth/roles";

export async function getCurrentRole(): Promise<AppRole> {
  const { role } = await getCurrentAuthorization();

  return role;
}

export async function getCurrentUserWithRole() {
  const { user, role } = await getCurrentAuthorization();

  return { user, role };
}
