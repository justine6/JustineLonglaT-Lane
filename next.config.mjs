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
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
    providerImportSource: "@mdx-js/react",
  },
});

/** Security Headers */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=15552000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },

  // Safer for embeds/popups than strict same-origin
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },

  // Keep if you want: it controls who can load YOUR resources
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const isProd = process.env.NODE_ENV === "production";

/** CSP (Cal.com friendly) */
const csp = [
  "default-src 'self'",
  [
    "script-src 'self' 'unsafe-inline'",
    isProd ? "" : "'unsafe-eval'",
    "cal.com",
    "*.cal.com",
    "embed.cal.com",
    "assets.cal.com",
    "app.cal.com",
  ]
    .filter(Boolean)
    .join(" "),
  [
    "style-src 'self' 'unsafe-inline'",
    "fonts.googleapis.com",
  ].join(" "),
  [
    "img-src 'self' data: blob:",
    "https:",
    "cal.com",
    "*.cal.com",
  ].join(" "),
  [
    "font-src 'self'",
    "fonts.gstatic.com",
  ].join(" "),
  [
    "frame-src 'self'",
    "cal.com",
    "*.cal.com",
    "embed.cal.com",
  ].join(" "),
  [
    "connect-src 'self'",
    "api.resend.com",
    "v0.blob.vercel-storage.com",
    "cal.com",
    "*.cal.com",
    "embed.cal.com",
    "assets.cal.com",
    "app.cal.com",
  ].join(" "),
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  /**
   * ✅ REQUIRED for Docker / standalone container builds
   */
  // output: "standalone",

  pageExtensions: ["ts", "tsx", "md", "mdx"],
  eslint: { ignoreDuringBuilds: true },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cal.com" },
      { protocol: "https", hostname: "*.cal.com" },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: csp },
        ],
      },
      {
        source: "/files/:file(.*\\.pdf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          { key: "Content-Disposition", value: "inline" },
        ],
      },
      {
        source: "/booking",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
  async redirects() {
  return [
    {
      source: "/projects/engineering-mesh",
      destination: "/engineering-mesh",
      permanent: true,
    },

      { source: "/schedule", destination: "/booking", permanent: true },
      { source: "/intro", destination: "/booking", permanent: true },
      { source: "/intro-call", destination: "/booking", permanent: true },

      {
        source: "/docs/:path*",
        destination: "/files/:path*",
        permanent: true,
      },

      {
        source: "/resume",
        destination: "/files/justine-longla-resume-2025.pdf",
        permanent: true,
      },
      {
        source: "/resume.pdf",
        destination: "/files/justine-longla-resume-2025.pdf",
        permanent: true,
      },
      {
        source: "/files/resume.pdf",
        destination: "/files/justine-longla-resume-2025.pdf",
        permanent: true,
      },
      {
        source: "/files/justine-longla-resume.pdf",
        destination: "/files/justine-longla-resume-2025.pdf",
        permanent: true,
      },
      {
        source: "/docs/justine-longla-resume.pdf",
        destination: "/files/justine-longla-resume-2025.pdf",
        permanent: true,
      },
      {
        source: "/mesh",
        destination: "/engineering-mesh",
        permanent: true,
      },
      {
        source: "/mesh/:path*",
        destination: "/engineering-mesh/:path*",
        permanent: true,
      },
      
      {
        source: "/docs/brochure.pdf",
        destination: "/files/brochure.pdf",
        permanent: true,
      },
      {
        source: "/docs/jutellane-brochure.pdf",
        destination: "/files/brochure.pdf",
        permanent: true,
      },

      { source: "/hire-me", destination: "/booking", permanent: false },
    ];
  },
});

export default nextConfig;
