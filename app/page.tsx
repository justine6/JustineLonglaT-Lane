import Image from "next/image";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import BookingSection from "@/components/BookingSection";
import CertificationsGrid from "@/components/CertificationsGrid";
import ContactSection from "@/components/ContactSection";
import HeroBanner from "@/components/HeroBanner";
import HeroCTA from "@/components/HeroCTA";
import HeroExplainer from "@/components/HeroExplainer";
import PostHeroCards from "@/components/PostHeroCards";
import ServicesBand from "@/components/ServicesBand";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideosTeaser from "@/components/VideosTeaser";
import CommonEngagementPatterns from "@/components/services-solutions/CommonEngagementPatterns";
import PlatformProblemSection from "@/components/PlatformProblemSection";
import NewsletterSection from "@/components/NewsletterSection";

import { heroExplainerData } from "@/data/home";

export default function HomePage() {
  return (
<main className="min-h-screen bg-white px-4 py-8 text-gray-900 dark:bg-gray-950 dark:text-gray-100 sm:px-6 sm:py-10">
  {/* ✅ 1. Entry: Business + positioning */}
  <div className="mx-auto max-w-7xl">
    <HeroCTA />
  </div>

  {/* ✅ Logo + navigation CTAs */}
  <section className="bg-slate-50 py-14 dark:bg-slate-950/40">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-3xl bg-white/95 p-8 shadow-lg ring-1 ring-slate-200 dark:bg-slate-900/80 dark:ring-slate-700">

        {/* Logo */}
        <div className="mx-auto max-w-sm">
          <Image
            src="/brand/justine-logo.png"
            alt="Justine Longla T. logo"
            width={420}
            height={420}
            className="mx-auto h-auto w-52 sm:w-60 md:w-64"
            priority
          />
        </div>

        {/* 🔥 Newsletter Section (NEW) */}
        <div className="mt-12">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">

            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
              JLT Platform Notes
            </p>

            <h2 className="mt-3 text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Build platforms that are controlled, observable, and operable.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-600 dark:text-slate-400">
              A short newsletter on platform engineering, DevSecOps, access control,
              observability, and the operating models behind reliable cloud systems.
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-sky-100 px-3 py-1 dark:bg-sky-900/40">
                Identity → Access
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 dark:bg-emerald-900/40">
                Observability → Operations
              </span>
              <span className="rounded-full bg-violet-100 px-3 py-1 dark:bg-violet-900/40">
                Architecture → Platforms
              </span>
            </div>

            {/* Form */}
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950"
              />

              <button
                type="submit"
                className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-center text-xs text-slate-500">
              No noise. Just clear platform thinking.
            </p>
          </div>
        </div>
            {/* CTA Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <Link
                href="/availability"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                Book Intro Call
              </Link>

              <Link
                href="/services-solutions"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Explore Services
              </Link>

              <Link
                href="#booking"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Book a Service
              </Link>

              <a
                href="/files/JLT-Consulting-Brochure.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 dark:border-blue-400 dark:bg-slate-900 dark:text-blue-100 dark:hover:bg-slate-800"
              >
                Download Brochure
              </a>

              <a
                href="/files/resume.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 dark:border-blue-400 dark:bg-slate-900 dark:text-blue-100 dark:hover:bg-slate-800"
              >
                View Résumé
              </a>

              <Link
                href="/engineering-mesh"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                🧩 Engineering Mesh Hub
              </Link>

              <Link
                href="/case-studies/engineering-grade-publishing"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                🧩 Publishing Platform
              </Link>

              <a
                href="https://docs.justinelonglat-lane.com/automation-toolkit.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                🛠️ Automation Platform ↗
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ✅ 3. Supporting architecture visual */}
      <HeroBanner />

            {/* ✅ 2. Architecture explanation / main platform idea */}
      <div className="mx-auto max-w-7xl">
        <HeroExplainer data={heroExplainerData} />
      </div>

      {/* ✅ 4. Problem section supporting the architecture */}
      <PlatformProblemSection />

      {/* 🔷 5. Services band */}
      <AnimatedSection>
        <section id="services" className="scroll-mt-28">
          <ServicesBand />
        </section>
      </AnimatedSection>

      {/* ✅ 6. Booking section */}
      <AnimatedSection>
        <section id="booking" className="scroll-mt-28">
          <BookingSection />
        </section>
      </AnimatedSection>

      {/* 💡 Why Organizations Work With JLT-Lane */}
      <AnimatedSection>
        <section className="mx-auto mt-16 mb-24 max-w-5xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Organizations Work With JLT-Lane
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[200px,1fr] md:gap-12">
            <div className="justify-self-center md:justify-self-start">
              <Image
                src="/images/justine-profile.png"
                alt="Justine Tekang – Cloud & DevSecOps Architect"
                width={200}
                height={200}
                priority
                className="rounded-full border-4 border-gray-200 object-cover shadow-md transition-transform duration-300 hover:scale-105 dark:border-gray-700"
              />
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                Consulting Focus
              </p>

              <p className="mb-3 text-sm italic text-gray-600 dark:text-gray-400">
                “Secure, scalable, and sustainable cloud solutions that move your business forward.”
              </p>

              <p className="mb-5 text-base leading-8 text-gray-700 dark:text-gray-300">
                JLT-Lane supports organizations that need practical cloud architecture,
                DevSecOps delivery, automation systems, and platform engineering guidance
                focused on real-world delivery, reliability, and long-term maintainability.
              </p>

              <ul className="list-inside list-disc space-y-2 text-base leading-8 text-gray-700 dark:text-gray-300">
                <li>Cloud modernization and architecture guidance</li>
                <li>DevSecOps pipelines and secure delivery workflows</li>
                <li>Platform engineering foundations and automation enablement</li>
                <li>Observability, reliability, and operational readiness</li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/services-solutions"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-blue-700"
                >
                  Explore Services
                </Link>

                <Link
                  href="/#booking"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-5 py-2.5 text-blue-600 transition hover:bg-blue-50 dark:hover:bg-blue-950/20"
                >
                  Book a Service
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-400 px-5 py-2.5 text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 🔷 Common Engagement Patterns */}
      <AnimatedSection>
        <CommonEngagementPatterns />
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
                Practical guides, patterns, and field notes from real engagements.
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

          <PostHeroCards />

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
            AWS and Microsoft certifications that back every architecture decision
            and automation pipeline I deliver.
          </p>

          <CertificationsGrid />
        </section>
      </AnimatedSection>

      {/* 🔷 Full contact section */}
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </main>
  );
}