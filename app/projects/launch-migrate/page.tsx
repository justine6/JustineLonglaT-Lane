// app/projects/launch-migrate/page.tsx
import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Launch & Migrate | Jutellane Solutions with Justine",
  description:
    "AWS migration starter services: assess, plan, and execute secure, cost-aware migrations for startups and small businesses.",
  openGraph: {
    title: "Launch & Migrate | Jutellane Solutions",
    description:
      "Case study: helping teams move safely to AWS with a clear migration playbook, guardrails, and observability.",
    type: "article",
    url: "https://jutellane.com/projects/launch-migrate",
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

      {/* Hero pill + title */}
      <SectionFadeIn as="header" delay={0.06} className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-amber-900 shadow-sm dark:border-amber-400/70 dark:bg-slate-900/70 dark:text-amber-50 dark:shadow-[0_0_24px_rgba(245,158,11,0.55)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          AWS Migration · Cloud Foundations · Cost & Security
        </div>

        <h1 className="page-title">Launch &amp; Migrate</h1>

        <p className="page-subtitle max-w-3xl">
          A starter migration offering that helps startups and small businesses
          move into AWS with a clear plan, guardrails, and confidence — instead
          of a risky “lift and hope” approach.
        </p>

        {/* Soft gradient hero card – you can swap for an Image later */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-emerald-800">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
            From on-prem to AWS, safely
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            The focus of this project is not just “getting to the cloud,” but
            arriving with the essentials in place: networking, security,
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
          Many teams know they need to be in the cloud, but they don&apos;t
          have a safe path to get there. In this project, I designed a
          repeatable migration offering — <strong>Launch &amp; Migrate</strong>{" "}
          — that helps organizations move workloads to AWS with clear phases,
          realistic timelines, and a strong focus on security and cost.
        </p>
        <p className="section-body">
          Instead of a purely technical conversation, the engagement is framed
          around <em>risk, visibility, and business continuity</em>, so that
          executives, operations, and engineers stay aligned from day one.
        </p>
      </SectionFadeIn>

      {/* Migration Approach */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Migration approach</h2>
        <p className="section-body">
          The Launch &amp; Migrate playbook is broken into focused stages:
        </p>
        <ol className="section-body list-decimal space-y-2 pl-5">
          <li>
            <span className="font-semibold">Discovery &amp; inventory</span> –{" "}
            catalog current workloads, dependencies, data flows, and
            non-negotiable constraints (compliance, SLAs, maintenance windows).
          </li>
          <li>
            <span className="font-semibold">Landing zone design</span> – define
            AWS accounts, networking (VPC, subnets, connectivity), identity
            (IAM, SSO), and baseline security controls so migrations don&apos;t
            start on a shaky foundation.
          </li>
          <li>
            <span className="font-semibold">Migration waves</span> – group
            applications into waves (pilot, low-risk, core systems), choose the
            strategy per workload (rehost, replatform, refactor), and plan
            cutover steps.
          </li>
          <li>
            <span className="font-semibold">Execution &amp; verification</span>{" "}
            – run the migrations, validate performance and data integrity, and
            use observability dashboards to confirm the new environment is
            healthy.
          </li>
          <li>
            <span className="font-semibold">Handover &amp; optimization</span>{" "}
            – document the environment, train the operational team, and review
            early cost &amp; performance data to identify quick wins.
          </li>
        </ol>
      </SectionFadeIn>

      {/* Guardrails */}
      <SectionFadeIn as="section" delay={0.22} className="mt-10 space-y-3">
        <h2 className="section-heading">Security and cost guardrails</h2>
        <p className="section-body">
          A key outcome of this project is ensuring that the new cloud
          footprint is not only functional, but <em>governable</em>. As part of
          the engagement I emphasized:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Least-privilege IAM</span> for both
            human and machine identities, aligned with organizational roles.
          </li>
          <li>
            <span className="font-semibold">Network segmentation</span> (public,
            private, and restricted subnets) to reduce blast radius and control
            inbound exposure.
          </li>
          <li>
            <span className="font-semibold">Centralized logging &amp;
            monitoring</span> so that security and operations teams can see
            events across accounts from a single pane of glass.
          </li>
          <li>
            <span className="font-semibold">Cost visibility</span> via budgets,
            tags, and dashboarding, making it clear which teams and workloads
            drive spend.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn as="section" delay={0.26} className="mt-10 mb-6 space-y-3">
        <h2 className="section-heading">Impact</h2>
        <p className="section-body">
          By the end of the engagement, the client had a production-ready AWS
          environment, a tested path for moving additional workloads, and a
          shared understanding of how cloud decisions affect cost, risk, and
          agility.
        </p>
        <p className="section-body">
          The same framework can be reused for future migrations, or adapted
          for hybrid setups where some systems remain on-prem while new
          services are born in the cloud.
        </p>
      </SectionFadeIn>
    </main>
  );
}
