import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering-Grade Publishing | Case Study",
  description:
    "A platform engineering case study: turning a blog into a contract-validated, deterministic publishing system with automated structural validation and CI/CD-style release.",
  alternates: {
    canonical: "/case-studies/engineering-grade-publishing",
  },
  openGraph: {
    title: "Engineering-Grade Publishing",
    description:
      "How publishing was rebuilt using platform engineering principles: contracts, deterministic layouts, automated validation, and CI/CD-style release engineering.",
    type: "article",
    images: [
      {
        url: "/assets/img/case-studies/engineering-grade-publishing/pipeline-diagram.png",
        width: 1200,
        height: 1200,
        alt: "Engineering-grade publishing pipeline diagram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering-Grade Publishing",
    description:
      "A contract-validated publishing platform: deterministic layouts + automated validation + CI/CD-style release.",
    images: ["/assets/img/case-studies/engineering-grade-publishing/pipeline-diagram.png"],
  },
};

const IMG_BASE = "/assets/img/case-studies/engineering-grade-publishing";

export default function CaseStudyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {/* Top bar / links */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/engineering-mesh"
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          ← Back to Engineering MeshHub
        </Link>

        <Link
          href="/case-studies/engineering-grade-publishing"
          className="text-sm font-medium text-slate-600 hover:underline"
        >
          Permalink
        </Link>
      </div>

      {/* Content */}
      <article className="prose prose-slate max-w-none">
        <h1>Engineering-Grade Publishing</h1>

        <p className="lead">
          A case study in applying platform engineering principles to static publishing.
          This system transforms content into contract-validated, reproducible artifacts that
          move through a CI/CD-style pipeline before release.
        </p>

        {/* Primary CTA */}
        <div className="not-prose mt-8">
          <Link
            href="/case-studies/engineering-grade-publishing"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-blue-700"
          >
            Open this Case Study →
          </Link>
        </div>

        <hr />

        <h2>Visual Model</h2>
        <p>
          Publishing modeled like CI/CD: contracts define validity, validation enforces invariants,
          and only compliant content is released.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={`${IMG_BASE}/pipeline-diagram.png`}
            alt="Engineering-grade publishing pipeline diagram"
            width={1200}
            height={1200}
            priority
            className="h-auto w-full"
          />
        </div>

        <h2>Platform Pillars</h2>
        <p>
          These pillars keep publishing deterministic, safe to refactor, and easy to scale.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={`${IMG_BASE}/platform-pillars.png`}
            alt="Foundations of an engineering-grade publishing platform"
            width={1200}
            height={1200}
            className="h-auto w-full"
          />
        </div>

        <h2>The Contract Concept</h2>
        <p>
          Without a contract, structure drifts and automation becomes brittle. With a contract,
          artifacts become predictable and safe for automation.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={`${IMG_BASE}/contract-concept.png`}
            alt="Without contract vs with contract comparison"
            width={1200}
            height={1200}
            className="h-auto w-full"
          />
        </div>

        <h2>What This Enables</h2>
        <ul>
          <li>Deterministic layout behavior across pages</li>
          <li>Automated structural validation as a release gate</li>
          <li>Reusable platform components (header, footer, CSS guarantees)</li>
          <li>A content pipeline that behaves like infrastructure</li>
          <li>Safer refactors without breaking historical content</li>
        </ul>

        <hr />

        <div className="not-prose mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Discuss a platform build →
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Read the series →
          </Link>
        </div>
      </article>
    </main>
  );
}
