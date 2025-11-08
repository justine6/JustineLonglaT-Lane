// app/page.tsx
import Image from "next/image";
import { LINKS } from '@/config/links';
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";

import TestimonialSlider from "@/components/TestimonialSlider";

import CertificationsGrid from "@/components/CertificationsGrid";

import PublicationsGrid, { type Post } from "@/components/PublicationsGrid";

import postsData from "@/content/projects/posts.json";

import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-4 sm:px-6 pt-0 pb-8 sm:pb-10">
      {/* Hero is rendered by layout via <ConditionalHero /> */}

      {/* Personal Logo Section (below hero) */}
      <section className="flex justify-center py-10 sm:py-12">
        <div className="rounded-2xl bg-white/95 shadow-xl p-6 sm:p-8 md:p-10">
          <Image
            src="/brand/justine-logo.png"
            alt="Justine Longla T — DevSecOps, Cloud, Sustainability"
            width={420}
            height={420}
            priority
            className="w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] h-auto mx-auto"
          />
        </div>
      </section>

      {/* Header Section */}
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
            {/* Primary CTA → scroll to contact */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30"
            >
              Book Intro Call
            </Link>

            {/* Brochure (public/docs/jutellane-brochure.pdf) */}
            <a
              href="/docs/jutellane-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-6 py-3 text-lg text-blue-600 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30"
            >
              Download Brochure
            </a>

            {/* Résumé (public/docs/justine-longla-resume.pdf) */}
            <a
              href="/docs/justine-longla-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30"
            >
              View Résumé
            </a>
          </div>
        </section>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection>
        <section
          id="services"
          className="mx-auto mb-16 max-w-5xl px-2 scroll-mt-24 md:scroll-mt-28"
        >
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
                className="rounded-2xl border bg-white p-6 shadow transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/80 flex flex-col justify-between"
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
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Why Work With Me */}
      <AnimatedSection>
        <section className="mx-auto my-10 max-w-5xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-2xl font-semibold sm:text-3xl">
            Why Work With Me?
          </h2>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[220px,1fr] md:gap-10">
            <div className="justify-self-center md:justify-self-start">
              <Image
                src="/images/justine-profile.png"
                alt="Justine Tekang — Cloud & DevSecOps Architect"
                width={220}
                height={220}
                priority
                className="rounded-full border-4 border-gray-200 object-cover shadow-md transition-transform duration-300 hover:scale-105 dark:border-gray-700"
              />
            </div>
            <div>
              <p className="mb-2 text-sm italic text-gray-600 dark:text-gray-400">
                “Secure, scalable, and sustainable cloud solutions that move
                your business forward.”
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
                <li>7+ years in Cloud Architecture, DevOps, and automation</li>
                <li>AWS &amp; Microsoft certified</li>
                <li>Multilingual — English, French, Dutch</li>
                <li>Proven results in healthcare, fintech, and e-commerce</li>
              </ul>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50"
                >
                  Contact
                </Link>
                <a
                  href="/docs/justine-longla-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50"
                >
                  View Résumé
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Publications */}
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
              <a
                href="https://blogs.jutellane.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
              >
                View all
              </a>
            </div>
          </div>
          <PublicationsGrid posts={postsData as Post[]} limit={6} />
          <div className="mt-6 sm:hidden">
            <a
              href="https://blogs.jutellane.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl border border-blue-600 px-4 py-2 text-center text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
            >
              View all
            </a>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section
          id="testimonials"
          className="mx-auto mb-16 max-w-3xl px-4 scroll-mt-24 md:scroll-mt-28"
        >
          <TestimonialSlider />
        </section>
      </AnimatedSection>

      {/* Certifications */}
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

      {/* Contact (embed/CTA lives here) */}
      <ContactSection />
    </main>
  );
}


