// app/proposal/page.tsx
import { Suspense } from "react";
import ProposalClient from "./ProposalClient";

export default function ProposalPage() {
  return (
    <Suspense fallback={<ProposalSkeleton />}>
      <ProposalClient />
    </Suspense>
  );
}

function ProposalSkeleton() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="h-6 w-28 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-4 h-10 w-3/4 rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="mt-3 h-5 w-full rounded-lg bg-slate-200 dark:bg-slate-800" />
          <div className="mt-2 h-5 w-11/12 rounded-lg bg-slate-200 dark:bg-slate-800" />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="h-20 rounded-2xl bg-slate-200 dark:bg-slate-800" />
            <div className="h-20 rounded-2xl bg-slate-200 dark:bg-slate-800" />
            <div className="h-20 rounded-2xl bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="h-24 rounded-2xl bg-slate-200 dark:bg-slate-800" />
            <div className="h-24 rounded-2xl bg-slate-200 dark:bg-slate-800" />
            <div className="h-24 rounded-2xl bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="h-48 rounded-2xl bg-slate-200 dark:bg-slate-800" />
            <div className="h-48 rounded-2xl bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="mt-8 h-12 w-48 rounded-2xl bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </main>
  );
}