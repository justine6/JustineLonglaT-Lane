// app/resume/page.tsx
import Link from "next/link";
import { LINKS } from "@/config/links";

// Always rely on config — no fallback mismatches
const RESUME_PDF = LINKS.resumePdf;

export const metadata = {
  title: "Résumé — Justine Longla T.",
  description:
    "Full résumé and one-page summary for Justine Longla T. Download PDF or view it directly in your browser.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-4 py-10">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
          Résumé
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Full résumé and one-page summary. For a tailored version,&nbsp;
          <Link href="/contact" className="relative btn-shiny">
            contact me
          </Link>
          .
        </p>

        <div className="mt-6 flex gap-3">
          {/* Download PDF */}
          <a
            href={RESUME_PDF}
            download
            className="inline-flex items-center rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40"
          >
            Download PDF
          </a>

          {/* View in new tab */}
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:opacity-90"
          >
            Open in new tab
          </a>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="mt-6 rounded-xl ring-1 ring-black/10 dark:ring-white/10 overflow-hidden bg-gray-50 dark:bg-gray-900">
          <iframe
            title="resume-pdf"
            src={`${RESUME_PDF}#view=FitH`}
            className="w-full"
            style={{ minHeight: "78vh", border: 0 }}
          />
        </div>
      </section>
    </main>
  );
}
