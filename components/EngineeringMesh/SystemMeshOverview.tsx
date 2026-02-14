import Image from "next/image";
import Link from "next/link";

type Props = {
  PAGE_SECTION: string;
  HEADING: string;
  MUTED: string;
  CARD: string;
  LAMBDA_VIDEO_ID?: string;
};

export default function SystemMeshOverview({
  PAGE_SECTION,
  HEADING,
  MUTED,
  CARD,
  LAMBDA_VIDEO_ID,
}: Props) {
  return (
    <section id="architecture" className={`scroll-mt-24 ${PAGE_SECTION}`}>
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
          Architecture at a Glance
        </h2>

        <p className={`mt-3 max-w-3xl text-sm md:text-base ${MUTED}`}>
          The mesh connects consulting, docs, blogs, and projects with shared CI/CD,
          DNS, and platform services — in one frame.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {/* LEFT — Mesh Diagram */}
          <div className={`overflow-hidden ${CARD}`}>
            <div className="border-b border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-800 dark:text-slate-300">
              Engineering Mesh Architecture Diagram
            </div>

            <div className="px-6 pt-6">
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50
                              h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px]">
                <Image
                  src="/img/engineering-mesh-diagram.png"
                  alt="Diagram of the Justine Longla Engineering Mesh architecture"
                  fill
                  sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <p className={`px-4 pb-4 pt-3 text-xs ${MUTED}`}>
              How IONOS DNS, Vercel, static sites, and shared services connect into one mesh.
            </p>
          </div>

          {/* RIGHT — Lambda Chaos Card */}
          <div className={`overflow-hidden ${CARD}`}>
            <div className="border-b border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-800 dark:text-slate-300">
              “I Tamed the Chaos” — Lambda Swarm Collapse
            </div>

            <div className="px-6 pt-6">
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50
                              h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px]">
                <Image
                  src="/img/lambda-swarm-collapse.png"
                  alt="AWS Lambda swarm collapse illustration"
                  fill
                  sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className={`space-y-2 px-4 pb-4 pt-3 text-xs ${MUTED}`}>
              <p>
                A snapshot of the “before” state — the kind of chaos that observability,
                retries, budgets, and guardrails are meant to calm down.
              </p>

              {LAMBDA_VIDEO_ID ? (
                <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={`https://www.youtube.com/embed/${LAMBDA_VIDEO_ID}?rel=0`}
                      title="I Tamed the Chaos — Lambda swarm story"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* ⭐ NEW — Narrative Linking Strip */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <h3 className={`text-sm font-semibold ${HEADING}`}>
            Explore the Engineering Mesh
          </h3>

          <p className={`mt-2 text-xs md:text-sm ${MUTED}`}>
            Dive deeper into how the platform runs, ships, and scales across sites.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">

            {/* Docs */}
            <Link
              href="https://docs.justinelonglat-lane.com"
              target="_blank"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm hover:border-blue-400 hover:shadow dark:border-slate-700 dark:bg-slate-900"
            >
              Docs Hub →
            </Link>

            {/* Architecture */}
            <Link
              href="https://docs.justinelonglat-lane.com/architecture"
              target="_blank"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm hover:border-blue-400 hover:shadow dark:border-slate-700 dark:bg-slate-900"
            >
              Architecture Details →
            </Link>

            {/* Toolkit */}
            <Link
              href="https://docs.justinelonglat-lane.com/automation-toolkit"
              target="_blank"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm hover:border-blue-400 hover:shadow dark:border-slate-700 dark:bg-slate-900"
            >
              Automation Toolkit →
            </Link>

            {/* Blog */}
            <Link
              href="https://blogs.justinelonglat-lane.com"
              target="_blank"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm hover:border-blue-400 hover:shadow dark:border-slate-700 dark:bg-slate-900"
            >
              Engineering Blog →
            </Link>

            {/* Case Study */}
            <Link
              href="https://consulting.justinelonglat-lane.com/case-studies/engineering-grade-publishing"
              target="_blank"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm hover:border-blue-400 hover:shadow dark:border-slate-700 dark:bg-slate-900"
            >
              Case Study →
            </Link>

            {/* Consulting */}
            <Link
              href="https://consulting.justinelonglat-lane.com"
              target="_blank"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm hover:border-blue-400 hover:shadow dark:border-slate-700 dark:bg-slate-900"
            >
              Consulting Platform →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
