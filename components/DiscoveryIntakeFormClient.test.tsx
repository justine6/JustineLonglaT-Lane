import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";

import DiscoveryIntakeFormClient from "@/components/DiscoveryIntakeFormClient";

describe("DiscoveryIntakeFormClient", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders immutable canonical proposal context", () => {
    render(
      <DiscoveryIntakeFormClient
        context={{
          kind: "proposal",
          offeringKey: "product-discovery",
          offeringName:
            "Product Discovery & MVP Definition",
        }}
      />
    );

    expect(
      screen.getByTestId(
        "governed-discovery-context"
      ).textContent
    ).toBe("Product Discovery & MVP Definition");

    expect(
      screen.queryByRole("combobox", {
        name: "Service interest",
      })
    ).toBeNull();

    expect(
      screen.queryByText("Architecture Review")
    ).toBeNull();

    expect(
      screen.queryByText("Monthly Retainer")
    ).toBeNull();
  });

  it("renders the neutral general-discovery state", () => {
    render(
      <DiscoveryIntakeFormClient
        context={{
          kind: "general",
          offeringKey: null,
          offeringName: "General discovery inquiry",
        }}
      />
    );

    expect(
      screen.getByTestId(
        "governed-discovery-context"
      ).textContent
    ).toBe("General discovery inquiry");
  });
});
