import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/get-all-projects";

import {
  Cloud,
  ShieldCheck,
  Layers,
  Workflow,
  Cpu,
  Sparkles,
} from "lucide-react";

type Props = {
  project: Project & {
    category?: string;
    featured?: boolean;
    tags?: string[];
    image?: string;
  };
};

export default function ProjectsCard({ project }: Props) {
  // ---------------------------------------------------------------------------
  // 1) Remove template/invalid entries completely (e.g. slug "[slug]")
  // ---------------------------------------------------------------------------
  if (!project.slug || project.slug.includes("[")) {
    return null;
  }

  const slug = project.slug;

  // ---------------------------------------------------------------------------
  // 2) Category detection (from category, tags, or title)
  // ---------------------------------------------------------------------------
  const tags = (project.tags ?? []).map((t) => t.toLowerCase());
  const t = project.title.toLowerCase();

  const category: string =
    project.category ||
    (tags.includes("platform engineering") || t.includes("platform")
      ? "Platform"
      : tags.includes("devsecops") || t.includes("devsecops")
      ? "DevSecOps"
      : tags.includes("automation") || t.includes("automation")
      ? "Automation"
      : tags.includes("aws") || t.includes("aws")
      ? "AWS"
      : tags.includes("azure") || t.includes("azure")
      ? "Azure"
      : "Cloud");

  const categoryColors: Record<string, string> = {
    AWS: "from-yellow-500 to-orange-500",
    Azure: "from-blue-600 to-cyan-500",
    DevSecOps: "from-emerald-600 to-green-400",
    Automation: "from-purple-600 to-pink-500",
    Platform: "from-sky-500 via-cyan-400 to-emerald-400",
    Cloud: "from-sky-500 to-indigo-500",
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    AWS: <Cpu className="h-3.5 w-3.5" />,
    Azure: <Cloud className="h-3.5 w-3.5" />,
    DevSecOps: <ShieldCheck className="h-3.5 w-3.5" />,
    Automation: <Workflow className="h-3.5 w-3.5" />,
    Platform: <Layers className="h-3.5 w-3.5" />,
    Cloud: <Cloud className="h-3.5 w-3.5" />,
  };

  const gradient = categoryColors[category] ?? categoryColors.Cloud;
  const icon = categoryIcons[category] ?? categoryIcons.Cloud;

  const isFeatured = project.featured === true;

  const cardRingClass = isFeatured
    ? "shadow-2xl shadow-emerald-400/40 ring-2 ring-emerald-300/80"
    : "shadow-lg shadow-slate-900/40";

  const overlayGradient =
    "bg-gradient-to-t from-black/80 via-black/45 to-transparent";

  return (
    <Link
      href={`/projects/${slug}`}
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <article
        className={`relative group rounded-2xl overflow-hidden bg-slate-900/85 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${cardRingClass}`}
      >
        {/* image area */}
        <div className="relative h-48 w-full bg-slate-950">
          <Image
            src={project.image || "/brand/justine-logo.png"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />

          {/* dark overlay */}
          <div
            className={`absolute inset-0 ${overlayGradient} opacity-85 group-hover:opacity-95 transition-opacity`}
          />

          {/* category pill */}
          <div
            className={`absolute top-3 left-3 flex items-center gap-1.5 bg-gradient-to-r ${gradient} text-white text-[0.7rem] font-semibold px-3 py-1 rounded-full shadow-lg`}
          >
            {icon}
            <span className="uppercase tracking-wide">{category}</span>
          </div>

          {/* featured badge */}
          {isFeatured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-emerald-400 text-emerald-950 text-[0.7rem] font-semibold px-3 py-1 shadow-[0_0_22px_rgba(52,211,153,0.9)]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Featured</span>
            </div>
          )}

          {/* title & description */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-lg font-semibold leading-snug line-clamp-2 drop-shadow">
              {project.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-100/90 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

