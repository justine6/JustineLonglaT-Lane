export default function PlatformProblemSection() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
            The Platform Problem
          </p>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Most teams don’t have a platform.
            <span className="block text-blue-600 dark:text-blue-400">
              They have disconnected tools.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Infrastructure, CI/CD, access control, observability, and operations
            often grow separately. Over time, this creates fragmented systems,
            inconsistent access, unclear ownership, and reactive operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
              Access becomes unclear
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Teams gain access through assumptions instead of governed identity,
              roles, and entitlements.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
              Automation becomes fragile
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Scripts, pipelines, and deployment steps exist, but they are not
              connected into a reliable operating model.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
              Operations become reactive
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Without observability, runbooks, and feedback loops, teams respond
              to issues after they happen instead of improving the system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}