// components/HomeLogoBanner.tsx
"use client";
import Image from "next/image";

export default function HomeLogoBanner() {
  return (
    // Full-bleed wrapper: breaks out of page max-width
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      {/* Maintain aspect on desktop, taller on mobile */}
      <div className="relative h-[52vw] min-h-[320px] max-h-[70vh]">
        {/* Background image fills and crops nicely */}
        <Image
          src="/brand/justine-banner.png"
          alt="Justine Hero Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark gradient overlay to make text readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* Headline copy */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="px-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow">
              Cloud Confidence. Delivered.
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 drop-shadow">
              Secure / scalable AWS services with certified DevSecOps expertise —
              helping startups and growing teams automate with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

