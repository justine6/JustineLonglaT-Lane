import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "System Design: Justine Longla T. Ecosystem (A) | Justine Longla T.",
  description:
    "How the Justine Longla T. main hub, blog engine, and documentation site were unified into a consistent, reliable multi-site ecosystem.",
  openGraph: {
    title: "System Design: Justine Longla T. Ecosystem (A) | Justine Longla T.",
    description:
      "Case study: turning scattered sites into a stable, observable multi-site system powered by CI/CD and shared branding.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/system-design-ecosystem-a",
  },
};

export default function SystemDesignEcosystemA() {
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
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-indigo-900 shadow-sm dark:border-indigo-400/70 dark:bg-slate-900/70 dark:text-indigo-50 dark:shadow-[0_0_24px_rgba(129,140,248,0.55)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          System Design · Multi-Site Architecture
        </div>

        <h1 className="page-title">
          System Design: Justine Longla T. Ecosystem
        </h1>

        <p className="page-subtitle max-w-3xl">
          How I unified the Justine Longla T. main hub, blog engine, and
          documentation site into a consistent, reliable multi-site ecosystem —
          with shared branding, predictable routing, and independent CI/CD
          pipelines.
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-indigo-800">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-200">
            One ecosystem, many sites
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            Instead of patching symptoms, I redesigned the setup as a distributed
            system: stable interfaces, predictable pipelines, and clear
            boundaries between marketing, content, and documentation.
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
              Platform Architect · DevSecOps Engineer
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              Next.js, GitHub Pages, Vercel, GitHub Actions, DNS/IONOS, CI/CD
              pipelines, versioned assets, branding system
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Multi-repo platform · Consistent dark/light themes · Reliable
              subdomains · Unified UX · Independent deployments
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Overview */}
      <SectionFadeIn as="section" delay={0.14} className="mt-10 space-y-3">
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          As the ecosystem grew — the main site, documentation, custom blog
          engine, and multiple subdomains — branding inconsistencies appeared.
          Gradients, images, buttons, routing, and deployment behaviour drifted
          across repos.
        </p>
        <p className="section-body">
          The solution was to treat the sites as{" "}
          <span className="font-semibold">services in a platform</span>, not
          isolated experiments: shared patterns, clear contracts, and
          automation.
        </p>
      </SectionFadeIn>

      {/* Architecture */}
      <SectionFadeIn as="section" delay={0.18} className="mt-8 space-y-3">
        <h2 className="section-heading">Architecture</h2>
        <p className="section-body">
          At a high level, the ecosystem now looks like this:
        </p>
        <ul className="section-body space-y-2">
          <li>
            <span className="font-semibold">Main marketing site</span> on
            Vercel, owning first impressions, intro calls, and core offers.
          </li>
          <li>
            <span className="font-semibold">Blog engine</span> on GitHub Pages +
            Vercel, with custom templates and a content pipeline.
          </li>
          <li>
            <span className="font-semibold">Docs hub</span> as a static site
            focused purely on technical walkthroughs and reference material.
          </li>
          <li>
            <span className="font-semibold">Shared assets &amp; brand</span>:
            logo, gradient system, component behaviours, and typography agreed
            once and re-used everywhere.
          </li>
        </ul>
      </SectionFadeIn>

      {/* Impact */}
      <SectionFadeIn as="section" delay={0.26} className="mt-10 space-y-3">
        <h2 className="section-heading">Impact</h2>
        <p className="section-body">
          Visitors now experience the ecosystem as{" "}
          <span className="font-semibold">one coherent brand</span>, regardless
          of which domain they land on. Behind the scenes, each site keeps its
          own CI/CD pipeline and release cadence, so changes stay safe and
          traceable.
        </p>
      </SectionFadeIn>
    </main>
  );
}
