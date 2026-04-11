import { requireRole } from "@/lib/auth/requireRole";

export async function requireAdmin() {
  return requireRole("admin");
}
