
"use client";

import Image from "next/image";
import HeroCTA from "@/components/HeroCTA";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-slate-50 to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-sky-950">
      
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-soft-light">
        <Image
          src="/hero/justine-hero-soft.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />

      {/* Foreground */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:py-24 lg:py-28">
        
        {/* Glass container */}
        <div className="mx-auto max-w-3xl rounded-3xl bg-white/90 px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-900/85 dark:ring-slate-700/70 sm:px-10">
          
          {/* Logo (clean + crisp) */}
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-slate-900/5 ring-1 ring-slate-200 shadow-lg dark:bg-white/5 dark:ring-white/10">
            <Image
              src="/brand/logo-shield.png"
              alt="JLT-Lane Logo"
              width={92}
              height={92}
              priority
              className="drop-shadow-[0_10px_25px_rgba(37,99,235,0.35)]"
            />
          </div>

          {/* Platform badge */}
          <div className="mt-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
            Platform Engineering · DevSecOps · Cloud Security
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            Platform clarity,
            <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
              engineered as a system
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Secure cloud platforms, DevSecOps automation, and identity-driven
            access control — designed to operate as one governed system.
          </p>

          {/* Trust line */}
          <p className="mx-auto mt-4 max-w-xl text-xs text-slate-500 dark:text-slate-400">
            Architecture · Automation · Access Control · Observability · Operations
          </p>

          {/* CTA */}
          <div className="mt-8">
            <HeroCTA />
          </div>

        </div>
      </div>
    </section>
  );
}
