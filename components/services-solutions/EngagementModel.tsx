import GovernedCommercialCatalog from "@/components/GovernedCommercialCatalog";

export default function EngagementModel() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl font-bold">Engagement Options</h2>
        <p className="mt-4 text-gray-400">
          Start small or go deep. Choose the level of engagement that fits your
          current needs.
        </p>
      </div>

      <GovernedCommercialCatalog />
    </section>
  );
}
