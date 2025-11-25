// lib/get-all-projects.ts
import fs from "fs";
import path from "path";

export type Project = {
  slug: string;
  title: string;
  excerpt?: string;
  summary?: string;
  description?: string;
  updatedAt?: string;     // human-readable date we show in UI
  lastModified?: string;  // raw-ish last modified date
  image?: string;         // hero / thumbnail image path
  pinned?: boolean;
  featured?: boolean;
  tags?: string[];        // optional tag list
};

const projectsDir = path.join(process.cwd(), "app/projects");

export async function getAllProjects(): Promise<Project[]> {
  if (!fs.existsSync(projectsDir)) return [];

  const entries = fs
    .readdirSync(projectsDir, { withFileTypes: true })
    // skip dynamic route folders like [slug]
    .filter((d) => d.isDirectory() && !d.name.startsWith("["));

  const projects: Project[] = [];

  for (const dirEntry of entries) {
    const slug = dirEntry.name;
    const folder = path.join(projectsDir, slug);
    const metaPath = path.join(folder, "meta.json");

    let data: any = {};

    if (fs.existsSync(metaPath)) {
      try {
        data = JSON.parse(fs.readFileSync(metaPath, "utf8"));
      } catch (error) {
        console.warn(`⚠️ Failed to parse ${metaPath}:`, error);
      }
    }

    const title: string =
      data.title ??
      slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c: string) => c.toUpperCase());

    const description: string =
      data.description ?? `Learn more about ${slug.replace(/-/g, " ")}.`;

    const excerpt: string = data.excerpt ?? "";
    const summary: string = data.summary ?? "";

    // Prefer explicit metadata, fall back to filesystem mtime
    const mtime = fs.statSync(folder).mtime.toISOString().split("T")[0];

    const updatedAt: string =
      data.updatedAt ?? data.date ?? data.lastModified ?? mtime;

    const lastModified: string =
      data.lastModified ?? data.date ?? data.updatedAt ?? mtime;

    const image: string | undefined = data.image || undefined;

    const pinned: boolean = Boolean(data.pinned);
    const featured: boolean = Boolean(data.featured);

    const tags: string[] | undefined = Array.isArray(data.tags)
      ? data.tags
      : undefined;

    projects.push({
      slug,
      title,
      excerpt,
      summary,
      description,
      updatedAt,
      lastModified,
      image,
      pinned,
      featured,
      tags,
    });
  }

  return projects;
}

// So you can do: import getAllProjects, { type Project } from "@/lib/get-all-projects";
export default getAllProjects;
