const offerings = [
  {
    title: "Cloud Architecture",
    description:
      "Architecture design, modernization, and cloud platform structure across AWS and Azure with scalability, resilience, and operational clarity in mind.",
  },
  {
    title: "DevSecOps",
    description:
      "Secure CI/CD pipelines, infrastructure as code, release workflows, and delivery guardrails designed for real-world engineering teams.",
  },
  {
    title: "Platform Engineering",
    description:
      "Internal platforms, developer enablement, reusable workflows, and operating models that reduce friction and improve delivery consistency.",
  },
  {
    title: "Observability & Reliability",
    description:
      "Metrics, logging, dashboards, incident readiness, and reliability practices that help teams understand and improve system health.",
  },
];

export default function OfferingsGrid() {
  return (
    <section className="bg-white px-6 py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Core Offerings
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Practical engineering services shaped by experience in cloud
            architecture, security, automation, and platform operations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}