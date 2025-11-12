// app/(marketing)/intro-call/page.tsx
import type { Metadata } from "next";

// ⬇️ import directly (CalEmbed is a Client Component already)
import CalEmbed from "@/components/CalEmbed";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Book an Intro Call | Jutellane Solutions",
  description:
    "Schedule a 20–30 minute intro call to discuss cloud, DevSecOps, and performance goals.",
  alternates: { canonical: "/intro-call" },
  robots: { index: true, follow: true },
};

export default function IntroCallPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_CAL_INTRO_URL ?? "https://cal.com/<your-handle>/intro-call"; // <- update me

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Book an Intro Call</h1>
        <p className="mt-2 text-slate-600">
          Pick a time that works for you. You’ll receive a calendar invite and email confirmation.
        </p>
      </header>

      <section className="mb-6">
        <TrustBadges />
      </section>

      <section aria-label="Scheduler" className="rounded-2xl border bg-white shadow-sm">
        <CalEmbed bookingUrl={bookingUrl} />
      </section>

      <section className="mt-6 text-sm text-slate-600">
        Prefer email?{" "}
        <a className="underline underline-offset-4 hover:opacity-80" href="mailto:hello@jutellane.com">
          hello@jutellane.com
        </a>
        .
      </section>
    </main>
  );
}

