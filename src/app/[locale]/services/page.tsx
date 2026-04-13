import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { catalogByCategory } from "@/data/services-catalog";
import { serviceCategoryOrder } from "@/data/services-types";
import { siteConfig } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("services.title"),
    description: t("services.description"),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.page");
  const tCat = await getTranslations("services.categories");

  return (
    <>
      <section className="border-b border-line bg-surface-inverse py-20 text-on-inverse md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-on-inverse-muted">
              {t("intro")}
            </p>
          </FadeIn>
        </div>
      </section>

      {serviceCategoryOrder.map((cat) => {
        const items = catalogByCategory(cat);
        if (!items.length) return null;
        return (
          <section
            key={cat}
            id={cat}
            className="scroll-mt-28 border-b border-line bg-surface-card py-16 md:py-24"
          >
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <SectionHeading
                title={tCat(`${cat}.label`)}
                description={tCat(`${cat}.blurb`)}
              />
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => (
                  <ServiceCard
                    key={s.id}
                    serviceId={s.id}
                    category={s.category}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        primaryLabel={t("ctaPrimary")}
        secondaryLabel={t("ctaSecondary")}
        secondaryHref={`https://wa.me/${siteConfig.whatsapp}`}
      />
    </>
  );
}
