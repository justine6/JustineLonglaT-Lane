import Link from "next/link";
import { getCurrentAuthorization } from "@/lib/auth/effectiveRole";
import { hasMinimumRole } from "@/lib/auth/roles";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function PremiumToolkitPage() {
  const { user, email, role } = await getCurrentAuthorization();

  if (!user) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-3xl font-semibold">Premium Toolkit</h1>

        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Please sign in to continue.
        </p>

        <Link
          href="/sign-in"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-500"
        >
          Sign In
        </Link>
      </main>
    );
  }

  if (hasMinimumRole(role, "premium")) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">
          Premium Toolkit
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Welcome, {email}
        </p>

        <p className="mt-2 text-slate-600 dark:text-slate-300">
          This area is available to premium users and admins.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        Premium Toolkit 🔒
      </h1>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        This section is part of the premium experience.
      </p>

      <p className="mt-2 text-slate-500">
        Upgrade to unlock automation tools, platform insights, and advanced
        resources.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/services-solutions"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
        >
          Upgrade Now
        </Link>

        <Link
          href="/toolkit"
          className="rounded-lg border px-6 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          Back to Toolkit
        </Link>
      </div>
    </main>
  );
}
