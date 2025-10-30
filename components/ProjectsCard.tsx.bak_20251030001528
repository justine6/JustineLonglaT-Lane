import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/get-all-projects";

type Props = {
  project: Project & { category?: string };
};

export default function ProjectsCard({ project }: Props) {
  // infer category if not provided
  const t = project.title.toLowerCase();
  const category =
    project.category ||
    (t.includes("aws")
      ? "AWS"
      : t.includes("azure")
      ? "Azure"
      : t.includes("devsecops")
      ? "DevSecOps"
      : t.includes("automation")
      ? "Automation"
      : "Cloud");

  const categoryColors: Record<string, string> = {
    AWS: "from-yellow-500 to-orange-500",
    Azure: "from-blue-600 to-cyan-500",
    DevSecOps: "from-emerald-600 to-green-400",
    Automation: "from-purple-600 to-pink-500",
    Cloud: "from-sky-500 to-indigo-500",
  };

  const gradient = categoryColors[category] || categoryColors.Cloud;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="relative group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.02]"
    >
      <div className="relative h-48 w-full bg-gray-50">
        <Image
          src={project.image || "/brand/logo-light.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        {/* category label */}
        <div
          className={`absolute top-3 left-3 bg-gradient-to-r ${gradient} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}
        >
          {category}
        </div>

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

        {/* title & blurb */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-200 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
