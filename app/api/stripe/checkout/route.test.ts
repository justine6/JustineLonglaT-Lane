import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  auth: vi.fn(),
  createSession: vi.fn(),
  getStripe: vi.fn(),
}));

vi.mock("@clerk/nextjs/server", () => ({
  auth: mocks.auth,
}));

vi.mock("@/lib/stripe", () => ({
  getStripe: mocks.getStripe,
}));

import { POST } from "./route";

function createRequest(
  body: Record<string, unknown>
): Request {
  return new Request(
    "https://www.jlt-lane.com/api/stripe/checkout",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
}

describe("POST /api/stripe/checkout", () => {
  beforeEach(() => {
    vi.stubEnv(
      "NEXT_PUBLIC_SITE_URL",
      "https://www.jlt-lane.com"
    );
    vi.stubEnv(
      "STRIPE_PRICE_INTRO_CONSULTATION",
      "price_intro"
    );
    vi.stubEnv(
      "STRIPE_PRICE_FOCUSED_ARCHITECTURE",
      "price_focused"
    );
    vi.stubEnv(
      "STRIPE_PRICE_ARCH_REVIEW",
      "price_arch_review"
    );
    vi.stubEnv(
      "STRIPE_PRICE_RETAINER",
      "price_retainer"
    );

    mocks.auth.mockResolvedValue({
      userId: "user_123",
    });
    mocks.createSession.mockResolvedValue({
      id: "cs_test_123",
      url: "https://checkout.stripe.com/test",
    });
    mocks.getStripe.mockReturnValue({
      checkout: {
        sessions: {
          create: mocks.createSession,
        },
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllEnvs();
  });

  it("creates a governed one-time service checkout", async () => {
    const response = await POST(
      createRequest({
        plan: "focused-architecture",
        email: "client@example.com",
      })
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      url: "https://checkout.stripe.com/test",
    });

    expect(mocks.createSession).toHaveBeenCalledWith({
      mode: "payment",
      customer_email: "client@example.com",
      line_items: [
        {
          price: "price_focused",
          quantity: 1,
        },
      ],
      metadata: {
        plan: "focused-architecture",
        offeringKey: "focused-architecture",
        purchaseType: "service",
        authorizationEffect: "none",
        clerkUserId: "user_123",
      },
      subscription_data: undefined,
      success_url:
        "https://www.jlt-lane.com/consulting/success" +
        "?service=focused-architecture" +
        "&session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://www.jlt-lane.com/pricing",
    });
  });

  it("normalizes intro-call to the canonical service", async () => {
    const response = await POST(
      createRequest({ plan: "intro-call" })
    );

    expect(response.status).toBe(200);
    expect(mocks.createSession).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: "payment",
        line_items: [
          {
            price: "price_intro",
            quantity: 1,
          },
        ],
        metadata: expect.objectContaining({
          plan: "intro-consultation",
          offeringKey: "intro-consultation",
          purchaseType: "service",
          authorizationEffect: "none",
        }),
        success_url:
          "https://www.jlt-lane.com/consulting/success" +
          "?service=intro-consultation" +
          "&session_id={CHECKOUT_SESSION_ID}",
      })
    );
  });

  it("preserves legacy membership checkout behavior", async () => {
    const response = await POST(
      createRequest({ plan: "arch-review" })
    );

    expect(response.status).toBe(200);
    expect(mocks.createSession).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: "subscription",
        line_items: [
          {
            price: "price_arch_review",
            quantity: 1,
          },
        ],
        metadata: expect.objectContaining({
          plan: "arch-review",
          offeringKey: "arch-review",
          purchaseType: "membership",
          authorizationEffect: "membership",
        }),
        subscription_data: {
          metadata: {
            plan: "arch-review",
            offeringKey: "arch-review",
            purchaseType: "membership",
            authorizationEffect: "membership",
            clerkUserId: "user_123",
          },
        },
      })
    );
  });

  it.each([
    "product-discovery",
    "systems-assessment",
    "unknown-offering",
  ])("rejects non-direct offering %s", async (plan) => {
    const response = await POST(
      createRequest({ plan })
    );

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: "Invalid checkout offering.",
    });
    expect(mocks.getStripe).not.toHaveBeenCalled();
    expect(mocks.createSession).not.toHaveBeenCalled();
  });

  it("rejects a direct offering with missing Stripe configuration", async () => {
    vi.stubEnv(
      "STRIPE_PRICE_FOCUSED_ARCHITECTURE",
      ""
    );

    const response = await POST(
      createRequest({
        plan: "focused-architecture",
      })
    );

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: "Checkout offering is not configured.",
    });
    expect(mocks.getStripe).not.toHaveBeenCalled();
    expect(mocks.createSession).not.toHaveBeenCalled();
  });
});
