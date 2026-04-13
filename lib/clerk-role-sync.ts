import { clerkClient } from "@clerk/nextjs/server";
import type { AppRole } from "@/lib/auth/roles";

export type SupportedPlanKey =
  | "intro-call"
  | "arch-review"
  | "retainer";

function mapPlanToRole(plan: SupportedPlanKey): AppRole {
  switch (plan) {
    case "intro-call":
    case "arch-review":
      return "client";
    case "retainer":
      return "premium";
  }
}

export async function setClerkRoleById(
  clerkUserId: string,
  plan: SupportedPlanKey
) {
  const role = mapPlanToRole(plan);
  const client = await clerkClient();

  await client.users.updateUserMetadata(clerkUserId, {
    publicMetadata: {
      role,
      plan,
    },
  });
}

export async function deactivateClerkRoleById(clerkUserId: string) {
  const client = await clerkClient();

  await client.users.updateUserMetadata(clerkUserId, {
    publicMetadata: {
      role: undefined,
      plan: undefined,
    },
  });
}