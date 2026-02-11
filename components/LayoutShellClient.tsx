"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LINKS } from "@/config/links";

// NOTE: HeroBanner is rendered in app/layout.tsx via HeroGate.
// This client shell should not render it, to avoid duplication or leakage.

export default function LayoutShellClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  void LINKS; // keep import from being flagged if used elsewhere later
  void isHome; // keep logic available if you later need home-only shell behavior

  return (
    <>
      <main className="flex-1">{children}</main>
    </>
  );
}
