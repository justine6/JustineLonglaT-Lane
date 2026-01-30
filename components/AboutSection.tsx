"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        About Justine
      </motion.h1>

      <motion.p
        className="text-gray-700 leading-relaxed text-base sm:text-lg mb-5"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        I design, operate, and secure production cloud ecosystems — from infrastructure and CI/CD pipelines
        to application delivery and observability. I’m <strong>Justine Longla T.</strong>, a Senior DevSecOps
        & Platform Architect with hands-on experience building reliable, secure, and scalable systems across
        AWS, Microsoft Azure, and modern web platforms.
      </motion.p>

      <motion.p
        className="text-gray-700 leading-relaxed text-base sm:text-lg mb-5"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        My work sits at the intersection of <strong>security, reliability, and delivery</strong>. I proactively
        identify platform risks, remediate vulnerabilities, automate infrastructure and release workflows,
        and ensure systems are observable, resilient, and easy to operate in production. Whether supporting
        enterprise environments or building my own ecosystem, I approach every system with an ownership mindset.
      </motion.p>

      <motion.p
        className="text-gray-700 leading-relaxed text-base sm:text-lg mb-5"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        I maintain this platform intentionally — as both a live production environment and a teaching system.
        Like reference architectures (for example Microsoft Contoso or AWS sample platforms), it allows me to
        document architectural decisions, validate automation patterns, and demonstrate DevSecOps best practices
        end-to-end.
      </motion.p>

      <motion.p
        className="text-gray-700 leading-relaxed text-base sm:text-lg"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Beyond engineering, I care deeply about sustainability, mentorship, and knowledge sharing. My goal in
        every environment is simple: <strong>leave systems stronger than I found them, empower the people who
        operate them, and deliver technology with integrity and purpose.</strong>
      </motion.p>
    </section>
  );
}
