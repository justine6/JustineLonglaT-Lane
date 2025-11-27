// app/projects/operate-and-optimize/page.tsx
import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "System Design: JustineLonglaT-Lane Ecosystem (Operate & Optimize)",
  description:
    "Part C of the JustineLonglaT-Lane ecosystem story — operating a multi-site, multi-repo platform with observability, guardrails, and cost-aware optimization.",
  openGraph: {
    title: "System Design: JustineLonglaT-Lane Ecosystem (Operate & Optimize)",
    description:
      "How the JustineLonglaT-Lane platform is run day-to-day: SLOs, dashboards, incident habits, and cost optimization across a multi-site, automation-heavy ecosystem.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/operate-and-optimize",
  },
};

export default function OperateAndOptimizePage() {
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

      {/* Tag pill row */}
      <SectionFadeIn as="div" delay={0.05} className="mb-3">
        <div className="inline-flex flex-wrap items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800 dark:bg-sky-900/60 dark:text-sky-100">
            Platform · Operations
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-100">
            Reliability · SLOs
          </span>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-100">
            Cost & Optimization
          </span>
        </div>
      </SectionFadeIn>

      {/* Hero */}
      <SectionFadeIn as="header" delay={0.08} className="space-y-5">
        <h1 className="page-title">
          System Design: JustineLonglaT-Lane Ecosystem (Operate &amp; Optimize)
        </h1>

        <p className="page-subtitle max-w-3xl">
          Part C of the ecosystem story focuses on what happens{" "}
          <span className="font-semibold">after</span> the architecture is
          shipped and deployments are flowing: how the platform is actually
          operated, observed, and tuned so it stays fast, predictable, and
          cost-aware as new projects join the mesh.
        </p>

        {/* Gradient hero card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-emerald-800">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
            From launches to living systems
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            With the multi-site platform in production, the goal shifted from
            “getting live” to{" "}
            <span className="font-semibold">
              keeping the ecosystem healthy and affordable
            </span>
            : clear SLOs, opinionated dashboards, predictable incident habits,
            and cost feedback loops baked into everyday work.
          </p>
        </div>
      </SectionFadeIn>

      {/* Role / Stack / Highlights band */}
      <SectionFadeIn as="section" delay={0.12} className="mt-8">
        <div className="grid gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 shadow-lg dark:bg-slate-900/95 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Role
            </h2>
            <p className="mt-1 text-sm font-medium">
              DevSecOps Engineer · Platform Operations Lead
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              Next.js, Vercel, GitHub Actions, GitHub Pages, Resend, Cloud
              logging & metrics, DNS / IONOS, status checks & health probes
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              SLO-driven dashboards · Cost & cache tuning · Incident rituals ·
              Guardrails that keep multi-site changes safe
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Two-column layout: section nav + content */}
      <SectionFadeIn
        as="section"
        delay={0.16}
        className="mt-10 grid gap-10 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)]"
      >
        {/* Left rail – sections */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Sections
            </h2>
            <nav className="mt-3 space-y-2 text-sm">
              <a href="#overview" className="block rounded-lg bg-slate-900 px-3 py-2 text-slate-50 text-xs font-medium dark:bg-slate-800">
                Overview
              </a>
              <a
                href="#operating-model"
                className="block rounded-lg px-3 py-2 text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                Operating model & runbook habits
              </a>
              <a
                href="#observability"
                className="block rounded-lg px-3 py-2 text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                Observability & SLOs
              </a>
              <a
                href="#cost"
                className="block rounded-lg px-3 py-2 text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                Cost, performance & caching
              </a>
              <a
                href="#guardrails"
                className="block rounded-lg px-3 py-2 text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                Guardrails in practice
              </a>
              <a
                href="#lessons"
                className="block rounded-lg px-3 py-2 text-xs text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                Lessons learned
              </a>
            </nav>
          </div>

          <div className="rounded-2xl border border-dashed border-emerald-300/70 bg-emerald-50/60 px-4 py-4 text-xs text-emerald-900 shadow-sm dark:border-emerald-500/60 dark:bg-emerald-900/20 dark:text-emerald-50">
            <p className="font-semibold uppercase tracking-[0.16em]">
              Part of a trilogy
            </p>
            <p className="mt-2">
              This is <span className="font-semibold">Part C</span> of the
              System Design series:
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Part A – Architecture foundations</li>
              <li>• Part B – Execution & roll-out</li>
              <li>• Part C – Operate & optimize (this page)</li>
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="space-y-10">
          {/* Overview */}
          <section id="overview" className="space-y-3">
            <h2 className="section-heading">Overview</h2>
            <p className="section-body">
              By the time this phase started, the JustineLonglaT-Lane ecosystem
              was already live: marketing site, blogs, docs, Nouvo Ayiti 2075,
              and shared automation all flowing through a set of repeatable
              pipelines. The challenge was no longer “How do we ship?” but{" "}
              <span className="font-semibold">
                “How do we keep everything healthy as the ecosystem grows?”
              </span>
            </p>
            <p className="section-body">
              This case study captures the operating model that emerged:
              lightweight SLOs instead of vague uptime promises, a small set of
              shared dashboards, and opinionated guardrails so that every new
              enhancement reinforces reliability instead of fighting it.
            </p>
          </section>

          {/* Operating model */}
          <section id="operating-model" className="space-y-3">
            <h2 className="section-heading">
              Operating model & runbook habits
            </h2>
            <p className="section-body">
              Rather than a heavy NOC or ticket queue, the platform runs on{" "}
              <span className="font-semibold">simple, explicit habits</span>:
            </p>
            <ul className="section-body space-y-2">
              <li>
                <span className="font-semibold">Single source of truth</span>:
                each site has a “health section” in the README describing
                dependencies, health checks, and where to look when something
                feels off.
              </li>
              <li>
                <span className="font-semibold">Change log discipline</span>:
                every meaningful change carries a short note in the changelog
                that links back to the repo, PR, or automation script driving
                it.
              </li>
              <li>
                <span className="font-semibold">Release habits</span>: releases
                are small and frequent, with pipelines doing the heavy lifting —
                manual steps are treated as temporary debt to be automated away.
              </li>
              <li>
                <span className="font-semibold">Post-incident notes</span>:
                instead of long reports, quick bullet-point notes capture what
                failed, how it was fixed, and what guardrail should prevent it
                next time.
              </li>
            </ul>
          </section>

          {/* Observability */}
          <section id="observability" className="space-y-3">
            <h2 className="section-heading">Observability & SLOs</h2>
            <p className="section-body">
              Observability was designed to be{" "}
              <span className="font-semibold">approachable</span> rather than
              overwhelming. The goal: anyone who owns a feature should be able
              to understand its health without becoming a monitoring expert.
            </p>
            <ul className="section-body space-y-2">
              <li>
                <span className="font-semibold">Golden signals</span>:
                availability of the main routes, latency of key pages, and
                deploy status are treated as the “golden three” metrics.
              </li>
              <li>
                <span className="font-semibold">Dashboards over raw logs</span>:
                platform-level dashboards pull together deploy events, errors,
                and performance into a narrative, reducing the need to dig
                through raw logs for every question.
              </li>
              <li>
                <span className="font-semibold">Lightweight SLOs</span>:
                instead of strict 99.9 targets, the ecosystem uses simple rules
                like “no more than N failing deploys per week” and “primary
                pages should stay comfortably below X ms.”
              </li>
            </ul>
          </section>

          {/* Cost & performance */}
          <section id="cost" className="space-y-3">
            <h2 className="section-heading">Cost, performance & caching</h2>
            <p className="section-body">
              As more sites and experiments went live, cost and performance
              became another axis of reliability. The platform leans on{" "}
              <span className="font-semibold">static generation, caching, and
              targeted tuning</span> instead of oversized infrastructure.
            </p>
            <ul className="section-body space-y-2">
              <li>
                <span className="font-semibold">Static where possible</span>:
                marketing pages, blog posts, and docs default to static
                generation with incremental rebuilds, pushing most workloads to
                the CDN.
              </li>
              <li>
                <span className="font-semibold">Targeted caching</span>:
                API-driven sections (like booking or contact flows) use
                carefully chosen cache headers so that bursts of traffic don’t
                translate into sudden cost spikes.
              </li>
              <li>
                <span className="font-semibold">Performance feedback loop</span>
                : slow routes or heavy components are noted directly in the
                backlog, turning “this feels slow” into clear, actionable
                engineering work.
              </li>
            </ul>
          </section>

          {/* Guardrails */}
          <section id="guardrails" className="space-y-3">
            <h2 className="section-heading">Guardrails in practice</h2>
            <p className="section-body">
              The ecosystem borrows the same philosophy used in the Lambda
              rescue work:{" "}
              <span className="font-semibold">
                make the safe path the easiest path
              </span>
              . A few examples:
            </p>
            <ul className="section-body space-y-2">
              <li>
                <span className="font-semibold">Shared pipeline templates</span>{" "}
                ensure that new repos inherit proven steps: linting, tests, and
                deploy gating instead of bespoke YAML in every project.
              </li>
              <li>
                <span className="font-semibold">DNS & routing conventions</span>{" "}
                reduce the chance of mis-routing traffic when new subdomains or
                preview environments are introduced.
              </li>
              <li>
                <span className="font-semibold">Production toggles</span>:
                environment variables and feature flags are used instead of ad-hoc
                code branches, so risky behavior can be dialed down without a
                full redeploy.
              </li>
            </ul>
          </section>

          {/* Lessons learned */}
          <section id="lessons" className="space-y-3">
            <h2 className="section-heading">Lessons learned</h2>
            <p className="section-body">
              This phase reinforced a key lesson from both cloud operations and
              DevSecOps:{" "}
              <span className="font-semibold">
                architecture isn’t “done” when the diagram is finished
              </span>
              . It becomes real when the operating model, dashboards, and
              guardrails are in place.
            </p>
            <ul className="section-body space-y-2">
              <li>
                Reliability improves fastest when incidents are treated as
                design feedback, not personal failure.
              </li>
              <li>
                A small set of clear metrics beats a sprawling monitoring setup
                that no one has time to read.
              </li>
              <li>
                Multi-site platforms stay healthy when every new project plugs
                into a shared ecosystem of pipelines, DNS patterns, and
                runbooks.
              </li>
            </ul>
            <p className="section-body">
              Together with Parts A and B, this case study forms a{" "}
              <span className="font-semibold">complete story arc</span>: from
              architecture, to execution, to everyday operations — the exact
              journey behind the JustineLonglaT-Lane platform.
            </p>
          </section>
        </div>
      </SectionFadeIn>
    </main>
  );
}
