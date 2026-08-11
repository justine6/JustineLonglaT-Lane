import {
  COMMERCIAL_OFFERINGS,
  PROPOSAL_OFFERING_KEYS,
  SERVICE_OFFERING_KEYS,
  type ProposalOfferingKey,
  type ServiceOfferingKey,
} from "./commercial-offerings";

export type PublicCommercialOfferingKey =
  | ServiceOfferingKey
  | ProposalOfferingKey;

export type PublicCommercialOffering = {
  offeringKey: PublicCommercialOfferingKey;
  name: string;
  displayPrice: string;
  category: "service" | "proposal";
  billingMode: "one-time" | "custom";
  checkoutMode: "self-service" | "proposal";
};

export const PUBLIC_COMMERCIAL_OFFERING_KEYS = [
  ...SERVICE_OFFERING_KEYS,
  ...PROPOSAL_OFFERING_KEYS,
] as const satisfies readonly PublicCommercialOfferingKey[];

export const PUBLIC_COMMERCIAL_OFFERINGS =
  PUBLIC_COMMERCIAL_OFFERING_KEYS.map(
    (offeringKey): PublicCommercialOffering => {
      const offering = COMMERCIAL_OFFERINGS[offeringKey];

      return {
        offeringKey,
        name: offering.name,
        displayPrice: offering.displayPrice,
        category: offering.category,
        billingMode: offering.billingMode,
        checkoutMode: offering.checkoutMode,
      };
    }
  );

export function getPublicCommercialOffering(
  offeringKey: string | null | undefined
): PublicCommercialOffering | null {
  return (
    PUBLIC_COMMERCIAL_OFFERINGS.find(
      (offering) => offering.offeringKey === offeringKey
    ) ?? null
  );

}
