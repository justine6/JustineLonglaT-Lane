"use client";

type CalEmbedProps = {
  calUrl: string;          // full Cal.com URL
  title?: string;          // iframe title for a11y
  height?: number;         // pixel height (default 760)
};

export default function CalEmbed({
  calUrl,
  title = "Cal.com Scheduler",
  height = 760,
}: CalEmbedProps) {
  return (
    <div className="w-full">
      <div className="relative w-full" style={{ height }}>
        <iframe
          src={calUrl}
          title={title}
          className="absolute inset-0 h-full w-full rounded-xl border border-blue-100 shadow-sm"
          loading="lazy"
          // Cal can use camera/mic if you enable it later
          allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-3 text-xs text-gray-500">Powered by Cal.com</p>
    </div>
  );
}
