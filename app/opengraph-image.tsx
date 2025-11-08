/* app/opengraph-image.tsx */
import { ImageResponse } from "next/og";
import { LINKS } from '@/config/links';
import { site } from "@/lib/site";
import { LINKS } from '@/config/links';

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "linear-gradient(135deg,#0b1220 0%,#0f1c34 45%,#0e2b6d 100%)",
          color: "white",
          padding: "56px",
          boxSizing: "border-box",
          fontFamily: "system-ui, Segoe UI, Inter, Roboto, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 32, opacity: 0.9, marginBottom: 16 }}>{site.name}</div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>
            Cloud Confidence. Delivered.
          </div>
          <div style={{ marginTop: 18, fontSize: 28, color: "rgba(255,255,255,.85)" }}>
            DevSecOps & Cloud Automation by Justine Tekang
          </div>
          <div style={{ marginTop: "auto", fontSize: 24, color: "rgba(255,255,255,.75)" }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

