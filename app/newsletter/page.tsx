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
          Most teams don’t have a platform. They have a shared environment.
          JLT Platform Notes breaks down how real platforms are designed across
          identity, access control, automation, observability, and operations.
        </p>

        <div className="mt-8">
          <a
            href="#newsletter"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Subscribe to JLT Platform Notes
          </a>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <Card
            title="Platform Engineering"
            text="How systems, tools, workflows, and access models work together."
          />
          <Card
            title="DevSecOps"
            text="Practical lessons on secure delivery, automation, and deployment guardrails."
          />
          <Card
            title="Operations"
            text="Observability, runbooks, reliability thinking, and platform maturity."
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
          Issue #1
        </p>

        <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-3xl font-bold tracking-tight">
            From Tools to Platforms: Why Operating Models Matter
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Many teams believe they have a platform because they share the same
            cloud account, CI/CD pipeline, dashboards, or deployment environment.
            But shared tools are not the same thing as a governed platform.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A real platform creates clear boundaries: who can access what, how
            changes move through the system, how failures are observed, and how
            teams recover when something goes wrong.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            At JLT-Lane, I think about platforms through a simple flow:
            identity, access, automation, observability, operations, and
            continuous improvement.
          </p>

          <p className="mt-4 font-semibold text-slate-900 dark:text-slate-100">
            Platforms don’t scale because of tools. They scale because of
            operating models.
          </p>
        </article>
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