// app/projects/project-c/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "System Design: Jutellane Ecosystem — Project C",
  description:
    "System-design case study on unifying the Jutellane main hub, blog engine, and documentation site into one cohesive multi-site platform with shared branding and predictable CI/CD pipelines.",
};

export default function ProjectCPage() {
  return (
    <main className="page-shell pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-5xl pt-12 space-y-6">
        <Link
          href="/projects"
          className="text-xs font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
        >
          ← Back to projects
        </Link>

        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Project C · System Design · Multi-Site Architecture
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
          System Design: Jutellane Ecosystem
        </h1>

        <p className="text-base text-slate-700 dark:text-slate-200 max-w-3xl">
          How I unified the Jutellane main hub, blog engine, and documentation site
          into a consistent, reliable multi-site ecosystem — with shared branding,
          predictable routing, and independent CI/CD pipelines.
        </p>

        {/* Role / stack / highlights */}
        <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-sm dark:border-slate-700 dark:bg-slate-900/60 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Role
            </h2>
            <p className="mt-2 font-medium text-slate-900 dark:text-slate-50">
              Platform Architect · DevSecOps Engineer
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Tech stack
            </h2>
            <p className="mt-2 text-slate-700 dark:text-slate-200">
              Next.js · GitHub Pages · Vercel · GitHub Actions · DNS/IONOS ·
              CI/CD Pipelines · Versioned Assets · Branding Systems
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Highlights
            </h2>
            <p className="mt-2 text-slate-700 dark:text-slate-200">
              Multi-repo platform · Consistent dark/light themes · Reliable subdomains ·
              Unified UX · Independent deployments · Predictable routing · Shared design system
            </p>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="mx-auto mt-10 max-w-5xl space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-200">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Overview
          </h2>
          <p>
            As the Jutellane ecosystem grew — the main site, documentation, custom blog
            engine, and multiple subdomains — branding inconsistencies appeared.
            Gradients, images, buttons, routing, and deployment behaviour drifted across repos.
          </p>
          <p>
            Instead of patching symptoms, I redesigned the setup as a distributed system:
            stable interfaces, predictable pipelines, versioned assets, and clear boundaries
            between repos.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            The problem
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Headers and gradients differed across sites.</li>
            <li>Blog and docs used different routing patterns and assets.</li>
            <li>Buttons and navigation drifted between versions.</li>
            <li>DNS conflicts surfaced when adding new subdomains.</li>
            <li>Different deployment pipelines created inconsistent behaviours.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            The solution
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Unified the architecture around a shared **design vocabulary**, component
              system, and routing conventions.
            </li>
            <li>
              Adopted a shared design system for colours, spacing, UI, and typography
              across the main hub, docs, and blog.
            </li>
            <li>
              Normalised routing across repos, with predictable URLs for projects,
              posts, and documentation.
            </li>
            <li>
              Standardised CI/CD pipelines so each repo deployed independently but
              followed the same guardrails.
            </li>
            <li>
              Introduced clear ownership: main site, docs, and blogs each had
              dedicated pipelines, assets, and release rhythms.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Outcomes
          </h2>
          <p>
            The Jutellane ecosystem now behaves like a single platform instead of a
            collection of unrelated sites. Branding stays consistent, deployments are
            predictable, and new subdomains can be added without breaking DNS, themes,
            or routing. It&apos;s the foundation I use for every new Jutellane surface
            going forward.
          </p>
        </div>
      </section>
    </main>
  );
}
