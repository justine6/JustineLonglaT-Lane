// components/ConditionalHero.tsx
"use client";

import { usePathname } from "next/navigation";
import HomeHero from "./HomeHero";

const HIDE_ON: string[] = ["/resume"];

export default function ConditionalHero() {
  const pathname = usePathname();
  const shouldHide = HIDE_ON.some(
    (base) => pathname === base || pathname.startsWith(base + "/")
  );
  if (shouldHide) return null;
  return <HomeHero />;
}
