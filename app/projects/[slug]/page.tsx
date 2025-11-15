import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const all = await getAllProjects();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Jutellane Solutions`,
    description: project.excerpt ?? project.description ?? "",
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.excerpt ?? project.description ?? "",
      url: `/projects/${slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title: project.title },
  };
}

export default async function ProjectPage(
  { params }: { params: Params }
) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl p-6 prose">
      <h1>{project.title}</h1>
      {project.excerpt && <p>{project.excerpt}</p>}
    </main>
  );
}
