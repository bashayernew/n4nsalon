import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/FadeIn";

const img =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80";

export async function BridalHighlight() {
  const t = await getTranslations("home.bridal");

  return (
    <section className="relative overflow-x-hidden bg-surface-warm">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-12 lg:items-center lg:gap-0">
        <div className="relative min-h-[340px] lg:col-span-7 lg:min-h-[min(520px,70vh)]">
          <Image
            src={img}
            alt={t("title")}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 58vw"
            loading="lazy"
            decoding="async"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-inverse/25 via-transparent to-transparent lg:from-surface-inverse/20" />
        </div>

        <div className="relative z-10 px-5 py-14 md:px-10 lg:col-span-5 lg:-ms-6 lg:py-16 lg:pe-8">
          <FadeIn>
            <div className="border border-line-strong bg-surface-card/95 p-8 shadow-luxury md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                {t("eyebrow")}
              </p>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-[1.12] tracking-tight text-ink md:text-[2.125rem]">
                {t("title")}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-taupe md:text-[0.9375rem]">
                {t("description")}
              </p>
              <Link
                href="/booking"
                className="mt-9 inline-flex min-h-12 items-center justify-center rounded-sm bg-surface-inverse px-8 text-sm font-semibold tracking-wide text-on-inverse shadow-soft transition hover:bg-surface-inverse-soft"
              >
                {t("cta")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
