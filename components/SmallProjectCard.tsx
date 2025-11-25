// src/components/SmallProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/lib/get-all-projects";

export default function SmallProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 p-5 shadow-lg shadow-black/40 transition-all hover:shadow-blue-900/40"
    >
      {/* Featured label */}
      <div className="mb-3 flex items-center gap-2">
        {(project.pinned || project.featured) && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-300">
            FEATURED
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-300">
        {project.title}
      </h3>

      {/* Summary or excerpt */}
      {(project.summary || project.excerpt) && (
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          {project.summary ?? project.excerpt}
        </p>
      )}

      {/* UpdatedAt stamp */}
      {project.updatedAt && (
        <p className="mt-3 text-xs text-slate-500">
          Updated {project.updatedAt}
        </p>
      )}
    </Link>
  );
}
