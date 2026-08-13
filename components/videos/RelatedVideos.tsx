"use client";

import VideoCard from "./VideoCard";
import type { VideoItem } from "@/lib/videos/video-library";

type RelatedVideosProps = {
  currentVideo: VideoItem;
  videos: VideoItem[];
  onSelect: (video: VideoItem) => void;
};

export default function RelatedVideos({
  currentVideo,
  videos,
  onSelect,
}: RelatedVideosProps) {
  const relatedVideos = videos.filter((video) =>
    currentVideo.relatedVideos?.includes(video.slug)
  );

  if (!relatedVideos.length) return null;

  return (
    <section className="mt-10 border-t border-white/10 pt-8">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
          Continue Watching
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
          Related Videos
        </h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {relatedVideos.map((video) => (
          <VideoCard key={video.slug} video={video} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}