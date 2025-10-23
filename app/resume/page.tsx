// app/resume/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ResumeViewer from "@/components/ResumeViewer.client";

export const metadata: Metadata = {
  title: "Résumé — Jutellane Solutions",
  description: "View or download the full and one-page résumé.",
};

function PdfBlock({
  src,
  title,
  height = 900,
}: {
  src: string;
  title: string;
  height?: number;
}) {
  return (
    <section className="mx-auto mb-12 w-full max-w-5xl">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="space-x-2">
          <a
            href={src}
            download
            className="rounded-md border border-blue-600 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50"
          >
            Download PDF
          </a>
          <Link
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-400 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50"
          >
            Open in new tab
          </Link>
        </div>
      </div>

      {/* SSR-safe embed with iframe fallback */}
      <div className="overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10">
        <object data={src} type="application/pdf" width="100%" height={height}>
          <iframe src={src} width="100%" height={height} title={title} />
        </object>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        If the preview doesn’t load in your viewer, use the buttons above to
        open or download the PDF.
      </p>
    </section>
  );
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 pt-24 text-slate-900 dark:bg-gray-950 dark:text-gray-100 sm:px-6">
      <div className="mx-auto mb-8 max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Résumé</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Full résumé and one-page summary. For a tailored version,{" "}
          <Link href="/#contact" className="text-blue-600 underline">
            contact me
          </Link>
          .
        </p>
      </div>

      <PdfBlock src="/docs/resume.pdf" title="Résumé (Full)" />
      <PdfBlock src="/docs/resume_summary.pdf" title="Résumé (One-Page Summary)" />
    </main>
  );
}
