// lib/videos.ts
export type VideoItem = {
  slug: string;
  title: string;
  description: string;
  src: string;
  thumbnail?: string;
  duration?: string;
  tags?: string[];
};

export const VIDEOS: VideoItem[] = [
  {
    slug: "devsecops-pipeline-walkthrough",
    title: "DevSecOps Pipeline Walkthrough",
    description:
      "High-level tour of a secure CI/CD pipeline: gated releases, policy as code, and observability.",
    src: "/videos/devsecops-pipeline.mp4",
    thumbnail: "/images/devsecops-thumb.jpg",
    duration: "06:32",
    tags: ["DevSecOps", "CI/CD", "Automation"],
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
  },
];

export function getVideoBySlug(slug: string): VideoItem | undefined {
  return VIDEOS.find((v) => v.slug === slug);
}
