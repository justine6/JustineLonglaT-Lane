import ContactSection from "@/components/ContactSection";
import {
  getSingleSearchParam,
  resolveDiscoveryContextFromSearchParams,
  type SearchParamsRecord,
} from "@/lib/discovery-context";

type Props = {
  searchParams?: Promise<SearchParamsRecord>;
};

export default async function ContactPage({
  searchParams,
}: Props) {
  const resolvedSearchParams =
    (await searchParams) ?? {};

  const discoveryContext =
    resolveDiscoveryContextFromSearchParams(
      resolvedSearchParams
    );

  const isDiscoveryHandoff =
    getSingleSearchParam(
      resolvedSearchParams,
      "discovery"
    ) === "1";

  const intent = isDiscoveryHandoff
    ? "Discovery Intake"
    : "";

  const service =
    discoveryContext.kind === "proposal"
      ? discoveryContext.offeringName
      : isDiscoveryHandoff
        ? discoveryContext.offeringName
        : "";

  const prefill = {
    intent,
    service,
    name: getSingleSearchParam(
      resolvedSearchParams,
      "name"
    ),
    email: getSingleSearchParam(
      resolvedSearchParams,
      "email"
    ),
    phone: getSingleSearchParam(
      resolvedSearchParams,
      "phone"
    ),
    message: getSingleSearchParam(
      resolvedSearchParams,
      "message"
    ),
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950">
      {isDiscoveryHandoff && (
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 px-6 py-4 text-center text-blue-900 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-100">
          <p className="text-sm uppercase tracking-wide opacity-80">
            Consultation request
          </p>

          <h2 className="mt-1 text-lg font-semibold">
            Request received for:{" "}
            {discoveryContext.offeringName}
          </h2>

          <p className="mt-1 text-sm opacity-80">
            Share goals, timeline, and environment — I’ll
            respond with next steps.
          </p>
        </div>
      )}

      <ContactSection prefill={prefill} />
    </main>
  );
}
