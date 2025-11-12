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
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
    providerImportSource: "@mdx-js/react",
  },
});

/** ✅ Security Headers **/
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=15552000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // You can keep XFO if you want belt + suspenders, but frame-ancestors in CSP is modern
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // ❌ remove COEP; it breaks cross-origin iframes like Cal.com embeds
  // { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

/** ✅ CSP tuned for Cal.com embed **/
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cal.com https://*.cal.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https:",
  "font-src 'self' https://fonts.gstatic.com",
  "frame-src https://cal.com https://*.cal.com",
  "connect-src 'self' https://api.resend.com https://v0.blob.vercel-storage.com https://cal.com https://*.cal.com",
  "object-src 'none'",
  "media-src 'self'",
  // Modern replacement for X-Frame-Options for who may frame *you*
  "frame-ancestors 'self'"
].join("; ");


/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  eslint: { ignoreDuringBuilds: true },

  /** ✅ Full Header Set (CSP + securityHeaders merged) */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: csp },
        ],
      },

      // ✅ Inline PDFs (your previous config preserved)
      {
        source: "/docs/:file(.*\\.pdf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "Content-Disposition", value: "inline" },
        ],
      },

      // ✅ No-cache for intro-call (ensures always fresh scheduler)
      {
        source: "/intro-call",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },

  /** ✅ Redirects preserved + expanded */
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


