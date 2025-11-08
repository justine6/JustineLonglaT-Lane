import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/config/links";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner */}
      <div className="absolute inset-0">
        <Image
          src="/brand/justine-banner.png"
          alt="Justine Longla T. - Cloud Confidence Delivered"
          fill
          priority
          className="object-cover object-center"
        />
        {/* If you want it fully transparent, remove this overlay div */}
        <div className="absolute inset-0 bg-black/25 sm:bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-[70vh] sm:min-h-[75vh] items-center justify-center text-center">
          <div className="w-full">
            <h1 className="text-white font-extrabold tracking-tight text-3xl sm:text-5xl lg:text-6xl">
              Cloud Confidence. Delivered.
            </h1>

            <p className="mx-auto mt-0 max-w-4xl text-white/90 text-base sm:text-xl lg:text-2xl">
              Secure, scalable AWS services with certified DevSecOps expertise —
              helping startups and growing teams achieve cloud automation with confidence.
            </p>

            <div className="mt-0 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* ✅ Primary: Intro Call → scroll to contact embed */}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-white/10 px-6 py-3 text-white backdrop-blur ring-1 ring-white/60 hover:bg-white/20 transition-colors"
              >
                Book Intro Call
              </Link>

              {/* Résumé (opens real PDF) */}
              <Link
                href={LINKS.resume}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-white/10 px-6 py-3 text-white backdrop-blur ring-1 ring-white/60 hover:bg-white/20 transition-colors"
              >
                View Résumé
              </Link>

              {/* Brochure (downloads real PDF) */}
              <a
                href={LINKS.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="Download brochure (PDF) in a new tab"
              >
                Download a Brochure
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

