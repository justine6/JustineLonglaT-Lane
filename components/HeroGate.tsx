"use client";

import { usePathname } from "next/navigation";
import { LINKS } from '@/config/links';
import type { ReactNode } from "react";

export default function HeroGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return <>{children}</>;
}


