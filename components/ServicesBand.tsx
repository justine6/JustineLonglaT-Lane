// components/ServicesBand.tsx
import Link from "next/link";

export default function ServicesBand() {
  const services = [
    {
      title: "Launch & Migrate",
      description:
        "Secure AWS starter migration services for startups and small businesses.",
    },
    {
      title: "Secure & Scale",
      description:
        "DevSecOps pipelines, automation, and compliance for growing teams.",
    },
    {
      title: "Operate & Optimize",
      description:
        "Managed AWS services, cost audits, and 24/7 observability & monitoring.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-slate-100 dark:bg-slate-900 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-sky-300">
            Justine Longla T.
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100 sm:text-3xl">
            Cloud Services, Tuned for Your Team
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base max-w-2xl mx-auto">
            Pick the engagement model that matches your stage — from first cloud
            steps to heavily regulated production workloads.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-300 dark:border-sky-500/25 bg-white dark:bg-slate-900 p-6 shadow-sm shadow-black/10 dark:shadow-black/30"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-sky-100">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                  {service.description}
                </p>
              </div>

              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-blue-500/70 dark:border-sky-400/80 bg-blue-50 dark:bg-sky-500/10 px-4 py-2 text-sm font-medium text-blue-700 dark:text-sky-100 transition-colors hover:bg-blue-100 dark:hover:bg-sky-500/20"
                >
                  Get a Custom Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
