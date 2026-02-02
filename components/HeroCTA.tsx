"use client";

import Link from "next/link";
import { Network } from "lucide-react";
import { LINKS } from "@/config/links";

export default function HeroCTA() {
  const meshHref = LINKS.engineeringMesh ?? "/engineering-mesh";

  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      {/* Row 1 — Primary actions */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Intro call */}
        <Link
          href={LINKS.introCall}
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Book Intro Call
        </Link>

        {/* Brochure */}
        <a
          href={LINKS.brochure}
          className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Download Brochure
        </a>

        {/* Resume */}
        <a
          href={LINKS.resumePdf}
          className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          View Résumé
        </a>
      </div>

      {/* Row 2 — Engineering Mesh (polished) */}
      <Link
        href={meshHref}
        className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-[2px] py-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
      >
        {/* Soft animated gradient border */}
        <span
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-teal-400 opacity-60 blur-[6px]
                    transition-all duration-500 group-hover:opacity-100 group-hover:blur-[8px]"
          aria-hidden="true"
        />

        {/* Button surface */}
        <span
          className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-2 text-sm font-semibold text-slate-700 shadow-md
                    transition-all duration-300 group-hover:-translate-y-[1px] group-hover:shadow-lg
                    dark:bg-slate-900 dark:text-slate-200 dark:group-hover:bg-slate-800"
        >
          <Network className="h-4 w-4 text-sky-500 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          Engineering Mesh Hub
        </span>
      </Link>
    </div>
  );
}
