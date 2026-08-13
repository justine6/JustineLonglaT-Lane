import "server-only";

import { currentUser } from "@clerk/nextjs/server";
import { normalizeRole, type AppRole } from "@/lib/auth/roles";

type CurrentUser = NonNullable<Awaited<ReturnType<typeof currentUser>>>;

function getPrimaryEmail(user: CurrentUser): string | undefined {
  const primaryEmail = user.emailAddresses.find(
    (emailAddress) => emailAddress.id === user.primaryEmailAddressId,
  );

  return primaryEmail?.emailAddress ?? user.emailAddresses[0]?.emailAddress;
}

function isConfiguredAdminEmail(email?: string): boolean {
  if (!email) {
    return false;
  }

  const normalizedEmail = email.trim().toLowerCase();

  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)
    .includes(normalizedEmail);
}

export function resolveEffectiveRole(user: CurrentUser): AppRole {
  const email = getPrimaryEmail(user);

  if (isConfiguredAdminEmail(email)) {
    return "admin";
  }

  return normalizeRole(user.publicMetadata?.role);
}

export async function getCurrentAuthorization() {
  const user = await currentUser();

  if (!user) {
    return {
      user: null,
      email: undefined,
      role: "public" as AppRole,
    };
  }

  return {
    user,
    email: getPrimaryEmail(user),
    role: resolveEffectiveRole(user),
  };
}
