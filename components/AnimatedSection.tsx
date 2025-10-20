'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
};

export default function AnimatedSection({
  children,
  delay = 0,
  yOffset = 40,
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // smoother cubic curve
        delay,
      }}
      viewport={{ once: true, amount: 0.25 }}
      className="transition-colors duration-300" // ensures dark-mode bg/text transition
    >
      {children}
    </motion.section>
  );
}
