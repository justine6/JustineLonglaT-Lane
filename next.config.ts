import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [require("remark-gfm")],
    rehypePlugins: [],
  },
});

const nextConfig = {
  // add any existing Next config options here if you have them
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
