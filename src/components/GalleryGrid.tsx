"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import {
  galleryCatalog,
  galleryFilterIds,
} from "@/data/gallery-catalog";
import type { GalleryCatalogItem } from "@/data/gallery-catalog";
import type { GalleryFilterId } from "@/data/gallery-types";
import { FilterTabs } from "./FilterTabs";
import { LightboxModal } from "./LightboxModal";
import { FadeIn } from "./FadeIn";

function spanClass(aspect: GalleryCatalogItem["aspect"]) {
  if (aspect === "portrait") return "md:row-span-2";
  if (aspect === "landscape") return "md:col-span-2";
  return "";
}

function aspectClass(aspect: GalleryCatalogItem["aspect"]) {
  if (aspect === "portrait") return "aspect-[3/4]";
  if (aspect === "landscape") return "aspect-[16/10]";
  return "aspect-square";
}

export function GalleryGrid() {
  const tFilters = useTranslations("gallery.filters");
  const [filter, setFilter] = useState<GalleryFilterId>("all");
  const [lightbox, setLightbox] = useState<GalleryCatalogItem | null>(null);

  const filters = useMemo(
    () =>
      galleryFilterIds.map((f) => ({
        id: f.id,
        label: tFilters(f.id),
      })),
    [tFilters]
  );

  const filtered = useMemo(() => {
    if (filter === "all") return galleryCatalog;
    return galleryCatalog.filter((g) => g.category === filter);
  }, [filter]);

  return (
    <div>
      <FadeIn>
        <FilterTabs filters={filters} active={filter} onChange={setFilter} />
      </FadeIn>

      <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 md:auto-rows-[180px]">
        {filtered.map((item, i) => (
          <GalleryTile
            key={item.id}
            item={item}
            index={i}
            onOpen={() => setLightbox(item)}
          />
        ))}
      </ul>

      <LightboxModal item={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}

function GalleryTile({
  item,
  index,
  onOpen,
}: {
  item: GalleryCatalogItem;
  index: number;
  onOpen: () => void;
}) {
  const t = useTranslations("gallery.items");

  return (
    <motion.li
      className={`group relative overflow-hidden rounded-sm bg-surface-sand ring-1 ring-line ${spanClass(item.aspect)}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.4) }}
    >
      <button
        type="button"
        onClick={onOpen}
        className={`relative block w-full ${aspectClass(item.aspect)} md:h-full`}
      >
        <Image
          src={item.image}
          alt={t(`${item.id}.alt`)}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          quality={75}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-inverse/72 via-surface-inverse/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute bottom-0 start-0 end-0 translate-y-2 p-4 text-start opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-serif text-lg text-on-inverse">
            {t(`${item.id}.title`)}
          </span>
        </span>
      </button>
    </motion.li>
  );
}
