import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

type Subscriber = {
  id: string;
  email: string;
  source: string | null;
  page: string | null;
  environment: string | null;
  status: string | null;
  created_at: Date;
  last_seen_at: Date | null;
};

export default async function AdminSubscribersPage() {
  const user = await currentUser();

  const role = user?.publicMetadata?.role;

  if (!user) {
    redirect("/sign-in");
  }

  if (role !== "admin") {
    redirect("/");
  }

  const subscribers = await sql<Subscriber[]>`
    select
      id,
      email,
      source,
      page,
      environment,
      status,
      created_at,
      last_seen_at
    from newsletter_subscribers
    order by created_at desc
    limit 100
  `;

  const [{ count }] = await sql<{ count: number }[]>`
    select count(*)::int as count
    from newsletter_subscribers
  `;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Admin Console
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight">
            Newsletter Subscribers
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            View recent newsletter signups, source tracking, page origin, and
            environment metadata.
          </p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500">Total Subscribers</p>
            <p className="mt-2 text-3xl font-bold">{count}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
              <thead className="bg-slate-100 text-left text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-900/80">
                <tr>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Source</th>
                  <th className="px-5 py-4">Page</th>
                  <th className="px-5 py-4">Environment</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Created</th>
                  <th className="px-5 py-4">Last Seen</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id}>
                    <td className="whitespace-nowrap px-5 py-4 font-medium">
                      {subscriber.email}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      {subscriber.source || "—"}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      {subscriber.page || "—"}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                        {subscriber.environment || "unknown"}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      {subscriber.status || "active"}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-500">
                      {new Date(subscriber.created_at).toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-500">
                      {subscriber.last_seen_at
                        ? new Date(subscriber.last_seen_at).toLocaleString()
                        : "—"}
                    </td>
                  </tr>
                ))}

                {subscribers.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-10 text-center text-slate-500"
                    >
                      No subscribers yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}