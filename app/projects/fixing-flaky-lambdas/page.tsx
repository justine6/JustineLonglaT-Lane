import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title:
    "Automation Rescue: Flaky Lambdas Patterns Library (B) | Justine Longla T.",
  description:
    "A reusable patterns library that turns the lessons from rescuing flaky AWS Lambdas into repeatable, reliable serverless building blocks.",
  openGraph: {
    title:
      "Automation Rescue: Flaky Lambdas Patterns Library (B) | Justine Longla T.",
    description:
      "From one-off fixes to a patterns library: standard templates, observability baselines, and guardrails for reliable AWS Lambda workloads.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/automation-rescue-fixing-flaky-lambdas-b",
  },
};

export default function FlakyLambdasPatternsLibrary() {
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
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-amber-900 shadow-sm dark:border-amber-400/70 dark:bg-slate-900/70 dark:text-amber-50 dark:shadow-[0_0_24px_rgba(251,191,36,0.55)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          AWS · Serverless · Patterns Library
        </div>

        <h1 className="page-title">
          Automation Rescue: Flaky Lambdas — Patterns Library (B)
        </h1>

        <p className="page-subtitle max-w-3xl">
          Part B of the “Flaky Lambdas” story. After stabilising production, we
          turned the fixes into a small patterns library — templates, metrics,
          and guardrails — so every new Lambda could be reliable by design.
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-amber-700">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-200">
            From heroics to habits
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            The rescue work in Part A fixed today&apos;s incidents. This part
            packages those lessons into building blocks that make tomorrow&apos;s
            Lambdas boringly reliable — without blocking developer flow.
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
              DevSecOps Engineer · Patterns &amp; Enablement
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              AWS Lambda, API Gateway, EventBridge, IaC (CDK/Terraform),
              CloudWatch dashboards, GitHub Actions
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Lambda starter templates · Observability baseline · Guardrails in
              CI/CD · Developer-ready docs &amp; examples
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-3">
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          In Part A, we stabilised a handful of noisy, flaky Lambdas by adding
          observability, tightening timeouts, and fixing deployment anti-patterns.
          But if each new function had to rediscover those lessons, the team
          would eventually drift back into chaos.
        </p>
        <p className="section-body">
          The goal of this phase was to build a{" "}
          <span className="font-semibold">patterns library</span> — a set of{" "}
          <em>default ways</em> to build, observe, and operate Lambdas. Not a
          heavy framework, but thin, well-documented templates that guide
          engineers toward safe choices.
        </p>
      </SectionFadeIn>

      {/* Patterns summary */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Patterns in the library</h2>
        <p className="section-body">
          The library grouped the work into a few simple, opinionated patterns:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Function template</span>: standard
            runtime config (timeouts, memory), logging, and error handling for
            all new Lambdas.
          </li>
          <li>
            <span className="font-semibold">Idempotent workflow</span>: guidance
            for handling retries, DLQs, and exactly-once semantics where it
            matters.
          </li>
          <li>
            <span className="font-semibold">Observability baseline</span>:
            built-in metrics, structured logs, and dashboards per workflow.
          </li>
          <li>
            <span className="font-semibold">Security &amp; configuration</span>
            : environment variable patterns, secrets management, and least-
            privilege IAM roles.
          </li>
          <li>
            <span className="font-semibold">Deployment guardrails</span>:
            checks in CI/CD to prevent risky changes (like unbounded timeouts or
            missing alarms) from reaching production.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Example: function template */}
      <SectionFadeIn as="section" delay={0.22} className="mt-10 space-y-3">
        <h2 className="section-heading">Example: Lambda function template</h2>
        <p className="section-body">
          Engineers don&apos;t want to copy/paste checklists. So we baked the
          best practices into a starter template they could import and extend.
          Here&apos;s a simplified pseudocode version:
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-slate-50 shadow-md dark:border-slate-800">
          <div className="border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300">
            Example Lambda starter (pseudocode)
          </div>
          <pre className="overflow-x-auto p-4 text-xs text-slate-100">
            <code>
{String.raw`export const handler = wrapWithTelemetry({
  timeoutMs: 15000,
  memoryMb: 256,
  retries: 2,
  captureColdStarts: true,
})(async (event, context, log) => {
  const correlationId = getCorrelationId(event, context);

  try {
    log.info("Processing request", { correlationId });

    // 1. Validate input
    // 2. Call downstream services with timeouts
    // 3. Write idempotent updates (e.g. using requestId keys)

    return { statusCode: 200 };
  } catch (err) {
    log.error("Lambda failed", { correlationId, err });
    throw err; // retried or sent to DLQ with full context
  }
});`}
            </code>
          </pre>
        </div>

        <p className="section-body">
          The real implementation wired into shared logging, metrics, and error
          handling, so every Lambda emitted familiar signals from day one.
        </p>
      </SectionFadeIn>

      {/* Example: CI/CD guardrails */}
      <SectionFadeIn as="section" delay={0.24} className="mt-10 space-y-3">
        <h2 className="section-heading">Example: CI/CD guardrails</h2>
        <p className="section-body">
          To keep the library honest, we added a few lightweight checks into the
          deployment pipeline. Conceptually:
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-slate-50 shadow-md dark:border-slate-800">
          <div className="border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300">
            Guardrail ideas (conceptual)
          </div>
          <pre className="overflow-x-auto p-4 text-xs text-slate-100">
            <code>
{String.raw`• Fail the build if:
  - timeout > 30s but function is synchronous API
  - no alarms defined for error rate / throttles
  - no DLQ or retry policy for asynchronous triggers

• Warn loudly if:
  - memory size is much higher than baseline
  - function is deployed without correlation ID logging`}
            </code>
          </pre>
        </div>

        <p className="section-body">
          These rules caught risky changes early, while still letting senior
          engineers override them with clear justification when needed.
        </p>
      </SectionFadeIn>

      {/* Adoption & impact */}
      <SectionFadeIn as="section" delay={0.28} className="mt-10 space-y-3">
        <h2 className="section-heading">Adoption &amp; impact</h2>
        <p className="section-body">
          We rolled out the patterns library through{" "}
          <span className="font-semibold">enablement, not enforcement</span>:
          short walkthroughs, examples in real services, and a “start here”
          section in the internal docs.
        </p>
        <p className="section-body">
          Within a few sprints, new Lambdas started to look very similar:
          consistent logging, familiar metrics, and predictable operational
          behaviour. On-call noise continued to drop, and debugging new issues
          felt like reading a story we already knew.
        </p>
        <p className="section-body">
          Together with Part A, this project turned a painful reliability
          episode into a durable advantage: a{" "}
          <span className="font-semibold">
            small, living library of serverless patterns
          </span>{" "}
          that the team can extend as their platform grows.
        </p>
      </SectionFadeIn>
    </main>
  );
}
