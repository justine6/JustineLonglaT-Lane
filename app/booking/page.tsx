"use client";
import InlineWidget from "@calcom/embed-react";

export default function BookingPage() {
  const callLink =
    process.env.NEXT_PUBLIC_CAL_LINK || "justine-longla-ptq4no/intro-call";

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mt-6 mb-6">Book an Intro Call</h1>

      <InlineWidget calLink={callLink} />

      <div className="mt-4 text-sm text-slate-600">
        Having trouble?{" "}
        <a
          className="underline"
          href={`https://cal.com/${callLink}`}
          target="_blank"
          rel="noreferrer"
        >
          Open the booking page directly
        </a>.
      </div>
    </div>
  );
}

