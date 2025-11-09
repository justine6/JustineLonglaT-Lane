"use client";

import Image from "next/image";
import { LINKS } from '@/config/links';

export default function HomeHero() {
  return (
    <section className="-mt-px overflow-hidden relative">
      <div className="relative w-full h-[70dvh] min-h-[520px]">
        <Image
          src="/brand/justine-banner.png"
          alt="Jutellane Solutions • Cloud Confidence. Delivered."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl px-4 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md">
              Cloud Confidence. Delivered.
            </h1>
            <p className="mt-0 text-lg sm:text-2xl text-white/90">
              Secure, scalable AWS services with certified DevSecOps expertise — helping startups
              and growing teams achieve cloud automation with confidence.
            </p>
            <div className="mt-0 flex justify-center gap-4">
              <a href="/docs/resume.pdf" className="rounded-xl border border-white/60 bg-white/10 px-5 py-2 text-white backdrop-blur hover:bg-white/20">View Résumé</a>
              <a href="/files/brochure.pdf" className="rounded-xl border border-white/60 bg-white/10 px-5 py-2 text-white backdrop-blur hover:bg-white/20">Download Brochure</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



