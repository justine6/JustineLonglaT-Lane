// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Network } from "lucide-react"; 
import VideosTeaser from "@/components/VideosTeaser";

import AnimatedSection from "@/components/AnimatedSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import CertificationsGrid from "@/components/CertificationsGrid";
import PostHeroCards from "@/components/PostHeroCards";
import ServicesBand from "@/components/ServicesBand";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 text-gray-900 dark:bg-gray-950 dark:text-gray-100 sm:px-6 sm:py-10">
      {/* 🔷 Logo card under global hero + brochure CTA row */}
      <section className="bg-slate-50 py-10 dark:bg-slate-950/40">
        <div className="mx-auto max-w-2xl px-2 sm:px-0">
          <div className="rounded-3xl bg-white/95 p-6 shadow-md ring-1 ring-slate-200 dark:bg-slate-900/80 dark:ring-slate-700">
            {/* Smaller logo */}
            <div className="mx-auto max-w-xs">
              <Image
                src="/brand/justine-logo.png"
                alt="Justine Longla T. logo"
                width={360}
                height={360}
                className="mx-auto h-auto w-44 sm:w-52 md:w-56"
                priority
              />
            </div>

            {/* CTA row directly under logo */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {/* Intro call – primary button */}
              <Link
                href="/intro-call"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Book Intro Call
              </Link>

              {/* Consulting brochure – outline button */}
              <a
                href="/files/JLT-Consulting-Brochure.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-white hover:bg-blue-50 dark:border-blue-400 dark:text-blue-100 dark:bg-slate-900 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Download Brochure
              </a>

              {/* Résumé – outline button */}
              <a
                href="/files/resume.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-white hover:bg-blue-50 dark:border-blue-400 dark:text-blue-100 dark:bg-slate-900 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                View Résumé
              </a>

              {/* Engineering Mesh Hub – fourth button */}
              <Link
                href="/engineering-mesh"
                className="inline-flex items-center justify-center rounded-xl border border-slate-400 px-4 py-2 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
              >
                <span className="mr-2">🧩</span>
                Engineering Mesh Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 Services band (Launch / Secure / Operate) */}
      <AnimatedSection>
        <ServicesBand />
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
                “Secure, scalable, and sustainable cloud solutions that move
                your business forward.”
              </p>

              <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
                <li>Expert at Cloud Architecture, DevOps, and automation</li>
                <li>AWS &amp; Microsoft certified</li>
                <li>Multilingual — English, French, Dutch</li>
                <li>Proven results in healthcare, fintech, and e-commerce</li>
              </ul>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
                >
                  Contact
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
                >
                  View Résumé
                </Link>
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
                href="/blog"
                className="inline-flex items-center rounded-xl border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
              >
                View all
              </Link>
            </div>
          </div>

          {/* 🔹 Hero cards row */}
          <PostHeroCards />

          {/* Mobile CTA */}
          <div className="mt-6 sm:hidden">
            <Link
              href="/blog"
              className="block w-full rounded-xl border border-blue-600 px-4 py-2 text-center text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
            >
              View all
            </Link>
          </div>
        </section>
      </AnimatedSection>

            {/* 🎥 Featured videos teaser */}
      <AnimatedSection>
        <VideosTeaser />
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

      {/* 🔷 Get In Touch summary band */}
      <AnimatedSection>
        <section className="mx-auto mb-16 max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Get In Touch
          </h2>
          <p className="mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Ready to discuss your cloud roadmap, automation strategy, or a
            specific project? Reach out and let&apos;s design something durable
            together.
          </p>

          <div className="space-y-1 text-sm sm:text-base">
            <p>
              Email:{" "}
              <a
                href="mailto:justine@justinelonglat-lane.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                justine@justinelonglat-lane.com
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

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            {/* Intro call page */}
            <Link
              href="/intro-call"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Schedule an Intro Call
            </Link>

            {/* Résumé page */}
            <Link
              href="/resume"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
            >
              View Resumé
            </Link>

            {/* Brochure PDF – open in new tab */}
            <a
              href="/files/JLT-Consulting-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
            >
              Download Brochure
            </a>
          </div>
        </section>
      </AnimatedSection>

      {/* 🔷 Full contact section with form (Resend + mailto fallback) */}
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </main>
  );
}
