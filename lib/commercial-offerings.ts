export const SERVICE_OFFERING_KEYS = [
  "intro-consultation",
  "focused-architecture",
] as const;

export const PROPOSAL_OFFERING_KEYS = [
  "product-discovery",
  "systems-assessment",
] as const;

export const LEGACY_MEMBERSHIP_KEYS = [
  "arch-review",
  "retainer",
] as const;

export type ServiceOfferingKey =
  (typeof SERVICE_OFFERING_KEYS)[number];

export type ProposalOfferingKey =
  (typeof PROPOSAL_OFFERING_KEYS)[number];

export type LegacyMembershipKey =
  (typeof LEGACY_MEMBERSHIP_KEYS)[number];

export type PurchaseType = "service" | "membership";

export function isServiceOfferingKey(
  value: string | null | undefined
): value is ServiceOfferingKey {
  return SERVICE_OFFERING_KEYS.some((key) => key === value);
}

export function isProposalOfferingKey(
  value: string | null | undefined
): value is ProposalOfferingKey {
  return PROPOSAL_OFFERING_KEYS.some((key) => key === value);
}

export function isLegacyMembershipKey(
  value: string | null | undefined
): value is LegacyMembershipKey {
  return LEGACY_MEMBERSHIP_KEYS.some((key) => key === value);
}

export function normalizeLegacyServiceKey(
  value: string | null | undefined
): ServiceOfferingKey | null {
  return value === "intro-call" ? "intro-consultation" : null;
}

export type OfferingCategory =
  | "service"
  | "proposal"
  | "legacy-membership";

export type BillingMode =
  | "one-time"
  | "subscription"
  | "custom";

export type CheckoutMode =
  | "self-service"
  | "proposal"
  | "legacy";

export type AuthorizationEffect =
  | "none"
  | "membership";

export type CommercialOfferingDefinition = {
  name: string;
  category: OfferingCategory;
  billingMode: BillingMode;
  checkoutMode: CheckoutMode;
  authorizationEffect: AuthorizationEffect;
  amountCents: number | null;
  displayPrice: string;
  stripePriceEnvironmentKey: string | null;
};

export const COMMERCIAL_OFFERINGS = {
  "intro-consultation": {
    name: "Intro Platform Consultation",
    category: "service",
    billingMode: "one-time",
    checkoutMode: "self-service",
    authorizationEffect: "none",
    amountCents: 25000,
    displayPrice: "$250",
    stripePriceEnvironmentKey:
      "STRIPE_PRICE_INTRO_CONSULTATION",
  },
  "focused-architecture": {
    name: "Focused Architecture Consultation",
    category: "service",
    billingMode: "one-time",
    checkoutMode: "self-service",
    authorizationEffect: "none",
    amountCents: 50000,
    displayPrice: "$500",
    stripePriceEnvironmentKey:
      "STRIPE_PRICE_FOCUSED_ARCHITECTURE",
  },
  "product-discovery": {
    name: "Product Discovery & MVP Definition",
    category: "proposal",
    billingMode: "custom",
    checkoutMode: "proposal",
    authorizationEffect: "none",
    amountCents: null,
    displayPrice: "From $2,500",
    stripePriceEnvironmentKey: null,
  },
  "systems-assessment": {
    name: "Platform Architecture & Systems Assessment",
    category: "proposal",
    billingMode: "custom",
    checkoutMode: "proposal",
    authorizationEffect: "none",
    amountCents: null,
    displayPrice: "From $5,000",
    stripePriceEnvironmentKey: null,
  },
  "arch-review": {
    name: "Legacy Architecture Review Membership",
    category: "legacy-membership",
    billingMode: "subscription",
    checkoutMode: "legacy",
    authorizationEffect: "membership",
    amountCents: null,
    displayPrice: "Legacy",
    stripePriceEnvironmentKey:
      "STRIPE_PRICE_ARCH_REVIEW",
  },
  retainer: {
    name: "Legacy Retainer Membership",
    category: "legacy-membership",
    billingMode: "subscription",
    checkoutMode: "legacy",
    authorizationEffect: "membership",
    amountCents: null,
    displayPrice: "Legacy",
    stripePriceEnvironmentKey:
      "STRIPE_PRICE_RETAINER",
  },
} as const satisfies Record<
  | ServiceOfferingKey
  | ProposalOfferingKey
  | LegacyMembershipKey,
  CommercialOfferingDefinition
>;
