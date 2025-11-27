"use client";

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

/**
 * Base props that we control for the wrapper.
 */
type OwnProps<E extends ElementType> = {
  as?: E;
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Full props = our own props + all valid props for the chosen element,
 * with our keys taking precedence (so className/delay/as don’t conflict).
 */
export type SectionFadeInProps<E extends ElementType = "div"> = OwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof OwnProps<E>>;

export function SectionFadeIn<E extends ElementType = "div">(
  props: SectionFadeInProps<E>
) {
  const {
    as,
    delay = 0.08,
    className,
    children,
    ...rest // <- id, aria-*, data-*, etc. land here
  } = props;

  const prefersReducedMotion = useReducedMotion();
  const Component = (as ?? "div") as ElementType;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={
        prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Component className={clsx(className)} {...rest}>
        {children}
      </Component>
    </motion.div>
  );
}
