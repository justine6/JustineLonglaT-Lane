export type AppRole = "public" | "user" | "client" | "premium" | "admin";

export const ROLE_RANK: Record<AppRole, number> = {
  public: 0,
  user: 1,
  client: 2,
  premium: 3,
  admin: 4,
};

export function isAppRole(value: unknown): value is AppRole {
  return (
    value === "public" ||
    value === "user" ||
    value === "client" ||
    value === "premium" ||
    value === "admin"
  );
}

export function normalizeRole(
  value: unknown,
  fallback: AppRole = "user",
): AppRole {
  return isAppRole(value) ? value : fallback;
}

export function hasMinimumRole(role: AppRole, requiredRole: AppRole): boolean {
  return ROLE_RANK[role] >= ROLE_RANK[requiredRole];
}
