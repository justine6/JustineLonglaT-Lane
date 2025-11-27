// app/projects/__template-case-study/page.tsx
// This file is a TEMPLATE. Next.js will not route it because of the __ prefix.
// Copy it into each project folder, rename the folder to your slug, and then
// customize metadata, hero, sections, and content.

import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";

export const metadata: Metadata = {
  title: "PROJECT TITLE | Justine Longla T. Consulting",
  description:
    "Short one-line summary of this engagement, tuned for LinkedIn / recruiters / clients.",
  openGraph: {
    title: "PROJECT TITLE | Justine Longla T. Consulting",
    description:
      "Case study: describe the business / technical outcome in one powerful sentence.",
    type: "article",
    url: "https://justinelonglat-lane.com/projects/your-slug-here",
  },
};

export default function ProjectTemplatePage() {
  return (
    <CaseStudyLayout
      backHref="/projects"
      backLabel="Back to projects"
      eyebrow="Category · Domain · Theme"
      title="Project Title Goes Here"
      subtitle="A concise 1–2 sentence summary that explains who this project served, what problem it solved, and what made your approach special."
      sections={[
        { id: "overview", label: "Overview" },
        { id: "context", label: "Context & goals" },
        { id: "architecture", label: "Architecture" },
        { id: "implementation", label: "Implementation details" },
        { id: "results", label: "Results & impact" },
      ]}
      hero={
        <>
          {/* Hero tag pill */}
          <SectionFadeIn as="div" delay={0.04}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/60 bg-slate-100/90 px-3 py-1 text-[0.7rem] font-medium text-blue-900 shadow-sm dark:border-blue-400/70 dark:bg-slate-900/70 dark:text-blue-50 dark:shadow-[0_0_24px_rgba(37,99,235,0.55)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Platform · DevSecOps · Cloud Automation
            </div>
          </SectionFadeIn>

          {/* Gradient hero band */}
          <SectionFadeIn as="div" delay={0.06}>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 px-6 py-7 text-slate-50 shadow-lg dark:border-slate-800/70 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-sky-800">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                Optional hero tagline
              </p>
              <p className="mt-3 max-w-2xl text-sm text-slate-100">
                One strong sentence that zooms in on the key value: what changed
                after this project? Fewer outages? Safer deployments? Faster
                releases?
              </p>
            </div>
          </SectionFadeIn>

          {/* Role / Stack / Highlights row */}
          <SectionFadeIn as="section" delay={0.08} className="mt-6">
            <div className="grid gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 shadow-lg dark:bg-slate-900/95 sm:grid-cols-3">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Role
                </h2>
                <p className="mt-1 text-sm font-medium">
                  e.g. Platform Architect · DevSecOps Engineer
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Tech Stack
                </h2>
                <p className="mt-1 text-sm">
                  AWS · Azure · Kubernetes · GitHub Actions · PowerShell ·
                  Terraform
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Highlights
                </h2>
                <p className="mt-1 text-sm">
                  50% faster releases · zero-sev launch · automated guardrails ·
                  observable platform
                </p>
              </div>
            </div>
          </SectionFadeIn>
        </>
      }
    >
      {/* OVERVIEW */}
      <SectionFadeIn
        as="section"
        id="overview"
        delay={0.12}
        className="mt-4 scroll-mt-28 space-y-3"
      >
        <h2 className="section-heading">Overview</h2>
        <p className="section-body">
          Use this section to introduce the project in simple language. What
          kind of system is this? Who uses it? Why does it exist?
        </p>
        <p className="section-body">
          Try to keep this to 2–3 short paragraphs so a recruiter or hiring
          manager can skim and immediately understand what you built.
        </p>
      </SectionFadeIn>

      {/* CONTEXT & GOALS */}
      <SectionFadeIn
        as="section"
        id="context"
        delay={0.16}
        className="mt-8 scroll-mt-28 space-y-3"
      >
        <h2 className="section-heading">Context & goals</h2>
        <p className="section-body">
          Explain the starting point. Were there outages? Manual processes?
          Confusing environments? Slow deployments? Lack of security controls?
        </p>
        <ul className="section-body list-disc space-y-2 pl-5">
          <li>Goal 1 — e.g. make deployments predictable and observable.</li>
          <li>Goal 2 — e.g. reduce manual work for engineers and operators.</li>
          <li>Goal 3 — e.g. improve security posture and compliance.</li>
        </ul>
      </SectionFadeIn>

      {/* ARCHITECTURE */}
      <SectionFadeIn
        as="section"
        id="architecture"
        delay={0.2}
        className="mt-8 scroll-mt-28 space-y-3"
      >
        <h2 className="section-heading">Architecture</h2>
        <p className="section-body">
          Give a high-level view of how the system is structured. Call out
          important components (pipelines, clusters, accounts, bots, etc.) and
          how they fit together.
        </p>
        <ul className="section-body list-disc space-y-2 pl-5">
          <li>Component 1 — e.g. multi-account AWS setup with landing zone.</li>
          <li>Component 2 — e.g. CI pipelines connected to container registry.</li>
          <li>
            Component 3 — e.g. observability stack (Prometheus, Grafana,
            CloudWatch, etc.).
          </li>
        </ul>
      </SectionFadeIn>

      {/* IMPLEMENTATION DETAILS */}
      <SectionFadeIn
        as="section"
        id="implementation"
        delay={0.24}
        className="mt-8 scroll-mt-28 space-y-3"
      >
        <h2 className="section-heading">Implementation details</h2>
        <p className="section-body">
          This is where you talk like an engineer. Mention specific patterns,
          tools, or tricks you used — but still keep it readable.
        </p>
        <ul className="section-body list-disc space-y-2 pl-5">
          <li>
            CI/CD — e.g. GitHub Actions workflows with environment-specific
            deploy jobs.
          </li>
          <li>
            Security — e.g. IAM roles, least-privilege policies, secret
            management.
          </li>
          <li>
            Reliability — e.g. health probes, autoscaling, rollout strategies,
            canary deploys.
          </li>
        </ul>
      </SectionFadeIn>

      {/* RESULTS & IMPACT */}
      <SectionFadeIn
        as="section"
        id="results"
        delay={0.28}
        className="mt-10 scroll-mt-28 space-y-3"
      >
        <h2 className="section-heading">Results & impact</h2>
        <p className="section-body">
          Close with outcomes. What improved? What did the team gain? How did
          this make life easier, safer, or faster?
        </p>
        <ul className="section-body list-disc space-y-2 pl-5">
          <li>e.g. Releases went from weekly to daily with fewer incidents.</li>
          <li>e.g. On-call noise dropped because signals became clearer.</li>
          <li>e.g. Compliance / audits became easier due to automation.</li>
        </ul>
      </SectionFadeIn>
    </CaseStudyLayout>
  );
}
