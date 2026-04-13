"use client";

import { useTranslations } from "next-intl";
import type { TestimonialId } from "@/data/testimonials-catalog";

type TestimonialCardProps = {
  id: TestimonialId;
  featured?: boolean;
};

export function TestimonialCard({ id, featured = false }: TestimonialCardProps) {
  const t = useTranslations("testimonials");

  return (
    <figure
      className={`flex h-full flex-col justify-between rounded-sm border border-line bg-surface-card shadow-luxury ${
        featured ? "p-10 md:p-12" : "p-8"
      }`}
    >
      <blockquote
        className={`font-serif leading-snug text-ink ${
          featured
            ? "text-xl leading-[1.45] md:text-2xl md:leading-snug"
            : "text-lg md:text-xl"
        }`}
      >
        “{t(`${id}.quote`)}”
      </blockquote>
      <figcaption
        className={`mt-10 border-t border-line pt-8 ${featured ? "md:mt-12 md:pt-10" : ""}`}
      >
        <p className="text-sm font-semibold text-ink">{t(`${id}.name`)}</p>
        <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">
          {t(`${id}.detail`)}
        </p>
      </figcaption>
    </figure>
  );
}
