import type { MetadataRoute } from "next";
import { ORIGINS } from "@/config/links";
import { getAllProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = ORIGINS.main;
  const items = await getAllProjects();
  const now = new Date().toISOString();

  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/projects`, lastModified: now },
    ...items.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: p.updatedAt ?? now,
    })),
  ];
}
