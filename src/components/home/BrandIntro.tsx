import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/FadeIn";

export async function BrandIntro() {
  const t = await getTranslations("home.brandIntro");

  return (
    <section className="relative border-b border-line bg-surface-card">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-14">
          <FadeIn className="lg:col-span-4">
            <div className="flex h-full min-h-[160px] flex-col border-s-2 border-accent/40 ps-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-taupe">
                {t("eyebrow")}
              </p>
              <div className="mt-auto h-px w-12 bg-line-strong" aria-hidden />
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-8">
            <p className="max-w-2xl font-serif text-2xl font-normal leading-snug text-ink md:text-[1.75rem] md:leading-snug">
              {t("p1")}
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-taupe md:text-[0.9375rem]">
              {t("p2")}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
