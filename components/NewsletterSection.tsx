import NewsletterSignup from "./NewsletterSignup";
export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
          JLT Platform Notes
        </p>

        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Build platforms that are controlled, observable, and operable.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              A short newsletter on platform engineering, DevSecOps, access
              control, observability, and the operating models behind reliable
              cloud systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2">
                Identity → Access
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2">
                Observability → Operations
              </span>
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2">
                Architecture → Platforms
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
            <h3 className="text-lg font-semibold">
              Subscribe to JLT Platform Notes
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Practical notes for builders who want to turn cloud infrastructure
              into governed platform systems.
            </p>

             <NewsletterSignup />

            <p className="mt-4 text-xs text-slate-500">
              No noise. Just clear platform thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}