import { redis } from "@/lib/redis";

export type SupportedPlanKey =
  | "intro-call"
  | "arch-review"
  | "retainer";

export type MembershipStatus =
  | "active"
  | "trialing"
  | "past_due"
  | "canceled"
  | "incomplete"
  | "unpaid";

export type MembershipRecord = {
  email: string;
  stripeCustomerId: string | null;
  subscriptionId: string | null;
  checkoutSessionId: string | null;
  plan: SupportedPlanKey;
  status: MembershipStatus;
  accessScopes: string[];
  createdAt: string;
  updatedAt: string;
  source: "stripe-webhook";
};

const PLAN_SCOPES: Record<SupportedPlanKey, string[]> = {
  "intro-call": [],
  "arch-review": ["docs:premium", "mesh:premium", "files:premium"],
  "retainer": [
    "docs:premium",
    "mesh:premium",
    "files:premium",
    "advisory:priority"
  ],
};

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function memberKey(email: string): string {
  return `member:${normalizeEmail(email)}`;
}

export function scopesForPlan(plan: SupportedPlanKey): string[] {
  return PLAN_SCOPES[plan] ?? [];
}

type UpsertMembershipInput = {
  email: string;
  stripeCustomerId?: string | null;
  subscriptionId?: string | null;
  checkoutSessionId?: string | null;
  plan: SupportedPlanKey;
  status: MembershipStatus;
};

export async function upsertMembership(
  input: UpsertMembershipInput
): Promise<MembershipRecord> {
  const email = normalizeEmail(input.email);
  const key = memberKey(email);

  const existing = await redis.get<MembershipRecord>(key);
  const now = new Date().toISOString();

  const record: MembershipRecord = {
    email,
    stripeCustomerId: input.stripeCustomerId ?? existing?.stripeCustomerId ?? null,
    subscriptionId: input.subscriptionId ?? existing?.subscriptionId ?? null,
    checkoutSessionId:
      input.checkoutSessionId ?? existing?.checkoutSessionId ?? null,
    plan: input.plan,
    status: input.status,
    accessScopes: scopesForPlan(input.plan),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    source: "stripe-webhook",
  };

  await redis.set(key, record);
  return record;
}

export async function getMembershipByEmail(
  email: string
): Promise<MembershipRecord | null> {
  const key = memberKey(email);
  const record = await redis.get<MembershipRecord>(key);
  return record ?? null;
}

export async function deactivateMembershipBySubscriptionId(
  subscriptionId: string
): Promise<MembershipRecord | null> {
  const keys = await redis.keys("member:*");

  for (const key of keys) {
    const record = await redis.get<MembershipRecord>(key);
    if (record?.subscriptionId === subscriptionId) {
      const updated: MembershipRecord = {
        ...record,
        status: "canceled",
        updatedAt: new Date().toISOString(),
      };

      await redis.set(key, updated);
      return updated;
    }
  }

  return null;
}
