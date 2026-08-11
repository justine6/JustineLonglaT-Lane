import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import GovernedCommercialCatalog from "@/components/GovernedCommercialCatalog";
import { PUBLIC_COMMERCIAL_PRESENTATIONS } from "@/lib/public-commercial-presentation";

describe("GovernedCommercialCatalog", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("renders every governed public commercial presentation", () => {
    render(<GovernedCommercialCatalog />);

    for (const offering of PUBLIC_COMMERCIAL_PRESENTATIONS) {
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: offering.name,
        })
      ).toBeTruthy();

      expect(
        screen.getByText(offering.displayPrice)
      ).toBeTruthy();

      expect(screen.getByText(offering.summary)).toBeTruthy();
    }
  });

  it("supports the pricing-page heading hierarchy", () => {
    render(<GovernedCommercialCatalog headingLevel="h2" />);

    for (const offering of PUBLIC_COMMERCIAL_PRESENTATIONS) {
      expect(
        screen.getByRole("heading", {
          level: 2,
          name: offering.name,
        })
      ).toBeTruthy();
    }
  });

  it("builds governed discovery links for proposal offerings", () => {
    render(<GovernedCommercialCatalog />);

    const proposalOfferings =
      PUBLIC_COMMERCIAL_PRESENTATIONS.filter(
        (offering) => offering.action.kind === "discovery"
      );

    for (const offering of proposalOfferings) {
      const link = screen.getByRole("link", {
        name: offering.action.label,
      });

      const query = new URLSearchParams({
        intent: offering.name,
        service: offering.action.offeringKey,
      });

      expect(link.getAttribute("href")).toBe(
        `/discovery?${query.toString()}`
      );
    }
  });
  it("submits every checkout offering with only its canonical key", async () => {
    const checkoutOfferings = PUBLIC_COMMERCIAL_PRESENTATIONS.filter(
      (offering) => offering.action.kind === "checkout"
    );

    expect(checkoutOfferings.length).toBeGreaterThan(0);

    for (const offering of checkoutOfferings) {
      if (offering.action.kind !== "checkout") {
        throw new Error("Expected a governed checkout offering.");
      }

      cleanup();

      const fetchMock = vi.fn().mockResolvedValue({
        ok: false,
        json: vi.fn().mockResolvedValue({
          error: "Controlled checkout test failure.",
        }),
      });

      vi.stubGlobal("fetch", fetchMock);

      render(<GovernedCommercialCatalog />);

      fireEvent.click(
        screen.getByRole("button", {
          name: offering.action.label,
        })
      );

      await waitFor(() => {
        expect(fetchMock).toHaveBeenCalledWith("/api/stripe/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            plan: offering.action.offeringKey,
          }),
        });
      });

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect((await screen.findByRole("alert")).textContent).toContain(
        "Controlled checkout test failure."
      );
    }
  });

  it("does not expose checkout buttons for proposal offerings", () => {
    render(<GovernedCommercialCatalog />);

    const proposalOfferings =
      PUBLIC_COMMERCIAL_PRESENTATIONS.filter(
        (offering) => offering.action.kind === "discovery"
      );

    for (const offering of proposalOfferings) {
      expect(
        screen.queryByRole("button", {
          name: offering.action.label,
        })
      ).toBeNull();

      expect(
        screen.getByRole("link", {
          name: offering.action.label,
        })
      ).toBeTruthy();
    }
  });
});
