// components/ConditionalHero.tsx
"use client";

import { usePathname } from "next/navigation";
import HomeHero from "./HomeHero";

// Add routes here where the hero should be hidden
const HIDE_ON: string[] = ["/resume"];

export default function ConditionalHero() {
  const pathname = usePathname();

  // Hide on exact matches or nested paths (e.g., /resume/anything)
  const shouldHide = HIDE_ON.some(
    (base) => pathname === base || pathname.startsWith(base + "/")
  );
  if (shouldHide) return null;

  return <HomeHero />;
}
