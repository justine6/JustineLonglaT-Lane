// components/HomeHero.tsx
"use client";

import Image from "next/image";
import HeroCTA from "@/components/HeroCTA";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-slate-50 to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-sky-950">
      {/* Soft hero background */}
      <div className="pointer-events-none absolute inset-0 opacity-45 mix-blend-soft-light">
        <Image
          src="/hero/justine-hero-soft.png"
          alt="Justine Longla T. hero"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-20 text-center sm:py-24 lg:py-28">
        {/* Logo + tagline */}
        <div className="rounded-3xl bg-white/85 px-8 py-8 shadow-xl ring-1 ring-slate-200/70 backdrop-blur dark:bg-slate-900/80 dark:ring-slate-700/70">
          <Image
            src="/brand/justine-logo.png"
            alt="Justine Longla T. logo"
            width={140}
            height={140}
            className="mx-auto h-28 w-28"
          />
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Cloud Confidence. Delivered.
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Secure, Scalable AWS Services with Justine Tekang — Certified DevSecOps & Cloud Automation Expert.
          </p>

          {/* Unified hero buttons */}
          <HeroCTA />

      </div>
      </div>
    </section>
  );
}
