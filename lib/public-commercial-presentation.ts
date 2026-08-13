import {
  PUBLIC_COMMERCIAL_OFFERINGS,
  type PublicCommercialOffering,
  type PublicCommercialOfferingKey,
} from "./public-commercial-offerings";

export type PublicCommercialAction =
  | {
      kind: "checkout";
      offeringKey: PublicCommercialOfferingKey;
      label: string;
    }
  | {
      kind: "discovery";
      offeringKey: PublicCommercialOfferingKey;
      label: string;
    };

export type PublicCommercialPresentation =
  PublicCommercialOffering & {
    summary: string;
    benefits: readonly string[];
    action: PublicCommercialAction;
  };

type PresentationCopy = Pick<
  PublicCommercialPresentation,
  "summary" | "benefits"
> & {
  actionLabel: string;
};

const PRESENTATION_COPY = {
  "intro-consultation": {
    summary:
      "A focused advisory session to clarify your immediate platform challenge and identify practical next steps.",
    benefits: [
      "Focused consultation session",
      "Expert guidance on one immediate challenge",
      "Written notes and recommended next steps",
    ],
    actionLabel: "Book consultation",
  },
  "focused-architecture": {
    summary:
      "A focused architecture review for one defined platform, cloud, security, or delivery concern.",
    benefits: [
      "Review of one defined architecture area",
      "Risk and constraint identification",
      "Written architectural recommendations",
    ],
    actionLabel: "Book architecture consultation",
  },
  "product-discovery": {
    summary:
      "A structured engagement that turns a product idea into a governed, feasible MVP definition and delivery direction.",
    benefits: [
      "Requirements and workflow discovery",
      "MVP scope, assumptions, and exclusions",
      "Risks, priorities, and delivery roadmap",
    ],
    actionLabel: "Start product discovery",
  },
  "systems-assessment": {
    summary:
      "A comprehensive assessment of an existing platform, architecture, or delivery system with a practical modernization roadmap.",
    benefits: [
      "Current-state architecture assessment",
      "Findings, risks, and recommendations",
      "Target direction and modernization roadmap",
    ],
    actionLabel: "Request an assessment",
  },
} as const satisfies Record<
  PublicCommercialOfferingKey,
  PresentationCopy
>;

export const PUBLIC_COMMERCIAL_PRESENTATIONS =
  PUBLIC_COMMERCIAL_OFFERINGS.map(
    (offering): PublicCommercialPresentation => {
      const copy = PRESENTATION_COPY[offering.offeringKey];

      const action: PublicCommercialAction =
        offering.checkoutMode === "self-service"
          ? {
              kind: "checkout",
              offeringKey: offering.offeringKey,
              label: copy.actionLabel,
            }
          : {
              kind: "discovery",
              offeringKey: offering.offeringKey,
              label: copy.actionLabel,
            };

      return {
        ...offering,
        summary: copy.summary,
        benefits: copy.benefits,
        action,
      };
    }
  );

export function getPublicCommercialPresentation(
  offeringKey: string | null | undefined
): PublicCommercialPresentation | null {
  return (
    PUBLIC_COMMERCIAL_PRESENTATIONS.find(
      (offering) => offering.offeringKey === offeringKey
    ) ?? null
  );
}
