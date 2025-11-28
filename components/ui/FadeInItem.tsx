"use client";

import type { ElementType, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type SectionFadeInProps<E extends ElementType> = {
  as?: E;
  delay?: number;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<E>, "as" | "children">;

export function SectionFadeIn<E extends ElementType = "div">(
  props: SectionFadeInProps<E>
) {
  const { as, delay = 0, className, children, ...rest } = props;

  // Choose which element to render (div, section, header, etc.)
  const Component: ElementType =
    (motion as any)[as ?? "div"] ?? motion.div;

  return (
    <Component
      {...rest}
      className={clsx(className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.38,
        delay,
        ease: [0.22, 0.48, 0.36, 0.98],
      }}
    >
      {children}
    </Component>
  );
}
