import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export type AppRole = "public" | "user" | "client" | "premium" | "admin";

const ROLE_RANK: Record<AppRole, number> = {
  public: 0,
  user: 1,
  client: 2,
  premium: 3,
  admin: 4,
};

export async function requireRole(requiredRole: AppRole) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const role = (user.publicMetadata?.role as AppRole | undefined) ?? "user";

  if (ROLE_RANK[role] < ROLE_RANK[requiredRole]) {
    redirect("/");
  }

  return user;
}
