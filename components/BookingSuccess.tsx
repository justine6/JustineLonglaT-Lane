"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Props = {
  className?: string;
  // If you know Cal.com will post a specific event name, you can pass it;
  // we still listen to several known variants as a safety net.
  eventNames?: string[];
};

/**
 * Shows a success banner when:
 *  - URL contains ?booked=1  (manual or success_url redirect)
 *  - We receive a postMessage from the Cal.com embed that indicates booking success
 */
export default function BookingSuccess({
  className,
  eventNames = ["cal:bookingSuccessful", "bookingSuccessful", "calendso:bookingSuccessful"],
}: Props) {
  const [booked, setBooked] = useState(false);
  const params = useSearchParams();

  useEffect(() => {
    // URL param (works with success_url redirects or for manual testing)
    if (params?.get("booked") === "1") setBooked(true);
  }, [params]);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      try {
        // Cal.com messages can be strings or objects depending on version/embed
        if (typeof e.data === "string") {
          if (eventNames.some((n) => e.data.includes(n))) setBooked(true);
          // Some versions just send the word "BOOKED"
          if (/BOOKED/i.test(e.data)) setBooked(true);
        } else if (e.data && typeof e.data === "object") {
          const type = (e.data as any).type ?? (e.data as any).event;
          if (type && eventNames.includes(String(type))) setBooked(true);
        }
      } catch {
        /* ignore */
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [eventNames]);

  if (!booked) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={
        className ??
        "mb-6 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-800 dark:border-green-900/40 dark:bg-green-900/30 dark:text-green-100"
      }
    >
      <p className="font-medium">✅ Booked! Your meeting is confirmed.</p>
      <p className="text-sm opacity-80">
        A confirmation email with the meeting link is on its way. You can reschedule from that email.
      </p>
    </div>
  );
}
