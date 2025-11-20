// app/projects/project-c/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardrails & Optimize: Reliability Automation Engine",
  description:
    "A cross-platform reliability automation engine improving system health, drift detection, and CI/CD guardrails.",
};

export default function ProjectCPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Automation • Reliability
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-100">
          Guardrails &amp; Optimize: Reliability Automation Engine
        </h1>
        <p className="text-sm text-slate-300/90">
          A cross-platform reliability automation engine improving system
          health, drift detection, and CI/CD guardrails.
        </p>
      </header>

      <section className="space-y-4 text-sm leading-relaxed text-slate-200/90">
        <p>
          This initiative focuses on building a reusable “reliability
          automation engine” that plugs into CI/CD pipelines, configuration
          management, and observability tools. The goal is to make guardrails
          automatic instead of relying on tribal knowledge or one-off scripts.
        </p>

        <p>
          The engine runs checks for configuration drift, unsafe rollout
          patterns, missing alerts, and other anti-patterns that typically
          surface only during incidents. By baking these checks into pipelines
          and scheduled scans, teams get rapid feedback before risky changes
          ever hit production.
        </p>

        <ul className="list-disc space-y-1 pl-5">
          <li>Drift detection across cloud resources and IaC definitions.</li>
          <li>
            CI/CD guardrails that block or warn on risky deployments (timeouts,
            missing alarms, unscoped permissions, etc.).
          </li>
          <li>
            Centralized reporting so engineering leaders see reliability health
            trends over time.
          </li>
        </ul>

        <p>
          Over time, this engine becomes a shared reliability layer for multiple
          platforms and services, giving teams a consistent way to enforce
          standards while still moving quickly.
        </p>
      </section>

      <div className="pt-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-200 dark:text-sky-300 dark:hover:text-sky-100"
        >
          <span className="text-base">←</span>
          <span>Back to projects</span>
        </Link>
      </div>
    </main>
  );
}
