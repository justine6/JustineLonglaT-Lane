import fs from "fs";
import { LINKS } from '@/config/links';
import path from "path";

export type Project = {
  slug: string;
  title: string;
  description: string;
  lastModified: string;
  image?: string;
  category?: string;
};

const projectsDir = path.join(process.cwd(), "app/projects");

function inferCategory(input: string): string {
  const x = input.toLowerCase();

  const isAWS = /(aws|cloudformation|ec2|eks|lambda|s3|iam|route ?53|rds|dynamo)/.test(x);
  const isAzure = /(azure|aks|arm|bicep|app ?service|functions|cosmos|key ?vault)/.test(x);
  const isDevSecOps = /(devsecops|security|cicd|pipeline|sast|dast|iac scan|owasp|shift ?left)/.test(x);
  const isAutomation = /(automation|gitops|ansible|terraform|pulumi|packer|workflow)/.test(x);

  if (isAWS) return "AWS";
  if (isAzure) return "Azure";
  if (isDevSecOps) return "DevSecOps";
  if (isAutomation) return "Automation";
  return "Cloud";
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) return [];

  const entries = fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  return entries.map((d) => {
    const slug = d.name;
    const folder = path.join(projectsDir, slug);
    const metaPath = path.join(folder, "meta.json");

    let meta: Partial<Project & { category?: string }> = {};
    if (fs.existsSync(metaPath)) {
      try {
        meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
      } catch (e) {
        console.warn(`⚠️ Failed to parse ${metaPath}:`, e);
      }
    }

    const title =
      meta.title ||
      slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    const description =
      meta.description || `Learn more about ${slug.replace(/-/g, " ")}.`;

    const lastModified =
      meta.lastModified ||
      fs.statSync(folder).mtime.toISOString().split("T")[0];

    const image = meta.image || "/brand/logo-light.svg";

    const category =
      meta.category ||
      inferCategory([title, description, slug].filter(Boolean).join(" "));

    return { slug, title, description, lastModified, image, category };
  });
}


