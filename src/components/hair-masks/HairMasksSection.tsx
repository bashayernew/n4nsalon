"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { hairMaskCatalog } from "@/data/hair-masks-catalog";
import type { HairMaskCatalogEntry } from "@/data/hair-masks-catalog";
import { HairMaskDetailModal } from "./HairMaskDetailModal";

const ease = [0.22, 1, 0.36, 1] as const;

function HairMaskCard({
  mask,
  index,
  onOpen,
}: {
  mask: HairMaskCatalogEntry;
  index: number;
  onOpen: () => void;
}) {
  const t = useTranslations("hairMasks");
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="hair-mask-card group relative w-[min(88vw,320px)] shrink-0 snap-start sm:w-[340px] md:w-[380px]"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.42, delay: Math.min(index * 0.06, 0.3), ease }}
    >
      <div className="overflow-hidden rounded-sm bg-surface-card shadow-luxury ring-1 ring-line-strong transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_64px_rgba(20,18,16,0.1)]">
        <button
          type="button"
          onClick={onOpen}
          className="block w-full text-start"
          aria-label={`${t(`items.${mask.id}.name`)} — ${t("viewDetails")}`}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-surface-sand">
            <Image
              src={mask.image}
              alt={t(`items.${mask.id}.imageAlt`)}
              fill
              quality={78}
              className={`object-cover transition duration-700 ease-out ${
                reduceMotion ? "" : "group-hover:scale-[1.04]"
              }`}
              sizes="(max-width:768px) 88vw, min(380px, 28vw)"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-inverse/45 via-transparent to-transparent opacity-80"
              aria-hidden
            />
            <div className="absolute bottom-0 start-0 end-0 p-6 md:p-7">
              <h3 className="font-serif text-xl font-medium leading-snug text-on-inverse md:text-2xl">
                {t(`items.${mask.id}.name`)}
              </h3>
            </div>
          </div>
          <div className="space-y-4 p-6 md:p-7">
            <p className="line-clamp-3 text-sm leading-relaxed text-taupe md:text-[0.9375rem]">
              {t(`items.${mask.id}.preview`)}
            </p>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition group-hover:gap-3">
              {t("viewDetails")}
              <span aria-hidden className="transition rtl:-scale-x-100">
                →
              </span>
            </span>
          </div>
        </button>
      </div>
    </motion.article>
  );
}

export function HairMasksSection() {
  const t = useTranslations("hairMasks");
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeImage = useMemo(
    () => hairMaskCatalog.find((m) => m.id === activeId)?.image ?? null,
    [activeId]
  );

  return (
    <section
      className="hair-masks-section relative border-y border-line/60"
      aria-labelledby="hair-masks-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 hair-masks-grain opacity-[0.45]"
        aria-hidden
      />
      <div className="hair-masks-radial pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 md:px-8 md:pt-28">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center md:mx-0 md:max-w-3xl md:text-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              {t("section.eyebrow")}
            </p>
            <div className="mx-auto mt-5 h-px w-12 bg-gradient-to-r from-transparent via-accent/50 to-transparent md:mx-0 md:from-accent/40 md:via-accent/60 md:to-transparent" />
            <h2
              id="hair-masks-heading"
              className="mt-6 font-serif text-[2.125rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl"
            >
              {t("section.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-taupe md:mx-0 md:text-[1.0625rem]">
              {t("section.subtitle")}
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="relative pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div
            className="-mx-5 flex gap-5 overflow-x-auto overscroll-x-contain px-5 pb-4 pt-1 [scrollbar-color:rgba(90,82,73,0.35)_transparent] [scrollbar-width:thin] md:-mx-8 md:gap-7 md:px-8"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {hairMaskCatalog.map((mask, i) => (
              <HairMaskCard
                key={mask.id}
                mask={mask}
                index={i}
                onOpen={() => setActiveId(mask.id)}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] tracking-wide text-taupe/90 md:text-start">
            {t("section.scrollHint")}
          </p>
        </div>
      </div>

      <HairMaskDetailModal
        maskId={activeId}
        imageSrc={activeImage}
        onClose={() => setActiveId(null)}
      />
    </section>
  );
}
