// lib/get-all-posts.ts
import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "app/posts");

// File to store warning logs with timestamp
const logFile = path.join(process.cwd(), ".post-warnings.json");

// Keep logs for 7 days
const RETENTION_DAYS = 7;

export type PostMeta = {
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

function saveWarnings(
  warnings: Record<string, { message: string; timestamp: number }>
) {
  fs.writeFileSync(logFile, JSON.stringify(warnings, null, 2));
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  const warnings = loadOldWarnings();

  const posts = fs
    .readdirSync(postsDir, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        dirent.name !== "[slug]" // ignore the dynamic route folder
    )
    .map((dirent) => {
      const slug = dirent.name;
      const metaPath = path.join(postsDir, slug, "meta.json");

      let meta: Partial<PostMeta> = {};

      if (fs.existsSync(metaPath)) {
        try {
          const raw = fs.readFileSync(metaPath, "utf-8");
          meta = JSON.parse(raw);
        } catch (err) {
          console.error(`⚠️ Failed to parse meta.json for post ${slug}:`, err);
        }
      }

      const title =
        meta.title ||
        slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

      const description =
        meta.description ||
        `Deep dive: ${slug.replace(/-/g, " ")}.`.trim();

      const lastModified =
        meta.lastModified ||
        fs.statSync(path.join(postsDir, slug)).mtime
          .toISOString()
          .split("T")[0];

      const image = meta.image || "/brand/justine-logo.png";

      if (!meta.title && !warnings[`${slug}-title`]) {
        console.warn(`ℹ️ Post "${slug}" has no custom title. Using fallback.`);
        warnings[`${slug}-title`] = {
          message: "Missing title",
          timestamp: Date.now(),
        };
      }

      if (!meta.description && !warnings[`${slug}-description`]) {
        console.warn(
          `ℹ️ Post "${slug}" has no custom description. Using fallback.`
        );
        warnings[`${slug}-description`] = {
          message: "Missing description",
          timestamp: Date.now(),
        };
      }

      if (!meta.image && !warnings[`${slug}-image`]) {
        console.warn(`ℹ️ Post "${slug}" has no custom image. Using default.`);
        warnings[`${slug}-image`] = {
          message: "Missing image",
          timestamp: Date.now(),
        };
      }

      return { slug, title, description, lastModified, image };
    });

  saveWarnings(warnings);

  return posts;
}
