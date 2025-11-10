import CalEmbed from "@/components/CalEmbed";
import BookingSuccess from "@/components/BookingSuccess";
import Panel from "@/components/Panel";
import { LINKS } from "@/config/links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Your Intro Call | Jutellane Solutions",
  description:
    "Quick 15–30 minute discovery call to understand your goals and fit. Book directly on this page.",
  alternates: { canonical: "/intro-call" },
  openGraph: {
    title: "Schedule Your Intro Call",
    description: "Book a quick discovery call with Jutellane Solutions.",
    url: "/intro-call",
    type: "website",
  },
};

export default function IntroCallPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Schedule Your Intro Call
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Pick a time that works for you. We’ll cover goals, scope, and a plan to get you results.
      </p>

      <BookingSuccess className="mt-6 mb-4 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-800 dark:border-green-900/40 dark:bg-green-900/30 dark:text-green-100" />

      <Panel className="mt-6 p-3">
        <CalEmbed calUrl={LINKS.calIntro} title="Intro Call — Cal.com" minHeight={820} />
      </Panel>
    </main>
  );
}
