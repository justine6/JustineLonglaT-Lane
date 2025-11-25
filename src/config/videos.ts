// src/config/videos.ts

export type VideoMeta = {
  slug: string;
  title: string;
  description: string;
  src: string;              // /videos/....mp4 in public/videos
  thumbnail?: string;       // /images/....jpg in public/images
  duration?: string;        // "06:32"
  tags?: string[];
  featured?: boolean;
};

export const VIDEOS: VideoMeta[] = [
  {
    slug: "devsecops-pipeline-walkthrough",
    title: "DevSecOps Pipeline Walkthrough",
    description:
      "High-level tour of a secure CI/CD pipeline with gated releases, policy as code, and production-grade observability.",
    src: "/videos/devsecops-pipeline.mp4",
    thumbnail: "/images/devsecops-thumb.jpg",
    duration: "06:32",
    tags: ["DevSecOps", "CI/CD", "Automation"],
    featured: true,
  },
  {
    slug: "cloud-migration-blueprint",
    title: "Cloud Migration Blueprint (AWS & Azure)",
    description:
      "How I approach phased migrations: discovery, landing zone, cutover, and steady-state operations.",
    src: "/videos/cloud-migration-blueprint.mp4",
    thumbnail: "/images/cloud-migration-thumb.jpg",
    duration: "08:47",
    tags: ["Cloud Architecture", "AWS", "Azure"],
    featured: true,
  },
  {
    slug: "observability-in-practice",
    title: "Observability in Practice",
    description:
      "From logs and metrics to traces: building a real-world observability stack that teams actually use.",
    src: "/videos/observability-in-practice.mp4",
    thumbnail: "/images/observability-thumb.jpg",
    duration: "07:15",
    tags: ["Monitoring", "SRE", "Grafana"],
  },
];

export function getVideoBySlug(slug: string): VideoMeta | undefined {
  return VIDEOS.find((v) => v.slug === slug);
}
