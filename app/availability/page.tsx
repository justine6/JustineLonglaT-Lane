import type { Metadata } from "next";
import CalEmbed from "@/components/CalEmbed";
import { LINKS } from "@/config/links";
import { runtimeLog } from "@/lib/runtime-log";

export const metadata: Metadata = {
  title: "Book an Intro Call — Justine Longla T.",
  description:
    "Pick a time that works for you. You’ll receive a calendar invite and email confirmation.",
};

function buildBookingUrl(base: string) {
  const u = new URL(base);
  u.searchParams.set("embed", "true");
  u.searchParams.set("primaryColor", "2563eb");
  u.searchParams.set("locale", "en");
  u.searchParams.set("hideEventTypeDetails", "true");
  u.searchParams.set("utm_source", "site");
  u.searchParams.set("utm_medium", "intro-call");
  return u.toString();
}

export default function Page() {
  runtimeLog("info", "availability_page_render_start", {
    hasCalIntro: Boolean(LINKS.calIntro),
    calIntroPreview: LINKS.calIntro?.slice(0, 80),
  });

  let bookingUrl = "";

  try {
    bookingUrl = buildBookingUrl(LINKS.calIntro);
  } catch (error: any) {
    runtimeLog("error", "availability_booking_url_failed", {
      message: error?.message,
      calIntroValue: LINKS.calIntro ?? null,
    });
    throw error;
  }

  return (
    <section className="container mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Book an Intro Call</h1>
      <p className="mt-2 text-slate-600">
        Pick a time that works for you. You’ll receive a calendar invite and email confirmation.
      </p>

      <div className="mt-6">
        <CalEmbed bookingUrl={bookingUrl} />
      </div>
    </section>
  );
}