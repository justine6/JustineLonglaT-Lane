// app/availability/page.tsx
import CalEmbed from "@/components/CalEmbed";
import { LINKS } from "@/config/links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Availability | Jutellane Solutions",
  description:
    "Check real-time availability for Intro Calls and Hire Me sessions.",
  alternates: { canonical: "/availability" },
};

export default function AvailabilityPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Availability
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Book a quick discovery call or a project kickoff session.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold mb-3">Intro Call</h2>
          <CalEmbed
            url={LINKS.calIntro}
            height={760}
            primaryColor="2563eb"
            locale="en"
            hideEventDetails
            params={{ utm_source: "website", utm_medium: "availability" }}
          />
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Hire Me</h2>
          <CalEmbed
            url={LINKS.calHire}
            height={760}
            primaryColor="2563eb"
            locale="en"
            hideEventDetails
            params={{ utm_source: "website", utm_medium: "availability" }}
          />
        </section>
      </div>
    </main>
  );
}

