// components/EngineeringMeshCardSmall.tsx

import Link from "next/link";
import type { Project } from "@/lib/get-all-projects";
import SmallProjectCard from "@/components/SmallProjectCard";
import { Network, PlayCircle } from "lucide-react";
interface EngineeringMeshCardSmallProps {
  projects: Project[];
}

/**
 * Picks out the Engineering Mesh / ecosystem case study from your
 * existing project metadata. Falls back gracefully if not found.
 */
function pickMeshProject(projects: Project[]): Project | undefined {
  return (
    projects.find((p) => p.slug === "engineering-mesh") ||
    projects.find((p) =>
      p.slug?.includes("platform-ecosystem-architecture"),
    ) ||
    projects.find((p) =>
      p.title.toLowerCase().includes("engineering mesh"),
    ) ||
    projects[0]
  );
}

export default function EngineeringMeshCardSmall({
  projects,
}: EngineeringMeshCardSmallProps) {
  if (!projects || projects.length === 0) return null;

  const mesh = pickMeshProject(projects);

  // Other highlighted projects (pinned / featured) except the mesh itself
  const supporting = projects
    .filter(
      (p) =>
        (p.pinned || p.featured) &&
        p.slug !== mesh?.slug,
    )
    .slice(0, 2);

  return (
    <section
      aria-labelledby="engineering-mesh-featured"
      className="rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-5 shadow-lg shadow-slate-900/60 sm:px-6 sm:py-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        {/* Left: Mesh summary */}
        <div className="flex-1 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300/90">
            Featured case study
          </p>

          <h2
            id="engineering-mesh-featured"
            className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
          >
            {mesh?.title ?? "The Justine Longla Engineering Mesh"}
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-slate-200/85">
            {mesh?.summary ??
              "A multi-site engineering mesh that connects consulting, docs, blogs, and automation into one cohesive DevSecOps ecosystem."}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300/90">
            <span className="rounded-full border border-emerald-600/60 bg-emerald-500/10 px-3 py-1">
              Multi-site platform: consulting • docs • blogs
            </span>
            <span className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-1">
              {projects.length} total projects in the mesh
            </span>
          </div>

          <div className="pt-2">
            <Link
              href={mesh ? `/projects/${mesh.slug}` : "/projects"}
              className="inline-flex items-center text-sm font-medium text-primary-300 hover:text-primary-200"
            >
              View full Engineering Mesh case study
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right: 2 supporting featured projects */}
        {supporting.length > 0 && (
          <div className="mt-3 grid w-full gap-3 sm:mt-0 sm:w-72">
            {supporting.map((project) => (
              <SmallProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
