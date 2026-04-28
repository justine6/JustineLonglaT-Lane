export default function PlatformProblemSection() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex ...">
            The Platform Problem
            </p>

            <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
            A pattern I’ve observed across teams
            </p>

            {/* 🔥 THIS MUST BE HERE */}
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Many teams don’t struggle because of their tools.
            <span className="block text-blue-600 dark:text-blue-400">
                Their systems are fragmented.
            </span>
            </h2>
                        {/* THEN your paragraph */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            As a platform engineer, I’ve realized that many teams are not failing because they lack tools—
            they struggle because their <span className="font-semibold text-slate-900 dark:text-white">systems are fragmented</span>.

            Over time, infrastructure, CI/CD, access control, and operations evolve separately,
            leading to duplicated effort, inconsistent experiences, and a lack of long-term architectural direction.
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