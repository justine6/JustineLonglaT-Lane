import { requireRole } from "@/lib/auth/requireRole";

export default async function PremiumToolkitPage() {
  const user = await requireRole("premium");

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Premium Toolkit
      </h1>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Welcome, {user.emailAddresses?.[0]?.emailAddress}
      </p>

      <p className="mt-2 text-slate-600 dark:text-slate-300">
        This area is available to premium users and admins.
      </p>
    </main>
  );
}