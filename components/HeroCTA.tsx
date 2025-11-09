// components/HeroCTA.tsx
import Link from "next/link";
import { LINKS } from "@/config/links";

export default function HeroCTA() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Link
        href={LINKS.introCall}
        className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-sm"
      >
        Book Intro Call
      </Link>

      <Link
        href={LINKS.brochure}                 // <- now points to /docs/brochure-2025-11.pdf
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 shadow-sm"
      >
        Download Brochure (PDF)
      </Link>

      <Link
        href={LINKS.resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-all duration-200"
      >
        View Résumé (PDF)
      </Link>
    </div>
  );
}
