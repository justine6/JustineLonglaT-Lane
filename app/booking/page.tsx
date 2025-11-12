// app/booking/page.tsx
"use client";

import { InlineWidget } from "@calcom/embed-react";

export default function BookingPage() {
  // set the exact handle/slug you copied from Cal.com dashboard
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "justinelongla/intro-call";

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold">Book an Intro Call</h1>

      <div className="mt-6">
        <InlineWidget calLink={calLink} />
      </div>

      <div className="mt-4 text-sm text-slate-500">
        Having trouble?{" "}
        <a
          className="underline"
          href={`https://cal.com/${calLink}`}
          target="_blank"
          rel="noreferrer"
        >
          Open the booking page directly
        </a>.
      </div>
    </div>
  );
}
