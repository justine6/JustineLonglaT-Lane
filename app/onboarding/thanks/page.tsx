export const metadata = { title: "Thanks | Jutellane Solutions with Justine" };

export default function OnboardingThanksPage() {
  return (
    <main className="min-h-[70vh] px-4 sm:px-6 py-16">
      <section className="mx-auto max-w-2xl rounded-2xl border bg-white/85 dark:bg-slate-900/80 shadow p-8">
        <h1 className="text-3xl font-semibold">Thanks — details received!</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          I just sent a confirmation email. I’ll review your context and come prepared for our session.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="/" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">Back to Home</a>
          <a href="/projects" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900">Explore Projects</a>
        </div>
      </section>
    </main>
  );
}
