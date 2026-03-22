import Link from "next/link";

const services = [
  {
    title: "Launch",
    description:
      "Design and build cloud platforms, modernization paths, and delivery foundations that help organizations move forward with clarity.",
  },
  {
    title: "Secure",
    description:
      "Embed DevSecOps guardrails, secure defaults, and delivery practices that reduce risk across engineering workflows.",
  },
  {
    title: "Operate",
    description:
      "Strengthen reliability with observability, runbooks, and operational readiness that help teams support systems with confidence.",
  },
];

export default function ServicesBand() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            How JLT-Lane Helps
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
            From platform design to secure delivery and operational reliability.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/services-solutions"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            View Services &amp; Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}