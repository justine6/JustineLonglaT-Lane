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
      className="mx-auto max-w-4xl px-4 py-12 sm:py-14"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h1
          id="about-title"
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          About Justine
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          I design, operate, and secure production cloud ecosystems — from infrastructure and CI/CD
          pipelines to application delivery and observability. I’m{" "}
          <strong className="font-semibold text-slate-900">Justine Longla T.</strong>, a Senior DevSecOps
          & Platform Architect with hands-on experience building reliable, secure, and scalable systems
          across AWS, Microsoft Azure, and modern web platforms.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          My work sits at the intersection of{" "}
          <strong className="font-semibold text-slate-900">security, reliability, and delivery</strong>.
          I proactively identify platform risks, remediate vulnerabilities, automate infrastructure and
          release workflows, and ensure systems are observable, resilient, and easy to operate in
          production. Whether supporting enterprise environments or building my own ecosystem, I approach
          every system with an ownership mindset.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          I maintain this platform intentionally — as both a live production environment and a teaching
          system. Like reference architectures (for example Microsoft Contoso or AWS sample platforms), it
          allows me to document architectural decisions, validate automation patterns, and demonstrate
          DevSecOps best practices end-to-end.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          Beyond engineering, I care deeply about sustainability, mentorship, and knowledge sharing. My
          goal in every environment is simple:{" "}
          <strong className="font-semibold text-slate-900">
            leave systems stronger than I found them, empower the people who operate them, and deliver
            technology with integrity and purpose.
          </strong>
        </motion.p>
      </motion.div>
    </section>
  );
}
