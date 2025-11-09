// components/HeroCTA.tsx
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
        href={LINKS.brochure}        // /files/brochure.pdf
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open brochure (PDF) in a new tab"
        className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 shadow-sm"
      >
        Download Brochure (PDF)
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
