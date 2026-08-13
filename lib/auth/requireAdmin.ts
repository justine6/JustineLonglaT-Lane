import { redirect } from "next/navigation";
import { getCurrentAuthorization } from "@/lib/auth/effectiveRole";

export async function requireAdmin() {
  const { user, role } = await getCurrentAuthorization();

  if (!user) {
    redirect("/sign-in");
  }

  if (role !== "admin") {
    redirect("/");
  }

  return user;
}
