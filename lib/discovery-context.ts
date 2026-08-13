import {
  COMMERCIAL_OFFERINGS,
  isProposalOfferingKey,
  type ProposalOfferingKey,
} from "@/lib/commercial-offerings";

export type SearchParamValue =
  | string
  | string[]
  | undefined;

export type SearchParamsRecord =
  Record<string, SearchParamValue>;

export type DiscoveryContext =
  | {
      kind: "proposal";
      offeringKey: ProposalOfferingKey;
      offeringName: string;
    }
  | {
      kind: "general";
      offeringKey: null;
      offeringName: "General discovery inquiry";
    };

const GENERAL_DISCOVERY_CONTEXT: DiscoveryContext = {
  kind: "general",
  offeringKey: null,
  offeringName: "General discovery inquiry",
};

export function resolveDiscoveryContext(
  service: SearchParamValue
): DiscoveryContext {
  if (
    typeof service !== "string" ||
    !isProposalOfferingKey(service)
  ) {
    return GENERAL_DISCOVERY_CONTEXT;
  }

  return {
    kind: "proposal",
    offeringKey: service,
    offeringName: COMMERCIAL_OFFERINGS[service].name,
  };
}

export function resolveDiscoveryContextFromSearchParams(
  searchParams: SearchParamsRecord | undefined
): DiscoveryContext {
  return resolveDiscoveryContext(searchParams?.service);
}

export function getSingleSearchParam(
  searchParams: SearchParamsRecord | undefined,
  key: string
): string {
  const value = searchParams?.[key];

  return typeof value === "string" ? value : "";
}
