import { describe, expect, it } from "vitest";
import {
  getPublicCommercialOffering,
  PUBLIC_COMMERCIAL_OFFERINGS,
  PUBLIC_COMMERCIAL_OFFERING_KEYS,
} from "./public-commercial-offerings";

describe("public commercial offerings", () => {
  it("publishes services and proposal-led engagements in governed order", () => {
    expect(PUBLIC_COMMERCIAL_OFFERING_KEYS).toEqual([
      "intro-consultation",
      "focused-architecture",
      "product-discovery",
      "systems-assessment",
    ]);

    expect(
      PUBLIC_COMMERCIAL_OFFERINGS.map(
        (offering) => offering.offeringKey
      )
    ).toEqual(PUBLIC_COMMERCIAL_OFFERING_KEYS);
  });

  it("derives public commercial facts from the canonical registry", () => {
    expect(PUBLIC_COMMERCIAL_OFFERINGS).toEqual([
      {
        offeringKey: "intro-consultation",
        name: "Intro Platform Consultation",
        displayPrice: "$250",
        category: "service",
        billingMode: "one-time",
        checkoutMode: "self-service",
      },
      {
        offeringKey: "focused-architecture",
        name: "Focused Architecture Consultation",
        displayPrice: "$500",
        category: "service",
        billingMode: "one-time",
        checkoutMode: "self-service",
      },
      {
        offeringKey: "product-discovery",
        name: "Product Discovery & MVP Definition",
        displayPrice: "From $2,500",
        category: "proposal",
        billingMode: "custom",
        checkoutMode: "proposal",
      },
      {
        offeringKey: "systems-assessment",
        name: "Platform Architecture & Systems Assessment",
        displayPrice: "From $5,000",
        category: "proposal",
        billingMode: "custom",
        checkoutMode: "proposal",
      },
    ]);
  });

  it.each(["arch-review", "retainer"])(
    "excludes legacy membership %s",
    (offeringKey) => {
      expect(
        getPublicCommercialOffering(offeringKey)
      ).toBeNull();
    }
  );

  it("does not publish the legacy intro-call alias", () => {
    expect(
      getPublicCommercialOffering("intro-call")
    ).toBeNull();
  });

  it("returns the requested canonical public offering", () => {
    expect(
      getPublicCommercialOffering("focused-architecture")
    ).toMatchObject({
      offeringKey: "focused-architecture",
      checkoutMode: "self-service",
    });

    expect(
      getPublicCommercialOffering("systems-assessment")
    ).toMatchObject({
      offeringKey: "systems-assessment",
      checkoutMode: "proposal",
    });
  });
});
