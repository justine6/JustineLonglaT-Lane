// components/ResumeViewer.client.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";

type Props = {
  fullSrc?: string;    // e.g. /docs/Justine_Tekang_Jutellane_Solutions_Resume.pdf
  summarySrc?: string; // e.g. /docs/Justine_Tekang_Jutellane_Solutions_Resume_Summary.pdf
  height?: number;     // iframe/object height in px
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
  height = 900,
  onLoad,
  onError,
}: {
  src: string;
  height?: number;
  onLoad: () => void;
  onError: () => void;
}) => (
  <object
    data={src}
    type="application/pdf"
    className="w-full"
    style={{ height }}
    onLoad={onLoad}
    onError={onError as any}
  >
    <p className="p-4">
      Your browser can’t display PDFs inline.{" "}
      <a href={src} download className="text-blue-600 underline">
        Download the PDF
      </a>
      .
    </p>
  </object>
);

const ResumeViewer: React.FC<Props> = ({
  fullSrc = "/docs/resume.pdf",
  summarySrc = "/docs/resume_summary.pdf",
  height = 900,
}) => {
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

  useEffect(() => {
    setLoading(true);
    setFailed(false);
  }, [current.src]);

  const handlePrint = () => {
    if (typeof window === "undefined") return;
    const w = window.open(current.src, "_blank", "noopener,noreferrer");
    if (w) {
      const tryPrint = () => {
        try {
          w.focus();
          w.print();
        } catch {}
      };
      tryPrint();
      setTimeout(tryPrint, 600);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      {/* Tabs */}
      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={() => setTab("full")}
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
          onClick={() => setTab("summary")}
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
            onClick={handlePrint}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            Print
          </button>
        </div>
      </div>

      <header className="mb-3">
        <h2 className="text-2xl font-semibold">{current.title}</h2>
        <p className="text-sm text-slate-500">PDF preview with download & print</p>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
        {failed ? (
          <div className="p-4 text-sm text-red-600 dark:text-red-400">
            Couldn’t load the PDF preview. You can still{" "}
            <a href={current.src} download className="underline">
              download the file
            </a>
            .
          </div>
        ) : loading ? (
          <Skeleton height={height} />
        ) : null}

        {!failed && (
          <Viewer
            src={current.src}
            height={height}
            onLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setFailed(true);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ResumeViewer;
