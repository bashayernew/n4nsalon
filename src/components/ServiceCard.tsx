"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion } from "framer-motion";
import type { ServiceCategory } from "@/data/services-types";

const categoryImages: Record<ServiceCategory, string> = {
  hair: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  nails: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
  makeup:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  lashes:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
  bridal:
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  home: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
};

const ease = [0.22, 1, 0.36, 1] as const;

type ServiceCardProps = {
  serviceId: string;
  category: ServiceCategory;
  variant?: "default" | "spotlight" | "compact";
  /** First featured card only — avoids competing with hero for LCP bandwidth */
  imagePriority?: boolean;
};

export function ServiceCard({
  serviceId,
  category,
  variant = "default",
  imagePriority = false,
}: ServiceCardProps) {
  const reduceMotion = useReducedMotion();
  const t = useTranslations("services.items");
  const tc = useTranslations("common");
  const title = t(`${serviceId}.title`);
  const description = t(`${serviceId}.description`);
  const price = t(`${serviceId}.price`);
  const src = categoryImages[category];
  const isSpotlight = variant === "spotlight";
  const isCompact = variant === "compact";

  const imgAspect = isSpotlight
    ? "aspect-[4/5] min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]"
    : isCompact
      ? "aspect-[16/11] min-h-[180px]"
      : "aspect-[4/3]";

  return (
    <motion.article
      className={`group flex flex-col overflow-hidden rounded-sm bg-surface-card shadow-luxury ring-1 ring-line ${
        isSpotlight ? "lg:shadow-[0_28px_64px_rgba(20,18,16,0.09)]" : ""
      }`}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.32, ease }}
    >
      <Link
        href="/booking"
        className={`relative block overflow-hidden ${imgAspect}`}
      >
        <Image
          src={src}
          alt={title}
          fill
          priority={imagePriority}
          sizes={
            isSpotlight
              ? "(max-width:1024px) 100vw, min(55vw, 720px)"
              : "(max-width:768px) 100vw, min(33vw, 400px)"
          }
          quality={80}
          className={`object-cover transition-transform duration-500 ease-out ${
            reduceMotion ? "" : "group-hover:scale-[1.03]"
          }`}
        />
        <span className="sr-only">
          {tc("bookNow")} — {title}
        </span>
        {isSpotlight ? (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-inverse/45 via-transparent to-transparent opacity-80" />
        ) : null}
      </Link>
      <div
        className={`flex flex-1 flex-col ${isCompact ? "gap-2 p-5 md:p-6" : "gap-3 p-6 md:p-7"}`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-serif text-ink ${isSpotlight ? "text-2xl md:text-[1.65rem]" : "text-xl"}`}
          >
            {title}
          </h3>
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-taupe">
            {price}
          </span>
        </div>
        <p
          className={`leading-relaxed text-taupe ${isCompact ? "line-clamp-3 text-sm" : "text-sm"}`}
        >
          {description}
        </p>
        <div className="mt-auto pt-3">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-[5px] transition hover:text-accent hover:underline"
          >
            {tc("reserve")}
            <span aria-hidden className="transition group-hover:translate-x-0.5 rtl:rotate-180">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
