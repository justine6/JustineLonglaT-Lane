const engagements = [
  {
    title: "Cloud Migration & Modernization",
    description:
      "Support for moving workloads, improving architecture, and modernizing delivery foundations for scalable cloud operations.",
  },
  {
    title: "DevSecOps Pipeline Implementation",
    description:
      "Design and improvement of CI/CD pipelines with secure defaults, automation guardrails, and more reliable software delivery workflows.",
  },
  {
    title: "Platform Engineering Foundation",
    description:
      "Internal platform patterns, reusable workflows, and developer enablement practices that reduce friction and improve consistency.",
  },
  {
    title: "Observability & Reliability Setup",
    description:
      "Monitoring, dashboards, metrics, logging, and operational readiness practices that strengthen system visibility and supportability.",
  },
  {
    title: "Security Hardening & Delivery Controls",
    description:
      "Practical security improvements across infrastructure, access, workflows, and deployment processes to reduce operational risk.",
  },
  {
    title: "Architecture Review & Technical Advisory",
    description:
      "Targeted guidance for teams that need architectural clarity, modernization direction, or a stronger technical delivery approach.",
  },
];

export default function TypicalEngagements() {
  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/80">
            Typical Engagements
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Common ways organizations work with JLT-Lane
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Engagements are shaped around practical delivery needs, platform
            maturity, and the need to build secure, maintainable systems that
            support real business outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {engagements.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-700"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}