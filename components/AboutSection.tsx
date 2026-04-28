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
          About Justine Longla T.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          I design, operate, and secure production cloud platforms — from
          infrastructure and CI/CD pipelines to application delivery,
          observability, and platform operations.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          I am{" "}
          <strong className="font-semibold text-slate-900">
            Justine Longla T.
          </strong>
          , a{" "}
          <strong className="font-semibold text-slate-900">
            Platform Engineer and DevSecOps specialist
          </strong>{" "}
          with hands-on experience building reliable, secure, and scalable
          systems across AWS, Microsoft Azure, and modern web platforms.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          Over time, I&apos;ve realized that many teams don&apos;t struggle
          because they lack tools — they struggle because their{" "}
          <strong className="font-semibold text-slate-900">
            systems are fragmented
          </strong>
          .
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          Infrastructure, CI/CD, access control, observability, and operations
          often evolve separately. This can lead to duplicated effort,
          inconsistent experiences, unclear ownership, and a lack of long-term
          architectural direction.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          My work focuses on bringing these pieces together into coherent,
          well-governed platform systems — where{" "}
          <strong className="font-semibold text-slate-900">
            security, reliability, and delivery
          </strong>{" "}
          function as a unified whole.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          I proactively identify platform risks, remediate vulnerabilities,
          automate infrastructure and release workflows, and ensure systems are
          observable, resilient, and easy to operate in production.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          I maintain the JLT-Lane platform as both a live production environment
          and a teaching system, similar to reference architectures such as
          Microsoft Contoso or AWS sample platforms.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-base leading-relaxed text-slate-700 sm:text-lg"
        >
          My goal is simple:{" "}
          <strong className="font-semibold text-slate-900">
            leave systems stronger than I found them, empower the people who
            operate them, and deliver technology with integrity and purpose.
          </strong>
        </motion.p>
      </motion.div>
    </section>
  );
}