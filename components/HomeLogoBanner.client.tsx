"use client";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./HomeLogoBanner"), {
  ssr: false,
  loading: () => <div className="h-8" />,
});

export default function HomeLogoBanner() {
  return <Banner />;
}
