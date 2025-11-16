import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects } from "@/lib/get-all-projects";

type Params = { slug: string };

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const project = getAllProjects().find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/projects" className="relative btn-shiny">
        &larr; Back to Projects
      </Link>

      <h1 className="text-4xl font-bold mt-6 mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>

      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-lg shadow-md mb-6"
        />
      )}

      <p className="text-sm text-gray-500">
        Last updated: {project.lastModified}
      </p>
    </main>
  );
}
