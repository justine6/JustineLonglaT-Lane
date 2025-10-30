import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // 🧠 ensure MDX uses React’s context provider
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  eslint: { ignoreDuringBuilds: true },

  async redirects() {
    return [
      { source: "/schedule", destination: "/intro-call", permanent: true },
      { source: "/intro", destination: "/intro-call", permanent: true },
    ];
  },
};

export default withMDX(nextConfig);
