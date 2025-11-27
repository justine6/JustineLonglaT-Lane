// app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAllProjectSlugs,
  getProjectMarkdown,
  type Project,
} from "@/lib/project-content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: ProjectPageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = await getProjectMarkdown(slug);

  if (!project) {
    return {
      title: "Project not found | Justine Longla T. Consulting",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Justine Longla T. Consulting`,
    description:
      project.summary ??
      `Details for the project "${project.title}" from Justine Longla T. Consulting.`,
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = await getProjectMarkdown(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-50 sm:px-8 lg:px-12">
      <article className="mx-auto max-w-3xl">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Project
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
        </header>

        <section className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-slate-800 dark:text-slate-100">
          {project.content}
        </section>
      </article>
    </main>
  );
}
