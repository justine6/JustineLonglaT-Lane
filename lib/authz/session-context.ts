@'
import { buildAccessContext } from "./require-entitlement";
import type { IdentityContext, SubscriptionContext } from "./types";

/**
 * In the future, this will read from:
 * - NextAuth session
 * - JWT
 * - Database
 * - Stripe subscription
 */
export async function getSessionAccessContext() {
  // TODO: Replace with real session lookup
  const identity: IdentityContext = {
    userId: "abc123",
    email: "guest@example.com",
    provider: "microsoft-365",
    role: "guest_contributor",
    tenantType: "external_guest",
    status: "active",
  };

  const subscription: SubscriptionContext = {
    tier: "none",
    status: "inactive",
    startedAt: null,
    expiresAt: null,
  };

  return buildAccessContext(identity, subscription);
}
'@ | Set-Content .\lib\authz\session-context.ts