// components/VideosTeaser.tsx
import Image from "next/image";
import Link from "next/link";

// Local teaser list — first 2 videos only.
// Make sure this matches app/videos/page.tsx
const VIDEOS = [
  {
    slug: "devsecops-pipeline-walkthrough",
    title: "DevSecOps Pipeline Walkthrough",
    src: "/videos/devsecops-pipeline.mp4",
    thumbnail: "/images/devsecops-thumb.jpg",
    duration: "06:32",
  },
  {
    slug: "cloud-migration-blueprint",
    title: "Cloud Migration Blueprint (AWS & Azure)",
    src: "/videos/cloud-migration-blueprint.mp4",
    thumbnail: "/images/cloud-migration-thumb.jpg",
    duration: "08:47",
  },
];

export default function VideosTeaser() {
  const featured = VIDEOS.slice(0, 2);

  return (
    <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
      <h2 className="mb-6 text-center text-2xl font-semibold sm:text-3xl">
        Featured Videos
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {featured.map((video) => (
          <Link
            key={video.slug}
            href={`/videos/${video.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
          >
            <div className="relative aspect-video bg-black">
              {video.thumbnail && (
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover opacity-80 transition group-hover:opacity-60"
                />
              )}

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex items-center rounded-full bg-black/70 px-4 py-1 text-xs font-semibold text-white">
                  ▶ Watch • {video.duration}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium group-hover:text-blue-600">
                {video.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
