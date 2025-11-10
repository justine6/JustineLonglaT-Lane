// components/ScheduleTabs.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "@/config/links";

export default function ScheduleTabs() {
  const pathname = usePathname();
  const active = (href: string) =>
    pathname === href
      ? "bg-blue-600 text-white"
      : "bg-white text-blue-700 hover:bg-blue-50 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-slate-800";

  return (
    <div className="inline-flex rounded-xl border border-blue-200 dark:border-slate-700 overflow-hidden">
      <Link
        href={LINKS.introCall}
        className={`px-4 py-2 text-sm font-medium transition ${active(
          LINKS.introCall
        )}`}
      >
        Intro Call
      </Link>
      <Link
        href={LINKS.hireMe}
        className={`px-4 py-2 text-sm font-medium transition ${active(
          LINKS.hireMe
        )}`}
      >
        Hire Me
      </Link>
    </div>
  );
}
