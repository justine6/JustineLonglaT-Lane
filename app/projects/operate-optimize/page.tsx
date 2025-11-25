// app/projects/operate-optimize/page.tsx
import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Operate & Optimize | Justine Longla T.",
  description:
    "Managed AWS services, cost audits, and 24/7 monitoring that keep cloud environments healthy, observable, and cost-aware — without slowing teams down.",
  openGraph: {
    title: "Operate & Optimize | Justine Longla T.",
    description:
      "Cost-aware, observable cloud operations: managed AWS services, cost audits, and 24/7 monitoring for growing teams.",
    url: "https://justinelonglat-lane.com/projects/operate-optimize",
    type: "article",
  },
};

export default function OperateOptimizePage() {
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

      {/* Header */}
      <SectionFadeIn as="header" delay={0.06} className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-emerald-800 shadow-sm dark:border-emerald-400/60 dark:bg-slate-900/70 dark:text-emerald-100 dark:shadow-[0_0_24px_rgba(16,185,129,0.5)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          AWS Operations · Cost Optimization · Observability
        </div>

        <h1 className="page-title">Operate &amp; Optimize</h1>

        <p className="page-subtitle max-w-3xl">
          A managed AWS services and cost-optimization offering that keeps
          environments healthy, observable, and affordable — while engineering
          teams stay focused on shipping features.
        </p>

        {/* Hero band */}
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-sky-900 to-emerald-700 px-6 py-6 text-slate-50 shadow-lg dark:from-slate-900 dark:via-slate-800 dark:to-emerald-700">
          <p className="max-w-4xl text-sm sm:text-base">
            The goal of <span className="font-semibold">Operate &amp; Optimize</span> is
            simple: turn “we’ll deal with it later” cloud operations into a
            disciplined, calm practice — with clear alerting, cost visibility,
            and runbooks that anyone on the team can follow.
          </p>
        </div>
      </SectionFadeIn>

      {/* Role / Tech / Highlights */}
      <SectionFadeIn as="section" delay={0.1} className="mt-8">
        <div className="grid gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 shadow-lg dark:bg-slate-900/95 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Role
            </h2>
            <p className="mt-1 text-sm font-medium">
              Cloud Operations Lead · Cost Optimization Partner
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              AWS (CloudWatch, Budgets, Cost Explorer, GuardDuty), Terraform /
              IaC, Lambda, EventBridge, dashboards &amp; runbooks
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Cost guardrails · 24/7 monitoring patterns · Clear SLOs &amp;
              runbooks · Non-disruptive rollout
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-3">
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          Many teams land in AWS with a working product but no clear way to keep
          it healthy and affordable over time. In{" "}
          <span className="font-medium">Operate &amp; Optimize</span>, I work
          with stakeholders to put structure around day-to-day operations: what
          we watch, how we react, and how we keep costs from quietly creeping
          up.
        </p>
        <p className="section-body">
          Instead of hoping that CloudWatch alarms and invoices “look fine,” the
          environment gets a lightweight operating model: SLOs, dashboards,
          alerts, and regular reviews that keep leaders informed without pulling
          engineers into fire-drills.
        </p>
      </SectionFadeIn>

      {/* Operating model */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Operating model</h2>
        <p className="section-body">
          The operating model is built in small, safe steps so it can be adopted
          by busy teams:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Health baselining:</span> map key
            services, traffic patterns, and existing pain points (incidents,
            slow pages, noisy alerts).
          </li>
          <li>
            <span className="font-semibold">SLOs &amp; signals:</span> define a
            short list of availability and performance SLOs, then wire them into
            CloudWatch dashboards and alerts that actually mean something.
          </li>
          <li>
            <span className="font-semibold">Runbooks:</span> document “first
            response” checklists for typical issues (spikes, failed deploys,
            queue backlogs) so on-call engineers aren’t starting from zero.
          </li>
          <li>
            <span className="font-semibold">Weekly reviews:</span> short
            operations &amp; cost reviews to catch issues early and agree on
            small, continuous improvements.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Cost optimization */}
      <SectionFadeIn as="section" delay={0.22} className="mt-8 space-y-3">
        <h2 className="section-heading">Cost optimization approach</h2>
        <p className="section-body">
          Cost work is intentionally practical and low-drama. The goal is to
          fund product work, not to chase discounts for their own sake.
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Visibility first:</span> enable AWS
            Cost Explorer, Budgets, and simple reports per environment /
            product, so spend is no longer a mystery.
          </li>
          <li>
            <span className="font-semibold">Quick wins:</span> right-size
            instances, clean up unused resources, and tune storage / retention
            policies before talking about reservations or commitments.
          </li>
          <li>
            <span className="font-semibold">Guardrails:</span> budgets and
            alerts for “unexpected” growth, with a clear escalation path
            instead of last-minute invoice surprises.
          </li>
          <li>
            <span className="font-semibold">Sustainable patterns:</span>{" "}
            standardize a few patterns (for logging, metrics, backups,
            multi-AZ, etc.) so every new workload starts in a good shape.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn as="section" delay={0.26} className="mt-8 space-y-3">
        <h2 className="section-heading">Impact</h2>
        <p className="section-body">
          After the <span className="font-medium">Operate &amp; Optimize</span>{" "}
          engagement, teams typically:
        </p>
        <ul className="section-body space-y-2">
          <li>Have a clear picture of what “healthy” looks like in AWS.</li>
          <li>
            Receive fewer, higher-quality alerts — and know exactly what to do
            when they fire.
          </li>
          <li>
            Can explain cloud spend to finance and leadership with simple,
            trusted numbers.
          </li>
          <li>
            On-call engineers feel supported by dashboards, runbooks, and
            automation instead of “tribal knowledge.”
          </li>
        </ul>
        <p className="section-body">
          The result is a calmer, more transparent cloud environment where
          teams can focus on building — with the confidence that operations and
          cost will not become the next emergency.
        </p>
      </SectionFadeIn>
    </main>
  );
}
