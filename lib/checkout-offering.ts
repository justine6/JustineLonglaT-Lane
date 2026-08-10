import {
  COMMERCIAL_OFFERINGS,
  isLegacyMembershipKey,
  isServiceOfferingKey,
  normalizeLegacyServiceKey,
  type AuthorizationEffect,
  type LegacyMembershipKey,
  type PurchaseType,
  type ServiceOfferingKey,
} from "./commercial-offerings";

type StripeCheckoutMode = "payment" | "subscription";

export type DirectCheckoutOffering = {
  offeringKey: ServiceOfferingKey | LegacyMembershipKey;
  purchaseType: PurchaseType;
  stripeMode: StripeCheckoutMode;
  stripePriceEnvironmentKey: string | null;
  authorizationEffect: AuthorizationEffect;
};

export function resolveDirectCheckoutOffering(
  value: string | null | undefined
): DirectCheckoutOffering | null {
  const normalizedValue =
    normalizeLegacyServiceKey(value) ?? value;

  if (isServiceOfferingKey(normalizedValue)) {
    const offering = COMMERCIAL_OFFERINGS[normalizedValue];

    return {
      offeringKey: normalizedValue,
      purchaseType: "service",
      stripeMode: "payment",
      stripePriceEnvironmentKey:
        offering.stripePriceEnvironmentKey,
      authorizationEffect: offering.authorizationEffect,
    };
  }

  if (isLegacyMembershipKey(normalizedValue)) {
    const offering = COMMERCIAL_OFFERINGS[normalizedValue];

    return {
      offeringKey: normalizedValue,
      purchaseType: "membership",
      stripeMode: "subscription",
      stripePriceEnvironmentKey:
        offering.stripePriceEnvironmentKey,
      authorizationEffect: offering.authorizationEffect,
    };
  }

  return null;
}
