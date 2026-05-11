import Link from "next/link";

type MeshHubNextProps = {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export default function MeshHubNext({
  eyebrow = "Continue Through The Platform",
  title,
  description,
  href,
  cta,
}: MeshHubNextProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-sky-50 p-8 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_32%)]" />

      <div className="relative max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
          {title}
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <div className="mt-8">
          <Link
            href={href}
            className="inline-flex rounded-2xl border border-sky-300 bg-sky-50 px-5 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-400 hover:bg-sky-100 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200 dark:hover:border-sky-400 dark:hover:bg-sky-500/20"
          >
            {cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}