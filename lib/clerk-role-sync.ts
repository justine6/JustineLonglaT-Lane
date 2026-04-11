import { clerkClient } from "@clerk/nextjs/server";

export type AppRole = "public" | "member" | "premium" | "admin";
export type SupportedPlanKey = "intro-call" | "arch-review" | "retainer";

function roleFromPlan(plan: SupportedPlanKey): AppRole | null {
  switch (plan) {
    case "arch-review":
      return "member";
    case "retainer":
      return "premium";
    case "intro-call":
      return null;
    default:
      return null;
  }
}

async function findClerkUserByEmail(email: string) {
  const client = await clerkClient();

  const result = await client.users.getUserList({
    emailAddress: [email],
    limit: 1,
  });

  return result.data[0] ?? null;
}

export async function setClerkRoleByEmail(
  email: string,
  plan: SupportedPlanKey
) {
  const role = roleFromPlan(plan);
  if (!role) return;

  const user = await findClerkUserByEmail(email);
  if (!user) {
    console.warn(`[clerk-role-sync] No Clerk user found for email: ${email}`);
    return;
  }

  const currentRole = user.publicMetadata?.role as AppRole | undefined;

  // Preserve manual admin override
  if (currentRole === "admin") return;

  const client = await clerkClient();

  await client.users.updateUserMetadata(user.id, {
    publicMetadata: {
      role,
      billingPlan: plan,
    },
  });
}

export async function deactivateClerkRoleByEmail(email: string) {
  const user = await findClerkUserByEmail(email);
  if (!user) {
    console.warn(`[clerk-role-sync] No Clerk user found for email: ${email}`);
    return;
  }

  const currentRole = user.publicMetadata?.role as AppRole | undefined;

  // Preserve manual admin override
  if (currentRole === "admin") return;

  const client = await clerkClient();

  await client.users.updateUserMetadata(user.id, {
    publicMetadata: {
      role: "public",
      billingPlan: null,
    },
  });
}