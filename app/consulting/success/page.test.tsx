import { describe, expect, it } from "vitest";

import { getVerifiedSuccessContent } from "./page";

describe("consulting success verification contract", () => {
  it("fails closed when no verified session is available", () => {
    expect(
      getVerifiedSuccessContent({
        sessionStatus: null,
        paymentStatus: null,
        offeringKey: null,
      })
    ).toMatchObject({
      state: "unverified",
      eyebrow: "Payment not verified",
      nextStepHref: "/contact",
    });
  });

  it("allows a verified paid consultation to proceed to scheduling", () => {
    expect(
      getVerifiedSuccessContent({
        sessionStatus: "complete",
        paymentStatus: "paid",
        offeringKey: "focused-architecture",
      })
    ).toMatchObject({
      state: "paid-service",
      eyebrow: "Payment verified",
      nextStepHref: "/availability",
      nextStepType: "scheduling",
    });
  });

  it("does not claim that paid membership access is already active", () => {
    expect(
      getVerifiedSuccessContent({
        sessionStatus: "complete",
        paymentStatus: "paid",
        offeringKey: "retainer",
      })
    ).toMatchObject({
      state: "fulfillment-pending",
      eyebrow: "Payment verified",
      nextStepHref: "/",
      nextStepType: "general",
    });
  });

  it("reports incomplete payment as pending", () => {
    expect(
      getVerifiedSuccessContent({
        sessionStatus: "open",
        paymentStatus: "unpaid",
        offeringKey: "intro-consultation",
      })
    ).toMatchObject({
      state: "payment-pending",
      eyebrow: "Payment pending",
      nextStepHref: "/contact",
    });
  });

  it("fails closed for unknown commercial metadata", () => {
    expect(
      getVerifiedSuccessContent({
        sessionStatus: "complete",
        paymentStatus: "paid",
        offeringKey: "unknown-offering",
      })
    ).toMatchObject({
      state: "unverified",
      eyebrow: "Payment not verified",
      nextStepHref: "/contact",
    });
  });
});
