// components/ui/SectionFadeIn.tsx
"use client";

import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

type SectionFadeInProps<E extends ElementType = "div"> = {
  as?: E;
  delay?: number;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<E>;

export function SectionFadeIn<E extends ElementType = "div">(
  props: SectionFadeInProps<E>
) {
  const {
    as,
    delay = 0,
    className,
    children,
    ...rest // <- includes id, aria-*, etc.
  } = props;

  const shouldReduceMotion = useReducedMotion();
  const Tag = as ?? "div";

  // If user prefers reduced motion, render a plain element
  if (shouldReduceMotion) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  // Use motion component for animated path
  const MotionTag: any = motion[Tag as keyof typeof motion] ?? motion.div;

  return (
    <MotionTag
      className={clsx("will-change-transform", className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.45, delay }}
      {...rest} // <- id lands on the rendered element
    >
      {children}
    </MotionTag>
  );
}
