"use client";

export default function HomeLogoBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-sky-400 via-cyan-300 to-violet-400" />
        <div>
          <h2 className="text-xl font-semibold">Jutellane Solutions</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Cloud · Security · DevSecOps
          </p>
        </div>
      </div>
    </section>
  );
}
