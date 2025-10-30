// components/HeroBanner.tsx
"use client";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      className={[
        // pull hero up under the sticky navbar (h-16 ≈ 64px)
        "-mt-16 sm:-mt-16",
        "relative isolate overflow-hidden",
        "bg-slate-900 text-white",
      ].join(" ")}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/brand/justine-banner.png"   // ✅ your image
          alt="Jutellane Solutions — Cloud Confidence. Delivered."
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-28">
        <h1 className="text-center text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Cloud Confidence. Delivered.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg sm:text-xl text-white/90">
          Secure, scalable AWS services with certified DevSecOps expertise —
          helping startups and growing teams achieve cloud automation with confidence.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="/docs/resume.pdf"
            className="rounded-2xl border border-white/40 px-5 py-2.5"
          >
            View Résumé
          </a>
          <a
            href="/docs/brochure.pdf"   // ✅ fixed (see step 4)
            className="rounded-2xl border border-white/40 px-5 py-2.5"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

