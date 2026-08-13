import { describe, expect, it } from "vitest";
import {
  getPublicCommercialPresentation,
  PUBLIC_COMMERCIAL_PRESENTATIONS,
} from "./public-commercial-presentation";

describe("public commercial presentation model", () => {
  it("preserves the governed public offering order", () => {
    expect(
      PUBLIC_COMMERCIAL_PRESENTATIONS.map(
        (offering) => offering.offeringKey
      )
    ).toEqual([
      "intro-consultation",
      "focused-architecture",
      "product-discovery",
      "systems-assessment",
    ]);
  });

  it("derives governed commercial facts from the public adapter", () => {
    expect(
      PUBLIC_COMMERCIAL_PRESENTATIONS.map((offering) => ({
        offeringKey: offering.offeringKey,
        name: offering.name,
        displayPrice: offering.displayPrice,
        checkoutMode: offering.checkoutMode,
      }))
    ).toEqual([
      {
        offeringKey: "intro-consultation",
        name: "Intro Platform Consultation",
        displayPrice: "$250",
        checkoutMode: "self-service",
      },
      {
        offeringKey: "focused-architecture",
        name: "Focused Architecture Consultation",
        displayPrice: "$500",
        checkoutMode: "self-service",
      },
      {
        offeringKey: "product-discovery",
        name: "Product Discovery & MVP Definition",
        displayPrice: "From $2,500",
        checkoutMode: "proposal",
      },
      {
        offeringKey: "systems-assessment",
        name: "Platform Architecture & Systems Assessment",
        displayPrice: "From $5,000",
        checkoutMode: "proposal",
      },
    ]);
  });

  it("assigns checkout actions only to self-service offerings", () => {
    expect(
      PUBLIC_COMMERCIAL_PRESENTATIONS.filter(
        (offering) => offering.action.kind === "checkout"
      ).map((offering) => offering.offeringKey)
    ).toEqual([
      "intro-consultation",
      "focused-architecture",
    ]);
  });

  it("assigns discovery actions to proposal-led offerings", () => {
    expect(
      PUBLIC_COMMERCIAL_PRESENTATIONS.filter(
        (offering) => offering.action.kind === "discovery"
      ).map((offering) => offering.offeringKey)
    ).toEqual([
      "product-discovery",
      "systems-assessment",
    ]);
  });

  it.each([
    "intro-call",
    "arch-review",
    "retainer",
    "enterprise",
  ])("does not publish legacy offering %s", (offeringKey) => {
    expect(
      getPublicCommercialPresentation(offeringKey)
    ).toBeNull();
  });

  it("returns presentation content for a canonical offering", () => {
    expect(
      getPublicCommercialPresentation("product-discovery")
    ).toMatchObject({
      offeringKey: "product-discovery",
      action: {
        kind: "discovery",
        offeringKey: "product-discovery",
      },
    });
  });
});
