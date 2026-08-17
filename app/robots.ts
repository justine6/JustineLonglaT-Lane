import type { MetadataRoute } from "next";
import { ORIGINS } from "@/config/links";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${ORIGINS.main}/sitemap.xml`,
  };
}
