import NewsletterSignup from "./NewsletterSignup";

export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            JLT-Lane Newsletter
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Platform engineering insights, delivered with clarity.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Get practical notes on DevSecOps, cloud security, automation,
            observability, and building governed systems that scale.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-sky-950/30">
          <NewsletterSignup />

          <p className="mt-4 text-xs leading-5 text-slate-500">
            No noise. Just useful platform lessons, architecture thinking, and
            operational insights.
          </p>
        </div>
      </div>
    </section>
  );
}