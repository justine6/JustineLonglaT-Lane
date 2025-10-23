"use client";
import dynamic from "next/dynamic";

// Load the actual viewer only on the client
const Viewer = dynamic(() => import("./ResumeViewer"), {
  ssr: false,
  loading: () => <div className="h-8" />,
});

export type { default as React } from "react"; // harmless for TS, optional

export default function ResumeViewerClient(props: {
  fullSrc?: string;
  summarySrc?: string;
  height?: number;
}) {
  // just pass props through
  return <Viewer {...props} />;
}
