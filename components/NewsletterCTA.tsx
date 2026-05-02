// components/NewsletterCTA.tsx
import Link from "next/link";

const newsletterPdf = "/files/jlt-platform-notes-latest.pdf";

export default function NewsletterCTA() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        href="/newsletter"
        className="rounded-xl bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-400"
      >
        Subscribe
      </Link>

      <Link
        href="/newsletter/read"
        className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
      >
        Read Latest Issue
      </Link>

      <a
        href={newsletterPdf}
        download
        className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
      >
        Download PDF
      </a>
    </div>
  );
}