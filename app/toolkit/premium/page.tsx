export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default function PremiumToolkitPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Premium Toolkit
      </h1>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        This area is available to premium users and admins.
      </p>
    </main>
  );
}