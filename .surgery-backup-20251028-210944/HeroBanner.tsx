"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      aria-label="Brand hero"
      className={[
        "relative overflow-hidden",
        "mx-auto w-full",
        "bg-gradient-to-r from-teal-600/20 via-sky-600/10 to-indigo-600/20",
        "rounded-b-2xl border-b",
        "transition-opacity duration-700 ease-out",
        show ? "opacity-100" : "opacity-0"
      ].join(" ")}
    >
      {/* Background banner image */}
      <div className="relative h-[220px] sm:h-[280px] md:h-[340px]">
        <Image
          src="/brand/justine-banner.png"
          alt="Jutellane Solutions — Cloud Confidence. Delivered."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle overlay to keep text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/20" />
      </div>

      {/* Centered copy / actions */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-4xl text-center text-white drop-shadow">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Cloud Confidence. Delivered.
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-100/95">
            Secure, scalable AWS services with certified DevSecOps expertise—helping teams ship with confidence.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="/resume"
              className="rounded-xl border px-4 py-2 text-sm md:text-base bg-white/90 text-gray-900 hover:bg-white transition"
            >
              View Résumé
            </Link>
            <Link
              href="/docs/jutellane-brochure.pdf"
              className="rounded-xl border px-4 py-2 text-sm md:text-base bg-emerald-500/90 hover:bg-emerald-500 text-white transition"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
