import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

const mocks = vi.hoisted(() => ({
  constructEvent: vi.fn(),
  retrieveCustomer: vi.fn(),
  getStripe: vi.fn(),
  upsertMembership: vi.fn(),
  deactivateMembershipBySubscriptionId: vi.fn(),
  setClerkRoleById: vi.fn(),
  deactivateClerkRoleById: vi.fn(),
  markProposalPaid: vi.fn(),
  headers: vi.fn(),
}));

vi.mock("next/headers", () => ({
  headers: mocks.headers,
}));

vi.mock("@/lib/stripe", () => ({
  getStripe: mocks.getStripe,
}));

vi.mock("@/lib/membership", () => ({
  upsertMembership: mocks.upsertMembership,
  deactivateMembershipBySubscriptionId:
    mocks.deactivateMembershipBySubscriptionId,
}));

vi.mock("@/lib/clerk-role-sync", () => ({
  setClerkRoleById: mocks.setClerkRoleById,
  deactivateClerkRoleById:
    mocks.deactivateClerkRoleById,
}));

vi.mock("@/lib/proposal-store", () => ({
  markProposalPaid: mocks.markProposalPaid,
}));

import { POST } from "./route";

function createRequest(): Request {
  return new Request(
    "https://www.jlt-lane.com/api/stripe/webhook",
    {
      method: "POST",
      body: "{}",
    }
  );
}

function setEvent(
  type: string,
  object: Record<string, unknown>
) {
  mocks.constructEvent.mockReturnValue({
    id: "evt_123",
    type,
    data: {
      object,
    },
  });
}

function expectNoCommercialMutation() {
  expect(mocks.upsertMembership).not.toHaveBeenCalled();
  expect(
    mocks.deactivateMembershipBySubscriptionId
  ).not.toHaveBeenCalled();
  expect(mocks.setClerkRoleById).not.toHaveBeenCalled();
  expect(
    mocks.deactivateClerkRoleById
  ).not.toHaveBeenCalled();
  expect(mocks.markProposalPaid).not.toHaveBeenCalled();
}

describe("POST /api/stripe/webhook", () => {
  beforeEach(() => {
    vi.stubEnv(
      "STRIPE_WEBHOOK_SECRET",
      "whsec_test"
    );

    mocks.headers.mockResolvedValue(
      new Headers({
        "stripe-signature": "signature_test",
      })
    );

    mocks.retrieveCustomer.mockResolvedValue({
      id: "cus_123",
      email: "member@example.com",
    });

    mocks.getStripe.mockReturnValue({
      webhooks: {
        constructEvent: mocks.constructEvent,
      },
      customers: {
        retrieve: mocks.retrieveCustomer,
      },
    });

    vi.spyOn(console, "error").mockImplementation(
      () => undefined
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("isolates governed service checkout from all authorization side effects", async () => {
    setEvent("checkout.session.completed", {
      id: "cs_service",
      status: "complete",
      payment_status: "paid",
      customer: "cus_service",
      subscription: null,
      customer_details: {
        email: "client@example.com",
      },
      metadata: {
        plan: "focused-architecture",
        offeringKey: "focused-architecture",
        purchaseType: "service",
        authorizationEffect: "none",
        clerkUserId: "user_service",
      },
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      received: true,
    });
    expectNoCommercialMutation();
  });

  it("fulfills a canonical paid membership checkout", async () => {
    setEvent("checkout.session.completed", {
      id: "cs_membership",
      status: "complete",
      payment_status: "paid",
      customer: "cus_123",
      subscription: "sub_123",
      customer_details: {
        email: "member@example.com",
      },
      metadata: {
        plan: "arch-review",
        offeringKey: "arch-review",
        purchaseType: "membership",
        authorizationEffect: "membership",
        clerkUserId: "user_123",
      },
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expect(mocks.upsertMembership).toHaveBeenCalledWith({
      email: "member@example.com",
      stripeCustomerId: "cus_123",
      subscriptionId: "sub_123",
      checkoutSessionId: "cs_membership",
      plan: "arch-review",
      status: "active",
    });
    expect(mocks.setClerkRoleById).toHaveBeenCalledWith(
      "user_123",
      "arch-review"
    );
    expect(mocks.markProposalPaid).not.toHaveBeenCalled();
  });

  it("fails closed for contradictory membership metadata", async () => {
    setEvent("checkout.session.completed", {
      id: "cs_contradictory",
      status: "complete",
      payment_status: "paid",
      subscription: "sub_123",
      metadata: {
        offeringKey: "arch-review",
        purchaseType: "service",
        authorizationEffect: "membership",
        clerkUserId: "user_123",
      },
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expectNoCommercialMutation();
  });

  it("fails closed when membership checkout has no subscription identifier", async () => {
    setEvent("checkout.session.completed", {
      id: "cs_no_subscription",
      status: "complete",
      payment_status: "paid",
      subscription: null,
      metadata: {
        offeringKey: "retainer",
        purchaseType: "membership",
        authorizationEffect: "membership",
        clerkUserId: "user_123",
      },
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expectNoCommercialMutation();
  });

  it("fails closed when proposal and membership metadata are combined", async () => {
    setEvent("checkout.session.completed", {
      id: "cs_proposal_membership_conflict",
      status: "complete",
      payment_status: "paid",
      amount_total: 250000,
      currency: "usd",
      customer: "cus_123",
      subscription: "sub_123",
      metadata: {
        proposalId: "proposal_123",
        purchaseType: "membership",
        authorizationEffect: "membership",
        offeringKey: "arch-review",
        clerkUserId: "user_123",
      },
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expectNoCommercialMutation();
    expect(mocks.retrieveCustomer).not.toHaveBeenCalled();
  });
  it("invokes only proposal fulfillment for an explicitly bound paid proposal", async () => {
    setEvent("checkout.session.completed", {
      id: "cs_proposal",
      status: "complete",
      payment_status: "paid",
      amount_total: 250000,
      currency: "usd",
      subscription: null,
      metadata: {
        proposalId: "proposal_123",
      },
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expect(mocks.markProposalPaid).toHaveBeenCalledWith(
      "cs_proposal",
      250000,
      "usd"
    );
    expect(mocks.upsertMembership).not.toHaveBeenCalled();
    expect(mocks.setClerkRoleById).not.toHaveBeenCalled();
    expect(
      mocks.deactivateMembershipBySubscriptionId
    ).not.toHaveBeenCalled();
    expect(
      mocks.deactivateClerkRoleById
    ).not.toHaveBeenCalled();
  });

  it("synchronizes a valid active subscription update", async () => {
    setEvent("customer.subscription.updated", {
      id: "sub_retainer",
      status: "active",
      customer: "cus_123",
      metadata: {
        plan: "retainer",
        offeringKey: "retainer",
        purchaseType: "membership",
        authorizationEffect: "membership",
        clerkUserId: "user_retainer",
      },
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expect(mocks.retrieveCustomer).toHaveBeenCalledWith(
      "cus_123"
    );
    expect(mocks.upsertMembership).toHaveBeenCalledWith({
      email: "member@example.com",
      stripeCustomerId: "cus_123",
      subscriptionId: "sub_retainer",
      plan: "retainer",
      status: "active",
    });
    expect(mocks.setClerkRoleById).toHaveBeenCalledWith(
      "user_retainer",
      "retainer"
    );
    expect(
      mocks.deactivateClerkRoleById
    ).not.toHaveBeenCalled();
  });

  it("performs no side effects for invalid subscription metadata", async () => {
    setEvent("customer.subscription.updated", {
      id: "sub_invalid",
      status: "active",
      customer: "cus_123",
      metadata: {
        plan: "intro-call",
      },
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expect(mocks.retrieveCustomer).not.toHaveBeenCalled();
    expectNoCommercialMutation();
  });

  it("revokes membership and Clerk access when a subscription is deleted", async () => {
    setEvent("customer.subscription.deleted", {
      id: "sub_deleted",
      status: "canceled",
      customer: "cus_123",
      metadata: {
        clerkUserId: "user_deleted",
      },
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expect(
      mocks.deactivateMembershipBySubscriptionId
    ).toHaveBeenCalledWith("sub_deleted");
    expect(
      mocks.deactivateClerkRoleById
    ).toHaveBeenCalledWith("user_deleted");
    expect(mocks.upsertMembership).not.toHaveBeenCalled();
    expect(mocks.setClerkRoleById).not.toHaveBeenCalled();
    expect(mocks.markProposalPaid).not.toHaveBeenCalled();
  });

  it("rejects a request without a Stripe signature", async () => {
    mocks.headers.mockResolvedValue(new Headers());

    const response = await POST(createRequest());

    expect(response.status).toBe(400);
    expect(await response.text()).toBe(
      "Missing stripe-signature header"
    );
    expect(mocks.getStripe).not.toHaveBeenCalled();
    expect(mocks.constructEvent).not.toHaveBeenCalled();
    expectNoCommercialMutation();
  });

  it("rejects an invalid webhook signature", async () => {
    mocks.constructEvent.mockImplementation(() => {
      throw new Error("Invalid signature");
    });

    const response = await POST(createRequest());

    expect(response.status).toBe(400);
    expect(await response.text()).toBe("Webhook Error");
    expect(mocks.constructEvent).toHaveBeenCalledWith(
      "{}",
      "signature_test",
      "whsec_test"
    );
    expectNoCommercialMutation();
  });
});
