import Link from "next/link";
import Stripe from "stripe";
import { markProposalPaid } from "@/lib/proposal-store";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

function fmtMoney(amountCents?: number | null, currency?: string | null) {
  if (!amountCents || !currency) return null;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amountCents / 100);
  } catch {
    return `${amountCents / 100} ${currency}`;
  }
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams?: { session_id?: string };
}) {
  const sessionId = searchParams?.session_id;

  // If user lands here without a session_id, show a friendly message.
  if (!sessionId) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-center space-y-6">
        <h1 className="text-4xl font-bold">Success 🎉</h1>
        <p className="text-slate-600 dark:text-slate-300">
          If you just completed payment, please return using the Stripe success link.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact?intent=Kickoff%20scheduling"
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Schedule kickoff
          </Link>
          <Link
            href="/"
            className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-50 dark:hover:bg-slate-900"
          >
            Back home
          </Link>
        </div>
      </main>
    );
  }

    // Verify the session with Stripe (server-side)
    let session: Stripe.Checkout.Session | null = null;
    let error: string | null = null;

    try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
    } catch (e: any) {
    error = e?.message || "Unable to verify payment.";
    }

    const paid =
    session?.payment_status === "paid" ||
    session?.status === "complete" ||
    session?.payment_intent != null;

    // ⭐ Record payment for accountability (idempotent)
    if (paid && session?.id) {
    try {
        markProposalPaid(
        session.id,
        session.amount_total ?? undefined,
        session.currency ?? undefined
        );
    } catch (e) {
        console.error("Failed to mark proposal paid:", e);
    }
    }

    const intent = session?.metadata?.intent || "Consulting engagement";
    const service = session?.metadata?.service || "";
    const tier = session?.metadata?.tier || "";
    const amount = fmtMoney(session?.amount_total, session?.currency);

    const kickoffHref = `/contact?intent=${encodeURIComponent(
    "Kickoff scheduling"
    )}&service=${encodeURIComponent(service || "review")}`;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-center space-y-6">
      <h1 className="text-4xl font-bold">
        {paid ? "Payment Successful 🎉" : "Payment Received (Pending) ⏳"}
      </h1>

      {error ? (
        <div className="mx-auto max-w-2xl rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
          {error}
        </div>
      ) : (
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Verified Stripe session
          </div>

          <div className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
            {intent}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
            <Info label="Service" value={service || "—"} />
            <Info label="Tier" value={tier || "—"} />
            <Info label="Total" value={amount || "—"} />
          </div>

          <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Session: {sessionId}
          </div>
        </div>
      )}

      <p className="text-slate-600 dark:text-slate-300">
        Thank you! Next step: schedule a kickoff so we can confirm scope and start delivery.
      </p>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href={kickoffHref}
          className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Schedule kickoff
        </Link>
        <Link
          href="/proposal"
          className="rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-50 dark:hover:bg-slate-900"
        >
          Back to proposal
        </Link>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </div>
      <div className="mt-1 font-semibold text-slate-900 dark:text-slate-50">
        {value}
      </div>
    </div>
  );
}
