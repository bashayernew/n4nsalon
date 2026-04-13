import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { BrandIntro } from "@/components/home/BrandIntro";
import { BridalHighlight } from "@/components/home/BridalHighlight";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { InstagramSection } from "@/components/home/InstagramSection";

const HairMasksSection = dynamic(
  () =>
    import("@/components/hair-masks/HairMasksSection").then((m) => ({
      default: m.HairMasksSection,
    }))
);

const GalleryPreview = dynamic(
  () =>
    import("@/components/home/GalleryPreview").then((m) => ({
      default: m.GalleryPreview,
    }))
);
import { StatsStrip } from "@/components/home/StatsStrip";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("home.title"),
    description: t("home.description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home.cta");

  return (
    <>
      <HeroSection />
      <BrandIntro />
      <StatsStrip />
      <FeaturedServices />
      <HairMasksSection />
      <WhyChooseUs />
      <BridalHighlight />
      <GalleryPreview />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        primaryLabel={t("primary")}
        primaryHref="/booking"
        secondaryLabel={t("secondary")}
        secondaryHref="/contact"
      />
    </>
  );
}
