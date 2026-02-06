import Link from "next/link";

export type MeshImpactStory = {
  title: string;
  summary: string;
  tags?: string[]; // small pills like: ["Mesh", "ChatOps", "CI/CD-ready"]
  metrics?: { label: string; value: string }[]; // “RESULTS” row
  href?: string; // internal or external
  ctaLabel?: string; // default: "Read case study →"
  badge?: string; // optional top-right badge
};

type Props = {
  PAGE_SECTION: string;
  HEADING: string;
  MUTED: string;
  CARD: string;
  stories: MeshImpactStory[];
  id?: string; // default "case-studies"
  title?: string; // default "Mesh-Aware Case Studies"
  subtitle?: string;
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function MeshImpactStories({
  PAGE_SECTION,
  HEADING,
  MUTED,
  CARD,
  stories,
  id = "case-studies",
  title = "Mesh-Aware Case Studies",
  subtitle = "Stories that live inside the mesh — proactive messaging, Lambda stabilization, and guardrails that keep systems predictable.",
}: Props) {
  return (
    <section id={id} className={`scroll-mt-24 ${PAGE_SECTION}`}>
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        <h2 className={`text-lg font-semibold tracking-tight md:text-xl ${HEADING}`}>
          {title}
        </h2>

        <p className={`mt-3 max-w-3xl text-sm md:text-base ${MUTED}`}>{subtitle}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {stories.map((s, idx) => {
            const href = s.href ?? "#";
            const cta = s.ctaLabel ?? "Read case study →";
            const external = s.href ? isExternal(s.href) : false;

            const CardInner = (
              <div className={`group relative overflow-hidden ${CARD}`}>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {s.title}
                      </h3>

                      {s.badge ? (
                        <span className="rounded-full border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                          {s.badge}
                        </span>
                      ) : null}
                    </div>

                    {s.tags?.length ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {s.tags.slice(0, 6).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Body */}
                <div className="px-4 pb-4 pt-4">
                  <p className={`text-sm leading-relaxed ${MUTED}`}>{s.summary}</p>

                  {s.metrics?.length ? (
                    <div className="mt-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Results
                      </div>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {s.metrics.slice(0, 6).map((m) => (
                          <div
                            key={`${m.label}-${m.value}`}
                            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300"
                          >
                            <span className="font-semibold">{m.label}:</span>{" "}
                            <span className="font-semibold text-slate-900 dark:text-slate-100">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
                    <span className="transition group-hover:translate-x-0.5">{cta}</span>
                  </div>
                </div>
              </div>
            );

            // Link wrapper (internal vs external vs no-op)
            if (!s.href || s.href === "#") return <div key={idx}>{CardInner}</div>;

            return external ? (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              >
                {CardInner}
              </a>
            ) : (
              <Link
                key={idx}
                href={href}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              >
                {CardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
