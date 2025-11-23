// lib/get-all-projects.ts
import fs from "fs";
import path from "path";

export type Project = {
  slug: string;
  title: string;
  description: string;
  date?: string;          // for sorting by recency
  lastModified?: string;  // fallback
  image?: string;
  category?: string;
  tags?: string[];
  pinned?: boolean;
  featured?: boolean;
};

const projectsDir = path.join(process.cwd(), "app/projects");

// Simple text-based category inference
function inferCategory(input: string): string {
  const x = input.toLowerCase();

  const isAWS =
    /(aws|cloudformation|ec2|eks|lambda|s3|iam|route ?53|rds|dynamo)/.test(x);
  const isAzure =
    /(azure|aks|arm|bicep|app ?service|functions|cosmos|key ?vault)/.test(x);
  const isDevSecOps =
    /(devsecops|security|cicd|pipeline|sast|dast|iac scan|owasp|shift ?left)/.test(
      x,
    );
  const isAutomation =
    /(automation|gitops|ansible|terraform|pulumi|packer|workflow)/.test(x);

  if (isAWS) return "AWS";
  if (isAzure) return "Azure";
  if (isDevSecOps) return "DevSecOps";
  if (isAutomation) return "Automation";
  return "Cloud";
}

export async function getAllProjects(): Promise<Project[]> {
  if (!fs.existsSync(projectsDir)) return [];

  const entries = fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("[")); // skip route folders like [slug]

  const projects: Project[] = entries.map((d) => {
    const slug = d.name;
    const folder = path.join(projectsDir, slug);
    const metaPath = path.join(folder, "meta.json");

    // meta.json can contain: title, description, date, lastModified,
    // image, category, tags, pinned, featured, etc.
    let meta: Partial<Project & { date?: string }> = {};

    if (fs.existsSync(metaPath)) {
      try {
        meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
      } catch (error) {
        console.warn(`⚠️ Failed to parse ${metaPath}:`, error);
      }
    }

    const title =
      meta.title ??
      slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    const description =
      meta.description ??
      `Learn more about ${slug.replace(/-/g, " ")}.`.trim();

    const date = meta.date;
    const lastModified =
      meta.lastModified ??
      fs.statSync(folder).mtime.toISOString().split("T")[0];

    const image = meta.image ?? "/brand/justine-logo.png";

    const baseForCategory = [title, description, slug].filter(Boolean).join(" ");
    const category = meta.category ?? inferCategory(baseForCategory);

    return {
      slug,
      title,
      description,
      date,
      lastModified,
      image,
      category,
      tags: meta.tags ?? [],
      pinned: meta.pinned ?? false,
      featured: meta.featured ?? false,
    };
  });

  return projects;
}

// So you can do: import getAllProjects, { type Project } from "@/lib/get-all-projects";
export default getAllProjects;
