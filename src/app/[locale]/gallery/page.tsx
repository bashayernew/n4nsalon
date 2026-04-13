import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/FadeIn";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("gallery.title"),
    description: t("gallery.description"),
  };
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("gallery.page");

  return (
    <>
      <section className="border-b border-line bg-surface-page py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-taupe">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl text-ink md:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-taupe">
              {t("description")}
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="bg-surface-card py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <GalleryGrid />
        </div>
      </section>
      <CTASection
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        primaryLabel={t("ctaPrimary")}
        secondaryLabel={t("ctaSecondary")}
        secondaryHref="/services"
      />
    </>
  );
}
