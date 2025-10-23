import dynamic from "next/dynamic";

export const metadata = {
  title: "Resume • Jutellane Solutions",
  description: "Cloud Solutions Architect & DevSecOps Engineer — view and download the full and one-page resume.",
  alternates: { canonical: "https://jutellane.com/resume" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Resume • Jutellane Solutions",
    description: "Cloud Solutions Architect & DevSecOps Engineer — view and download the full and one-page resume.",
    url: "https://jutellane.com/resume",
    type: "website",
    images: [{ url: "/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume • Jutellane Solutions",
    description: "Cloud Solutions Architect & DevSecOps Engineer — view and download the full and one-page resume.",
    images: ["/og.png"],
  },
};

const ResumeViewer = dynamic(() => import("../../components/ResumeViewer"), { ssr: false });

export default function ResumePage() {
  const fullSrc = "/docs/Justine_Tekang_Jutellane_Solutions_Resume.pdf";
  const summarySrc = "/docs/Justine_Tekang_Jutellane_Solutions_Resume_Summary.pdf";

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Resume</h1>
      <noscript>
        <p className="text-sm text-gray-500">
          JavaScript is required to preview the resume. You can still download the PDF:
          <a className="ml-2 underline text-blue-600" href="/docs/Justine_Tekang_Jutellane_Solutions_Resume.pdf">Download resume</a>
        </p>
      </noscript>
      <ResumeViewer fullSrc={fullSrc} summarySrc={summarySrc} height={900} />
    </main>
  );
}
