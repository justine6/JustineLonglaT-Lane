import { currentUser } from "@clerk/nextjs/server";
import type { AppRole } from "@/lib/auth/roles";

export async function getCurrentRole(): Promise<AppRole> {
  const user = await currentUser();

  if (!user) return "public";

  return (user.publicMetadata?.role as AppRole | undefined) ?? "user";
}

export async function getCurrentUserWithRole() {
  const user = await currentUser();
  const role = user
    ? ((user.publicMetadata?.role as AppRole | undefined) ?? "user")
    : "public";

  return { user, role };
}