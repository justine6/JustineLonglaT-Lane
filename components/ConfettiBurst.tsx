"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

// Load react-confetti only on the client
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

/**
 * ConfettiBurst
 * Shows a quick celebratory burst, then stops after `duration` ms.
 */
export default function ConfettiBurst({
  duration = 2500,
  pieces = 220,
}: {
  duration?: number;
  pieces?: number;
}) {
  const { width, height } = useWindowSize();
  const [recycle, setRecycle] = useState(true);

  // stop after duration
  useEffect(() => {
    const t = setTimeout(() => setRecycle(false), duration);
    return () => clearTimeout(t);
  }, [duration]);

  // stable color set
  const colors = useMemo(
    () => ["#2563eb", "#0ea5e9", "#38bdf8", "#22c55e", "#f59e0b", "#ef4444"],
    []
  );

  if (!width || !height) return null;

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={pieces}
      recycle={recycle}
      colors={colors}
      gravity={0.25}
      initialVelocityX={8}
      initialVelocityY={12}
    />
  );
}
