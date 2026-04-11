import OnboardingForm from "@/components/OnboardingForm";

export const metadata = {
  title: "Client Onboarding | Justine Longla T.",
  description:
    "A short onboarding checklist to help prepare for a productive kickoff session.",
};

export default function OnboardingPage() {
  return (
    <main className="min-h-[80vh] bg-gradient-to-b from-slate-50 to-white px-4 py-16 dark:from-slate-900 dark:to-slate-950 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-slate-900/80 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300/80">
            Client Onboarding
          </p>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Welcome aboard 👋
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Thank you for choosing Justine Longla T. Please share a few details so
            we can prepare effectively for your kickoff session and align on scope,
            priorities, and next steps.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
            This should only take a couple of minutes to complete.
          </div>

          <div className="mt-10">
            <OnboardingForm />
          </div>
        </div>
      </div>
    </main>
  );
}