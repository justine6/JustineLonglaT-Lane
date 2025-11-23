import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/config/links";

import AnimatedSection from "@/components/AnimatedSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import CertificationsGrid from "@/components/CertificationsGrid";
import PublicationsGrid, { type Post } from "@/components/PublicationsGrid";
import postsData from "@/content/projects/posts.json";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 pt-20 text-gray-900 dark:bg-gray-950 dark:text-gray-100 sm:px-6 sm:py-10 md:pt-24">
      {/* ✅ Hero logo card under the global hero */}
      <section className="flex justify-center py-10">
        <div className="w-full max-w-5xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
          <div className="flex items-center justify-center p-4 sm:p-6 md:p-8">
            <Image
              src="/brand/justine-logo.png"
              alt="Justine Longla T. — DevSecOps · Cloud · Sustainability"
              width={1400}
              height={980}
              priority
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* 🔷 Header Section (supporting hero copy + CTAs) */}
      <AnimatedSection>
        <section className="mx-auto max-w-5xl px-2 text-center">
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Cloud Confidence. Delivered.
          </h1>
          <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl">
            Secure, Scalable AWS Services with Justine Tekang — Certified
            DevSecOps &amp; Cloud Automation Expert
          </p>
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            {/* Open résumé PDF in new tab */}
            <a
              href={LINKS.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30"
            >
              View Résumé
            </a>

            {/* Open brochure PDF in new tab */}
            <a
              href={LINKS.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-6 py-3 text-lg text-blue-600 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30"
            >
              Download Brochure
            </a>
          </div>

        </section>
      </AnimatedSection>

      {/* 🔷 Services Section — wrapped in a soft band */}
      <AnimatedSection>
        <section
          id="services"
          className="scroll-mt-24 md:scroll-mt-28"
        >
          <div className="mx-auto mb-16 max-w-5xl px-2 py-10 rounded-3xl bg-slate-50 shadow-sm dark:bg-slate-900/40">
            <h2 className="mb-8 text-center text-2xl font-semibold sm:text-3xl">
              My Services
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
              {[
                {
                  title: "Launch & Migrate",
                  description:
                    "Secure AWS starter migration services for startups and small businesses.",
                },
                {
                  title: "Secure & Scale",
                  description:
                    "DevSecOps pipelines, automation, and compliance for growing teams.",
                },
                {
                  title: "Operate & Optimize",
                  description:
                    "Managed AWS services, cost audits, and 24/7 monitoring.",
                },
              ].map(({ title, description }) => (
                <div
                  key={title}
                  className="flex flex-col justify-between rounded-2xl border bg-white p-6 shadow transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/80"
                >
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                      {description}
                    </p>
                    <p className="mt-3 font-medium text-indigo-600 dark:text-indigo-400">
                      Contact for a custom quote
                    </p>
                  </div>
                  <div className="mt-5">
                    <a
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 💡 Why Work With Me */}
      <AnimatedSection>
        <section className="mx-auto my-10 max-w-5xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-2xl font-semibold sm:text-3xl">
            Why Work With Me?
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[220px,1fr] md:gap-10">
            {/* Photo */}
            <div className="justify-self-center md:justify-self-start">
              <Image
                src="/images/justine-profile.png"
                alt="Justine Tekang – Cloud & DevSecOps Architect"
                width={220}
                height={220}
                priority
                className="rounded-full border-4 border-gray-200 object-cover shadow-md transition-transform duration-300 hover:scale-105 dark:border-gray-700"
              />
            </div>

            {/* Copy */}
            <div>
              <p className="mb-2 text-sm italic text-gray-600 dark:text-gray-400">
                “Secure, scalable, and sustainable cloud solutions that move your
                business forward.”
              </p>

              <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
                <li>7+ years in Cloud Architecture, DevOps, and automation</li>
                <li>AWS &amp; Microsoft certified</li>
                <li>Multilingual — English, French, Dutch</li>
                <li>Proven results in healthcare, fintech, and e-commerce</li>
              </ul>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50"
                >
                  Contact
                </Link>
                <a
                  href="/justine-longla-resume.pdf"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50"
                >
                  View Résumé
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 🔷 Latest Publications */}
      <AnimatedSection>
        <section
          id="publications"
          className="mx-auto mb-16 max-w-6xl px-4 md:px-6 scroll-mt-24"
        >
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Latest Publications
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Practical guides, patterns, and field notes from real
                engagements.
              </p>
            </div>
            <div className="hidden sm:block">
              <Link
                href="/posts"
                className="inline-flex items-center rounded-xl border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
              >
                View all
              </Link>
            </div>
          </div>

          <PublicationsGrid posts={postsData as Post[]} limit={6} />

          {/* Mobile CTA */}
          <div className="mt-6 sm:hidden">
            <Link
              href="/posts"
              className="block w-full rounded-xl border border-blue-600 px-4 py-2 text-center text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
            >
              View all
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* 🔷 Testimonials */}
      <AnimatedSection>
        <section
          id="testimonials"
          className="mx-auto mb-16 max-w-3xl px-4 scroll-mt-24 md:scroll-mt-28"
        >
          <TestimonialSlider />
        </section>
      </AnimatedSection>

      {/* 🔷 Certifications & Expertise */}
      <AnimatedSection>
        <section
          id="certifications"
          className="mx-auto mb-16 max-w-5xl px-4 text-center scroll-mt-24 md:scroll-mt-28"
        >
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
            Certifications &amp; Expertise
          </h2>
          <p className="mb-10 text-base text-gray-700 dark:text-gray-300 sm:text-lg">
            AWS and Microsoft certifications that back every architecture
            decision and automation pipeline I deliver.
          </p>
          <CertificationsGrid />
        </section>
      </AnimatedSection>

      {/* 🔷 Contact block on homepage */}
      <AnimatedSection>
        <section
          id="contact"
          className="mx-auto max-w-2xl px-2 text-center scroll-mt-24 md:scroll-mt-28"
        >
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">Get In Touch</h2>
          <div className="space-y-2 text-sm sm:text-base">
            <p>
              Email:{" "}
              <a
                href="mailto:info@justinelonglat-lane.com"
                className="break-all text-blue-600 hover:underline dark:text-blue-400"
              >
                info@justinelonglat-lane.com
              </a>
            </p>
            <p>Phone: +1 405.934.5864</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/longlatjustine"
                className="text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                longlatjustine
              </a>
            </p>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
