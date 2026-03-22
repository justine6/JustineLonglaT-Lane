type SuccessPageProps = {
  searchParams?: Promise<{
    session_id?: string;
  }>;
};

export default async function MembershipSuccessPage({
  searchParams,
}: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = params?.session_id;

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
          Payment successful
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Thank you — your checkout completed successfully.
        </h1>

        <p className="mt-4 text-base text-neutral-300">
          Your payment was received successfully. The platform is now waiting for the
          verified Stripe webhook to activate the correct membership state and unlock
          the appropriate access.
        </p>

        {sessionId ? (
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Stripe session
            </p>
            <p className="mt-2 break-all font-mono text-sm text-neutral-200">
              {sessionId}
            </p>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Return home
          </a>

          <a
            href="/docs"
            className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Go to docs
          </a>
        </div>
      </div>
    </main>
  );
}
