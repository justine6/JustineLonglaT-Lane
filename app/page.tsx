// app/page.tsx
import Image from "next/image";
import Link from "next/link";

import VideosTeaser from "@/components/VideosTeaser";
import BookingSection from "@/components/BookingSection";
import HeroCTA from "@/components/HeroCTA";

import AnimatedSection from "@/components/AnimatedSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import CertificationsGrid from "@/components/CertificationsGrid";
import PostHeroCards from "@/components/PostHeroCards";
import ServicesBand from "@/components/ServicesBand";
import ContactSection from "@/components/ContactSection";

import HeroBanner from "@/components/HeroBanner";
import HeroExplainer from "@/components/HeroExplainer";
import { heroExplainerData } from "@/data/home";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 text-gray-900 dark:bg-gray-950 dark:text-gray-100 sm:px-6 sm:py-10">
      {/* ✅ Top CTA band */}
      <div className="mx-auto max-w-7xl">
        <HeroCTA />
      </div>

      {/* ✅ Hero banner background (ONLY ONCE) */}
      <HeroBanner />

      {/* ✅ Hero explanation directly under banner */}
      <div className="mx-auto max-w-7xl">
        <HeroExplainer data={heroExplainerData} />
      </div>

      {/* ✅ Home hero (logo + navigation CTAs only) */}
      <section className="bg-slate-50 py-10 dark:bg-slate-950/40">
        <div className="mx-auto max-w-3xl px-2 sm:px-0">
          <div className="rounded-3xl bg-white/95 p-6 shadow-md ring-1 ring-slate-200 dark:bg-slate-900/80 dark:ring-slate-700">
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

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/availability"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Book Intro Call
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
              >
                Explore Services
              </Link>

              <Link
                href="#booking"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
              >
                Book a Service
              </Link>

              <a
                href="/files/JLT-Consulting-Brochure.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 dark:border-blue-400 dark:bg-slate-900 dark:text-blue-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Download Brochure
              </a>

              <a
                href="/files/resume.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 dark:border-blue-400 dark:bg-slate-900 dark:text-blue-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                View Résumé
              </a>

              <Link
                href="/engineering-mesh"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
              >
                <span className="mr-2">🧩</span>
                Engineering Mesh Hub
              </Link>

              <Link
                href="/case-studies/engineering-grade-publishing"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
              >
                <span className="mr-2">🧩</span>
                Publishing Platform
              </Link>

              <a
                href="https://docs.justinelonglat-lane.com/automation-toolkit.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
              >
                <span className="mr-2">🛠️</span>
                Automation Platform↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 Services band (Launch / Secure / Operate) */}
      <AnimatedSection>
        <section id="services" className="scroll-mt-28">
          <ServicesBand />
        </section>
      </AnimatedSection>

      {/* ✅ Booking section (choose service + pay) */}
      <AnimatedSection>
        <section id="booking" className="scroll-mt-28">
          <BookingSection />
        </section>
      </AnimatedSection>

      {/* 💡 Why Work With Me */}
      <AnimatedSection>
        <section className="mx-auto my-10 max-w-5xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-2xl font-semibold sm:text-3xl">
            Why Work With Me?
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[220px,1fr] md:gap-10">
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

            <div>
              <p className="mb-2 text-sm italic text-gray-600 dark:text-gray-400">
                “Secure, scalable, and sustainable cloud solutions that move your
                business forward.”
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

                <Link
                  href="https://docs.justinelonglat-lane.com/automation-toolkit.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-600 px-5 py-2.5 text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
                >
                  🧩 View Automation Platform
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