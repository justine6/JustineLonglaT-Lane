// app/projects/launch-migrate/page.tsx
import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Launch & Migrate | Justine Longla T.",
  description:
    "An AWS migration offering that helps startups and small businesses move into the cloud with a clear plan, guardrails, and confidence.",
  openGraph: {
    title: "Launch & Migrate | Justine Longla T.",
    description:
      "Case study: a guided AWS migration that replaces “lift and hope” with structured landing zones, guardrails, and business-friendly communication.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/launch-migrate",
  },
};

export default function LaunchMigratePage() {
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

      {/* Eyebrow + title */}
      <SectionFadeIn as="header" delay={0.06} className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-emerald-900 shadow-sm dark:border-emerald-400/70 dark:bg-slate-900/70 dark:text-emerald-50 dark:shadow-[0_0_24px_rgba(16,185,129,0.55)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          AWS Migration · Cloud Foundations · Cost & Security
        </div>

        <h1 className="page-title">Launch &amp; Migrate</h1>

        <p className="page-subtitle max-w-3xl">
          A starter migration offering that helps startups and small businesses
          move into AWS with a clear plan, guardrails, and confidence — instead
          of a risky “lift and hope” approach.
        </p>

        {/* Hero gradient card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-emerald-800">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
            From on-prem to AWS, safely
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            The focus of this project is not just “getting to the cloud,” but
            arriving there with the essentials in place: networking, security,
            observability, and a migration plan that business leaders actually
            understand.
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
              Cloud Architect · Migration Lead
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              AWS (VPC, IAM, EC2/RDS), Landing Zone patterns, VPN/Direct
              Connect, CI/CD, Observability
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Structured migration playbook · Security &amp; cost guardrails ·
              Business-friendly communication
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-3">
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          Many teams treat “moving to the cloud” as a one-time technical event.
          In this engagement, we treated migration as a{" "}
          <span className="font-semibold">planned product</span>: a set of
          repeatable steps that land workloads in AWS without surprising the
          business, security team, or finance.
        </p>
        <p className="section-body">
          We started with a short discovery: current environments, compliance
          constraints, operational maturity, and appetite for change. From
          there, we designed a migration approach that balanced{" "}
          <span className="font-semibold">
            risk, speed, and future maintainability
          </span>
          .
        </p>
      </SectionFadeIn>

      {/* Architecture / Migration flow */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Migration architecture</h2>
        <p className="section-body">
          The target state was a lightweight landing zone built for a small
          team, but with patterns that scale later:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Network foundation</span>: A hub-and-
            spoke VPC design with separate subnets for app, data, and shared
            services, connected to on-prem via VPN/Direct Connect.
          </li>
          <li>
            <span className="font-semibold">Guardrails</span>: AWS IAM, SCP
            starter set, and baseline CloudTrail/Config rules to catch risky
            changes early.
          </li>
          <li>
            <span className="font-semibold">Workload move pattern</span>: A
            repeatable “lift &amp; improve” path that standardised how we
            containerised or re-platformed each app, including golden images
            and IaC templates.
          </li>
          <li>
            <span className="font-semibold">Observability first</span>: Basic
            dashboards and alerts aligned to what the business actually cares
            about — uptime, latency, and error rates.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Sample runbook */}
      <SectionFadeIn as="section" delay={0.22} className="mt-10 space-y-3">
        <h2 className="section-heading">Sample migration run</h2>
        <p className="section-body">
          Each application followed the same playbook. Here is a simplified
          illustration of the steps we used when moving a production API:
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-slate-50 shadow-md dark:border-slate-800">
          <div className="border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300">
            Example migration checklist (excerpt)
          </div>

          <pre className="overflow-x-auto p-4 text-xs text-slate-100">
            <code>
{String.raw`1. Capture baseline: traffic, latency, error rates, infra footprint
2. Stand up target VPC, subnets, security groups, and database
3. Deploy application into AWS (canary or blue/green, depending on risk)
4. Mirror production traffic through AWS and compare metrics
5. Cut over DNS with tight rollback plan and communication script
6. Decommission on-prem resources only after stability window passes`}
            </code>
          </pre>
        </div>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn as="section" delay={0.26} className="mt-10 space-y-3">
        <h2 className="section-heading">Impact</h2>
        <p className="section-body">
          The client moved their first production workloads into AWS without
          emergency calls, midnight cutovers, or surprise bills. Leadership had
          a clear view of{" "}
          <span className="font-semibold">what was moving and why</span>, and
          teams gained a playbook they could reuse for future apps.
        </p>
        <p className="section-body">
          More importantly, the migration left behind a{" "}
          <span className="font-semibold">healthy platform</span>: security
          guardrails, cost visibility, and enough observability that new
          incidents became easier to reason about — not harder.
        </p>
      </SectionFadeIn>
    </main>
  );
}
