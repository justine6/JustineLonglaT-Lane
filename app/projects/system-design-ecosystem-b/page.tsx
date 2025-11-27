// app/projects/system-design-ecosystem-b/page.tsx
import Link from "next/link";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata = {
  title: "System Design: JustineLonglaT-Lane Ecosystem (Execution) | Justine Longla T.",
  description:
    "Execution story of how the JustineLonglaT-Lane ecosystem was rolled out in stages: repos, pipelines, DNS, migrations, and guardrails that turned the architecture into a living platform.",
  openGraph: {
    title: "System Design: JustineLonglaT-Lane Ecosystem (Execution)",
    description:
      "From scattered experiments to a disciplined, multi-site platform with reproducible builds, clean routing, and room to grow.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/system-design-ecosystem-b",
  },
};

export default function SystemDesignEcosystemBPage() {
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

      {/* Topic pill */}
      <SectionFadeIn as="div" delay={0.05} className="mb-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-50 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-emerald-900 shadow-sm dark:border-emerald-400/70 dark:bg-slate-900/70 dark:text-emerald-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Platform • Execution • Multi-Site
        </div>
      </SectionFadeIn>

      {/* Hero */}
      <SectionFadeIn as="header" delay={0.08} className="space-y-5">
        <h1 className="page-title">
          System Design: JustineLonglaT-Lane Ecosystem (Execution)
        </h1>

        <p className="page-subtitle max-w-3xl">
          How the JustineLonglaT-Lane ecosystem moved from architecture on
          paper to a living, multi-site platform — with repos, pipelines, DNS,
          and migrations that ship the brand with confidence.
        </p>

        {/* Gradient hero band */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-700 px-6 py-8 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-emerald-800">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
            From diagram to dependable platform
          </p>
          <p className="mt-3 max-w-2xl text-sm text-slate-100">
            Part A defined the platform architecture. Part B is the build log:
            how repositories, CI/CD, DNS, and migrations were sequenced so the
            ecosystem could grow without breaking under its own weight.
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
              DevSecOps Engineer · Platform Execution Lead
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Tech Stack
            </h2>
            <p className="mt-1 text-sm">
              Next.js, Vercel, GitHub Actions, GitHub Pages, PowerShell, DNS /
              IONOS, Resend
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Highlights
            </h2>
            <p className="mt-1 text-sm">
              Multi-site routing · Independent deploys · Repeatable releases ·
              Safe migrations
            </p>
          </div>
        </div>
      </SectionFadeIn>

      {/* Layout with section nav + content */}
      <SectionFadeIn
        as="section"
        delay={0.16}
        className="mt-10 grid gap-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)]"
      >
        {/* Sidebar section nav */}
        <nav className="md:border-r md:border-slate-200 md:pr-6 dark:md:border-slate-800">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Sections
          </p>
          <div className="flex flex-row gap-2 overflow-x-auto md:flex-col md:gap-1">
            <a
              href="#overview"
              className="section-nav-item section-nav-item--active"
            >
              Overview
            </a>
            <a href="#rollout" className="section-nav-item">
              Rollout plan
            </a>
            <a href="#pipelines" className="section-nav-item">
              Repos &amp; pipelines
            </a>
            <a href="#routing" className="section-nav-item">
              Routing &amp; DNS
            </a>
            <a href="#lessons" className="section-nav-item">
              Lessons learned
            </a>
          </div>
        </nav>

        {/* Main content */}
        <div className="space-y-10">
          {/* Overview */}
          <section id="overview" className="scroll-mt-28 space-y-3">
            <h2 className="section-heading">Overview</h2>
            <p className="section-body">
              This phase was about **execution**: turning the architecture from
              Part A into a working, multi-site platform that could support the
              consulting hub, blogs, docs, and Nouvo Ayiti 2075 without turning
              deployments into a gamble.
            </p>
            <p className="section-body">
              Instead of “one big repo with everything inside,” the ecosystem
              was rolled out as a constellation of focused projects, each with
              its own lifecycle but aligned through a shared set of scripts,
              conventions, and guardrails.
            </p>
          </section>

          {/* Rollout plan */}
          <section id="rollout" className="scroll-mt-28 space-y-3">
            <h2 className="section-heading">Execution &amp; rollout plan</h2>
            <p className="section-body">
              To avoid breaking the public brand, the work followed a deliberate
              sequence:
            </p>
            <ol className="section-body list-decimal space-y-2 pl-5">
              <li>
                **Stabilise local development** – standardise Node versions,
                scripts, and environment files so every project could be cloned
                and run the same way.
              </li>
              <li>
                **Stand up separate projects** – create dedicated projects for
                the main site, blog, and docs with minimal but working content.
              </li>
              <li>
                **Introduce release tagging** – tag meaningful milestones
                (<code>v1.x</code>, <code>v2.0.0</code>) so the ecosystem itself
                became a portfolio artifact.
              </li>
              <li>
                **Schedule safe migrations** – only then move domains, DNS, and
                redirects in carefully monitored steps.
              </li>
            </ol>
          </section>

          {/* Repos & pipelines */}
          <section id="pipelines" className="scroll-mt-28 space-y-3">
            <h2 className="section-heading">Repositories &amp; pipelines</h2>
            <p className="section-body">
              A key decision was to treat each surface as a **first-class
              project**, not just a folder:
            </p>
            <ul className="section-body space-y-2">
              <li>
                **Main consulting site** – Next.js on Vercel, with PowerShell
                helpers for lint, type-check, and build.
              </li>
              <li>
                **Blog site** – static posts generated from Markdown/HTML with
                an index generator script and GitHub Pages/Vercel hosting.
              </li>
              <li>
                **Docs site** – an independent repo tuned for long-form
                documentation and technical playbooks.
              </li>
              <li>
                **Nouvo Ayiti 2075** – its own repo, with multilingual support
                and a different publishing cadence.
              </li>
            </ul>
            <p className="section-body">
              Each repo ships through its own pipeline but follows the same
              pattern: **pull request checks, preview deployment, manual review,
              then production promotion**. This keeps the platform consistent
              without forcing every site into a single monolith.
            </p>
          </section>

          {/* Routing & DNS */}
          <section id="routing" className="scroll-mt-28 space-y-3">
            <h2 className="section-heading">Routing, DNS &amp; migrations</h2>
            <p className="section-body">
              The most delicate step was aligning URLs with the new architecture
              without breaking existing links.
            </p>
            <ul className="section-body space-y-2">
              <li>
                **DNS first-class** – subdomains were mapped intentionally:
                main brand, blogs, docs, and Nouvo Ayiti 2075 each received a
                clear home.
              </li>
              <li>
                **Gradual cut-over** – DNS changes were performed in small
                steps, with temporary redirects keeping old links alive while
                the new routes settled.
              </li>
              <li>
                **SEO-aware routing** – important paths like{" "}
                <code>/projects</code>, <code>/join</code>, and brochure links
                were preserved or redirected to avoid regressions.
              </li>
            </ul>
            <p className="section-body">
              The result is routing that feels simple to visitors, even though
              it spans several independent deployments behind the scenes.
            </p>
          </section>

          {/* Lessons */}
          <section id="lessons" className="scroll-mt-28 space-y-3">
            <h2 className="section-heading">Lessons learned</h2>
            <p className="section-body">
              Executing the ecosystem taught a few durable lessons:
            </p>
            <ul className="section-body space-y-2">
              <li>
                **Architecture earns its keep in execution** – diagrams are
                useful, but the real value appears when migrations, pipelines,
                and DNS all line up in production.
              </li>
              <li>
                **Independent projects, shared discipline** – giving each site
                its own repo and pipeline keeps complexity contained, as long as
                the surrounding conventions are strong.
              </li>
              <li>
                **Document the journey** – tags, changelogs, and case studies
                turn the platform itself into a live portfolio of engineering
                practice.
              </li>
            </ul>
            <p className="section-body">
              Together with Part A, this execution story shows how a solo
              engineer can build and operate a small but serious **platform**
              around their work — one that’s ready to host future tools, courses,
              and initiatives on top of the current ecosystem.
            </p>
          </section>
        </div>
      </SectionFadeIn>
    </main>
  );
}
