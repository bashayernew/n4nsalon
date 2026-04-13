"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion } from "framer-motion";

/** Width capped for srcset; Next/Image serves smaller sizes to mobile automatically */
const heroImage =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const t = useTranslations("home.hero");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[min(92vh,900px)] overflow-hidden bg-surface-inverse">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={t("title")}
          fill
          priority
          fetchPriority="high"
          quality={78}
          className="object-cover object-center opacity-[0.9]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-surface-inverse via-surface-inverse/[0.82] to-surface-inverse/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-surface-inverse via-transparent to-surface-inverse/50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,transparent,rgba(22,20,18,0.45))]"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(92vh,900px)] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24 lg:justify-center lg:pb-28">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-accent/55" aria-hidden />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
                    {t("eyebrow")}
                  </p>
                </div>
                <p className="text-sm font-medium tracking-wide text-on-inverse-muted">
                  {t("sub")}
                </p>
              </div>

              <h1 className="max-w-[14ch] font-serif text-[2.35rem] font-medium leading-[1.02] tracking-[-0.02em] text-on-inverse sm:text-5xl md:text-6xl lg:text-[3.75rem]">
                {t("title")}
              </h1>

              <p className="max-w-lg text-base leading-[1.65] text-on-inverse-muted md:text-[1.0625rem]">
                {t("description")}
              </p>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.12, ease }}
                className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Link
                  href="/booking"
                  className="inline-flex min-h-[3rem] min-w-[200px] items-center justify-center rounded-sm bg-surface-card px-8 text-sm font-semibold tracking-[0.04em] text-ink shadow-soft transition hover:bg-surface-sand active:scale-[0.99]"
                >
                  {t("primaryCta")}
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-sm border border-line-inverse/90 px-7 text-sm font-medium text-on-inverse transition hover:border-accent/50 hover:text-accent"
                >
                  {t("secondaryCta")}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-[3rem] items-center text-sm font-medium text-on-inverse-muted underline decoration-line-inverse/60 underline-offset-[6px] transition hover:text-on-inverse"
                >
                  {t("tertiaryCta")}
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.16, ease }}
            className="hidden lg:col-span-5 lg:block"
          >
            <div className="relative border border-line-inverse/50 bg-surface-inverse/35 p-8">
              <p className="font-serif text-lg italic leading-relaxed text-on-inverse/95">
                {t("quote")}
              </p>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                {t("quoteLabel")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
