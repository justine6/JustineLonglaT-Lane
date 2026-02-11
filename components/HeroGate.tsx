"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Add any routes where you NEVER want the hero.
// This matches both the exact prefix and nested routes.
const HIDE_HERO_PREFIXES = [
  "/case-studies",
  // Add more later if you want:
  // "/blog",
  // "/docs",
  // "/engineering-mesh",
];

export default function HeroGate({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";

  // ✅ Keep your original behavior: hero appears only on "/"
  if (pathname === "/") return <>{children}</>;

  // ✅ Additionally: explicitly hide on any case study routes (and future prefixes)
  const hideHero = HIDE_HERO_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
  );

  if (hideHero) return null;

  // ✅ Default: no hero on other pages (same as your original intent)
  return null;
}
