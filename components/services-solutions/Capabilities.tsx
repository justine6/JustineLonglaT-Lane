const capabilities = [
  "Cloud migration and modernization",
  "Infrastructure as code and automation",
  "Secure CI/CD pipeline design",
  "Docker and Kubernetes workflows",
  "Monitoring, metrics, and observability",
  "Platform reliability and operations readiness",
];

export default function Capabilities() {
  return (
    <section className="bg-white px-6 py-20 text-slate-900 dark:bg-slate-900 dark:text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            JLT-Lane helps organizations strengthen their engineering posture
            across architecture, automation, security, and delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability}
              className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900"
            >
              {capability}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}