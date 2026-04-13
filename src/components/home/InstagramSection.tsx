import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/FadeIn";
import { galleryCatalog } from "@/data/gallery-catalog";
import { siteConfig } from "@/data/site";

const tiles = galleryCatalog.slice(0, 6);

export async function InstagramSection() {
  const t = await getTranslations("home.instagram");
  const ti = await getTranslations("gallery.items");

  return (
    <section className="border-t border-line-inverse bg-surface-inverse py-24 text-on-inverse md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-col gap-8 border-b border-line-inverse/80 pb-10 md:flex-row md:items-end md:justify-between md:pb-12">
            <div className="max-w-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                {t("eyebrow")}
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-4xl">
                {t("title")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-on-inverse-muted md:text-[0.9375rem]">
                {t("description")}
              </p>
            </div>
            <Link
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm border border-line-inverse px-7 text-sm font-semibold text-on-inverse transition hover:border-accent/45 hover:text-accent"
            >
              {t("cta")}
            </Link>
          </div>
        </FadeIn>
        <ul className="mt-12 grid grid-cols-2 gap-1.5 sm:gap-2 md:grid-cols-6 md:gap-2.5">
          {tiles.map((g, i) => (
            <FadeIn key={g.id} delay={i * 0.035}>
              <li className="group aspect-square overflow-hidden rounded-sm ring-1 ring-line-inverse/90">
                <Image
                  src={g.image}
                  alt={ti(`${g.id}.alt`)}
                  width={400}
                  height={400}
                  sizes="(max-width:768px) 50vw, 16vw"
                  quality={75}
                  className="h-full w-full object-cover opacity-[0.92] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                />
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
