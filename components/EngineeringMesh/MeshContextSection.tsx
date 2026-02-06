// components/EngineeringMesh/MeshContextSection.tsx
import React from "react";

type Props = {
  PAGE_SECTION: string;
  HEADING: string;
  MUTED: string;
};

export default function MeshContextSection({ PAGE_SECTION, HEADING, MUTED }: Props) {
  return (
    <>
      {/* Problem */}
      <section id="problem" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            Context & Motivation: Platform Sprawl Without Guardrails
          </h2>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            As my consulting work, documentation, blogs, and engineering experiments grew, the platform behind them
            started to sprawl. Each new site or tool solved an immediate need — but together they introduced
            duplication, inconsistent deployments, and invisible risk.
          </p>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            Static sites lived next to dynamic ones. Some used CI pipelines, others were deployed manually. DNS,
            environment variables, and build behaviors weren’t always aligned. The system worked — but it wasn’t
            designed.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Multiple sites with different deployment methods</li>
            <li>Inconsistent environment configuration</li>
            <li>No shared observability or operational guardrails</li>
            <li>Manual fixes instead of systemic solutions</li>
          </ul>
        </div>
      </section>

      {/* Role */}
      <section id="role" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            My Role: Acting as Platform Engineer
          </h2>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            I stepped into the role of a platform engineer — not just shipping features, but shaping the environment
            in which every site and service operated.
          </p>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            My focus shifted from “build the next thing” to “make everything predictable.” That meant aligning CI/CD,
            standardizing environments, reducing operational noise, and introducing guardrails that made safe delivery
            the default.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Designed and unified CI/CD pipelines across sites</li>
            <li>Standardized DNS, environment variables, and hosting behavior</li>
            <li>Introduced observability and stability patterns for cloud workloads</li>
            <li>Built reusable automation to replace manual operations</li>
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className={`scroll-mt-24 ${PAGE_SECTION}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
            The Solution: The Engineering Mesh Architecture
          </h2>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            The result was the <strong>Engineering Mesh</strong> — a shared platform layer connecting consulting,
            documentation, blogs, and projects through common deployment, hosting, and operational practices.
          </p>

          <p className={`mt-4 text-sm md:text-base ${MUTED}`}>
            Instead of isolated sites, the system became a coordinated ecosystem. CI/CD pipelines enforced
            consistency. DNS and hosting rules were standardized. Automation handled repetitive tasks. Guardrails made
            reliability and security part of the architecture — not afterthoughts.
          </p>

          <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm md:text-base ${MUTED}`}>
            <li>Shared CI/CD patterns across all web properties</li>
            <li>Consistent DNS and environment routing</li>
            <li>Automated deployment and verification steps</li>
            <li>Cloud guardrails for stability, cost, and security</li>
          </ul>
        </div>
      </section>
    </>
  );
}
