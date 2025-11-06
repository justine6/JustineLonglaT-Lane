// app/intro-call/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Schedule Your Intro Call — Jutellane Solutions",
  description:
    "Book a 15 or 30 minute discovery call to discuss your goals, challenges, and how Jutellane Solutions can help.",
};

export default function IntroCallPage() {
  return (
    <main className="min-h-[70vh] px-4 py-10 sm:py-14">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Schedule Your Intro Call</h1>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Choose a time that works for you. This introductory call helps us understand your needs
          and see if we're a good fit to work together.
        </p>

        <div className="rounded-xl border dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900">
          <div
            className="cal-inline-widget"
            data-cal-link="justine-longla-ptq4no"
            style={{ width: "100%", height: "720px" }}
          />
        </div>

        {/* Cal embed script */}
        <Script src="https://cal.com/embed.js" strategy="afterInteractive" />

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          If the scheduler doesn’t load,{" "}
          <a
            href="https://cal.com/justine-longla-ptq4no"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 dark:text-blue-400"
          >
            open it in a new tab
          </a>.
        </p>
      </section>
    </main>
  );
}
