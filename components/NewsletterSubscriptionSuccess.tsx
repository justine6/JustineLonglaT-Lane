import Link from "next/link";

export default function NewsletterSubscriptionSuccess() {
  return (
    <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-sm text-emerald-900 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-100">
      <p className="font-semibold">You’re subscribed 🎉</p>

      <p className="mt-2 text-sm text-emerald-900 dark:text-emerald-100">
        Welcome to the JLT-Lane platform journey. Please check your inbox for the
        confirmation message.
      </p>

      <p className="mt-2 text-xs text-emerald-800/80 dark:text-emerald-100/80">
        If you don’t receive it within a few minutes, or if you have any questions,
        contact info@justinelonglat-lane.com.
      </p>
      <Link
        href="/engineering-mesh"
        className="mt-4 inline-flex rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
      >
        Check your inbox → Then explore the platform
      </Link>
    </div>
  );
}