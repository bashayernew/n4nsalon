import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Cormorant_Garamond,
  DM_Sans,
  El_Messiri,
  Noto_Sans_Arabic,
} from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { routing } from "@/i18n/routing";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
  preload: false,
});

const elMessiri = El_Messiri({
  variable: "--font-serif-ar",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
  preload: false,
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: {
      default: `${t("siteShort")} · ${t("siteName")}`,
      template: `%s · ${t("siteShort")}`,
    },
    description: t("defaultDescription"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`h-full scroll-smooth ${dmSans.variable} ${cormorant.variable} ${notoArabic.variable} ${elMessiri.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`flex min-h-full flex-col bg-surface-page text-ink antialiased ${
          locale === "ar" ? "font-arabic" : "font-sans"
        }`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
