// lib/project-content.ts
import { promises as fs } from "node:fs";
import path from "node:path";

export type Project = {
  slug: string;
  title: string;
  summary: string | null;
  content: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "projects");

// Recursively collect all .md files under /projects and
// return their paths relative to PROJECTS_DIR.
async function walkMarkdownFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walkMarkdownFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const rel = path.relative(PROJECTS_DIR, fullPath);
      files.push(rel);
    }
  }

  return files;
}

// Make sure the /projects directory exists; if it doesn't, just return [].
async function getAllMarkdownRelativePaths(): Promise<string[]> {
  try {
    await fs.access(PROJECTS_DIR);
  } catch {
    return [];
  }

  return walkMarkdownFiles(PROJECTS_DIR);
}

// Turn a relative markdown path into a slug.
// - "cicd-bot.md"                 -> "cicd-bot"
// - "2025/11/cicd-bot.md"         -> "cicd-bot"
// - "platform-config/index.md"    -> "platform-config"
function slugFromRelativePath(relativePath: string): string {
  const withoutExt = relativePath.replace(/\.md$/, "");
  const parts = withoutExt.split(path.sep);
  const last = parts[parts.length - 1];

  if (last.toLowerCase() === "index" && parts.length > 1) {
    return parts[parts.length - 2];
  }

  return last;
}

// All available slugs (deduplicated + sorted)
export async function getAllProjectSlugs(): Promise<string[]> {
  const relPaths = await getAllMarkdownRelativePaths();
  const slugs = relPaths.map((rel) => slugFromRelativePath(rel));

  return Array.from(new Set(slugs)).sort((a, b) => a.localeCompare(b));
}

// Find the markdown file for a given slug and return its content + metadata.
export async function getProjectMarkdown(slug: string): Promise<Project | null> {
  const relPaths = await getAllMarkdownRelativePaths();

  const match = relPaths.find(
    (rel) => slugFromRelativePath(rel) === slug
  );

  if (!match) {
    return null;
  }

  const fullPath = path.join(PROJECTS_DIR, match);
  const file = await fs.readFile(fullPath, "utf8");
  const lines = file.split(/\r?\n/);

  // First non-empty line is used as title (preferring "# Heading")
  const firstContentLine = lines.find((line) => line.trim().length > 0);
  let title = slug;
  let summary: string | null = null;

  if (firstContentLine) {
    const headingMatch = firstContentLine.match(/^#\s*(.+)$/);
    title = headingMatch ? headingMatch[1].trim() : firstContentLine.trim();

    const startIndex = lines.indexOf(firstContentLine) + 1;
    const summaryLines = lines
      .slice(startIndex)
      .filter((line) => line.trim().length > 0);

    if (summaryLines.length > 0) {
      const summaryText = summaryLines.join(" ");
      summary =
        summaryText.length > 200
          ? summaryText.slice(0, 197).trimEnd() + "..."
          : summaryText;
    }
  }

  return {
    slug,
    title,
    summary,
    content: file,
  };
}
