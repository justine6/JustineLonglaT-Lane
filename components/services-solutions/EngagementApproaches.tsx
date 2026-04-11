const models = [
  {
    title: "Advisory & Architecture",
    description:
      "Architecture reviews, modernization planning, and technical guidance for organizations that need clarity before major platform or cloud decisions.",
  },
  {
    title: "Implementation & Delivery",
    description:
      "Hands-on delivery across platform engineering, DevSecOps pipelines, automation systems, observability, and reliability improvements.",
  },
  {
    title: "Project-Based Engagements",
    description:
      "Focused engagements for migrations, pipeline improvements, platform rollouts, security hardening, and cloud modernization initiatives.",
  },
  {
    title: "Platform & DevSecOps Foundations",
    description:
      "Establish internal platforms, CI/CD standards, automation workflows, and delivery guardrails that teams can build on over time.",
  },
  {
    title: "Reliability & Observability",
    description:
      "Improve system visibility, monitoring, dashboards, and operational readiness to support production systems with greater confidence.",
  },
  {
    title: "Ongoing Advisory & Retainer",
    description:
      "Ongoing support for architecture evolution, delivery improvements, and platform strategy as your systems and teams grow.",
  },
];

export default function EngagementApproaches() {
  return (
    <section className="bg-white px-6 py-20 text-slate-900 dark:bg-slate-900 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80">
            Engagement Approaches
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Flexible ways to work together
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Engagements are structured around your platform maturity, delivery needs,
            and whether your team needs strategic guidance, hands-on implementation,
            or ongoing support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700 dark:hover:bg-slate-900"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {model.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}