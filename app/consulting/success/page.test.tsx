import { describe, expect, it } from "vitest";

import { getServiceContent } from "./page";

describe("consulting success content", () => {
  it("resolves canonical consultation offerings", () => {
    expect(
      getServiceContent("intro-consultation")
    ).toMatchObject({
      nextStepHref: "/availability",
      nextStepType: "scheduling",
    });

    expect(
      getServiceContent("focused-architecture")
    ).toMatchObject({
      title:
        "Payment received for your Focused Architecture Consultation",
      nextStepHref: "/availability",
      nextStepType: "scheduling",
    });
  });

  it("temporarily accepts legacy success parameters", () => {
    expect(getServiceContent("intro")).toEqual(
      getServiceContent("intro-consultation")
    );

    expect(getServiceContent("review")).toEqual(
      getServiceContent("arch-review")
    );
  });

  it("routes the retainer to its resource", () => {
    expect(getServiceContent("retainer")).toMatchObject({
      nextStepLabel: "Enter the Premium Toolkit",
      nextStepHref: "/toolkit/premium",
      nextStepType: "resource",
    });
  });

  it("uses neutral guidance for unknown values", () => {
    expect(
      getServiceContent("unknown-offering")
    ).toMatchObject({
      title: "Payment received",
      nextStepHref: "/",
      nextStepType: "general",
    });
  });
});
