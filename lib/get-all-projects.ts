// lib/get-all-projects.ts
import fs from "fs";
import path from "path";

export type Project = {
  slug: string;
  title: string;
  excerpt?: string;
  summary?: string;
  description?: string;
  updatedAt?: string;
  pinned?: boolean;
  featured?: boolean;
  tags?: string[];   // <— ADD THIS
};

const projectsDir = path.join(process.cwd(), "content/projects");

// Load ALL project JSON files from content/projects
export async function getAllProjects(): Promise<Project[]> {
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs
    .readdirSync(projectsDir)
    .filter((name) => name.endsWith(".json"));

  return files.map((file) => {
    const filePath = path.join(projectsDir, file);
    const raw = fs.readFileSync(filePath, "utf8");

    let data: any;
    try {
      data = JSON.parse(raw);
    } catch (error) {
      console.warn(`⚠️ Failed to parse ${filePath}:`, error);
      data = {};
    }

    const slug = file.replace(/\.json$/, "");

    return {
      slug,
      title: data.title ?? "Untitled Project",
      excerpt: data.excerpt ?? "",
      summary: data.summary ?? "",
      description: data.description ?? "",
      // store a short date string by default
      updatedAt:
        data.updatedAt ??
        new Date().toISOString().split("T")[0],
      pinned: data.pinned ?? false,
      featured: data.featured ?? false,
      tags: Array.isArray(data.tags) ? data.tags : undefined,
    };
  });
}

// Optional helper: load a single project by slug
export async function getProjectBySlug(
  slug: string,
): Promise<Project | null> {
  const filePath = path.join(projectsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const data: any = JSON.parse(raw);

    return {
      slug,
      title: data.title ?? "Untitled Project",
      excerpt: data.excerpt ?? "",
      summary: data.summary ?? "",
      description: data.description ?? "",
      updatedAt:
        data.updatedAt ??
        new Date().toISOString().split("T")[0],
      pinned: data.pinned ?? false,
      featured: data.featured ?? false,
      tags: Array.isArray(data.tags) ? data.tags : undefined,
    };
  } catch (error) {
    console.warn(`⚠️ Failed to parse ${filePath}:`, error);
    return null;
  }
}

// So you can do: import getAllProjects, { type Project } from "@/lib/get-all-projects";
export default getAllProjects;
