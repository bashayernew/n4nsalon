/** Slightly lighter motion = less compositing work; still feels premium */
export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px", amount: 0.2 },
  transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
};

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-40px" },
};

export const fadeUpChild = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-32px", amount: 0.15 },
  transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
};
