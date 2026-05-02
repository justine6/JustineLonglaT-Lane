import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AppRole = "public" | "user" | "client" | "premium" | "admin";

const ROLE_RANK: Record<AppRole, number> = {
  public: 0,
  user: 1,
  client: 2,
  premium: 3,
  admin: 4,
};

function normalizeRole(value: unknown): AppRole {
  if (
    value === "public" ||
    value === "user" ||
    value === "client" ||
    value === "premium" ||
    value === "admin"
  ) {
    return value;
  }
  return "user";
}

function isAdminEmail(email?: string | null) {
  const adminEmails = process.env.ADMIN_EMAILS ?? "";

  return adminEmails
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
    .includes((email ?? "").toLowerCase());
}

export default async function PremiumToolkitPage() {
  const user = await currentUser();

  // 🔒 Not signed in
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

  const email = user.emailAddresses?.[0]?.emailAddress;
  const metadataRole = normalizeRole(user.publicMetadata?.role);

  const role: AppRole = isAdminEmail(email)
    ? "admin"
    : metadataRole;

  const canAccess = ROLE_RANK[role] >= ROLE_RANK.premium;

  // ✅ Premium / Admin
  if (canAccess) {
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

  // 🚀 Locked view
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        Premium Toolkit 🔒
      </h1>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        This section is part of the premium experience.
      </p>

      <p className="mt-2 text-slate-500">
        Upgrade to unlock automation tools, platform insights, and advanced resources.
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