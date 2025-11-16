import AnimatedCheck from "@/components/AnimatedCheck";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Metadata } from "next";
import { headers } from "next/headers";

const ConfettiBurst = dynamic(() => import("@/components/ConfettiBurst"), { ssr: false });

export const metadata: Metadata = {
  title: "Booking Confirmed | Jutellane Solutions with Justine",
  description:
    "Your meeting is confirmed. Add it to your calendar or contact us if you need to reschedule.",
};

function buildGoogle(start?: string, end?: string, title = "Intro Call — Jutellane Solutions with Justine") {
  if (!start || !end) return undefined;
  const fmt = (s: string) => s.replace(/[-:]/g, "").replace(".000Z", "Z");
  const qs = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: "Looking forward to meeting you!",
  });
  return `https://calendar.google.com/calendar/render?${qs}`;
}

function buildOutlook(start?: string, end?: string, title = "Intro Call — Jutellane Solutions with Justine") {
  if (!start || !end) return undefined;
  const qs = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    startdt: start,
    enddt: end,
    subject: title,
    body: "Looking forward to meeting you!",
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${qs}`;
}

export default async function BookingSuccessPage() {
  // feature flags (easy to toggle later or by env)
  const enableConfetti = true;
  const enableAnimatedCheck = true;

  // read variant + times from URL (Next 15: headers() is async)
  const h = await headers();
  const url = h.get("x-url") ?? h.get("referer") ?? "";
  let u: URL;
  try {
    u = new URL(url || "http://local");
  } catch {
    u = new URL("http://local");
  }
  const variant = (u.searchParams.get("v") ?? "").toLowerCase(); // "", compact, marketing
  const start = u.searchParams.get("start") ?? undefined;
  const end = u.searchParams.get("end") ?? undefined;

  const gcal = buildGoogle(start, end);
  const o365 = buildOutlook(start, end);

  // choose primary calendar target smartly
  const primaryCalHref = gcal || o365 || "/booking/success.ics";

  const outerClasses = [
    "min-h-[70vh] bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950",
    variant === "marketing" ? "bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" : "",
  ].join(" ");

  const cardClasses = [
    "mx-auto mt-10 max-w-3xl rounded-3xl bg-white/95 dark:bg-slate-900/80 shadow-xl ring-1 ring-black/5",
    "px-6 sm:px-10 py-10 sm:py-12",
    "backdrop-blur",
    variant === "compact" ? "max-w-2xl px-6 py-8" : "",
  ].join(" ");

  return (
    <main className={outerClasses}>
      <section className={cardClasses}>
        {enableConfetti && <ConfettiBurst />}
        {enableAnimatedCheck && <AnimatedCheck />}

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 text-center">
          Your meeting is confirmed — thank you!
        </h1>

        <p className="mt-3 text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A confirmation email is on its way. Use it to add the event to your calendar,
          reschedule, or cancel if needed.
        </p>

        {/* Button cluster */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={primaryCalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Open Calendar
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Contact
          </Link>
        </div>

        {/* Secondary calendar options (only if we have times) */}
        {(start && end) && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {gcal && (
              <a className="btn-secondary" href={gcal} target="_blank" rel="noopener noreferrer">
                Add to Google
              </a>
            )}
            {o365 && (
              <a className="btn-secondary" href={o365} target="_blank" rel="noopener noreferrer">
                Add to Outlook
              </a>
            )}
            <a className="btn-secondary" href="/booking/success.ics" download>
              Add to Apple (.ics)
            </a>
          </div>
        )}

        {/* Tip bubble */}
        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Your booking details are private and secure. See you soon!
          {variant === "marketing" && (
            <>
              <br />
              <Link href="/onboarding" className="relative btn-shiny">
                Start the 2-minute onboarding
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
