// app/projects/engineering-mesh/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import getAllProjects, { type Project } from "@/lib/get-all-projects";

export const metadata: Metadata = {
  title: "The Justine Longla Engineering Mesh — Case Study",
  description:
    "A multi-site engineering ecosystem built with Next.js, static HTML, PowerShell automation, Vercel, GitHub Actions, and DNS orchestration.",
};

async function loadMeshProject(): Promise<Project | null> {
  const projects = await getAllProjects();

  const matchBySlug =
    projects.find((p) => p.slug === "engineering-mesh") ??
    projects.find((p) => p.slug.includes("engineering-mesh"));

  return matchBySlug ?? null;
}

export default async function EngineeringMeshPage() {
  const project = await loadMeshProject();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-16 md:px-6 md:pt-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-slate-400">
          <Link
            href="/projects"
            className="hover:text-slate-100 hover:underline underline-offset-4"
          >
            Projects
          </Link>
          <span className="mx-1">/</span>
          <span className="text-slate-200">Engineering Mesh</span>
        </nav>

        {/* Hero */}
        <header className="mb-10 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300/90">
            Case Study · Platform Architecture
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            The Justine Longla Engineering Mesh
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-200/90 md:text-base">
            A production-ready, four-site ecosystem that connects my consulting,
            documentation, blog, and project platforms into one resilient mesh —
            powered by Next.js, static HTML, PowerShell automation, Vercel, and
            GitHub Actions. Designed to ship fast, recover gracefully, and tell a
            clear story.
          </p>

          {/* Meta row */}
          {project && (
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              {project.updatedAt && (
                <span className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-1">
                  Updated {project.updatedAt}
                </span>
              )}

              {Array.isArray((project as any).tags) &&
                (project as any).tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 capitalize"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          )}
        </header>

        {/* Video explainer */}
        <section className="mb-12">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px]">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-black/60 shadow-2xl shadow-black/70">
                <video
                  src="/videos/justine_longla_vertical_titled.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-center text-slate-400">
                Short vertical explainer — the Justine Longla Engineering Mesh in
                motion.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture diagram */}
        <section className="mb-12">
          <h2 className="mb-3 text-lg font-semibold text-slate-100">
            Architecture at a Glance
          </h2>
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-black/40 p-3">
            <Image
              src="/engineering-mesh-diagram.png"
              alt="Diagram of the Justine Longla Engineering Mesh"
              width={1600}
              height={1000}
              className="rounded-xl object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-slate-300">
            IONOS DNS fans out traffic to multiple surfaces — consulting, docs,
            blog, and projects — all backed by Vercel and GitHub Pages, with
            GitHub Actions and PowerShell providing the automation backbone.
          </p>
        </section>

        {/* Context */}
        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-semibold text-slate-100">
            Context & Motivation
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            This ecosystem started as “just a dev blog”. Very quickly, it became
            clear that I needed separate surfaces for different jobs: a consulting
            presence, a documentation hub, a blog engine, and a project portfolio.
            Instead of one monolith doing everything poorly, I designed a mesh of
            focused sites with a shared automation backbone.
          </p>
        </section>

        {/* Sites & Responsibilities */}
        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-base font-semibold text-slate-100">
              Sites & Responsibilities
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <strong className="text-slate-100">
                  consulting.justinelonglat-lane.com
                </strong>{" "}
                — main consulting presence, intro calls, offers, and narrative.
              </li>
              <li>
                <strong className="text-slate-100">
                  docs.justinelonglat-lane.com
                </strong>{" "}
                — static HTML docs with near-zero runtime dependencies.
              </li>
              <li>
                <strong className="text-slate-100">
                  blogs.justinelonglat-lane.com
                </strong>{" "}
                — handcrafted blog engine with PowerShell content pipelines.
              </li>
              <li>
                <strong className="text-slate-100">
                  projects.justinelonglat-lane.com
                </strong>{" "}
                — this portfolio of case studies and automation work.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-base font-semibold text-slate-100">
              Shared Backbone
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>PowerShell scripts to add posts, validate metadata, cut releases.</li>
              <li>GitHub Actions for CI/CD, preview builds, and tagged production releases.</li>
              <li>IONOS DNS routing with clean subdomain boundaries.</li>
              <li>Vercel deployments tuned for static + hybrid Next.js workloads.</li>
              <li>Resend + storage integrations where messaging or assets are needed.</li>
            </ul>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-10 space-y-3">
          <h2 className="text-lg font-semibold text-slate-100">
            Outcomes & What This Demonstrates
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              • Ability to design and operate a <strong>multi-surface platform</strong>.
            </li>
            <li>
              • Comfortable across <strong>Next.js, static HTML, CI/CD, DNS, automation</strong>.
            </li>
            <li>
              • Builds <strong>reproducible scripts</strong> instead of one-offs.
            </li>
            <li>
              • Designs pipelines with <strong>observability, safety, and rollback</strong>.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-8 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-300">
            If you're modernizing a platform and need someone who can own the story from
            architecture to automation to documentation, this mesh is a great example of
            how I like to work — intentional, reliable, and deeply human.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://consulting.justinelonglat-lane.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/40 hover:bg-blue-700"
            >
              Visit consulting site
            </a>
            <Link
              href="/projects"
              className="text-sm font-medium text-blue-300 underline-offset-4 hover:text-blue-200 hover:underline"
            >
              Back to all projects
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
