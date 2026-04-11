import { ReactNode } from "react";
import { getCurrentRole } from "@/lib/auth/getCurrentRole";
import type { AppRole } from "@/lib/auth/requireRole";

type RoleGateProps = {
  minimumRole?: AppRole;
  allow?: AppRole[];
  children: ReactNode;
  fallback?: ReactNode;
};

const ROLE_RANK: Record<AppRole, number> = {
  public: 0,
  user: 1,
  client: 2,
  premium: 3,
  admin: 4,
};

export default async function RoleGate({
  minimumRole,
  allow,
  children,
  fallback = null,
}: RoleGateProps) {
  const role = await getCurrentRole();

  const passesMinimumRole = minimumRole
    ? ROLE_RANK[role] >= ROLE_RANK[minimumRole]
    : true;

  const passesAllowList = allow ? allow.includes(role) : true;

  const isAllowed = passesMinimumRole && passesAllowList;

  if (!isAllowed) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
