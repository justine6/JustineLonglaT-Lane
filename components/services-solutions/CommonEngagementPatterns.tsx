export default function CommonEngagementPatterns() {
  const engagements = [
    {
      title: "Platform Foundation",
      description:
        "For teams establishing cloud, DevSecOps, and platform engineering foundations with clearer architecture, delivery standards, and reusable workflows.",
    },
    {
      title: "Platform Stabilization",
      description:
        "For organizations dealing with fragile pipelines, inconsistent releases, weak observability, or operational friction that slows delivery.",
    },
    {
      title: "Platform Acceleration",
      description:
        "For growing teams that need stronger automation, internal platform patterns, and more scalable operating models to support faster delivery.",
    },
    {
      title: "Architecture Modernization",
      description:
        "For environments that need cloud migration guidance, architecture cleanup, modernization planning, and better separation of concerns.",
    },
    {
      title: "Security & Delivery Controls",
      description:
        "For teams that need DevSecOps guardrails, secure defaults, access improvements, and tighter delivery controls across engineering workflows.",
    },
    {
      title: "Advisory & Technical Direction",
      description:
        "For leaders who need a senior technical partner to help shape architecture decisions, delivery priorities, and platform direction.",
    },
  ];

  return (
<section className="bg-slate-50 px-6 py-20 dark:bg-slate-900">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80">
        Engagement Patterns
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-white">
        Common Engagement Patterns
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
        Organizations typically engage JLT-Lane when they need stronger
        platform foundations, more reliable delivery, clearer architecture,
        or a scalable path for growth.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {engagements.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {item.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>
  );
}