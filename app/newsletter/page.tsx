import NewsletterSection from "@/components/NewsletterSection";

const latestIssuePdf = "/files/jlt-platform-notes-latest.pdf";

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

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#newsletter"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Subscribe
          </a>

          <a
            href="#issue-1"
            className="inline-flex rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-50 dark:hover:bg-slate-900"
          >
            Read Latest Issue
          </a>

          <a
            href={latestIssuePdf}
            download
            className="inline-flex rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-50 dark:hover:bg-slate-900"
          >
            Download PDF
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

      <section id="issue-1" className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
          Issue #1
        </p>

        <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold text-sky-500">
            JLT Platform Notes — Issue #1
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            From Tools to Platforms: Why Operating Models Matter
          </h2>

          <div className="mt-8 space-y-8 text-slate-600 dark:text-slate-300">
            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                About JLT Platform Notes
              </h3>
              <p className="mt-3 leading-7">
                JLT Platform Notes is a practical newsletter on platform
                engineering, DevSecOps, cloud security, automation,
                observability, and the operating models behind reliable cloud
                systems.
              </p>
              <p className="mt-3 font-semibold text-slate-900 dark:text-slate-100">
                No noise. Just clear platform thinking.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                The Problem Most Teams Don’t See
              </h3>
              <p className="mt-3 leading-7">
                Most teams believe they have a platform. But what they actually
                have is a shared environment.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
                <li>A shared cloud account</li>
                <li>A shared CI/CD pipeline</li>
                <li>Shared dashboards</li>
                <li>Shared deployment workflows</li>
              </ul>

              <p className="mt-4 leading-7">
                Everything is visible. Everything is accessible. Everything is
                executable. And that is exactly the problem.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Shared Tools Are Not a Platform
              </h3>
              <p className="mt-3 leading-7">
                Having tools does not mean you have a platform. A real platform
                is defined by how everything works together under control.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                What a Real Platform Actually Does
              </h3>
              <p className="mt-3 leading-7">
                A real platform creates clear boundaries and controlled flow.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
                <li>Who can access what</li>
                <li>How requests move through the system</li>
                <li>How changes are validated before deployment</li>
                <li>How systems are observed in real time</li>
                <li>How failures are detected and recovered</li>
                <li>How teams operate with confidence</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                The JLT-Lane Platform View
              </h3>
              <p className="mt-3 leading-7">
                At JLT-Lane, I think about platforms through a simple operating
                flow:
              </p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-semibold text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
                Identity → Access → Automation → Observability → Operations →
                Continuous Improvement
              </div>

              <p className="mt-4 leading-7">
                This is the difference between a collection of tools and a
                governed platform. The tools matter, but the operating model is
                what makes them reliable.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Why Operating Models Matter
              </h3>
              <p className="mt-3 leading-7">
                Without an operating model, teams depend on assumptions. They
                assume the right person has access. They assume deployment
                checks were followed. They assume dashboards are being watched.
                They assume someone knows what to do when something fails.
              </p>

              <p className="mt-4 leading-7">
                A platform removes those assumptions by creating repeatable
                patterns, clear ownership, controlled access, and visible
                operations.
              </p>
            </section>

            <section className="rounded-2xl bg-slate-950 p-6 text-white dark:bg-slate-900">
              <h3 className="text-xl font-bold">Core Idea</h3>
              <p className="mt-3 text-lg font-semibold leading-8">
                Platforms don’t scale because of tools. They scale because of
                operating models.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Closing Note
              </h3>
              <p className="mt-3 leading-7">
                JLT Platform Notes exists to make platform thinking easier to
                understand, easier to explain, and easier to apply in real cloud
                environments.
              </p>

              <p className="mt-4 font-semibold text-slate-900 dark:text-slate-100">
                Cloud Confidence. Delivered.
              </p>
            </section>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#newsletter"
              className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
            >
              Subscribe
            </a>

            <a
              href={latestIssuePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-50 dark:hover:bg-slate-900"
            >
              Open PDF
            </a>

            <a
              href={latestIssuePdf}
              download
              className="inline-flex rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-50 dark:hover:bg-slate-900"
            >
              Download PDF
            </a>
          </div>
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