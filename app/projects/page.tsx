// app/projects/page.tsx
import getAllProjects, { type Project } from "@/lib/get-all-projects";

import SmallProjectCard from "@/components/SmallProjectCard";
import SortableProjectsGrid from "@/components/SortableProjectsGrid";

import EngineeringMeshCardSmall from "@/components/EngineeringMeshCardSmall";

function sortProjects(a: Project, b: Project) {
  const aHighlight = Boolean(a.pinned || a.featured);
  const bHighlight = Boolean(b.pinned || b.featured);

  // Featured/pinned projects always come first
  if (aHighlight && !bHighlight) return -1;
  if (!aHighlight && bHighlight) return 1;

  // Sort newest → oldest using updatedAt
  if (a.updatedAt && b.updatedAt && a.updatedAt !== b.updatedAt) {
    return a.updatedAt < b.updatedAt ? 1 : -1;
  }

  // Fallback alphabetical
  return a.title.localeCompare(b.title);
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const sorted = [...projects].sort(sortProjects);

  const pinned = sorted.filter((p) => p.pinned || p.featured);
  const others = sorted.filter((p) => !p.pinned && !p.featured);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:px-6 md:pt-20">

        {/* Hero */}
        <header className="mb-10 space-y-3 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300/90">
            Projects &amp; Case Studies
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            A focused set of automation and reliability projects.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-200/90 md:text-base">
            Real-world engagements covering CI/CD helpers, migration tooling,
            proactive Teams bots, platform architecture, DevSecOps practices,
            and cost-aware, observable cloud platforms.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-300/90">
            <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
              {projects.length} total projects
            </span>

            <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
              {pinned.length} pinned / featured
            </span>
          </div>
        </header>

        {/* The small Engineering Mesh Card */}
        <section className="py-12 sm:py-16">
          <EngineeringMeshCardSmall projects={sorted} />
        </section>

        {/* Featured section */}
        {pinned.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-4 text-lg font-semibold text-slate-100">
              Featured Projects
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pinned.map((project) => (
                <SmallProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Sortable grid */}
        <SortableProjectsGrid
          projects={others}
          heading="All Projects"
        />
      </section>
    </main>
  );
}
