import { describe, expect, it } from "vitest";
import { resolveDirectCheckoutOffering } from "./checkout-offering";

describe("direct checkout offering resolution", () => {
  it("resolves the intro consultation as a one-time service", () => {
    expect(
      resolveDirectCheckoutOffering("intro-consultation")
    ).toMatchObject({
      offeringKey: "intro-consultation",
      purchaseType: "service",
      stripeMode: "payment",
      stripePriceEnvironmentKey:
        "STRIPE_PRICE_INTRO_CONSULTATION",
      authorizationEffect: "none",
    });
  });

  it("resolves the focused architecture consultation as a one-time service", () => {
    expect(
      resolveDirectCheckoutOffering("focused-architecture")
    ).toMatchObject({
      offeringKey: "focused-architecture",
      purchaseType: "service",
      stripeMode: "payment",
      stripePriceEnvironmentKey:
        "STRIPE_PRICE_FOCUSED_ARCHITECTURE",
      authorizationEffect: "none",
    });
  });

  it("normalizes the legacy intro-call alias without granting membership", () => {
    expect(resolveDirectCheckoutOffering("intro-call")).toMatchObject({
      offeringKey: "intro-consultation",
      purchaseType: "service",
      stripeMode: "payment",
      authorizationEffect: "none",
    });
  });

  it("rejects proposal-only offerings from direct checkout", () => {
    expect(
      resolveDirectCheckoutOffering("product-discovery")
    ).toBeNull();

    expect(
      resolveDirectCheckoutOffering("systems-assessment")
    ).toBeNull();
  });

  it("preserves the legacy architecture-review subscription", () => {
    expect(resolveDirectCheckoutOffering("arch-review")).toMatchObject({
      offeringKey: "arch-review",
      purchaseType: "membership",
      stripeMode: "subscription",
      authorizationEffect: "membership",
    });
  });

  it("preserves the legacy retainer subscription", () => {
    expect(resolveDirectCheckoutOffering("retainer")).toMatchObject({
      offeringKey: "retainer",
      purchaseType: "membership",
      stripeMode: "subscription",
      authorizationEffect: "membership",
    });
  });

  it("rejects unknown and missing offering keys", () => {
    expect(resolveDirectCheckoutOffering("enterprise")).toBeNull();
    expect(resolveDirectCheckoutOffering("unknown")).toBeNull();
    expect(resolveDirectCheckoutOffering(null)).toBeNull();
    expect(resolveDirectCheckoutOffering(undefined)).toBeNull();
  });
});
