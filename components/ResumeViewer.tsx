import React from "react";
type Props = {
  fullSrc?: string;        // e.g. /docs/Justine_Tekang_Jutellane_Solutions_Resume.pdf
  summarySrc?: string;     // e.g. /docs/Justine_Tekang_Jutellane_Solutions_Resume_Summary.pdf
  height?: number;         // iframe/object height in px
};

const ResumeViewer: React.FC<Props> = ({
  fullSrc = "/docs/Justine_Tekang_Jutellane_Solutions_Resume.pdf",
  summarySrc = "/docs/Justine_Tekang_Jutellane_Solutions_Resume_Summary.pdf",
  height = 900,
}) => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      {/* Full Resume */}
      <header className="mb-3 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Resume (Full)</h2>
          <p className="text-sm text-slate-500">PDF preview with download</p>
        </div>
        <div className="flex gap-2">
          <a
            href={fullSrc}
            download
            className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm hover:bg-slate-100"
          >
            Download PDF
          </a>
          <button
            onClick={() =>
              (document.getElementById("resume-full") as HTMLIFrameElement)?.contentWindow?.print()
            }
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50"
          >
            Print
          </button>
        </div>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        {/* Use <object> for broad compatibility; Next.js <iframe> also works */}
        <object
          id="resume-full"
          data={fullSrc}
          type="application/pdf"
          className="w-full"
          style={{ height }}
        >
          <p className="p-4">
            Your browser can’t display PDFs inline.{" "}
            <a href={fullSrc} download className="text-blue-600 underline">
              Download the resume
            </a>
            .
          </p>
        </object>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-slate-200" />

      {/* Summary Resume */}
      <header className="mb-3 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Resume (One-Page Summary)</h2>
          <p className="text-sm text-slate-500">PDF preview with download</p>
        </div>
        <div className="flex gap-2">
          <a
            href={summarySrc}
            download
            className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm hover:bg-slate-100"
          >
            Download PDF
          </a>
          <button
            onClick={() =>
              (document.getElementById("resume-summary") as HTMLIFrameElement)?.contentWindow?.print()
            }
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50"
          >
            Print
          </button>
        </div>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <object
          id="resume-summary"
          data={summarySrc}
          type="application/pdf"
          className="w-full"
          style={{ height }}
        >
          <p className="p-4">
            Your browser can’t display PDFs inline.{" "}
            <a href={summarySrc} download className="text-blue-600 underline">
              Download the one-page resume
            </a>
            .
          </p>
        </object>
      </div>
    </section>
  );
};

export default ResumeViewer;
