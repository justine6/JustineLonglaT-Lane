"use client";

import { useSearchParams } from "next/navigation";

export default function CalSuccessBanner() {
  const params = useSearchParams();
  const booked = params.get("booked") === "1";

  if (!booked) return null;

  return (
    <div className="mb-6 rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-green-900 dark:border-green-700 dark:bg-green-900/20 dark:text-green-200">
      <strong>Thanks!</strong> Your meeting is booked. A calendar invite is on its way.
    </div>
  );
}
