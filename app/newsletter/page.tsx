import Link from "next/link";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata = {
  title: "JLT Platform Notes Newsletter",
  description:
    "Platform engineering, DevSecOps, observability, automation, and cloud operating model insights from JLT-Lane.",
};

export default function NewsletterPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
          JLT Platform Notes
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Platform engineering insights, delivered with clarity.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          A practical newsletter on DevSecOps, cloud security, automation,
          observability, access control, and the operating models behind reliable
          cloud systems.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#newsletter"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Subscribe
          </Link>

          <Link
            href="/blog"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
          >
            Read latest posts
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <Card title="Platform Engineering" text="How systems, tools, workflows, and access models work together." />
          <Card title="DevSecOps" text="Practical lessons on secure delivery, automation, and deployment guardrails." />
          <Card title="Operations" text="Observability, runbooks, reliability thinking, and platform maturity." />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold">Latest Issues</h2>

        <div className="mt-6 rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
          <p className="text-sm font-semibold text-sky-600">
            Issue #1 — Coming Soon
          </p>
          <h3 className="mt-2 text-xl font-bold">
            From Tools to Platforms: Why Operating Models Matter
          </h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            The first issue will introduce the JLT-Lane way of thinking about
            platforms: identity, access, automation, observability, and control.
          </p>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {text}
      </p>
    </div>
  );
}