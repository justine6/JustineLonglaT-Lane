import DiscoveryIntakeFormClient from "@/components/DiscoveryIntakeFormClient";

export const dynamic = "force-dynamic";

export default function DiscoveryPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl">
        <DiscoveryIntakeFormClient />
      </div>
    </main>
  );
}