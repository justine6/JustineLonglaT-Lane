import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "Operate & Optimize | Justine Longla T.",
  description:
    "A suite of operational automation and dashboards to reduce toil, control cloud costs, and give teams better production visibility.",
  openGraph: {
    title: "Operate & Optimize | Justine Longla T.",
    description:
      "Case study: turning scattered scripts and spreadsheets into a focused operations toolkit for cost, reliability, and insight.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/operate-and-optimize",
  },
};

export default function OperateAndOptimizePage() {
  return (
    <main className="page-shell">
      <SectionFadeIn as="div" delay={0.02} className="mb-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
        >
          <span className="text-base">←</span>
          <span>Back to projects</span>
        </Link>
      </SectionFadeIn>

      <SectionFadeIn as="header" delay={0.06} className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-cyan-900 shadow-sm dark:border-cyan-400/70 dark:bg-slate-900/70 dark:text-cyan-50 dark:shadow-[0_0_24px_rgba(34,211,238,0.55)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Cloud Ops · Cost Optimization · Dashboards
        </div>

        <h1 className="page-title">Operate &amp; Optimize</h1>

        <p className="page-subtitle max-w-3xl">
          An operations toolkit that cut manual toil, surfaced wasteful
          infrastructure, and gave leadership a single pane of glass for cloud
          health and spend.
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-cyan-800">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
            From spreadsheets to signals
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            Before this work, cost and reliability insights lived in ad-hoc
            scripts and one-off reports. Afterward, teams had a stable set of
            dashboards and automation they could build on.
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
              SRE / Platform Engineer · Cost &amp; Reliability
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              AWS, Prometheus/Grafana or CloudWatch, Cost Explorer, scripting
              (PowerShell, Python), GitHub Actions
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Weekly cost &amp; reliability reviews · Automated clean-up jobs ·
              Shared dashboards for product + engineering
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-3">
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          The platform had grown quickly. So had the bill and the number of
          dashboards. Teams lacked a shared view of{" "}
          <span className="font-semibold">what was healthy</span> and{" "}
          <span className="font-semibold">what was waste</span>.
        </p>
        <p className="section-body">
          We set out to design a small, opinionated set of tools and views:
          enough to drive the right conversations, not a forest of charts.
        </p>
      </SectionFadeIn>

      {/* Architecture */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Toolkit architecture</h2>
        <p className="section-body">
          We grouped the work into three pillars:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Cost</span>: tags, budgets, and
            scheduled reports filtered by owner and environment.
          </li>
          <li>
            <span className="font-semibold">Reliability</span>: SLO-style
            dashboards and alerting tuned to user experience, not just CPU.
          </li>
          <li>
            <span className="font-semibold">Toil reduction</span>: small
            automation jobs to stop repetitive tasks stealing engineer time.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Sample job */}
      <SectionFadeIn as="section" delay={0.22} className="mt-10 space-y-3">
        <h2 className="section-heading">Sample optimization job</h2>
        <p className="section-body">
          One simple but high-impact task was a nightly script that identified
          idle resources and opened tickets automatically. Conceptually, it
          looked like this:
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-slate-50 shadow-md dark:border-slate-800">
          <div className="border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300">
            Example clean-up flow
          </div>
          <pre className="overflow-x-auto p-4 text-xs text-slate-100">
            <code>
{String.raw`1. Pull EC2 / RDS / volumes with low CPU + no recent connections
2. Cross-check with tagging to find owner and environment
3. Create a ticket or chat message with a one-click "approve shutdown" link
4. After grace period, stop or downsize resources automatically`}
            </code>
          </pre>
        </div>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn as="section" delay={0.26} className="mt-10 space-y-3">
        <h2 className="section-heading">Impact</h2>
        <p className="section-body">
          Within a few cycles, the organisation had a regular{" "}
          <span className="font-semibold">“Operate &amp; Optimize” rhythm</span>:
          a short weekly review grounded in the same dashboards and automated
          summaries.
        </p>
        <p className="section-body">
          Toil dropped, surprise bills shrank, and teams could clearly explain
          how platform changes affected both reliability and spend.
        </p>
      </SectionFadeIn>
    </main>
  );
}
