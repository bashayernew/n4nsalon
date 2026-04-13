import { FadeIn } from "@/components/FadeIn";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonialIds } from "@/data/testimonials-catalog";
import { getTranslations } from "next-intl/server";

const [lead, ...rest] = testimonialIds;

export async function TestimonialsSection() {
  const t = await getTranslations("home.testimonials");

  if (!lead) return null;

  return (
    <section className="border-t border-line bg-surface-page py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-taupe">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-taupe md:text-[0.9375rem]">
              {t("intro")}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 md:mt-16">
          <FadeIn>
            <TestimonialCard id={lead} featured />
          </FadeIn>
        </div>

        {rest.length > 0 ? (
          <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
            {rest.map((tid, i) => (
              <FadeIn key={tid} delay={0.06 + i * 0.05}>
                <TestimonialCard id={tid} />
              </FadeIn>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
