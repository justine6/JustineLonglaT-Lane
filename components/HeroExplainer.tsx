import Link from "next/link";

type HeroExplainerCTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroExplainerProps = {
  data: {
    eyebrow?: string;
    title: string;
    description: string;
    bullets?: { title: string; desc: string }[];
    chips?: string[];
    ctas?: HeroExplainerCTA[];
  };
};

export default function HeroExplainer({ data }: HeroExplainerProps) {
  return (
    <section className="bg-white py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
          {data.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {data.eyebrow}
            </p>
          ) : null}

          <div className="mt-2 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {data.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {data.description}
              </p>

              {data.chips?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {data.chips.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {data.ctas?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {data.ctas.map((cta) => {
                    const primary = cta.variant !== "secondary";
                    return (
                      <Link
                        key={cta.href + cta.label}
                        href={cta.href}
                        className={
                          primary
                            ? "inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
                            : "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                        }
                      >
                        {cta.label}
                        <span className="ml-2">→</span>
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {data.bullets?.length ? (
              <div className="space-y-3">
                {data.bullets.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/30"
                  >
                    <p className="text-sm font-semibold">{b.title}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}