export type MembershipPlan =
  | "arch-review"
  | "retainer";

export type WebhookMetadata =
  Record<string, string | undefined> | null;

export type CheckoutFulfillment =
  | {
      kind: "service";
      offeringKey:
        | "intro-consultation"
        | "focused-architecture";
    }
  | {
      kind: "membership";
      plan: MembershipPlan;
      compatibility: "canonical" | "legacy";
    }
  | {
      kind: "proposal";
      proposalId: string;
    }
  | {
      kind: "invalid";
      reason:
        | "contradictory-authorization-metadata"
        | "invalid-membership-offering"
        | "missing-membership-subscription"
        | "unrecognized-checkout";
    };

export type SubscriptionFulfillment =
  | {
      kind: "membership";
      plan: MembershipPlan;
      compatibility: "canonical" | "legacy";
    }
  | {
      kind: "invalid";
      reason:
        | "contradictory-authorization-metadata"
        | "invalid-membership-offering";
    };

function normalizeMembershipPlan(
  value: string | undefined
): MembershipPlan | null {
  if (
    value === "arch-review" ||
    value === "retainer"
  ) {
    return value;
  }

  return null;
}

function hasCanonicalAuthorizationMetadata(
  metadata: WebhookMetadata
): boolean {
  return Boolean(
    metadata?.purchaseType ||
      metadata?.authorizationEffect ||
      metadata?.offeringKey
  );
}

function hasCanonicalMembershipAuthorization(
  metadata: WebhookMetadata
): boolean {
  return (
    metadata?.purchaseType === "membership" &&
    metadata?.authorizationEffect === "membership"
  );
}

function hasContradictoryMembershipAuthorization(
  metadata: WebhookMetadata
): boolean {
  return (
    metadata?.purchaseType === "membership" ||
    metadata?.authorizationEffect === "membership"
  ) && !hasCanonicalMembershipAuthorization(metadata);
}

export function classifyCheckoutFulfillment(input: {
  metadata: WebhookMetadata;
  subscriptionId: string | null;
}): CheckoutFulfillment {
  const { metadata, subscriptionId } = input;

  if (
    metadata?.proposalId &&
    (hasCanonicalAuthorizationMetadata(metadata) ||
      Boolean(metadata.plan))
  ) {
    return {
      kind: "invalid",
      reason: "contradictory-authorization-metadata",
    };
  }

  if (metadata?.proposalId) {
    return {
      kind: "proposal",
      proposalId: metadata.proposalId,
    };
  }

  if (
    metadata?.purchaseType === "service" &&
    metadata?.authorizationEffect === "none"
  ) {
    if (
      metadata.offeringKey === "intro-consultation" ||
      metadata.offeringKey === "focused-architecture"
    ) {
      return {
        kind: "service",
        offeringKey: metadata.offeringKey,
      };
    }

    return {
      kind: "invalid",
      reason: "unrecognized-checkout",
    };
  }

  if (hasContradictoryMembershipAuthorization(metadata)) {
    return {
      kind: "invalid",
      reason: "contradictory-authorization-metadata",
    };
  }

  const plan = normalizeMembershipPlan(
    metadata?.offeringKey ?? metadata?.plan
  );

  if (hasCanonicalMembershipAuthorization(metadata)) {
    if (!plan) {
      return {
        kind: "invalid",
        reason: "invalid-membership-offering",
      };
    }

    if (!subscriptionId) {
      return {
        kind: "invalid",
        reason: "missing-membership-subscription",
      };
    }

    return {
      kind: "membership",
      plan,
      compatibility: "canonical",
    };
  }

  if (!hasCanonicalAuthorizationMetadata(metadata)) {
    const legacyPlan = normalizeMembershipPlan(
      metadata?.plan
    );

    if (legacyPlan) {
      if (!subscriptionId) {
        return {
          kind: "invalid",
          reason: "missing-membership-subscription",
        };
      }

      return {
        kind: "membership",
        plan: legacyPlan,
        compatibility: "legacy",
      };
    }
  }

  return {
    kind: "invalid",
    reason: "unrecognized-checkout",
  };
}

export function classifySubscriptionFulfillment(
  metadata: WebhookMetadata
): SubscriptionFulfillment {
  if (hasContradictoryMembershipAuthorization(metadata)) {
    return {
      kind: "invalid",
      reason: "contradictory-authorization-metadata",
    };
  }

  const plan = normalizeMembershipPlan(
    metadata?.offeringKey ?? metadata?.plan
  );

  if (hasCanonicalMembershipAuthorization(metadata)) {
    return plan
      ? {
          kind: "membership",
          plan,
          compatibility: "canonical",
        }
      : {
          kind: "invalid",
          reason: "invalid-membership-offering",
        };
  }

  if (!hasCanonicalAuthorizationMetadata(metadata)) {
    const legacyPlan = normalizeMembershipPlan(
      metadata?.plan
    );

    if (legacyPlan) {
      return {
        kind: "membership",
        plan: legacyPlan,
        compatibility: "legacy",
      };
    }
  }

  return {
    kind: "invalid",
    reason: "invalid-membership-offering",
  };
}
