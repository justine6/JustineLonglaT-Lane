// next.config.mjs
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["heading-anchor"]
          }
        }
      ]
    ]
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow MD/MDX pages/content
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // Keep this if you want strict checks in dev (optional)
  reactStrictMode: true

  // IMPORTANT:
  // - Do NOT put `eslint: {...}` here (Next 16 warns it's no longer supported in next.config)
  // - Do NOT add random `turbopack.conditions` keys (Next 16 warns they’re invalid)
};

export default withMDX(nextConfig);
