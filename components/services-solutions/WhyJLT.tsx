export default function WhyJLT() {
  return (
    <section className="bg-white px-6 py-20 text-slate-900 dark:bg-slate-900 dark:text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80">
          Why JLT-Lane
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          Practical engineering, structured delivery, and long-term thinking
        </h2>

        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
          JLT-Lane brings together cloud architecture, DevSecOps, observability,
          automation, and platform engineering into one practical delivery
          approach. The goal is not only to build systems that work, but to
          build systems that are secure, maintainable, and ready to scale.
        </p>

        <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400 md:text-lg">
          This work is shaped by hands-on engineering experience, structured
          thinking, and a strong focus on reliability, clarity, and long-term
          operational value.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Architecture-minded
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Decisions are made with scale, maintainability, and operational
              clarity in mind.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Security-aware
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Delivery workflows, access control, and secure defaults are part
              of the engineering model from the start.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Operations-focused
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Systems are designed to be observable, supportable, and useful over
              time, not just deployed once.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}