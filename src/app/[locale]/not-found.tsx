import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function LocaleNotFound() {
  const t = useTranslations("common");

  return (
    <section className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center">
      <h1 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
        {t("notFoundTitle")}
      </h1>
      <p className="mt-3 max-w-md text-taupe">
        {t("notFoundDescription")}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-sm bg-surface-inverse px-6 text-xs font-semibold uppercase tracking-[0.14em] text-on-inverse transition hover:bg-surface-inverse-soft"
      >
        {t("backToHome")}
      </Link>
    </section>
  );
}
