// content/videos.ts

export interface VideoMeta {
  slug: string;
  title: string;
  description: string;
  src: string;            // path under public/, e.g. /videos/...
  thumbnail?: string;     // optional preview image
  duration?: string;
  tags?: string[];
}

export const VIDEOS: VideoMeta[] = [
  {
    slug: "devsecops-pipeline-walkthrough",
    title: "DevSecOps Pipeline Walkthrough",
    description:
      "Secure CI/CD pipeline demo — gated releases, policy as code, and observability.",
    src: "/videos/devsecops-pipeline.mp4",
    thumbnail: "/images/devsecops-thumb.jpg",
    duration: "06:32",
    tags: ["DevSecOps", "CI/CD", "Automation"],
  },
  {
    slug: "cloud-migration-blueprint",
    title: "Cloud Migration Blueprint (AWS & Azure)",
    description:
      "How I design phased migrations: discovery, landing zone, cutover, and steady-state operations.",
    src: "/videos/cloud-migration-blueprint.mp4",
    thumbnail: "/images/cloud-migration-thumb.jpg",
    duration: "08:47",
    tags: ["Cloud Architecture", "AWS", "Azure"],
  },
  // Add more entries here as you record new videos
];
