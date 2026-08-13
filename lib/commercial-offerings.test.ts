import { describe, expect, it } from "vitest";
import {
  COMMERCIAL_OFFERINGS,
  isLegacyMembershipKey,
  isProposalOfferingKey,
  isServiceOfferingKey,
  normalizeLegacyServiceKey,
} from "./commercial-offerings";

describe("commercial offerings contract", () => {
  it("recognizes checkout-enabled professional services", () => {
    expect(isServiceOfferingKey("intro-consultation")).toBe(true);
    expect(isServiceOfferingKey("focused-architecture")).toBe(true);
    expect(isServiceOfferingKey("arch-review")).toBe(false);
  });

  it("recognizes proposal-based engagements", () => {
    expect(isProposalOfferingKey("product-discovery")).toBe(true);
    expect(isProposalOfferingKey("systems-assessment")).toBe(true);
    expect(isProposalOfferingKey("focused-architecture")).toBe(false);
  });

  it("preserves only genuine legacy membership keys", () => {
    expect(isLegacyMembershipKey("arch-review")).toBe(true);
    expect(isLegacyMembershipKey("retainer")).toBe(true);
    expect(isLegacyMembershipKey("intro-call")).toBe(false);
  });

  it("maps the legacy intro-call service alias", () => {
    expect(normalizeLegacyServiceKey("intro-call")).toBe(
      "intro-consultation"
    );
    expect(normalizeLegacyServiceKey("retainer")).toBeNull();
  });

  it("defines one-time services without authorization effects", () => {
    expect(COMMERCIAL_OFFERINGS["intro-consultation"]).toMatchObject({
      category: "service",
      billingMode: "one-time",
      checkoutMode: "self-service",
      authorizationEffect: "none",
      amountCents: 25000,
    });

    expect(COMMERCIAL_OFFERINGS["focused-architecture"]).toMatchObject({
      category: "service",
      billingMode: "one-time",
      checkoutMode: "self-service",
      authorizationEffect: "none",
      amountCents: 50000,
    });
  });

  it("keeps larger engagements in the proposal workflow", () => {
    expect(COMMERCIAL_OFFERINGS["product-discovery"]).toMatchObject({
      category: "proposal",
      billingMode: "custom",
      checkoutMode: "proposal",
      authorizationEffect: "none",
    });

    expect(COMMERCIAL_OFFERINGS["systems-assessment"]).toMatchObject({
      category: "proposal",
      billingMode: "custom",
      checkoutMode: "proposal",
      authorizationEffect: "none",
    });
  });

  it("isolates legacy membership authorization behavior", () => {
    expect(COMMERCIAL_OFFERINGS["arch-review"]).toMatchObject({
      category: "legacy-membership",
      billingMode: "subscription",
      checkoutMode: "legacy",
      authorizationEffect: "membership",
    });

    expect(COMMERCIAL_OFFERINGS.retainer).toMatchObject({
      category: "legacy-membership",
      billingMode: "subscription",
      checkoutMode: "legacy",
      authorizationEffect: "membership",
    });
  });
});
