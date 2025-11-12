"use client";
import { useEffect, useRef } from "react";

/** Subtle animated checkmark in a soft ring. */
export default function AnimatedCheck({
  size = 120,
  color = "#16A34A", // Tailwind green-600
  ring = "#D1FAE5",   // emerald-100
  duration = 800,
}: { size?: number; color?: string; ring?: string; duration?: number }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const len = el.getTotalLength();
    el.style.strokeDasharray = `${len}`;
    el.style.strokeDashoffset = `${len}`;
    // trigger
    requestAnimationFrame(() => {
      el.style.transition = `stroke-dashoffset ${duration}ms ease-out`;
      el.style.strokeDashoffset = "0";
    });
  }, [duration]);

  const r = size / 2;
  const checkW = size * 0.42;
  const checkH = size * 0.28;

  return (
    <div
      aria-hidden
      className="relative mx-auto mb-6"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="drop-shadow-sm">
        <circle cx={r} cy={r} r={r - 6} fill={ring} />
        <circle cx={r} cy={r} r={r - 6} fill="none" stroke={color} strokeWidth="3" className="opacity-30" />
        <path
          ref={pathRef}
          d={`M ${size*0.32} ${r} l ${checkW*-0.25} ${checkH*0.35} L ${size*0.68} ${size*0.40+checkH*0.45}`}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      {/* glow pulse */}
      <span className="absolute inset-0 rounded-full blur-xl opacity-40"
            style={{ background: `radial-gradient(${color}33, transparent 60%)` }} />
    </div>
  );
}

