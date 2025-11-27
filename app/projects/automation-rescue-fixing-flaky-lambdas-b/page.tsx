// app/projects/automation-rescue-fixing-flaky-lambdas-b/page.tsx
import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Patterns Library: Reliable Lambdas (Automation Rescue – Part B) | Justine Longla T.",
  description:
    "Part B of the Automation Rescue case study: a patterns library that turns hard-won Lambda fixes into reusable, opinionated recipes for boringly reliable serverless systems.",
  openGraph: {
    title: "Patterns Library: Reliable Lambdas (Automation Rescue – Part B)",
    description:
      "From one-off fixes to a reusable patterns library for AWS Lambda — timeouts, retries, DLQs, observability, and guardrails that make reliability the default.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/automation-rescue-fixing-flaky-lambdas-b",
  },
};

export default function ReliableLambdasPatternsPage() {
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

      {/* Hero */}
      <SectionFadeIn as="header" delay={0.06} className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/70 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-amber-900 shadow-sm dark:border-amber-400/70 dark:bg-slate-900/70 dark:text-amber-50 dark:shadow-[0_0_24px_rgba(245,158,11,0.55)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Patterns Library · AWS Lambda · Reliability
        </div>

        <h1 className="page-title">
          Patterns Library: Reliable Lambdas (Automation Rescue – Part B)
        </h1>

        <p className="page-subtitle max-w-3xl">
          Part A of this case study stabilised a noisy, flaky Lambda landscape.
          Part B turns those fixes into a reusable{" "}
          <span className="font-semibold">patterns library</span> that any team
          can adopt to build boringly reliable serverless workflows.
        </p>

        {/* Gradient hero card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
            From heroics to habits
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            Instead of fixing each incident by hand, we captured the proven
            solutions as small, composable patterns — code, configuration, and
            observability conventions — so new Lambdas start out healthy rather
            than “fix later.”
          </p>
        </div>
      </SectionFadeIn>

      {/* Role / Stack / Highlights */}
      <SectionFadeIn as="section" delay={0.1} className="mt-8">
        <div className="grid gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 shadow-lg dark:bg-slate-900/95 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Role
            </h2>
            <p className="mt-1 text-sm font-medium">
              DevSecOps Engineer · Patterns Author
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              AWS Lambda, EventBridge, API Gateway, IaC (CDK / Terraform),
              CloudWatch, CI/CD templates
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Opinionated patterns library · Ready-made IaC modules · Built-in
              observability &amp; security checks
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn
        as="section"
        delay={0.14}
        className="mt-10 space-y-3"
        id="overview"
      >
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          After stabilising production in Part A, the next challenge was
          preventing the same problems from reappearing as new Lambdas were
          created. Every new function shipped with a slightly different timeout,
          retry setup, logging format, and alarm strategy. Reliability still
          depended on who copy-pasted which snippet.
        </p>
        <p className="section-body">
          The answer was to turn the battle-tested fixes into{" "}
          <span className="font-semibold">named patterns</span>: small,
          documented recipes that include infrastructure, configuration, and
          conventions. Engineers don’t start from a blank Lambda — they choose a
          pattern that matches the use case and get sensible defaults out of the
          box.
        </p>
      </SectionFadeIn>

      {/* Tiny Patterns Index */}
      <SectionFadeIn
        as="section"
        delay={0.16}
        className="mt-6 space-y-2"
        id="patterns-index"
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Patterns index
        </h2>
        <p className="section-body text-sm">
          Quick jump to the core recipes in this library:
        </p>
        <ul className="mt-2 flex flex-wrap gap-2 text-xs sm:text-sm">
          <li>
            <a
              href="#warm-guardrail"
              className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:hover:border-emerald-400"
            >
              01 · Guardrail-First Lambda
            </a>
          </li>
          <li>
            <a
              href="#timeouts-retries"
              className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:hover:border-emerald-400"
            >
              02 · Timeouts &amp; Retries
            </a>
          </li>
          <li>
            <a
              href="#dlq-pattern"
              className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:hover:border-emerald-400"
            >
              03 · DLQ &amp; Parking-Lot
            </a>
          </li>
          <li>
            <a
              href="#observability-pattern"
              className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:hover:border-emerald-400"
            >
              04 · Observability-First Logging
            </a>
          </li>
          <li>
            <a
              href="#cicd-templates"
              className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:hover:border-emerald-400"
            >
              05 · CI/CD Template Guardrails
            </a>
          </li>
        </ul>
      </SectionFadeIn>

      {/* Pattern 1 */}
      <SectionFadeIn
        as="section"
        delay={0.18}
        className="mt-10 space-y-3"
        id="warm-guardrail"
      >
        <h2 className="section-heading">Pattern 01 — Guardrail-First Lambda</h2>
        <p className="section-body">
          Every Lambda starts from a base module that includes opinionated
          defaults: runtime, memory, timeout floor, concurrency limit, and
          security posture (VPC configuration, least-privilege IAM role, and
          secrets access pattern).
        </p>
        <ul className="section-body space-y-2">
          <li>✅ Timeouts and memory sized for the workload family</li>
          <li>✅ Reserved concurrency to protect downstream systems</li>
          <li>
            ✅ Single place to update defaults when requirements or best
            practices evolve
          </li>
        </ul>
        <p className="section-body text-sm italic">
          When to use: <span className="font-semibold">always.</span> This
          pattern is the starting point for any new Lambda in the platform.
        </p>
      </SectionFadeIn>

      {/* Pattern 2 */}
      <SectionFadeIn
        as="section"
        delay={0.2}
        className="mt-8 space-y-3"
        id="timeouts-retries"
      >
        <h2 className="section-heading">
          Pattern 02 — Explicit Timeouts &amp; Retries
        </h2>
        <p className="section-body">
          Instead of relying on default timeouts, each Lambda declares its
          latency expectations and failure behaviour using a standard template.
          That template wires in:
        </p>
        <ul className="section-body space-y-2 list-disc pl-5">
          <li>Max execution time and safety margin</li>
          <li>Retry policy tuned to idempotency and downstream SLAs</li>
          <li>Fallback routing for “do not retry” error classes</li>
        </ul>
        <p className="section-body text-sm italic">
          When to use: any Lambda calling external systems (databases, APIs,
          message brokers) or doing non-idempotent work.
        </p>
      </SectionFadeIn>

      {/* Pattern 3 */}
      <SectionFadeIn
        as="section"
        delay={0.22}
        className="mt-8 space-y-3"
        id="dlq-pattern"
      >
        <h2 className="section-heading">
          Pattern 03 — Dead-Letter Queue &amp; Parking-Lot
        </h2>
        <p className="section-body">
          Failures shouldn’t disappear into logs. This pattern standardises how
          we capture and replay broken events:
        </p>
        <ul className="section-body space-y-2 list-disc pl-5">
          <li>One DLQ per workflow, not per function, for simpler operations</li>
          <li>Structured payloads including error type, stack, and correlation IDs</li>
          <li>
            Simple replay tooling (CLI / console) so operators can re-drive
            fixed events safely
          </li>
        </ul>
        <p className="section-body text-sm italic">
          When to use: event-driven Lambdas processing queues, streams, or
          scheduled jobs.
        </p>
      </SectionFadeIn>

      {/* Pattern 4 */}
      <SectionFadeIn
        as="section"
        delay={0.24}
        className="mt-8 space-y-3"
        id="observability-pattern"
      >
        <h2 className="section-heading">
          Pattern 04 — Observability-First Logging
        </h2>
        <p className="section-body">
          The logging pattern ensures every Lambda emits consistent,
          machine-parsable telemetry:
        </p>
        <ul className="section-body space-y-2 list-disc pl-5">
          <li>Structured JSON logs with request IDs and user / tenant context</li>
          <li>Standard metric dimensions (service, operation, result)</li>
          <li>
            Opinionated alarms for error rate, latency, and throttling —
            created automatically with the function
          </li>
        </ul>
        <p className="section-body text-sm italic">
          When to use: all production Lambdas; non-prod can inherit a lighter
          version of the same pattern.
        </p>
      </SectionFadeIn>

      {/* Pattern 5 */}
      <SectionFadeIn
        as="section"
        delay={0.26}
        className="mt-8 space-y-3"
        id="cicd-templates"
      >
        <h2 className="section-heading">
          Pattern 05 — CI/CD Template Guardrails
        </h2>
        <p className="section-body">
          Finally, the library ships with CI/CD templates that bake these
          patterns into the delivery pipeline. Engineers don’t wire alarms or
          DLQs by hand; the template wires them based on the selected pattern.
        </p>
        <ul className="section-body space-y-2 list-disc pl-5">
          <li>
            Workflow templates for “event processor”, “API handler”, and “cron
            worker”
          </li>
          <li>Built-in checks for missing alarms, DLQs, or timeouts</li>
          <li>Automated tagging for cost, ownership, and incident routing</li>
        </ul>
      </SectionFadeIn>

      {/* Outcomes */}
      <SectionFadeIn as="section" delay={0.3} className="mt-10 space-y-3">
        <h2 className="section-heading">Outcomes</h2>
        <p className="section-body">
          With the patterns library in place, reliability stopped depending on
          who happened to be on call during the last incident. New Lambdas
          launched with the same guardrails as the ones we had already
          hardened, and operational surprises dropped sharply.
        </p>
        <p className="section-body">
          Most importantly, the library gave the team a shared language:
          engineers could say “this workflow is using the DLQ + parking-lot
          pattern” and everyone knew what that implied for behaviour, alerts,
          and run-books.
        </p>
      </SectionFadeIn>
    </main>
  );
}
