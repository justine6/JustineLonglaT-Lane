import type { Metadata } from "next";
import ResumeViewer from "@/components/ResumeViewer.client";

export const metadata: Metadata = {
  title: "Résumé — Jutellane Solutions",
  description: "View and download the full and one-page résumé.",
};

export default function ResumePage() {
  const fullSrc = "/docs/Justine_Tekang_Jutellane_Solutions_Resume.pdf";
  const summarySrc = "/docs/Justine_Tekang_Jutellane_Solutions_Resume_Summary.pdf";

  return (
    <main className="min-h-screen px-4 pt-24 sm:px-6">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold">Résumé</h1>
        <ResumeViewer fullSrc={fullSrc} summarySrc={summarySrc} height={900} />
      </section>
    </main>
  );
}
