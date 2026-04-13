import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesCatalog } from "@/data/services-catalog";

export async function FeaturedServices() {
  const featured = servicesCatalog.filter((s) => s.featured);
  const spotlight = featured[0];
  const supporting = featured.slice(1, 3);
  const t = await getTranslations("home.featured");

  if (!spotlight) return null;

  return (
    <section className="relative bg-surface-page py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          action={
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
            >
              <span className="border-b border-ink/25 pb-0.5 transition group-hover:border-accent">
                {t("fullMenu")}
              </span>
              <span aria-hidden className="transition group-hover:translate-x-0.5 rtl:-scale-x-100">
                →
              </span>
            </Link>
          }
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 lg:items-start">
          <FadeIn className="lg:col-span-7">
            <ServiceCard
              serviceId={spotlight.id}
              category={spotlight.category}
              variant="spotlight"
              imagePriority
            />
          </FadeIn>
          <div className="flex flex-col gap-6 lg:col-span-5">
            {supporting.map((s, i) => (
              <FadeIn key={s.id} delay={0.06 + i * 0.05}>
                <ServiceCard
                  serviceId={s.id}
                  category={s.category}
                  variant="compact"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
