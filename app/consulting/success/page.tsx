import Link from "next/link";

type SearchParams = Promise<{
  service?: string;
}>;

function getServiceContent(service?: string) {
  switch (service) {
    case "intro":
      return {
        title: "Payment received for your Intro Platform Consultation",
        description:
          "Thank you for your purchase. Your consultation is confirmed on our side. The next step is to book a time that works for you.",
        nextStepLabel: "Book your intro session",
      };

    case "review":
      return {
        title: "Payment received for your Platform Architecture Review",
        description:
          "Thank you for your purchase. Your review engagement is now in motion. Please choose a time for your architecture session so we can begin.",
        nextStepLabel: "Book your review session",
      };

    case "retainer":
      return {
        title: "Payment received for your Platform Retainer",
        description:
          "Thank you for starting your retainer engagement. The next step is to schedule our kickoff session so we can align on scope, priorities, and immediate next actions.",
        nextStepLabel: "Schedule kickoff session",
      };

    default:
      return {
        title: "Payment received",
        description:
          "Thank you. Your consulting payment was received successfully. Please choose a time for the next step so we can move forward smoothly.",
        nextStepLabel: "Book your session",
      };
  }
}

export const metadata = {
  title: "Consulting Success | Justine Longla T.",
  description:
    "Payment confirmation and next steps for consulting services.",
};

export default async function ConsultingSuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const service = params?.service;
  const content = getServiceContent(service);

  return (
    <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300">
          Payment confirmed
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {content.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          {content.description}
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Next steps
          </h2>

          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <p>1. Use the button below to choose a time on the calendar.</p>
            <p>2. You will receive confirmation after booking.</p>
            <p>
              3. If scheduling does not work, contact{" "}
              <a
                href="mailto:justine@justinelonglat-lane.com"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                justine@justinelonglat-lane.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/availability"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            {content.nextStepLabel}
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Contact directly
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-transparent px-5 py-3 text-sm font-semibold text-slate-500 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}