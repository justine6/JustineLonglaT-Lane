import AnimatedCheck from "@/components/AnimatedCheck";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Metadata } from "next";
import { headers } from "next/headers";

const ConfettiBurst = dynamic(() => import("@/components/ConfettiBurst"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Booking Confirmed | Justine Longla T.",
  description:
    "Your meeting is confirmed. Add it to your calendar or contact us if you need to reschedule.",
};

function toGoogleCalendarDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${value}`);
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  return [
    date.getUTCFullYear(),
    pad(date.getUTCMonth() + 1),
    pad(date.getUTCDate()),
    "T",
    pad(date.getUTCHours()),
    pad(date.getUTCMinutes()),
    pad(date.getUTCSeconds()),
    "Z",
  ].join("");
}

function buildGoogle(
  start?: string,
  end?: string,
  title = "Intro Call — Justine Longla T."
) {
  if (!start || !end) return undefined;

  try {
    const qs = new URLSearchParams({
      action: "TEMPLATE",
      text: title,
      dates: `${toGoogleCalendarDate(start)}/${toGoogleCalendarDate(end)}`,
      details: "Looking forward to meeting you!",
    });

    return `https://calendar.google.com/calendar/render?${qs.toString()}`;
  } catch {
    return undefined;
  }
}

function buildOutlook(
  start?: string,
  end?: string,
  title = "Intro Call — Justine Longla T."
) {
  if (!start || !end) return undefined;

  try {
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (
      Number.isNaN(startDate.getTime()) ||
      Number.isNaN(endDate.getTime())
    ) {
      return undefined;
    }

    const qs = new URLSearchParams({
      path: "/calendar/action/compose",
      rru: "addevent",
      startdt: startDate.toISOString(),
      enddt: endDate.toISOString(),
      subject: title,
      body: "Looking forward to meeting you!",
    });

    return `https://outlook.live.com/calendar/0/deeplink/compose?${qs.toString()}`;
  } catch {
    return undefined;
  }
}

export default async function BookingSuccessPage() {
  const enableConfetti = true;
  const enableAnimatedCheck = true;

  const h = await headers();
  const url = h.get("x-url") ?? h.get("referer") ?? "";
  let u: URL;

  try {
    u = new URL(url || "http://local");
  } catch {
    u = new URL("http://local");
  }

  const variant = (u.searchParams.get("v") ?? "").toLowerCase();
  const start = u.searchParams.get("start") ?? undefined;
  const end = u.searchParams.get("end") ?? undefined;

  const gcal = buildGoogle(start, end);
  const o365 = buildOutlook(start, end);

  const primaryCalHref = gcal || o365 || "/booking/success.ics";

  const outerClasses = [
    "min-h-[70vh] bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950",
    variant === "marketing"
      ? "bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]"
      : "",
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

        <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
          Your meeting is confirmed — thank you!
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-slate-300">
          A confirmation email is on its way. Use it to add the event to your
          calendar, reschedule, or cancel if needed.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={primaryCalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:bg-blue-700"
          >
            Open Calendar
          </a>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
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

        <div className="mt-4 text-center">
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            Continue to onboarding →
          </Link>
        </div>

        {start && end && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {gcal && (
              <a
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                href={gcal}
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Google
              </a>
            )}

            {o365 && (
              <a
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                href={o365}
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Outlook
              </a>
            )}

            <a
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              href="/booking/success.ics"
              download
            >
              Add to Apple (.ics)
            </a>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Your booking details are private and secure. A confirmation email is on
          the way.
          {variant === "marketing" && (
            <>
              <br />
              <Link href="/onboarding" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
                Start your onboarding (2 minutes)
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
}