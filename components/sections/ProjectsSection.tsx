// components/sections/ProjectsSection.tsx
"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";
import { FadeInItem } from "@/components/ui/FadeInItem";
import type { Project } from "@/lib/get-all-projects";

type Props = {
  projects: Project[];
};

export function ProjectsSection({ projects }: Props) {
  return (
    <SectionFadeIn as="section" delay={0.12} className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
          Projects &amp; case studies
        </h2>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          A focused set of automation and reliability projects shipped into
          real environments: CI/CD helpers, migration tooling, and cost-aware,
          observable cloud platforms.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project, i) => (
          <FadeInItem key={project.slug} index={i}>
            <ProjectCard project={project} />
          </FadeInItem>
        ))}
      </div>
    </SectionFadeIn>
  );
}
