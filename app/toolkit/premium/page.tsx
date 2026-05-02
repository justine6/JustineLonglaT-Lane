export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default function PremiumToolkitPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        Premium Toolkit
      </h1>

      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        You are signed in and viewing a premium protected route.
      </p>
    </main>
  );
}