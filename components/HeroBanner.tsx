import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden rounded-none bg-slate-900 text-white">
      {/* Background banner image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/brand/justine-banner.png"
          alt="Justine Longla T. — DevSecOps & Cloud"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 sm:text-sm">
          Jutellane Solutions with Justine
        </p>

        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Cloud Confidence. Delivered.
        </h1>

        <p className="mb-8 max-w-2xl text-sm text-sky-100 sm:text-base md:text-lg">
          Secure, scalable AWS services with certified DevSecOps expertise —
          helping startups and growing teams achieve cloud automation with
          confidence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400"
          >
            Schedule Your Intro Call
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/80 px-5 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Contact
          </Link>

          <Link
            href="/justine-longla-resume.pdf"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2 text-xs font-medium text-sky-100 hover:bg-white/10 sm:text-sm"
          >
            Résumé
          </Link>
        </div>
      </div>
    </section>
  );
}
