import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  eslint: { ignoreDuringBuilds: true },

  async redirects() {
    return [
      { source: "/schedule", destination: "/intro-call", permanent: true },
      { source: "/intro", destination: "/intro-call", permanent: true },
      {
        source: "/docs/jutellane-brochure.pdf",
        destination: "/docs/brochure.pdf",
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
