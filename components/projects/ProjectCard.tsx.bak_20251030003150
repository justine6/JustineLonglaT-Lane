import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/get-all-projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="relative group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image || "/brand/logo-light.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-200">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
