"use client";

import Script from "next/script";

type Props = {
  calUrl: string;      // e.g. https://cal.com/jutellane/intro-call?... 
  height?: number;     // default 780
  className?: string;
};

export default function CalEmbed({ calUrl, height = 780, className = "" }: Props) {
  // Cal supports two main approaches: script tag with inline div data-cal-link
  // or iframe. The script-powered div keeps styling cohesive.
  return (
    <>
      {/* Load Cal embed loader once this component is on the page */}
      <Script src="https://cal.com/embed.js" strategy="afterInteractive" />

      <div
        data-cal-link={calUrl.replace("https://cal.com/", "")} // cal expects "user/event?params"
        data-cal-namespace="hire-me"
        data-cal-config='{"layout":"month_view"}'
        style={{ width: "100%", minHeight: height }}
        className={className}
      />

      {/* A11y + fallback link if scripts are blocked */}
      <noscript>
        <p>
          Booking widget requires JavaScript. Open directly:&nbsp;
          <a href={calUrl} target="_blank" rel="noopener noreferrer">
            Book time on Cal.com
          </a>
        </p>
      </noscript>
    </>
  );
}
