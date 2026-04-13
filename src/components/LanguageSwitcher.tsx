"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const tc = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: (typeof routing.locales)[number]) {
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className="flex items-center rounded-sm border border-line bg-surface-card p-0.5"
      role="group"
      aria-label={tc("languageSwitcherAria")}
    >
      {routing.locales.map((loc) => {
        const active = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchLocale(loc)}
            className={`min-h-9 min-w-[2.75rem] rounded-sm px-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
              active
                ? "bg-surface-inverse text-on-inverse shadow-soft"
                : "text-taupe hover:text-ink"
            }`}
          >
            {loc === "en" ? "EN" : "عربي"}
          </button>
        );
      })}
    </div>
  );
}
