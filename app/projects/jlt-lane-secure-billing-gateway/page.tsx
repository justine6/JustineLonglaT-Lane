import Image from "next/image";

export default function ProjectPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <header className="mb-12">
        <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
          Payments • Platform Engineering
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          JLT-Lane Secure Billing Gateway
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
          Stripe Checkout integration powering subscription billing and
          consulting payments for the JLT-Lane engineering platform.
          Built with Next.js API routes, Stripe Billing, and deployed on
          Vercel serverless infrastructure.
        </p>
      </header>

      {/* Architecture Diagram */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Architecture Overview
        </h2>

        <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <Image
            src="/images/projects/stripe-billing-architecture.png"
            alt="JLT-Lane Secure Billing Architecture"
            width={1400}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Project Description */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Project Summary
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This project implements the monetization layer for the
            JLT-Lane platform using Stripe Checkout. The system enables
            both one-time consulting payments and recurring subscription
            plans while maintaining secure key management and environment
            parity between local development and production.
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Checkout sessions are dynamically generated through a
            Next.js API route which communicates with Stripe’s API
            using secure server-side credentials. Users are redirected
            to Stripe’s hosted payment page where payment processing,
            billing, and subscription management are handled securely.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Key Capabilities
          </h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Stripe Checkout session creation via API routes</li>
            <li>• Subscription billing and one-time payment support</li>
            <li>• Secure environment variable management</li>
            <li>• Production deployment through Vercel</li>
            <li>• Hosted Stripe payment interface</li>
            <li>• Verified payment session creation in production</li>
          </ul>
        </div>
      </section>

      {/* Flow */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Checkout Flow
        </h2>

        <div className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6">
          <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
{`User
 │
 ▼
Pricing Page (Next.js)
 │
 ▼
POST /api/stripe/checkout
 │
 ▼
Stripe API
 │
 ▼
Checkout Session Created
 │
 ▼
Stripe Hosted Payment Page
 │
 ▼
Subscription / Payment Created`}
          </pre>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Technology Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "Stripe Checkout",
            "Stripe Billing",
            "Vercel Serverless",
            "TypeScript",
            "Platform Engineering",
            "Secure Environment Config",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Future Enhancements */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Future Enhancements
        </h2>

        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
          <li>• Stripe webhook automation for membership activation</li>
          <li>• Customer billing portal integration</li>
          <li>• Automated subscription access control</li>
          <li>• Observability integration with platform monitoring stack</li>
        </ul>
      </section>
    </main>
  );
}