import CalEmbed from "@/components/CalEmbed";
import CalSuccessBanner from "@/components/CalSuccessBanner";
import { LINKS } from "@/config/links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Me | Jutellane Solutions",
  description:
    "Ready to engage? Book a time to discuss deliverables, timelines, and pricing for your DevSecOps or cloud project.",
  alternates: { canonical: "/hire-me" },
  openGraph: { title: "Hire Me", description: "Book a meeting to kick off your engagement with Jutellane Solutions.", url: "/hire-me", type: "website" },
};

export default function HireMePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Hire Me
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Let’s align on scope, delivery plan, and budget. Book a time below to get started.
      </p>

      <CalSuccessBanner />

      <div className="mt-8">
        <CalEmbed calUrl={LINKS.calHire} />
      </div>
    </main>
  );
}
