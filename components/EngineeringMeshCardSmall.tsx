"use client";

import Link from "next/link";
import { type Project } from "@/lib/get-all-projects";

interface Props {
  projects: Project[];
}

/**
 * A lightweight featured "mesh" card that always picks the top 3
 * highlighted projects (pinned or featured) and displays them.
 */
export default function EngineeringMeshCardSmall({ projects }: Props) {
  // Pick top 3 highlighted (pinned OR featured)
  const featured = projects
    .filter((p) => p.pinned || p.featured)
    .slice(0, 3);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">
        Engineering Mesh (Featured Work)
      </h2>

      <p className="mb-5 text-sm text-slate-300/90 leading-relaxed">
        A multi-site engineering ecosystem connecting marketing, documentation,
        blogs, and consulting automation — all powered by CI/CD, PowerShell,
        DNS, and cloud-native best practices.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block rounded-xl border border-slate-800 bg-slate-800/40 px-4 py-3 hover:bg-slate-800/70 transition"
          >
            <h3 className="font-semibold text-slate-100">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-slate-400 line-clamp-2">
              {project.summary}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/projects/engineering-mesh"
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          Open Full Case Study →
        </Link>
      </div>
    </div>
  );
}
