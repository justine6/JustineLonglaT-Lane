import DiscoveryIntakeFormClient from "@/components/DiscoveryIntakeFormClient";
import {
  resolveDiscoveryContextFromSearchParams,
  type SearchParamsRecord,
} from "@/lib/discovery-context";

export const dynamic = "force-dynamic";

type Props = {
  searchParams?: Promise<SearchParamsRecord>;
};

export default async function DiscoveryPage({
  searchParams,
}: Props) {
  const resolvedSearchParams =
    (await searchParams) ?? {};

  const discoveryContext =
    resolveDiscoveryContextFromSearchParams(
      resolvedSearchParams
    );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl">
        <DiscoveryIntakeFormClient
          context={discoveryContext}
        />
      </div>
    </main>
  );
}
