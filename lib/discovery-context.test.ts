import { describe, expect, it } from "vitest";

import {
  getSingleSearchParam,
  resolveDiscoveryContext,
  resolveDiscoveryContextFromSearchParams,
} from "@/lib/discovery-context";

describe("discovery context resolver", () => {
  it.each([
    [
      "product-discovery",
      "Product Discovery & MVP Definition",
    ],
    [
      "systems-assessment",
      "Platform Architecture & Systems Assessment",
    ],
  ])(
    "resolves canonical proposal key %s",
    (offeringKey, offeringName) => {
      expect(
        resolveDiscoveryContext(offeringKey)
      ).toEqual({
        kind: "proposal",
        offeringKey,
        offeringName,
      });
    }
  );

  it.each([
    ["missing", undefined],
    ["duplicated", [
      "product-discovery",
      "product-discovery",
    ]],
    ["direct-checkout", "intro-consultation"],
    ["other direct-checkout", "focused-architecture"],
    ["legacy", "arch-review"],
    ["other legacy", "retainer"],
    ["old alias", "intro-call"],
    ["unknown", "platform-build"],
    ["empty", ""],
    ["malformed whitespace", " product-discovery "],
    ["malformed casing", "PRODUCT-DISCOVERY"],
  ])(
    "fails safely to general discovery for %s input",
    (_description, value) => {
      expect(resolveDiscoveryContext(value)).toEqual({
        kind: "general",
        offeringKey: null,
        offeringName: "General discovery inquiry",
      });
    }
  );

  it("ignores arbitrary intent as commercial authority", () => {
    expect(
      resolveDiscoveryContextFromSearchParams({
        intent: "Platform Architecture & Systems Assessment",
        service: "unknown-offering",
      })
    ).toEqual({
      kind: "general",
      offeringKey: null,
      offeringName: "General discovery inquiry",
    });
  });

  it("rejects duplicated contact-handoff service values", () => {
    expect(
      resolveDiscoveryContextFromSearchParams({
        service: [
          "product-discovery",
          "systems-assessment",
        ],
      })
    ).toEqual({
      kind: "general",
      offeringKey: null,
      offeringName: "General discovery inquiry",
    });
  });

  it("accepts only scalar user-authored contact fields", () => {
    expect(
      getSingleSearchParam(
        {
          message: ["first", "second"],
        },
        "message"
      )
    ).toBe("");

    expect(
      getSingleSearchParam(
        {
          message: "User-authored project details",
        },
        "message"
      )
    ).toBe("User-authored project details");
  });
});
