// components/sections/AboutSection.tsx
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
        to application delivery and observability. I’m <strong>FNU Longla Justine Tekang</strong>, a Senior
        DevSecOps Engineer, Platform Engineer, and Cloud Architect with over seven years of hands-on
        experience building reliable, secure, and scalable systems across AWS, Microsoft Azure, and modern
        web platforms.
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
        enterprise environments or building my own cloud ecosystem, I approach every system with an
        ownership mindset.
      </motion.p>

      <motion.p
        className="text-gray-700 leading-relaxed text-base sm:text-lg mb-5"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        I maintain this ecosystem intentionally — as both a live production platform and a teaching
        environment. Much like reference architectures such as Microsoft’s Contoso or AWS sample platforms,
        it allows me to document decisions, experiment responsibly, and demonstrate best practices in
        DevSecOps, platform engineering, and cloud security without constraints.
      </motion.p>

      <motion.p
        className="text-gray-700 leading-relaxed text-base sm:text-lg"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Beyond engineering, I care deeply about sustainability, mentorship, and knowledge sharing.
        My goal in every environment is simple: <strong>leave systems stronger than I found them,
        empower the people who operate them, and deliver technology with integrity and purpose.</strong>
      </motion.p>
    </section>
  );
}
