import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/FadeIn";
import { BookingForm } from "@/components/BookingForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("booking.title"),
    description: t("booking.description"),
  };
}

export default async function BookingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("booking.page");

  return (
    <div className="border-b border-line bg-surface-page">
      <section className="border-b border-line bg-surface-inverse py-16 text-on-inverse md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed text-on-inverse-muted">
              {t("description")}
            </p>
          </FadeIn>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <BookingForm />
      </div>
    </div>
  );
}
