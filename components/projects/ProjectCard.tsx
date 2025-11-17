// components/projects/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/get-all-projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  // Some project sources may not have tags – treat them as optional
  const tags = (project as any)?.tags as string[] | undefined;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block h-full overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/70 shadow-[0_0_24px_rgba(15,23,42,0.85)] transition hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-[0_0_40px_rgba(56,189,248,0.65)]"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={project.image || "/brand/logo-light.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="mb-1 text-sm font-semibold text-slate-50 sm:text-base">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-xs text-slate-200/90 sm:text-sm">
          {project.description}
        </p>

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-sky-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
