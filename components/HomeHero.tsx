// components/HomeHero.tsx
"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white min-h-[70vh] px-4 sm:px-6">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/brand/justine-banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-3xl mt-16 sm:mt-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Cloud Confidence. Delivered.
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Secure, scalable AWS services with certified DevSecOps expertise — helping
          startups and growing teams achieve cloud automation with confidence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/resume" className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 text-white font-medium hover:bg-white/10">
            View Résumé
          </Link>
          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 text-white font-medium hover:bg-white/10"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
