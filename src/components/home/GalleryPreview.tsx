"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/FadeIn";
import { galleryCatalog } from "@/data/gallery-catalog";

const preview = galleryCatalog.slice(0, 5);

export function GalleryPreview() {
  const t = useTranslations("home.galleryPreview");
  const ti = useTranslations("gallery.items");

  const first = preview[0];
  if (!first) return null;

  return (
    <section className="border-t border-line bg-surface-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-line pb-10 md:mb-16 md:flex-row md:items-end md:pb-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-taupe">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-taupe">
              {t("description")}
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
          >
            <span className="border-b border-ink/20 pb-0.5">{t("cta")}</span>
            <span aria-hidden className="rtl:-scale-x-100">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 md:auto-rows-[minmax(200px,220px)] md:gap-4">
          <FadeIn className="col-span-2 row-span-2 min-h-[280px] md:min-h-0">
            <div className="group relative h-full min-h-[inherit] overflow-hidden rounded-sm ring-1 ring-line transition-transform duration-500 ease-out hover:scale-[1.008]">
              <Image
                src={first.image}
                alt={ti(`${first.id}.alt`)}
                fill
                sizes="(max-width:768px) 100vw, min(50vw, 720px)"
                quality={78}
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-inverse/55 via-surface-inverse/5 to-transparent opacity-90" />
              <p className="absolute bottom-0 start-0 end-0 p-5 font-serif text-lg text-on-inverse md:p-7 md:text-xl">
                {ti(`${first.id}.title`)}
              </p>
            </div>
          </FadeIn>
          {preview.slice(1).map((g, i) => (
            <FadeIn key={g.id} delay={0.04 * (i + 1)}>
              <div className="group relative aspect-square h-full min-h-[140px] overflow-hidden rounded-sm ring-1 ring-line transition-transform duration-500 ease-out hover:scale-[1.015] md:aspect-auto md:min-h-0">
                <Image
                  src={g.image}
                  alt={ti(`${g.id}.alt`)}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  quality={75}
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-surface-inverse/0 transition duration-300 group-hover:bg-surface-inverse/15" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
