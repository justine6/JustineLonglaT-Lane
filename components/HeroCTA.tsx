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

      {/* Row 2 — Engineering Mesh */}
      <Link
        href={meshHref}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-400 bg-white px-6 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
      >
        <Network className="h-4 w-4" aria-hidden="true" />
        Engineering Mesh Hub
      </Link>
    </div>
  );
}
