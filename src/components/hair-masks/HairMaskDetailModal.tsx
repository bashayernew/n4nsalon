"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type HairMaskDetailModalProps = {
  maskId: string | null;
  imageSrc: string | null;
  onClose: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function HairMaskDetailModal({
  maskId,
  imageSrc,
  onClose,
}: HairMaskDetailModalProps) {
  const t = useTranslations("hairMasks");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!maskId) return;
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
  }, [maskId, onClose]);

  const name = maskId ? t(`items.${maskId}.name`) : "";
  const description = maskId ? t(`items.${maskId}.description`) : "";
  const alt = maskId ? t(`items.${maskId}.imageAlt`) : "";

  const modal = (
    <AnimatePresence>
      {maskId && imageSrc ? (
        <motion.div
          className="fixed inset-0 z-[110] flex items-stretch justify-center bg-surface-inverse/88 p-0 backdrop-blur-sm sm:p-5 md:items-center md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hair-mask-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease }}
            className="relative flex h-full max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden rounded-none bg-surface-card shadow-luxury ring-1 ring-line-strong sm:max-h-[min(92dvh,880px)] sm:rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute end-4 top-4 z-20 inline-flex h-11 min-w-11 items-center justify-center rounded-sm border border-line bg-surface-card/95 text-sm font-medium text-ink shadow-soft backdrop-blur-sm transition hover:bg-surface-sand"
              aria-label={t("modal.close")}
            >
              ✕
            </button>

            <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[42vh] shrink-0 bg-surface-sand lg:min-h-0">
                <Image
                  src={imageSrc}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  quality={84}
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-inverse/20 via-transparent to-transparent lg:hidden"
                  aria-hidden
                />
              </div>

              <div className="flex min-h-0 flex-col justify-center border-line px-6 py-10 sm:px-10 sm:py-12 lg:border-s lg:px-12 lg:py-14">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  {t("section.eyebrow")}
                </p>
                <h2
                  id="hair-mask-modal-title"
                  className="mt-4 font-serif text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-4xl"
                >
                  {name}
                </h2>
                <p
                  className="mt-8 max-h-[min(50vh,420px)] overflow-y-auto whitespace-pre-line pe-1 text-base leading-[1.75] text-taupe sm:text-[1.0625rem]"
                  style={{ scrollbarGutter: "stable" }}
                >
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modal, document.body);
}
