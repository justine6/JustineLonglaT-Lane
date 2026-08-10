import { describe, expect, it } from "vitest";

import {
  classifyCheckoutFulfillment,
  classifySubscriptionFulfillment,
} from "./stripe-fulfillment";

describe("classifyCheckoutFulfillment", () => {
  it("isolates a governed service payment from authorization", () => {
    expect(
      classifyCheckoutFulfillment({
        metadata: {
          plan: "focused-architecture",
          offeringKey: "focused-architecture",
          purchaseType: "service",
          authorizationEffect: "none",
        },
        subscriptionId: null,
      })
    ).toEqual({
      kind: "service",
      offeringKey: "focused-architecture",
    });
  });

  it("classifies a canonical membership subscription", () => {
    expect(
      classifyCheckoutFulfillment({
        metadata: {
          plan: "arch-review",
          offeringKey: "arch-review",
          purchaseType: "membership",
          authorizationEffect: "membership",
        },
        subscriptionId: "sub_123",
      })
    ).toEqual({
      kind: "membership",
      plan: "arch-review",
      compatibility: "canonical",
    });
  });

  it("preserves an internally consistent legacy membership", () => {
    expect(
      classifyCheckoutFulfillment({
        metadata: {
          plan: "retainer",
        },
        subscriptionId: "sub_legacy",
      })
    ).toEqual({
      kind: "membership",
      plan: "retainer",
      compatibility: "legacy",
    });
  });

  it("rejects intro-call as an authorization-bearing plan", () => {
    expect(
      classifyCheckoutFulfillment({
        metadata: {
          plan: "intro-call",
        },
        subscriptionId: "sub_invalid",
      })
    ).toEqual({
      kind: "invalid",
      reason: "unrecognized-checkout",
    });
  });

  it("rejects contradictory authorization metadata", () => {
    expect(
      classifyCheckoutFulfillment({
        metadata: {
          offeringKey: "arch-review",
          purchaseType: "service",
          authorizationEffect: "membership",
        },
        subscriptionId: "sub_123",
      })
    ).toEqual({
      kind: "invalid",
      reason: "contradictory-authorization-metadata",
    });
  });

  it("requires a subscription identifier for membership", () => {
    expect(
      classifyCheckoutFulfillment({
        metadata: {
          offeringKey: "retainer",
          purchaseType: "membership",
          authorizationEffect: "membership",
        },
        subscriptionId: null,
      })
    ).toEqual({
      kind: "invalid",
      reason: "missing-membership-subscription",
    });
  });

  it("rejects proposal metadata combined with membership authorization", () => {
    expect(
      classifyCheckoutFulfillment({
        metadata: {
          proposalId: "proposal_123",
          purchaseType: "membership",
          authorizationEffect: "membership",
          offeringKey: "arch-review",
        },
        subscriptionId: "sub_123",
      })
    ).toEqual({
      kind: "invalid",
      reason: "contradictory-authorization-metadata",
    });
  });
  it("classifies only explicitly proposal-bound sessions", () => {
    expect(
      classifyCheckoutFulfillment({
        metadata: {
          proposalId: "proposal_123",
        },
        subscriptionId: null,
      })
    ).toEqual({
      kind: "proposal",
      proposalId: "proposal_123",
    });
  });
});

describe("classifySubscriptionFulfillment", () => {
  it("classifies canonical subscription metadata", () => {
    expect(
      classifySubscriptionFulfillment({
        offeringKey: "retainer",
        purchaseType: "membership",
        authorizationEffect: "membership",
      })
    ).toEqual({
      kind: "membership",
      plan: "retainer",
      compatibility: "canonical",
    });
  });

  it("preserves legacy membership metadata", () => {
    expect(
      classifySubscriptionFulfillment({
        plan: "arch-review",
      })
    ).toEqual({
      kind: "membership",
      plan: "arch-review",
      compatibility: "legacy",
    });
  });

  it("rejects the obsolete intro-call role path", () => {
    expect(
      classifySubscriptionFulfillment({
        plan: "intro-call",
      })
    ).toEqual({
      kind: "invalid",
      reason: "invalid-membership-offering",
    });
  });

  it("rejects incomplete authorization metadata", () => {
    expect(
      classifySubscriptionFulfillment({
        offeringKey: "arch-review",
        purchaseType: "membership",
        authorizationEffect: "none",
      })
    ).toEqual({
      kind: "invalid",
      reason: "contradictory-authorization-metadata",
    });
  });
});
