import Link from "next/link";

export default function MembershipCancelPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-950">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-500 dark:text-amber-400">
          Checkout canceled
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Your payment was not completed.
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          No worries — no charge was completed. You can return to the proposal,
          review the engagement details, and start checkout again whenever you are ready.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          If you ran into an issue during checkout, you can try again or reach out
          directly for help before continuing.
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/proposal"
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Return to proposal
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-50 dark:hover:bg-slate-900"
          >
            Contact support
          </Link>

          <Link
            href="/"
            className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-50 dark:hover:bg-slate-900"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}