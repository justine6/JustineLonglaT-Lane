"use client";

import type React from "react";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type ProposalTier = "essential" | "standard" | "premium";

const TIER_LABEL: Record<ProposalTier, string> = {
  essential: "Essential",
  standard: "Standard",
  premium: "Premium",
};

export default function ProposalClient() {
  const sp = useSearchParams();

  // context from discovery/contact
  const intent = sp.get("intent") || "Consulting Engagement";
  const service = sp.get("service") || "review";
  const name = sp.get("name") || "";
  const email = sp.get("email") || "";
  const phone = sp.get("phone") || "";

  const [tier, setTier] = useState<ProposalTier>("standard");
  const [busy, setBusy] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const proposal = useMemo(() => {
    const base = {
      title: intent,
      scope: [
        "Discovery + technical deep dive",
        "Risk review (security, reliability, delivery)",
        "Action plan with prioritized roadmap",
      ],
      deliverables: [
        "Written recommendations + next steps",
        "30/60/90 day plan",
        "Optional implementation support (retainer)",
      ],
      timeline: "Proposal-first → delivery begins after approval",
    };

    const tierDefs: Record<ProposalTier, { bullets: string[]; note: string }> =
      {
        essential: {
          bullets: [
            "1 working session (60–90 min)",
            "Findings summary + top recommendations",
            "Implementation guidance (high-level)",
          ],
          note: "Best for quick clarity and direction.",
        },
        standard: {
          bullets: [
            "2 working sessions (90–120 min total)",
            "Detailed findings + prioritized roadmap",
            "Follow-up Q&A session (30 min)",
          ],
          note: "Best balance of depth + speed.",
        },
        premium: {
          bullets: [
            "Full assessment (multi-area) + deep documentation",
            "Threat + reliability review with guardrails",
            "Implementation kickoff plan + delivery cadence",
          ],
          note: "Best for serious platform hardening or migrations.",
        },
      };

    return { ...base, tier: tierDefs[tier] };
  }, [intent, tier]);

  async function acceptProposal() {
    if (busy) return;

    setErr(null);
    setBusy(true);

    try {
      const res = await fetch("/api/proposal/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent,
          service,
          tier,
          name,
          email,
          phone,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        url?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Unable to accept proposal.");
      }

      setAccepted(true);

      // ✅ Auto-redirect to Stripe when URL is returned
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e: any) {
      setErr(e?.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            <Sparkles className="h-4 w-4" />
            Proposal
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-50">
            {proposal.title}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            This proposal is generated from your intake. Approve to move forward,
            then we’ll align on timeline and payment.
          </p>

          {err && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
              {err}
            </div>
          )}

          {/* Client context */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <InfoCard label="Service" value={service} />
            <InfoCard label="Client" value={name || "—"} />
            <InfoCard label="Email" value={email || "—"} />
          </div>

          {/* Tier selector */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Choose engagement tier
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {(["essential", "standard", "premium"] as ProposalTier[]).map(
                (k) => {
                  const active = tier === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setTier(k)}
                      className={[
                        "rounded-2xl border p-5 text-left transition",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                        active
                          ? "border-blue-200 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/40"
                          : "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900",
                      ].join(" ")}
                    >
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {TIER_LABEL[k]}
                      </div>
                      <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                        {k === "essential"
                          ? "Fast direction"
                          : k === "standard"
                          ? "Best balance"
                          : "Deep hardening"}
                      </div>
                    </button>
                  );
                }
              )}
            </div>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {proposal.tier.note}
            </p>
          </div>

          {/* Proposal details */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card
              icon={<FileText className="h-5 w-5" />}
              title="Scope"
              items={proposal.scope}
            />
            <Card
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Deliverables"
              items={proposal.deliverables}
            />
          </div>

          {/* Tier bullets */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {TIER_LABEL[tier]} includes
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {proposal.tier.bullets.map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {proposal.timeline}
            </div>

            {!accepted ? (
              <button
                onClick={acceptProposal}
                disabled={busy}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60"
              >
                {busy ? "Submitting…" : "Approve proposal"}
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-900 dark:border-green-900/50 dark:bg-green-950/40 dark:text-green-100">
                  <CheckCircle2 className="h-5 w-5" />
                  Proposal approved
                </div>

                <Link
                  href={`/contact?intent=${encodeURIComponent(
                    "Kickoff scheduling"
                  )}&service=${encodeURIComponent(service)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
                >
                  Schedule kickoff <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
                >
                  Discuss pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
            Note: Pricing is finalized after scope alignment. Payment links are
            provided after proposal approval.
          </p>
        </div>
      </div>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </div>
      <div className="mt-1 font-semibold text-slate-900 dark:text-slate-50">
        {value}
      </div>
    </div>
  );
}

function Card({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {icon}
        </span>
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
        {items.map((x) => (
          <li key={x} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}