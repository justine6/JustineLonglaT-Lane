import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Migration Best Practices — Justine Longla T.",
  description:
    "AWS migration guidance: landing zones, safe cutover patterns, rollback strategies, and operational readiness for production workloads.",
};

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "foundations", label: "Migration foundations" },
  { id: "cutover", label: "Cutover & rollback strategy" },
  { id: "operations", label: "Operational readiness" },
];

export default function CloudMigrationPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-slate-800 dark:text-slate-100 lg:grid lg:grid-cols-[minmax(0,2.2fr),minmax(260px,1fr)] lg:gap-12">
      {/* Main article column */}
      <article className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-sky-500">
          Cloud Migration · AWS Architecture
        </p>

        <h1 className="mt-3 text-4xl font-bold leading-tight">
          Cloud Migration Best Practices
        </h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Field-tested principles for migrating workloads to AWS without
          downtime, regressions, or high-pressure weekend cutovers.
        </p>

        {/* Mobile TOC */}
        <nav className="mt-6 flex flex-wrap gap-2 text-sm lg:hidden">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-slate-300 px-3 py-1 text-slate-700 hover:border-sky-500 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
          <section id="overview">
            <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
            <p>
              Modern cloud migrations require more than a “lift-and-shift”
              mindset. You are moving not just servers, but business-critical
              workflows, compliance responsibilities, and operational habits.
              This deep dive outlines how I approach migrations so teams gain
              confidence at every step instead of holding their breath on cutover
              weekend.
            </p>
          </section>

          <section id="foundations">
            <h2 className="mb-3 text-2xl font-semibold">Migration foundations</h2>
            <p>
              Every migration starts with a strong landing zone: accounts,
              network topology, IAM baselines, and shared services. I prefer a
              multi-account layout with clear guardrails for prod vs.
              non-prod, centralized logging, and security services wired in from
              day one.
            </p>
            <p className="mt-3">
              On top of that, we map workloads into migration waves, define
              success metrics, and agree on what “done” means from both a
              technical and business perspective
            </p>
          </section>

          <section id="cutover">
            <h2 className="mb-3 text-2xl font-semibold">
              Cutover & rollback strategy
            </h2>
            <p>
              The riskiest moment in any migration is the cutover itself. I use
              patterns like blue/green DNS shifts, read-only freeze windows, and
              dual-write phases where appropriate. The key rule:{" "}
              <span className="font-semibold">
                we never attempt a cutover that doesn&apos;t have a clear,
                tested rollback.
              </span>
            </p>
            <p className="mt-3">
              Pipelines are wired to promote infra and application changes
              together, with health checks, smoke tests, and automated backout
              hooks if SLOs are breached.
            </p>
          </section>

          <section id="operations">
            <h2 className="mb-3 text-2xl font-semibold">Operational readiness</h2>
            <p>
              Migration success is measured weeks after cutover, not just the
              night it happens. We invest early in observability, cost
              visibility, runbooks, and on-call readiness so the team can
              actually live with the new platform.
            </p>
            <p className="mt-3">
              By the time we declare the migration complete, dashboards, alerts,
              and incident workflows are in place — and the business can see the
              improvement in reliability and velocity.
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/intro-call"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            Schedule an Intro Call
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            Contact
          </Link>
        </section>
      </article>

      {/* Desktop TOC column */}
      <aside className="mt-10 hidden lg:block">
        <div className="sticky top-28 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            On this page
          </p>
          <ol className="space-y-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-md px-2 py-1 text-slate-700 hover:bg-sky-50 hover:text-sky-700 dark:text-slate-200 dark:hover:bg-sky-900/40"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </main>
  );
}
