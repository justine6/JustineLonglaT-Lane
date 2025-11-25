// posts.ts
// Simple in-memory registry for deep-dive posts used by /posts/[slug]

// You can expand this later with real HTML content
export type Post = {
  slug: string;
  title: string;
  html: string;
};

export const POSTS: Record<string, Post> = {
  "devsecops-pipeline-architecture": {
    slug: "devsecops-pipeline-architecture",
    title: "DevSecOps Pipeline Architecture",
    html: `
      <p>
        Full DevSecOps pipeline deep dive coming soon.
        For now, you can explore my DevSecOps work via the Projects page.
      </p>
    `,
  },

  "cloud-migration-best-practices": {
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration Best Practices",
    html: `
      <p>
        Cloud migration best practices article coming soon.
        This post will cover landing zones, cutover strategy, and guardrails.
      </p>
    `,
  },

  "platform-ecosystem-architecture": {
    slug: "platform-ecosystem-architecture",
    title: "Platform Ecosystem Architecture",
    html: `
      <p>
        Platform ecosystem architecture write-up coming soon.
        It will walk through the Justine Longla Engineering Mesh in detail.
      </p>
    `,
  },
};
