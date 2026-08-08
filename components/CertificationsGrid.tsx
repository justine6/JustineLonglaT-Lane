"use client";

import Image from "next/image";
import {
  easeOut,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
};

export default function CertificationsGrid() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="grid grid-cols-1 gap-8 md:grid-cols-3"
      variants={prefersReduced ? undefined : container}
      initial={prefersReduced ? undefined : "hidden"}
      whileInView={prefersReduced ? undefined : "show"}
      viewport={
        prefersReduced ? undefined : { once: true, amount: 0.2 }
      }
    >
      {/* Card 1 */}
      <motion.div
        variants={prefersReduced ? undefined : item}
        className="rounded-2xl border p-6 shadow-md transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl"
      >
        <Image
          src="/images/AWS Solutions architect professional logo.png"
          alt="AWS Certified Solutions Architect – Professional"
          width={256}
          height={256}
          className="mx-auto mb-4 h-24 w-24 object-contain"
        />

        <h3 className="mb-2 text-xl font-semibold">
          AWS Solutions Architect – Professional
        </h3>

        <p className="mb-2 text-gray-500">
          Designing enterprise-grade, highly available systems on AWS.
        </p>

        <a
          href="https://www.credly.com/users/justine-longla-tekang/badges"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-blue-600 hover:underline"
        >
          View Credential
        </a>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        variants={prefersReduced ? undefined : item}
        className="rounded-2xl border p-6 shadow transition hover:shadow-lg"
      >
        <Image
          src="/images/AWS-Certified-DevOps-Engineer-Professional.png"
          alt="AWS Certified DevOps Engineer – Professional"
          width={256}
          height={256}
          className="mx-auto mb-4 h-24 w-24 object-contain"
        />

        <h3 className="mb-2 text-xl font-semibold">
          AWS DevOps Engineer – Professional
        </h3>

        <p className="mb-2 text-gray-500">
          Expertise in CI/CD, security, observability, and scalable automation.
        </p>

        <a
          href="https://www.credly.com/users/justine-longla-tekang/badges"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-blue-600 hover:underline"
        >
          View Credential
        </a>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        variants={prefersReduced ? undefined : item}
        className="rounded-2xl border p-6 shadow transition hover:shadow-lg"
      >
        <Image
          src="/images/microsoft-logo-microsoft.webp"
          alt="Microsoft Certifications"
          width={128}
          height={128}
          className="mx-auto mb-4 h-12 w-12 object-contain"
        />

        <h3 className="text-xl font-semibold">
          Microsoft Azure &amp; Power Platform
        </h3>

        <p className="text-gray-500">
          DevOps, AI Engineer, Power BI Analyst
        </p>

        <a
          href="https://learn.microsoft.com/en-us/users/fnulonglajustinetekang-3036/credentials"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-blue-600 hover:underline"
        >
          View Credentials
        </a>
      </motion.div>
    </motion.div>
  );
}