"use client";
import dynamic from "next/dynamic";
import { LINKS } from '@/config/links';

const Viewer = dynamic(() => import("./ResumeViewer"), {
  ssr: false,
  loading: () => <div className="h-8" />,
});

export default function ResumeViewerClient(props: {
  fullSrc?: string;
  summarySrc?: string;
  height?: number;
}) {
  return <Viewer {...props} />;
}

