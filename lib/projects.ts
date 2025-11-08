import fs from "fs";
import { LINKS } from '@/config/links';
import path from "path";

export type Project = {
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  updatedAt?: string;
};

const projectsDir = path.join(process.cwd(), "content/projects");

export async function getAllProjects(): Promise<Project[]> {
  if (!fs.existsSync(projectsDir)) return [];
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".json"));
  return files.map((file) => {
    const filePath = path.join(projectsDir, file);
    const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return {
      slug: file.replace(/\.json$/, ""),
      title: content.title ?? "Untitled Project",
      excerpt: content.excerpt ?? "",
      description: content.description ?? "",
      updatedAt: content.updatedAt ?? new Date().toISOString(),
    };
  });
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return {
    slug,
    title: content.title ?? "Untitled Project",
    excerpt: content.excerpt ?? "",
    description: content.description ?? "",
    updatedAt: content.updatedAt ?? new Date().toISOString(),
  };
}

