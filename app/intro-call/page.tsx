import CalEmbed from "@/components/CalEmbed";
import CalSuccessBanner from "@/components/CalSuccessBanner";
import { LINKS } from "@/config/links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Your Intro Call | Jutellane Solutions",
  description:
    "Quick 15–30 minute discovery call to understand your goals and fit. Book directly on this page.",
  alternates: { canonical: "/intro-call" },
  openGraph: { title: "Schedule Your Intro Call", description: "Book a quick discovery call with Jutellane Solutions.", url: "/intro-call", type: "website" },
};

export default function IntroCallPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Schedule Your Intro Call
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Pick a time that works for you. We’ll cover goals, scope, and a plan to
        get you results.
      </p>

      <CalSuccessBanner />

      <div className="mt-8">
        <CalEmbed calUrl={LINKS.calIntro} />
      </div>
    </main>
  );
}
