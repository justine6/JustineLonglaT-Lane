import { buildAccessContext } from "./require-entitlement";
import type { IdentityContext, SubscriptionContext } from "./types";

export async function requireSessionAccessContext() {
  const identity: IdentityContext = {
    userId: "anonymous",
    role: "public_visitor",
    status: "active",
  };

  const subscription: SubscriptionContext = {
    tier: "none",
    status: "inactive",
  };

  return buildAccessContext(identity, subscription);
}