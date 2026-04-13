export const testimonialIds = ["t1", "t2", "t3"] as const;
export type TestimonialId = (typeof testimonialIds)[number];
