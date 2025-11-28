// components/ui/SectionFadeIn.tsx
"use client";

import type {
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

type SectionFadeInProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  id?: string;              // allow id to be passed through
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export function SectionFadeIn({
  as: Tag = "div",
  delay = 0,
  className,
  id,
  children,
  ...rest
}: SectionFadeInProps) {
  const shouldReduce = useReducedMotion();
  const actualDelay = shouldReduce ? 0 : delay;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      transition={{
        duration: 0.3,
        delay: actualDelay,
        ease: [0.19, 0.48, 0.36, 1],
      }}
      className={clsx("opacity-0", className)}
    >
      <Tag id={id} {...rest}>
        {children}
      </Tag>
    </motion.div>
  );
}
