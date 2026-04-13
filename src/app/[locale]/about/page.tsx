import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { teamCatalog } from "@/data/team-catalog";

const heroImg =
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=85";

const valueKeys = ["v1", "v2", "v3"] as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about.page");
  const tTeam = await getTranslations("about.team");

  return (
    <>
      <section className="relative min-h-[52vh] overflow-hidden bg-surface-inverse">
        <Image
          src={heroImg}
          alt={t("heroImageAlt")}
          fill
          className="object-cover opacity-85"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-inverse via-surface-inverse/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl text-on-inverse md:text-5xl">
              {t("title")}
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-line bg-surface-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <h2 className="font-serif text-3xl text-ink md:text-4xl">
                {t("storyTitle")}
              </h2>
              <div className="mt-8 space-y-6 leading-relaxed text-taupe">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <blockquote className="border-s-2 border-accent/45 ps-8 font-serif text-2xl leading-snug text-ink md:text-3xl">
                {t("missionQuote")}
              </blockquote>
              <p className="mt-6 text-sm uppercase tracking-wider text-taupe">
                {t("missionLabel")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-surface-page py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow={t("valuesEyebrow")}
            title={t("valuesTitle")}
            description={t("valuesDescription")}
          />
          <ul className="grid gap-8 md:grid-cols-3">
            {valueKeys.map((k, i) => (
              <FadeIn key={k} delay={i * 0.06}>
                <li className="rounded-sm border border-line bg-surface-card p-8 shadow-luxury">
                  <h3 className="font-serif text-xl text-ink">
                    {t(`values.${k}.title`)}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-taupe">
                    {t(`values.${k}.text`)}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-surface-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow={t("teamEyebrow")}
            title={t("teamTitle")}
            description={t("teamDescription")}
          />
          <ul className="grid gap-10 md:grid-cols-3">
            {teamCatalog.map((m, i) => (
              <FadeIn key={m.id} delay={i * 0.07}>
                <li>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm ring-1 ring-line">
                    <Image
                      src={m.image}
                      alt={tTeam(`${m.id}.alt`)}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="mt-5 font-serif text-xl text-ink">
                    {tTeam(`${m.id}.name`)}
                  </p>
                  <p className="mt-1 text-sm text-taupe">{tTeam(`${m.id}.role`)}</p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        primaryLabel={t("ctaPrimary")}
        secondaryLabel={t("ctaSecondary")}
        secondaryHref="/contact"
      />
    </>
  );
}
