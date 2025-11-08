import fs from "fs";
import { LINKS } from '@/config/links';
import path from "path";

const projectsDir = path.join(process.cwd(), "app/projects");

// File to store warning logs with timestamp
const logFile = path.join(process.cwd(), ".project-warnings.json");

// Keep logs for 7 days
const RETENTION_DAYS = 7;

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  lastModified: string;
  image?: string;
};

function loadOldWarnings() {
  if (!fs.existsSync(logFile)) return {};
  try {
    const raw = fs.readFileSync(logFile, "utf-8");
    const data = JSON.parse(raw);

    // Filter out logs older than retention period
    const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000;
    for (const key in data) {
      if (data[key].timestamp < cutoff) {
        delete data[key];
      }
    }
    return data;
  } catch {
    return {};
  }
}

function saveWarnings(warnings: Record<string, { message: string; timestamp: number }>) {
  fs.writeFileSync(logFile, JSON.stringify(warnings, null, 2));
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(projectsDir)) return [];

  const warnings = loadOldWarnings();

  const projects = fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      const slug = dirent.name;
      const metaPath = path.join(projectsDir, slug, "meta.json");

      let meta: Partial<ProjectMeta> = {};

      if (fs.existsSync(metaPath)) {
        try {
          const raw = fs.readFileSync(metaPath, "utf-8");
          meta = JSON.parse(raw);
        } catch (err) {
          console.error(`⚠️ Failed to parse meta.json for ${slug}:`, err);
        }
      }

      const title =
        meta.title || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      const description = meta.description || `Learn more about ${slug.replace(/-/g, " ")}.`;
      const lastModified =
        meta.lastModified ||
        fs.statSync(path.join(projectsDir, slug)).mtime.toISOString().split("T")[0];

      // ✅ Check fields
      if (!meta.title && !warnings[`${slug}-title`]) {
        console.warn(`ℹ️ Project "${slug}" has no custom title. Using fallback.`);
        warnings[`${slug}-title`] = { message: "Missing title", timestamp: Date.now() };
      }

      if (!meta.description && !warnings[`${slug}-description`]) {
        console.warn(`ℹ️ Project "${slug}" has no custom description. Using fallback.`);
        warnings[`${slug}-description`] = { message: "Missing description", timestamp: Date.now() };
      }

      const image = meta.image || "/brand/logo-light.svg";
      if (!meta.image && !warnings[`${slug}-image`]) {
        console.warn(`ℹ️ Project "${slug}" has no custom image. Using default logo.`);
        warnings[`${slug}-image`] = { message: "Missing image", timestamp: Date.now() };
      }

      return { slug, title, description, lastModified, image };
    });

  // Save updated warnings
  saveWarnings(warnings);

  return projects;
}


