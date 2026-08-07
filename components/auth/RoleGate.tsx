import { ReactNode } from "react";
import { getCurrentRole } from "@/lib/auth/getCurrentRole";
import { hasMinimumRole, type AppRole } from "@/lib/auth/roles";

type RoleGateProps = {
  minimumRole?: AppRole;
  allow?: AppRole[];
  children: ReactNode;
  fallback?: ReactNode;
};

export default async function RoleGate({
  minimumRole,
  allow,
  children,
  fallback = null,
}: RoleGateProps) {
  const role = await getCurrentRole();

  const passesMinimumRole = minimumRole
    ? hasMinimumRole(role, minimumRole)
    : true;

  const passesAllowList = allow ? allow.includes(role) : true;

  if (!passesMinimumRole || !passesAllowList) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
