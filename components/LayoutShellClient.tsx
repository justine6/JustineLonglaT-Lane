"use client";

import { usePathname } from "next/navigation";
import { LINKS } from '@/config/links';
import HeroBanner from "@/components/HeroBanner";

export default function LayoutShellClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome && (<div className="-mt-px"><HeroBanner /></div>)}
      <main className="flex-1">{children}</main>
    </>
  );
}


