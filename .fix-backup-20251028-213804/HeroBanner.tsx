"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 20); return () => clearTimeout(t); }, []);

  return (
    <section className="relative isolate">
      {/* Background banner */}
      <div
        className={[
          "relative w-full overflow-hidden",
          "transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <Image
          src="/brand/justine-banner.png"
          alt="Cloud Confidence. Delivered."
          width={1920}
          height={780}
          priority
          className="h-[46svh] w-full object-cover sm:h-[56svh]"
        />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="pointer-events-auto text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow">
            Cloud Confidence. Delivered.
          </h1>
          <p className="mt-3 text-base sm:text-lg opacity-90">
            Secure / scalable AWS services with certified DevSecOps expertise — helping
            startups and growing teams achieve cloud automation with confidence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/resume"
              className="rounded-xl px-4 py-2 border border-gray-300/60 hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              View Résumé
            </Link>
            <Link
              href="/docs/jutellane-brochure.pdf"
              className="rounded-xl px-4 py-2 border border-gray-300/60 hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
