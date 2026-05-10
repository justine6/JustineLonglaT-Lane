export type VideoCategory =
  | "platform-engineering"
  | "devsecops"
  | "architecture"
  | "engineering-mesh"
  | "cloud"
  | "observability";

export interface VideoItem {
  slug: string;
  title: string;
  description: string;

  videoSrc?: string;

  thumbnailSrc?: string;

  youtubeId?: string;

  duration?: string;

  category: VideoCategory;

  featured?: boolean;

  relatedVideos?: string[];

  tags?: string[];

  engineeringMesh?: boolean;
}

export const VIDEO_LIBRARY: VideoItem[] = [
  {
    slug: "jlt-blueprint-fragmentation",

    title:
      "The JLT Blueprint — Fragmentation vs Platform Design",

    description:
      "A systems-thinking presentation exploring the transition from fragmented environments into governed platform architecture.",

    videoSrc:
      "/videos/jlt-fragmentation-landscape.mp4",

    thumbnailSrc:
      "/videos/thumbnails/jlt-fragmentation.jpg",

    youtubeId: "aGcVJ0o7loo",

    duration: "02:00",

    category: "platform-engineering",

    featured: true,

    engineeringMesh: true,

    tags: [
      "Platform Engineering",
      "DevSecOps",
      "Cloud Architecture",
      "Governance",
      "Systems Thinking",
    ],

    relatedVideos: [
      "engineering-mesh-intro",
    ],
  },

  {
    slug: "engineering-mesh-intro",

    title:
      "Engineering Mesh — Unified Operations Model",

    description:
      "Introducing the Engineering Mesh operational model connecting governance, execution, observability, and delivery.",

    videoSrc:
      "/videos/engineering-mesh-intro.mp4",

    thumbnailSrc:
      "/videos/thumbnails/engineering-mesh.jpg",

    duration: "01:45",

    category: "engineering-mesh",

    featured: true,

    engineeringMesh: true,

    tags: [
      "Engineering Mesh",
      "Operations",
      "Control Plane",
      "Observability",
    ],

    relatedVideos: [
      "jlt-blueprint-fragmentation",
    ],
  },
];

export function getRelatedVideos(
  currentVideo: VideoItem,
  limit = 3
): VideoItem[] {
  const relatedBySlug = currentVideo.relatedVideos
    ? VIDEO_LIBRARY.filter((video) =>
        currentVideo.relatedVideos?.includes(video.slug)
      )
    : [];

  if (relatedBySlug.length > 0) {
    return relatedBySlug.slice(0, limit);
  }

  return VIDEO_LIBRARY.filter(
    (video) =>
      video.slug !== currentVideo.slug &&
      video.category === currentVideo.category
  ).slice(0, limit);
}

export function getYouTubeEmbedUrl(
  youtubeId: string,
  autoplay = false
): string {
  return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1${
    autoplay ? "&autoplay=1" : ""
  }`;
}