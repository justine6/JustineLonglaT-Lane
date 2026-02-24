import ContactSection from "@/components/ContactSection";

type SearchParams = Record<string, string | string[] | undefined>;

type Props = {
  searchParams?: Promise<SearchParams>;
};

function getSP(sp: SearchParams | undefined, key: string) {
  const v = sp?.[key];
  return Array.isArray(v) ? v[0] : v;
}

export default async function ContactPage({ searchParams }: Props) {
  const sp = (await searchParams) ?? {};

  const intent = getSP(sp, "intent") || "";
  const service = getSP(sp, "service") || "";

  const prefill = {
    intent,
    service,
    name: getSP(sp, "name") || "",
    email: getSP(sp, "email") || "",
    phone: getSP(sp, "phone") || "",
    message: getSP(sp, "message") || "",
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950">
      {(intent || service) && (
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 px-6 py-4 text-center text-blue-900 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-100">
          <p className="text-sm uppercase tracking-wide opacity-80">
            Consultation request
          </p>
          <h2 className="mt-1 text-lg font-semibold">
            Request received{intent ? ` for: ${intent}` : ""}
            {service ? ` (${service})` : ""}
          </h2>
          <p className="mt-1 text-sm opacity-80">
            Share goals, timeline, and environment — I’ll respond with next steps.
          </p>
        </div>
      )}

      <ContactSection prefill={prefill} />
    </main>
  );
}