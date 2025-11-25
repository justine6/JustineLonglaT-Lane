// components/HeroCTA.tsx
"use client";

import Link from "next/link";
import { LINKS } from "@/config/links";

export default function HeroCTA() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {/* ✅ Intro Call / Cal.com link */}
      <Link
        href={LINKS.introCall}
        className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-sm"
      >
        Book Intro Call
      </Link>

      {/* ✅ Brochure PDF — now 100% correct */}
      <Link
        href={LINKS.brochure} // /files/brochure.pdf
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open brochure (PDF) in a new tab"
        className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 shadow-sm"
      >
        Download Brochure (PDF)
      </Link>

      {/* ⭐ NEW: Docs & Toolkit button */}
      <Link
        href={LINKS.docs}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open technical docs and automation toolkit"
        className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 text-white font-semibold shadow-sm hover:from-blue-600 hover:via-sky-500 hover:to-emerald-500 hover:shadow-lg transition-all duration-200"
      >
        View Docs
      </Link>

      {/* ✅ Résumé PDF */}
      <Link
        href={LINKS.resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open résumé (PDF) in a new tab"
        className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-all duration-200"
      >
        View Résumé (PDF)
      </Link>
    </div>
  );
}
