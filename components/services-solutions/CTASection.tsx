import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white px-6 py-24 text-center text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80">
          Next Step
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          Ready to move forward?
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
          Whether you need architecture guidance, DevSecOps implementation, or
          platform engineering support, JLT-Lane can help you design, secure,
          and operate with confidence.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/proposal"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-500"
          >
            View Proposal Options
          </Link>

          <a
            href="/#booking"
            className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Book a Service
          </a>

          <Link
            href="/contact"
            className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Contact
          </Link>
        </div>

        <p className="mt-5 text-sm text-slate-500 dark:text-slate-500">
          Explore services, review engagement options, or start with a conversation.
        </p>
      </div>
    </section>
  );
}