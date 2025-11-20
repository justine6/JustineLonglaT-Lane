import { Button } from "@/components/Button";

// app/page.tsx
import Image from "next/image";
import { LINKS } from "@/config/links";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import CertificationsGrid from "@/components/CertificationsGrid";
import PublicationsGrid, { type Post } from "@/components/PublicationsGrid";
import postsData from "@/content/projects/posts.json";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const services = [
    {
      id: "launch",
      title: "Launch & Migrate",
      subtitle: "AWS foundations, greenfield & migrations",
      body: "Design and launch a production-ready AWS foundation. I help you move from on-prem or ad-hoc cloud into a secure, cost-aware, and automation-ready environment.",
      bullets: [
        "Landing zones, VPC design, networking, and IAM guardrails",
        "Migrations from on-prem or other cloud providers",
        "CI/CD-ready environments for new products and teams",
      ],
    },
    {
      id: "secure-scale",
      title: "Secure & Scale",
      subtitle: "DevSecOps pipelines and platform hardening",
      body: "Take your existing platform and make it safer, faster, and easier to deploy. We focus on security, observability, and automation so your team ships with confidence.",
      bullets: [
        "GitHub Actions pipelines with quality gates and approvals",
        "Security baselines, policies, and vulnerability remediation",
        "Monitoring, alerting, and SLO-driven reliability",
      ],
    },
    {
      id: "operate-optimize",
      title: "Operate & Optimize",
      subtitle: "Cloud operations, cost, and reliability",
      body: "Keep your AWS workloads healthy and predictable. I help you establish operational practices that reduce incidents and keep costs under control.",
      bullets: [
        "Cost reviews, rightsizing, and tagging strategies",
        "Incident response, runbooks, and on-call coaching",
        "Performance tuning and availability improvements",
      ],
    },
  ];

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

          {/* Subheading text only */}
          <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl">
            Secure, Scalable AWS Services with Justine Tekang — Certified
            DevSecOps &amp; Cloud Automation Expert.
          </p>

          {/* Top hero CTAs */}
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button variant="primary" href="/intro-call">
              Book an intro call
            </Button>
            <Button variant="ghost" href="/projects">
              View my work
            </Button>
          </div>

          {/* Secondary outline buttons row */}
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              href="/docs/jutellane-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Brochure
            </Button>

            <Button
              variant="secondary"
              href="/docs/justine-longla-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Résumé
            </Button>
          </div>
        </section>
      </AnimatedSection>

      {/* My Services */}
      <section
        id="services"
        className="border-y border-slate-800 bg-slate-950/40 py-20"
      >
        <AnimatedSection>
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
            <header className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                My Services
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                I help teams{" "}
                <span className="font-semibold text-sky-300">
                  launch on AWS, secure their delivery pipelines, and run
                  production workloads with confidence.
                </span>{" "}
                Every engagement is hands-on: we pair on architecture, automate
                what matters, and leave you with clear documentation and
                repeatable workflows.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((svc) => (
                <article
                  key={svc.id}
                  className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950/90 p-6 shadow-lg ring-1 ring-slate-800/70"
                >
                  <div>
                    <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-sky-300/90">
                      {svc.subtitle}
                    </div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {svc.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {svc.body}
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-300/90 sm:text-sm">
                      {svc.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 border-t border-slate-800/70 pt-4">
                    <Button
                      href="/intro-call"
                      variant="primary"
                      className="w-full justify-center"
                    >
                      Book an intro call
                    </Button>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                      <Link
                        href={`/projects#${svc.id}`}
                        className="font-medium text-sky-300 hover:text-sky-200 hover:underline"
                      >
                        View related projects
                      </Link>
                      <Link
                        href="/contact"
                        className="text-slate-300 hover:text-slate-100 hover:underline"
                      >
                        Contact for a custom quote
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

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
                alt="Justine Tekang - Cloud & DevSecOps Engineer"
                width={400}
                height={400}
                className="rounded-2xl bg-gradient-to-r from-[#0047a1] to-[#00a8a8] object-cover shadow-lg"
                priority
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
          className="mx-auto mb-16 max-w-6xl scroll-mt-24 px-4 md:px-6"
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
          className="mx-auto mb-16 max-w-3xl scroll-mt-24 px-4 md:scroll-mt-28"
        >
          <TestimonialSlider />
        </section>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection>
        <section
          id="certifications"
          className="mx-auto mb-16 max-w-5xl scroll-mt-24 px-4 text-center md:scroll-mt-28"
        >
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
            Certifications &amp; Expertise
          </h2>
          <p className="mb-10 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl">
            AWS and Microsoft certifications that back every architecture
            decision and automation pipeline I deliver.
          </p>
          <CertificationsGrid />
          <div className="mt-6 flex justify-center gap-4">
            <Button variant="primary" href="/intro-call">
              Book an intro call
            </Button>
            <Button variant="ghost" href="/projects">
              View my work
            </Button>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact (embed/CTA lives here) */}
      <ContactSection />
    </main>
  );
}
