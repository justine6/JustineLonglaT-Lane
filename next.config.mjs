// next.config.mjs
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Force webpack; avoids Turbopack MDX "serializable options" error on Vercel
  experimental: {
    turbo: false,
  },

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behavior: "wrap",
          properties: {
            className: ["heading-anchor"],
          },
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);