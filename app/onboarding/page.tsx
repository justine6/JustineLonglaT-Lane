import OnboardingForm from "@/components/OnboardingForm";

export const metadata = {
  title: "Client Onboarding | Jutellane Solutions",
  description: "A 2-minute onboarding checklist to prepare for a productive first session.",
};

export default function OnboardingPage() {
  return (
    <main className="min-h-[80vh] px-4 sm:px-6 py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-3xl bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-xl ring-1 ring-black/5 p-8 sm:p-12 backdrop-blur">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Welcome Aboard 👋
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Thank you for choosing Jutellane Solutions. Please share a few details so we can prepare effectively.
        </p>

        <div className="mt-10">
          <OnboardingForm />
        </div>
      </div>
    </main>
  );
}
