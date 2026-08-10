"use client";

import { useMemo, useState } from "react";

type Props = {
  fullSrc?: string;
  summarySrc?: string;
  height?: number;
};

type TabKey = "full" | "summary";

const Skeleton = ({ height = 900 }: { height?: number }) => (
  <div
    className="w-full animate-pulse rounded-2xl border border-slate-200 bg-slate-100 dark:bg-slate-800"
    style={{ height }}
    aria-hidden="true"
  />
);

const Viewer = ({
  src,
  title,
  height = 900,
  onLoad,
  onError,
}: {
  src: string;
  title: string;
  height?: number;
  onLoad: () => void;
  onError: () => void;
}) => (
  <iframe
    src={src}
    title={`${title} PDF preview`}
    className="w-full"
    style={{ height }}
    onLoad={onLoad}
    onError={onError}
  />
);

export default function ResumeViewer({
  fullSrc = "/docs/resume.pdf",
  summarySrc = "/docs/resume_summary.pdf",
  height = 900,
}: Props) {
  const [tab, setTab] = useState<TabKey>("full");
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  const current = useMemo(
    () =>
      tab === "full"
        ? { title: "Resume (Full)", src: fullSrc }
        : { title: "Resume (One-Page Summary)", src: summarySrc },
    [tab, fullSrc, summarySrc]
  );

  const switchTab = (next: TabKey) => {
    if (next === tab) {
      return;
    }

    setTab(next);
    setLoading(true);
    setFailed(false);
  };

  const handlePrint = () => {
    const printWindow = window.open(
      current.src,
      "_blank",
      "noopener,noreferrer"
    );

    if (!printWindow) {
      return;
    }

    const tryPrint = () => {
      try {
        printWindow.focus();
        printWindow.print();
      } catch {
        // Some browsers block printing until the PDF finishes loading.
      }
    };

    tryPrint();
    window.setTimeout(tryPrint, 600);
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => switchTab("full")}
          className={`rounded-lg px-3 py-2 text-sm transition ${
            tab === "full"
              ? "bg-blue-600 text-white dark:bg-blue-500"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          }`}
          aria-pressed={tab === "full"}
        >
          Full
        </button>

        <button
          type="button"
          onClick={() => switchTab("summary")}
          className={`rounded-lg px-3 py-2 text-sm transition ${
            tab === "summary"
              ? "bg-blue-600 text-white dark:bg-blue-500"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          }`}
          aria-pressed={tab === "summary"}
        >
          One-Page
        </button>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={current.src}
            download
            className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            Download PDF
          </a>

          <button
            type="button"
            onClick={handlePrint}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            Print
          </button>
        </div>
      </div>

      <header className="mb-3">
        <h2 className="text-2xl font-semibold">{current.title}</h2>
        <p className="text-sm text-slate-500">
          PDF preview with download and print
        </p>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
        {failed ? (
          <div
            role="alert"
            className="p-4 text-sm text-red-600 dark:text-red-400"
          >
            Couldn’t load the PDF preview. You can still{" "}
            <a href={current.src} download className="underline">
              download the file
            </a>
            .
          </div>
        ) : (
          <>
            {loading ? <Skeleton height={height} /> : null}

            <Viewer
              key={current.src}
              src={current.src}
              title={current.title}
              height={height}
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setFailed(true);
              }}
            />
          </>
        )}
      </div>
    </section>
  );
}