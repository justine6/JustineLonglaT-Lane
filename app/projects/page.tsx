// app/projects/page.tsx
import ProjectCard from "@/components/projects/ProjectCard";
import { SectionFadeIn } from "@/components/ui/SectionFadeIn";
import { FadeInItem } from "@/components/ui/FadeInItem";
import { getAllProjects } from "@/lib/get-all-projects";

export const metadata = {
  title: "Projects | Jutellane Solutions with Justine",
  description:
    "Deep-dive case studies from Jutellane Solutions: CI/CD automation bot, cloud cost optimization, resilient migrations, and more production-grade DevSecOps work.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">
      <SectionFadeIn as="section" delay={0.12} className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Projects &amp; case studies
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            A focused set of automation and reliability projects shipped into
            real environments: CI/CD helpers, migration tooling, and
            cost-aware, observable cloud platforms.
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
    </main>
  );
}
