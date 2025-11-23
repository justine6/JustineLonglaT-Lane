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
      className="w-full bg-slate-900/95 py-16 text-slate-50 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Jutellane Solutions with Justine
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Cloud Services, Tuned for Your Team
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Pick the engagement model that matches your stage — from first cloud
            steps to heavily regulated production workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-7">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-2xl border border-sky-500/25 bg-slate-900/70 p-5 shadow-sm shadow-black/30 ring-1 ring-slate-800/70"
            >
              <div>
                <h3 className="text-lg font-semibold text-sky-100">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  {service.description}
                </p>
              </div>

              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-sky-400/80 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-100 transition-colors hover:bg-sky-500/20"
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
