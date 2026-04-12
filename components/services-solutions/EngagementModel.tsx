const tiers = [
  {
    name: "Intro Platform Consultation",
    price: "$250",
    description:
      "A focused session to review your system and provide immediate guidance.",
    link: process.env.NEXT_PUBLIC_STRIPE_INTRO_CALL_URL || "",
  },
  {
    name: "Platform Architecture Review",
    price: "$500",
    description:
      "A deeper analysis of your architecture, security, and deployment workflows.",
    link: process.env.NEXT_PUBLIC_STRIPE_ARCH_REVIEW_URL || "",
    featured: true,
  },
  {
    name: "Platform Architecture & Systems Assessment",
    price: "$5,000",
    description:
      "A comprehensive assessment with roadmap, risk analysis, and optimization plan.",
    link: process.env.NEXT_PUBLIC_STRIPE_RETAINER_URL || "",
  },
];

export default function EngagementModel() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl font-bold">Engagement Options</h2>
        <p className="text-gray-400 mt-4">
          Start small or go deep. Choose the level of engagement that fits your
          current needs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => {
          const isDisabled = !tier.link;

          return (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 border ${
                tier.featured
                  ? "border-blue-500 bg-slate-900"
                  : "border-gray-700 bg-slate-800"
              }`}
            >
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="text-3xl font-bold mt-4">{tier.price}</p>
              <p className="text-gray-400 mt-4">{tier.description}</p>

              {isDisabled ? (
                <button
                  disabled
                  className="mt-6 inline-block w-full cursor-not-allowed rounded-lg bg-gray-600 px-4 py-2 text-center font-semibold text-white opacity-60"
                >
                  Link Not Configured
                </button>
              ) : (
                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-block w-full rounded-lg px-4 py-2 text-center font-semibold transition ${
                    tier.featured
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}