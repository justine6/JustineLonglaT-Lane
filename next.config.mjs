// next.config.mjs
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
    providerImportSource: "@mdx-js/react",
  },
});

/** Security Headers */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=15552000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

/** CSP (Cal.com friendly) */
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
  "frame-ancestors 'self'",
].join("; ");

const isVercel = !!process.env.VERCEL;

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  eslint: { ignoreDuringBuilds: true },

  ...(isVercel ? {} : {
    experimental: {
      allowedDevOrigins: [
        "http://localhost:3000",
        "http://192.168.0.11:3000",
      ],
    },
  }),

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cal.com" },
      { protocol: "https", hostname: "**.cal.com" },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...securityHeaders, { key: "Content-Security-Policy", value: csp }],
      },
      {
        source: "/docs/:file(.*\\.pdf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "Content-Disposition", value: "inline" },
        ],
      },
      // ⬇️ moved here
      {
        source: "/booking",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/schedule", destination: "/booking", permanent: true },
      { source: "/intro", destination: "/booking", permanent: true },
      { source: "/intro-call", destination: "/booking", permanent: true },
      { source: "/docs/jutellane-brochure.pdf", destination: "/docs/brochure.pdf", permanent: true },
    ];
  },
});

export default nextConfig;
