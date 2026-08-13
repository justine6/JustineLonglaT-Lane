"use client";

import { useMemo, useState } from "react";

import RelatedVideos from "./RelatedVideos";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

import {
  VIDEO_LIBRARY,
  type VideoItem,
} from "@/lib/videos/video-library";


type VideoGridProps = {
  featuredOnly?: boolean;
  category?: string;
};

export default function VideoGrid({
  featuredOnly = false,
  category,
}: VideoGridProps) {
  const [selectedVideo, setSelectedVideo] =
    useState<VideoItem | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  function openVideo(video: VideoItem) {
    setSelectedVideo(video);
    setIsModalOpen(true);
  }

  function closeVideo() {
    setIsModalOpen(false);
  }

  const filteredVideos = useMemo(() => {
    return VIDEO_LIBRARY.filter((video) => {
      const featuredMatch =
        !featuredOnly || video.featured;

      const categoryMatch =
        !category || video.category === category;

      return featuredMatch && categoryMatch;
    });
  }, [featuredOnly, category]);

  return (
    <section className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.slug}
            video={video}
            onSelect={openVideo}
          />
        ))}
      </div>

      {selectedVideo ? (
        <RelatedVideos
          currentVideo={selectedVideo}
          videos={VIDEO_LIBRARY}
          onSelect={openVideo}
        />
      ) : null}

        <VideoModal
        video={isModalOpen ? selectedVideo : null}
        onClose={closeVideo}
        onSelectVideo={setSelectedVideo}
        autoplayNext
        />
    </section>
  );
}