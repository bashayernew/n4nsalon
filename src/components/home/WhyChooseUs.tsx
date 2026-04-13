import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/FadeIn";

const pointKeys = ["p1", "p2", "p3"] as const;

export async function WhyChooseUs() {
  const t = await getTranslations("home.why");

  return (
    <section className="border-t border-line bg-surface-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-taupe">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl md:leading-[1.15]">
              {t("title")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-taupe md:max-w-lg">
              {t("intro")}
            </p>
          </div>
        </FadeIn>

        <ul className="mt-16 grid gap-0 divide-y divide-line md:mt-20">
          {pointKeys.map((k, i) => (
            <FadeIn key={k} delay={i * 0.06}>
              <li className="grid gap-6 py-10 first:pt-0 last:pb-0 md:grid-cols-12 md:items-start md:gap-8 md:py-12">
                <span className="font-serif text-3xl tabular-nums text-accent/75 md:col-span-2">
                  {t(`points.${k}.n`)}
                </span>
                <div className="md:col-span-10 md:grid md:grid-cols-2 md:gap-12">
                  <h3 className="font-serif text-xl font-medium text-ink md:text-2xl">
                    {t(`points.${k}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-taupe md:mt-0 md:text-[0.9375rem]">
                    {t(`points.${k}.text`)}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
