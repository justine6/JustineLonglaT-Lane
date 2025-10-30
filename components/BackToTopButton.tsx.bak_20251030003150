"use client";

import { useState, useEffect, useRef } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [soundIndex, setSoundIndex] = useState(0);

  // Add all your sounds here
  const sounds = [
    "/sounds/click.mp3",
    "/sounds/mouse-click-290204.mp3"
  ];

  // Preload audio objects
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  useEffect(() => {
    audioRefs.current = sounds.map((src) => new Audio(src));
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const playClick = () => {
    const audio = audioRefs.current[soundIndex];
    if (audio) {
      console.log("🔊 Playing sound:", sounds[soundIndex]);
      audio.currentTime = 0; // reset for quick replays
      audio.play();
    }
    setSoundIndex((prev) => (prev + 1) % sounds.length);
  };

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
        >
          ↑
        </button>
      )}
    </>
  );
}
