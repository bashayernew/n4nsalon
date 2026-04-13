"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import type { GalleryCatalogItem } from "@/data/gallery-catalog";

type LightboxModalProps = {
  item: GalleryCatalogItem | null;
  onClose: () => void;
};

export function LightboxModal({ item, onClose }: LightboxModalProps) {
  const tItems = useTranslations("gallery.items");
  const tCat = useTranslations("gallery.categoryLabel");
  const tLight = useTranslations("gallery.lightbox");

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [item, onClose]);

  const title = item ? tItems(`${item.id}.title`) : "";
  const alt = item ? tItems(`${item.id}.alt`) : "";
  const categoryLabel = item ? tCat(item.category) : "";

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-inverse/88 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-sm bg-surface-card shadow-luxury ring-1 ring-line"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative w-full ${
                item.aspect === "landscape"
                  ? "aspect-[16/10]"
                  : item.aspect === "portrait"
                    ? "aspect-[3/4] max-h-[80vh]"
                    : "aspect-square max-h-[min(80vh,90vw)]"
              }`}
            >
              <Image
                src={item.image}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 896px"
                quality={82}
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-line px-6 py-4">
              <div>
                <p className="font-serif text-xl text-ink">{title}</p>
                <p className="text-xs uppercase tracking-wider text-taupe">
                  {categoryLabel}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-sm border border-line text-sm font-medium text-ink transition hover:bg-surface-page"
                aria-label={tLight("close")}
              >
                ✕
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
