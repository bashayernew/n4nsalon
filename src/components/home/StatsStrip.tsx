import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/FadeIn";

const keys = ["s1", "s2", "s3"] as const;

export async function StatsStrip() {
  const t = await getTranslations("home.stats");

  return (
    <section className="border-b border-line bg-surface-inverse text-on-inverse">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
        <ul className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-0">
          {keys.map((k, i) => (
            <FadeIn key={k} delay={i * 0.05}>
              <li
                className={`py-8 md:max-w-none md:flex-1 md:px-10 md:py-0 ${
                  i > 0 ? "border-t border-line-inverse md:border-t-0 md:border-s" : ""
                } ${i === 0 ? "md:ps-0" : ""} ${i === keys.length - 1 ? "md:pe-0" : ""}`}
              >
                <p className="font-serif text-lg font-medium tracking-tight text-accent md:text-xl">
                  {t(`${k}.label`)}
                </p>
                <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-on-inverse-muted">
                  {t(`${k}.detail`)}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
