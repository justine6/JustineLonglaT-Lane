"use client";

import Image from "next/image";

export default function HomeLogoBanner() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-600 to-blue-800 mb-12">
      <div className="max-w-6xl mx-auto px-4">
        <Image
          src="/brand/justine-banner.png"
          alt="Justine Longla — Solutions Architect & DevSecOps Engineer"
          width={1280}
          height={640}
          priority
          className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}


