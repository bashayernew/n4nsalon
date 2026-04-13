"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNavRoutes } from "@/data/nav-routes";
import { LanguageSwitcher } from "./LanguageSwitcher";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium tracking-wide transition hover:text-accent ${
        active ? "text-accent" : "text-ink/88"
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const tc = useTranslations("common");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface-card/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:gap-6 md:px-8">
        <Link href="/" className="group flex min-w-0 flex-col leading-none">
          <span className="font-serif text-xl tracking-tight text-ink md:text-2xl">
            N4 Salon
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-taupe">
            {t("tagline")}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Main"
        >
          {mainNavRoutes.map((item) => (
            <NavLink key={item.href} href={item.href} label={t(item.key)} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/booking"
            className="inline-flex min-h-10 items-center justify-center rounded-sm bg-surface-inverse px-5 text-xs font-semibold uppercase tracking-[0.14em] text-on-inverse transition hover:bg-surface-inverse-soft"
          >
            {tc("bookNow")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-full bg-ink"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="absolute left-0 top-[6px] h-0.5 w-full bg-ink"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="absolute left-0 top-3 h-0.5 w-full bg-ink"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-surface-card lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-5 py-6"
              aria-label="Mobile"
            >
              {mainNavRoutes.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={t(item.key)}
                  onClick={() => setOpen(false)}
                />
              ))}
              <Link
                href="/booking"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-sm bg-surface-inverse px-4 text-sm font-semibold text-on-inverse"
                onClick={() => setOpen(false)}
              >
                {tc("bookNow")}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
