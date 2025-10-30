"use client";

import Image from "next/image";
import { motion, useReducedMotion, easeOut, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0, // tweak here if you want a global delay
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export default function CertificationsGrid() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={prefersReduced ? undefined : container}
      initial={prefersReduced ? undefined : "hidden"}
      whileInView={prefersReduced ? undefined : "show"}
      viewport={prefersReduced ? undefined : { once: true, amount: 0.2 }}
    >
      {/* Card 1 */}
      <motion.div variants={prefersReduced ? undefined : item} className="border p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out"
  >
        <Image
          src="/images/AWS Solutions architect professional logo.png"
          alt="AWS Certified Solutions Architect – Professional"
          width={256}
          height={256}
          className="w-24 h-24 mx-auto mb-4 object-contain"
        />
        <h3 className="text-xl font-semibold mb-2">AWS Solutions Architect – Professional</h3>
        <p className="text-gray-500 mb-2">Designing enterprise-grade, highly available systems on AWS.</p>
        <a
          href="https://www.credly.com/users/justine-longla-tekang/badges"
          target="_blank"
          className="text-blue-600 hover:underline inline-block mt-2"
        >
          View Credential
        </a>
      </motion.div>

      {/* Card 2 */}
      <motion.div variants={prefersReduced ? undefined : item} className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
        <Image
          src="/images/AWS-Certified-DevOps-Engineer-Professional.png"
          alt="AWS Certified DevOps Engineer – Professional"
          width={256}
          height={256}
          className="w-24 h-24 mx-auto mb-4 object-contain"
        />
        <h3 className="text-xl font-semibold mb-2">AWS DevOps Engineer – Professional</h3>
        <p className="text-gray-500 mb-2">Expertise in CI/CD, security, observability, and scalable automation.</p>
        <a
          href="https://www.credly.com/users/justine-longla-tekang/badges"
          target="_blank"
          className="text-blue-600 hover:underline inline-block mt-2"
        >
          View Credential
        </a>
      </motion.div>

      {/* Card 3 */}
      <motion.div variants={prefersReduced ? undefined : item} className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
        <Image
          src="/images/microsoft-logo-microsoft.webp"
          alt="Microsoft Certifications"
          width={128}
          height={128}
          className="w-12 h-12 mx-auto mb-4 object-contain"
        />
        <h3 className="text-xl font-semibold">Microsoft Azure & Power Platform</h3>
        <p className="text-gray-500">DevOps, AI Engineer, Power BI Analyst</p>
        <a
          href="https://learn.microsoft.com/en-us/users/fnulonglajustinetekang-3036/credentials"
          target="_blank"
          className="text-blue-600 hover:underline inline-block mt-2"
        >
          View Credentials
        </a>
      </motion.div>
    </motion.div>
  );
}
