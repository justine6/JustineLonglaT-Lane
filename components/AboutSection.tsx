"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="bg-white px-4 py-16 text-slate-900 dark:bg-slate-950 dark:text-white sm:py-20"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-4xl"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80"
        >
          About JLT-Lane
        </motion.p>

        <motion.h1
          id="about-title"
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          About Justine Longla T.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300"
        >
          I am <strong className="font-semibold text-slate-900 dark:text-white">Justine Longla T.</strong>,
          a <strong className="font-semibold text-slate-900 dark:text-white">Platform Engineer, DevSecOps specialist, and cloud solutions builder</strong>.
          I design, secure, and operate production platforms across AWS,
          Microsoft Azure, and modern web environments.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg"
        >
          My work brings infrastructure, identity, CI/CD, security,
          observability, automation, and operations together as one coherent
          platform system. This integrated approach helps replace fragmented
          tooling and unclear ownership with secure defaults, reusable delivery
          patterns, dependable operations, and long-term architectural direction.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg"
        >
          I believe architecture must precede implementation. Before a product
          or platform is built, its requirements, users, workflows, boundaries,
          risks, and operating model should be understood. Through JLT-Lane, I
          help organizations move from an idea or technical challenge to a
          governed, implementation-ready direction—and then into disciplined
          delivery when the scope is approved.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg"
        >
          That work may include product discovery, platform architecture,
          infrastructure as code, secure delivery pipelines, identity and access
          control, cloud security, observability, operational readiness, and
          continuous improvement. The objective is not simply to deploy
          technology, but to create systems that remain secure, maintainable,
          supportable, and useful over time.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg"
        >
          I maintain the JLT-Lane ecosystem as both a live production environment
          and an evolving reference platform. It provides a practical setting in
          which architecture, engineering, governance, security, documentation,
          and platform operations can be designed, tested, demonstrated, and
          improved together.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg"
        >
          My multidisciplinary background in science education, environmental
          and urban systems, stakeholder engagement, healthcare modernization,
          and cloud engineering strengthens how I approach complex technical
          problems: with curiosity, structure, clear communication, and respect
          for the people who must use and operate the systems we create.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg"
        >
          My goal is simple: <strong className="font-semibold text-slate-900 dark:text-white">leave systems stronger than I found them, empower the people who operate them, and deliver technology with integrity and purpose.</strong>
        </motion.p>
      </motion.div>
    </section>
  );
}
