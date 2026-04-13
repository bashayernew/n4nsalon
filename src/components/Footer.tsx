import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { mainNavRoutes } from "@/data/nav-routes";
import { siteConfig } from "@/data/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const tm = await getTranslations("metadata");
  const ts = await getTranslations("site");
  const tNav = await getTranslations("nav");
  const wa = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <footer className="border-t border-line-inverse bg-surface-inverse text-on-inverse-muted">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="font-serif text-2xl text-on-inverse">{tm("siteShort")}</p>
          <p className="max-w-xs text-sm leading-relaxed text-on-inverse-muted">
            {ts("tagline")}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t("explore")}
          </p>
          <ul className="mt-4 space-y-2">
            {mainNavRoutes.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-on-inverse-muted transition hover:text-on-inverse"
                >
                  {tNav(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t("visit")}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-on-inverse-muted">
            <li>{ts("address")}</li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-on-inverse">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-on-inverse">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t("hours")}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {(["sunThu", "fri", "sat"] as const).map((k) => (
              <li
                key={k}
                className="flex justify-between gap-4 text-on-inverse-muted"
              >
                <span>{ts(`hours.${k}.days`)}</span>
                <span className="text-on-inverse/90">{ts(`hours.${k}.time`)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-wider text-on-inverse-muted underline-offset-4 hover:text-on-inverse hover:underline"
            >
              {t("instagram")}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-wider text-on-inverse-muted underline-offset-4 hover:text-on-inverse hover:underline"
            >
              {t("whatsapp")}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-line-inverse">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-on-inverse-muted/80 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {tm("siteName")}. {t("rights")}
          </p>
          <p className="text-on-inverse-muted/55">{t("credit")}</p>
        </div>
      </div>
    </footer>
  );
}
