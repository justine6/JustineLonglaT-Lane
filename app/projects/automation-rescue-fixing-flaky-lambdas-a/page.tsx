// app/projects/automation-rescue-fixing-flaky-lambdas-a/page.tsx
import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Automation Rescue: Fixing Flaky Lambdas — Part A | Justine Longla T.",
  description:
    "Part A of a real-world rescue that stabilized noisy, flaky AWS Lambda functions with consistent guardrails, better logging, and healthier alerts.",
  openGraph: {
    title: "Automation Rescue: Fixing Flaky Lambdas — Part A | Justine Longla T.",
    description:
      "How we rescued a noisy, flaky Lambda landscape — stabilizing production with consistent retries, unified timeouts, structured logging, and better alarms.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/automation-rescue-fixing-flaky-lambdas-a",
  },
};

export default function AutomationRescuePartAPage() {
  return (
    <main className="page-shell">
      {/* Back link */}
      <SectionFadeIn as="div" delay={0.02} className="mb-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
        >
          <span className="text-base">←</span>
          <span>Back to projects</span>
        </Link>
      </SectionFadeIn>

      {/* Breadcrumb / tags */}
      <SectionFadeIn as="div" delay={0.05} className="mb-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/70 bg-amber-50/90 px-3 py-1 text-[0.7rem] font-medium text-amber-900 shadow-sm dark:border-amber-400/80 dark:bg-slate-900/80 dark:text-amber-50 dark:shadow-[0_0_24px_rgba(251,191,36,0.55)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>AWS Lambda</span>
          <span className="h-1 w-px bg-amber-300/70 dark:bg-amber-500/70" />
          <span>Reliability</span>
          <span className="h-1 w-px bg-amber-300/70 dark:bg-amber-500/70" />
          <span>Incident Rescue · Part A</span>
        </div>
      </SectionFadeIn>

      {/* Hero */}
      <SectionFadeIn as="header" delay={0.08} className="space-y-5">
        <h1 className="page-title">
          Automation Rescue: Fixing Flaky Lambdas (Part A)
        </h1>

        <p className="page-subtitle max-w-3xl">
          How we stabilized production incidents caused by noisy, flaky Lambda
          behavior — and laid the groundwork for a reusable patterns library in
          Part B.
        </p>

        {/* Gradient hero card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-600 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
            From chaos to stable signals
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            Before the rescue, production incidents were triggered by timeouts,
            missed retries, missing logs, and alarms firing long after the real
            problem. Part A brought the landscape under control with consistent
            guardrails across every Lambda.
          </p>
        </div>
      </SectionFadeIn>

      {/* Role / Stack / Highlights */}
      <SectionFadeIn as="section" delay={0.12} className="mt-8">
        <div className="grid gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 shadow-lg dark:bg-slate-900/95 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Role
            </h2>
            <p className="mt-1 text-sm font-medium">
              DevSecOps Engineer · Reliability Lead
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              AWS Lambda, API Gateway, CloudWatch, IaC (CDK/Terraform), CI/CD
              pipelines
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Unified guardrails across Lambdas · Consistent retries & timeouts
              · Structured logging & sharper alarms
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Body layout: nav + content */}
      <SectionFadeIn
        as="section"
        delay={0.16}
        className="mt-10 grid gap-10 lg:grid-cols-[220px,minmax(0,1fr)]"
      >
        {/* Section nav */}
        <nav
          aria-label="Section navigation"
          className="space-y-2 text-sm text-slate-600 dark:text-slate-300"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Sections
          </p>
          <a
            href="#overview"
            className="block rounded-lg bg-slate-900 text-slate-50 px-3 py-2 text-xs font-medium shadow-sm dark:bg-slate-900"
          >
            Overview
          </a>
          <a
            href="#root-causes"
            className="block rounded-lg px-3 py-2 text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Root causes
          </a>
          <a
            href="#key-fixes"
            className="block rounded-lg px-3 py-2 text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Key fixes
          </a>
          <a
            href="#outcome"
            className="block rounded-lg px-3 py-2 text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Outcome
          </a>
          <a
            href="#next-steps"
            className="block rounded-lg px-3 py-2 text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Continue to Part B
          </a>
        </nav>

        {/* Content */}
        <div className="space-y-10">
          {/* Overview */}
          <section id="overview" className="space-y-3">
            <h2 className="section-heading">Overview</h2>
            <p className="section-body">
              This phase focused on stabilizing production incidents caused by
              inconsistent Lambda behavior — timeouts, missed retries, missing
              logs, and alerts firing long after the incident.
            </p>
            <p className="section-body">
              By diagnosing the underlying anti-patterns, the team introduced
              durable guardrails that cut incident frequency dramatically and
              prepared the ground for the reusable patterns developed in Part B.
            </p>
          </section>

          {/* Root causes */}
          <section id="root-causes" className="space-y-3">
            <h2 className="section-heading">Root causes we uncovered</h2>
            <p className="section-body">
              The Lambdas themselves were not “bad,” but the surrounding
              practices were fragile and inconsistent:
            </p>
            <ul className="section-body space-y-2 list-disc pl-5">
              <li>
                Mixed timeout and memory profiles with no clear standards per
                use case.
              </li>
              <li>
                Retries configured by habit instead of by workload
                characteristics.
              </li>
              <li>
                Logs scattered across functions and environments with no common
                correlation fields.
              </li>
              <li>
                Alarms wired to noisy metrics, triggering late or not at all.
              </li>
            </ul>
            <p className="section-body">
              The net effect: operators saw incidents late, dashboards were
              noisy, and every failure felt like a brand-new mystery.
            </p>
          </section>

          {/* Key fixes */}
          <section id="key-fixes" className="space-y-3">
            <h2 className="section-heading">Key fixes and guardrails</h2>
            <p className="section-body">
              Instead of chasing individual incidents, we focused on
              system-level fixes that applied to every Lambda in the fleet:
            </p>
            <ul className="section-body space-y-2 list-disc pl-5">
              <li>
                <span className="font-semibold">
                  Consistent retry strategy:
                </span>{" "}
                standardized retry/backoff policies, tuned by workload type.
              </li>
              <li>
                <span className="font-semibold">
                  Unified timeout & memory profiles:
                </span>{" "}
                clear defaults for IO-heavy, CPU-heavy, and short-lived tasks.
              </li>
              <li>
                <span className="font-semibold">Structured logging layer:</span>{" "}
                shared log format with correlation IDs and key dimensions
                (tenant, feature, environment).
              </li>
              <li>
                <span className="font-semibold">Sharper alarms:</span> alerts
                aligned to true symptoms (error rate, DLQ depth, cold start
                spikes) instead of generic CPU graphs.
              </li>
              <li>
                <span className="font-semibold">
                  Dead-letter queue conventions:
                </span>{" "}
                standard DLQ behavior for noisy failures, with clear ownership
                for reprocessing.
              </li>
            </ul>
          </section>

          {/* Outcome */}
          <section id="outcome" className="space-y-3">
            <h2 className="section-heading">Outcome</h2>
            <p className="section-body">
              Production stabilized. Noise dropped. Incidents became predictable
              instead of chaotic. On-call engineers regained confidence that
              Lambda behavior was bounded, observable, and fixable.
            </p>
            <p className="section-body">
              Most importantly, the fixes were intentional and repeatable — not
              one-off “saves.” That set the perfect stage for Part B, where
              these guardrails are captured as a reusable patterns library.
            </p>
          </section>

          {/* Next steps CTA */}
          <section id="next-steps" className="space-y-3">
            <h2 className="section-heading">Next: turn fixes into patterns</h2>
            <p className="section-body">
              Part B zooms out from incident response and turns the winning
              guardrails into a{" "}
              <span className="font-semibold">
                Patterns Library for Reliable Lambdas
              </span>{" "}
              — ready to be reused across teams and environments.
            </p>

            <Link
              href="/projects/automation-rescue-fixing-flaky-lambdas-b"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Continue to Part B → Patterns Library
            </Link>
          </section>
        </div>
      </SectionFadeIn>
    </main>
  );
}
