/* app/posts/[slug]/opengraph-image.tsx */
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Try to import the post's MDX meta (works at build/edge runtime) */
async function getPostMeta(slug: string): Promise<{ title: string; summary?: string; cover?: string }> {
  try {
    const mod = await import(`@/content/posts/${slug}.mdx`);
    const meta = (mod as any).meta ?? {};
    return {
      title: meta.title ?? slug,
      summary: meta.summary,
      cover: meta.cover,
    };
  } catch {
    return { title: slug };
  }
}

export default async function OG({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const meta = await getPostMeta(slug);

  // Try to use cover; if not, use brand fallback (local path is OK)
  const image = meta.cover ?? site.ogDefault;

  // Minimal layout with left image and right text
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "linear-gradient(135deg,#0b1220 0%,#0f1c34 45%,#0e2b6d 100%)",
          color: "white",
          padding: "40px",
          boxSizing: "border-box",
          fontFamily: "system-ui, Segoe UI, Inter, Roboto, Helvetica, Arial",
        }}
      >
        {/* left image (cover or fallback) */}
        <div
          style={{
            width: "46%",
            height: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            border: "2px solid rgba(255,255,255,0.08)",
            background: "#0a0f1e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* cover */}
          <img
            src={image.startsWith("http") ? image : `${site.url}${image}`}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* right text */}
        <div style={{ width: "4%" }} />
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, opacity: 0.9, marginBottom: 12 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1 }}>
            {meta.title}
          </div>
          {meta.summary ? (
            <div
              style={{
                marginTop: 18,
                fontSize: 26,
                lineHeight: 1.35,
                color: "rgba(255,255,255,.85)",
              }}
            >
              {meta.summary}
            </div>
          ) : null}
          <div
            style={{
              marginTop: "auto",
              fontSize: 22,
              color: "rgba(255,255,255,.75)",
            }}
          >
            {site.url.replace(/^https?:\/\//, "")}/posts/{slug}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
