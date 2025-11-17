// components/ui/SectionFadeIn.tsx
"use client";

import type { ReactNode, ElementType } from "react";
import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.99],
    },
  },
};

type SectionFadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType; // no JSX namespace needed
};

export function SectionFadeIn({
  children,
  delay = 0,
  className,
  as,
}: SectionFadeInProps) {
  const Tag = (as ?? "section") as ElementType;
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
