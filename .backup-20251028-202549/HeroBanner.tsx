"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Fades in on mount */
export default function HeroBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { const id = requestAnimationFrame(() => setShow(true)); return () => cancelAnimationFrame(id); }, []);

  return (
    <section
      className={[
        "relative overflow-hidden",
        "bg-gradient-to-tr from-teal-600/20 via-sky-500/10 to-indigo-500/10",
        "border-b border-gray-200 dark:border-gray-800"
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="relative">
          <Image
            src="/brand/justine-banner.png"
            alt="Cloud Confidence. Delivered."
            width={1600}
            height={900}
            priority
            className={[
              "w-full h-auto rounded-xl shadow-md",
              "transition-opacity duration-700 ease-out",
              show ? "opacity-100" : "opacity-0"
            ].join(" ")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent rounded-xl pointer-events-none" />
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Cloud Confidence. Delivered.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Secure, scalable AWS services with certified DevSecOps expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
