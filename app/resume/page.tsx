// app/resume/page.tsx
export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Résumé</h1>
      <p className="mb-4">
        If the PDF doesn’t render,{" "}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">
          open it in a new tab
        </a>.
      </p>
      <object
        data="/resume.pdf"
        type="application/pdf"
        className="w-full"
        style={{ height: "80vh" }}
      >
        <iframe src="/resume.pdf" className="w-full" style={{ height: "80vh" }} />
      </object>
    </main>
  );
}
