export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 px-6 py-28 text-center text-slate-900 dark:from-slate-900 dark:to-slate-950 dark:text-white">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Home / Services &amp; Solutions
        </p>

        {/* Brand eyebrow */}
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80">
          JLT-Lane
        </p>

        {/* Headline */}
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Services &amp; Solutions
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          I help organizations design, secure, and operate cloud platforms,
          DevSecOps pipelines, and automation systems that are scalable,
          reliable, and built for real-world operations.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Contact
          </a>

          <a
            href="/#booking"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
          >
            Book a Service
          </a>

          <a
            href="/projects"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
          >
            View Projects
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
            Cloud Architecture
          </span>
          <span className="rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
            DevSecOps
          </span>
          <span className="rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
            Platform Engineering
          </span>
          <span className="rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
            Observability
          </span>
          <span className="rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
            Automation
          </span>
        </div>
      </div>
    </section>
  );
}