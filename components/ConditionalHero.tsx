"use client";

import Link from "next/link";
import { LINKS } from "@/config/links";
import { motion, useScroll, useTransform } from "framer-motion";

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
          className="flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0, ease: "easeOut" }}
        >
          <Link href={LINKS.introCall} className="hero-cta-shine" prefetch>
            Schedule Your Intro Call
          </Link>

          {/* Always send to homepage contact section */}
          <Link href="/#contact" className="hero-cta-shine" prefetch={false}>
            Contact
          </Link>

          <a
            href="/justine-longla-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-transform duration-300 shadow-md hover:shadow-lg"
          >
            Résumé
          </a>
        </motion.div>
      </div>
    </section>
  );
}
