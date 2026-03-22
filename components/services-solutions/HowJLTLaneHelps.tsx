export default function HowJLTLaneHelps() {
  const steps = [
    {
      title: "Assess",
      description:
        "Understand the current state of the platform, workflows, delivery constraints, and technical risks so the next steps are grounded in reality.",
    },
    {
      title: "Design",
      description:
        "Shape a practical architecture and delivery path that aligns cloud, automation, security, and scalability with business goals.",
    },
    {
      title: "Build",
      description:
        "Implement solutions across infrastructure, CI/CD, platform tooling, and engineering workflows with clarity and discipline.",
    },
    {
      title: "Secure",
      description:
        "Strengthen systems with DevSecOps guardrails, secure defaults, access control, and delivery practices that reduce operational risk.",
    },
    {
      title: "Operate",
      description:
        "Support reliability with monitoring, observability, runbooks, and production-minded patterns that help teams work with confidence.",
    },
    {
      title: "Improve",
      description:
        "Refine continuously through feedback, tuning, documentation, and platform evolution so systems remain useful as needs grow.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80">
            How JLT-Lane Helps
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            From technical complexity to operational clarity
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            JLT-Lane helps organizations move from fragmented tooling and
            engineering uncertainty toward secure, scalable, and reliable
            delivery systems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700 dark:hover:bg-slate-900"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-sm font-semibold text-sky-700 dark:border-sky-400/20 dark:bg-sky-500/10 dark:text-sky-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
              </div>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}