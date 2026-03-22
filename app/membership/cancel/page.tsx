export default function MembershipCancelPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
          Checkout canceled
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Your payment was not completed.
        </h1>

        <p className="mt-4 text-base text-neutral-300">
          No worries — you can return to the platform and start checkout again
          whenever you are ready.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Return home
          </a>
        </div>
      </div>
    </main>
  );
}
