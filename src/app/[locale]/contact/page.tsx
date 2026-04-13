import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactSection } from "@/components/ContactSection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact.page");

  return (
    <div className="bg-surface-page">
      <section className="border-b border-line bg-surface-card py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-taupe">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-ink md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-taupe">
            {t("description")}
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <ContactSection />
      </div>
    </div>
  );
}
