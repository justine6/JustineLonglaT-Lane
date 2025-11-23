"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { LINKS } from "@/config/links";

export default function ConditionalHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section
      className="
        relative text-white overflow-hidden
        min-h-[60vh] md:min-h-[72vh] lg:min-h-[78vh]
        flex items-center
        pt-24 md:pt-28 pb-16
      "
    >
      {/* Background image sits behind and is non-interactive */}
      <motion.div
        style={{ y, backgroundPosition: "center 28%" }}
        className="
          absolute inset-0 -z-10 pointer-events-none
          bg-[url('/brand/justine-banner.png')] bg-cover bg-center
        "
        aria-hidden="true"
      />

      {/* Optional dark-mode overlay (non-interactive) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-transparent dark:bg-black/35"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0, ease: "easeOut" }}
        >
          {/* Intro Call (Cal.com) */}
          <Link href={LINKS.introCall} className="hero-cta-shine" prefetch>
            Schedule Your Intro Call
          </Link>

          {/* Contact page */}
          <Link href={LINKS.contact} className="hero-cta-shine" prefetch>
            Contact
          </Link>

          {/* Résumé PDF */}
          <a
            href={LINKS.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/70 bg-white/10 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/50 hover:bg-white/20 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Résumé (PDF)
          </a>

          {/* Brochure PDF */}
          <a
            href={LINKS.brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/70 bg-white/10 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/50 hover:bg-white/20 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Download Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
