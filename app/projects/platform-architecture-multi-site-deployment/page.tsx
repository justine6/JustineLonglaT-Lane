import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title:
    "Platform Architecture & Multi-Site Deployment | Justine Longla T.",
  description:
    "A deeper look at the platform architecture and CI/CD pipelines that keep the Justine Longla T. multi-site ecosystem reliable.",
  openGraph: {
    title:
      "Platform Architecture & Multi-Site Deployment | Justine Longla T.",
    description:
      "Case study: designing CI/CD, routing, and asset strategies for a portfolio of related sites.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/platform-architecture-multi-site-deployment",
  },
};

export default function PlatformArchitecturePage() {
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
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-sky-900 shadow-sm dark:border-sky-400/70 dark:bg-slate-900/70 dark:text-sky-50 dark:shadow-[0_0_24px_rgba(56,189,248,0.55)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Platform Architecture · CI/CD · Routing
        </div>

        <h1 className="page-title">
          Platform Architecture &amp; Multi-Site Deployment
        </h1>

        <p className="page-subtitle max-w-3xl">
          Building the Justine Longla T. engineering ecosystem as a resilient,
          observable, and automation-friendly platform — not just a collection
          of separate sites.
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-sky-800">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
            Pipelines as the backbone
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            Each site has its own pipeline, but they share conventions for
            testing, assets, and release tagging — making changes safe to roll
            out and easy to roll back.
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
              Platform Engineer · System Designer
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              GitHub Actions, Vercel, GitHub Pages, PowerShell automation,
              release tagging, environment-specific configs
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Independent releases · Consistent routing · Versioned brochure and
              assets · Automated backups
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-3">
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          After the initial ecosystem redesign, the next step was to harden the
          underlying platform: how sites build, where assets live, and how we
          manage failures and rollbacks.
        </p>
        <p className="section-body">
          The goal was a platform that feels{" "}
          <span className="font-semibold">simple on the surface</span> — click
          “deploy” and trust it — but hides strong engineering foundations
          underneath.
        </p>
      </SectionFadeIn>

      {/* Architecture */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Deployment architecture</h2>
        <p className="section-body">
          Core ideas:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Per-site pipelines</span> with
            shared templates (lint, test, build, deploy).
          </li>
          <li>
            <span className="font-semibold">Release tagging</span> so every
            major change to branding or copy has a traceable version.
          </li>
          <li>
            <span className="font-semibold">Static assets</span> (hero images,
            brochure PDFs) published once and referenced across sites via
            predictable paths.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn as="section" delay={0.26} className="mt-10 space-y-3">
        <h2 className="section-heading">Impact</h2>
        <p className="section-body">
          Multi-site releases now feel deliberate instead of risky. If a change
          misbehaves, it is easy to roll back to a known tag. New microsites can
          plug into the same patterns without reinventing CI/CD or routing.
        </p>
      </SectionFadeIn>
    </main>
  );
}
