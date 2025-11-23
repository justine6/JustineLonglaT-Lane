// app/projects/page.tsx
import ProjectsCard from "@/components/ProjectsCard";
import getAllProjects, { type Project } from "@/lib/get-all-projects";

function sortProjects(a: Project, b: Project) {
  const aHighlight = Boolean(a.pinned || a.featured);
  const bHighlight = Boolean(b.pinned || b.featured);

  if (aHighlight && !bHighlight) return -1;
  if (!aHighlight && bHighlight) return 1;

  // Newest first if dates exist
  if (a.date && b.date && a.date !== b.date) {
    return a.date < b.date ? 1 : -1;
  }

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
        {/* Hero copy */}
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

        {/* Pinned / Featured row */}
        {pinned.length > 0 && (
          <section className="mb-10 md:mb-12">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-glow" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Pinned &amp; Featured
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pinned.map((project) => (
                <ProjectsCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* All projects grid */}
        <section>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
              All Projects
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((project) => (
              <ProjectsCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
