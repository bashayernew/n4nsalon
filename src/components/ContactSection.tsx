"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { FadeIn } from "./FadeIn";

const fieldClass =
  "mt-2 w-full rounded-sm border border-line bg-surface-card px-4 py-3 text-ink focus:border-line-strong focus:outline-none focus:ring-1 focus:ring-accent/25";

const hourKeys = ["sunThu", "fri", "sat"] as const;

export function ContactSection() {
  const t = useTranslations("contact.section");
  const ts = useTranslations("site");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const wa = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
      <FadeIn>
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-3xl text-ink md:text-4xl">{t("title")}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-taupe">{t("intro")}</p>
          </div>
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t("phone")}
              </dt>
              <dd className="mt-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-lg text-ink hover:text-accent"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t("whatsapp")}
              </dt>
              <dd className="mt-2">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[#25D366] px-6 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
                >
                  {t("whatsappCta")}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t("instagram")}
              </dt>
              <dd className="mt-2">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline-offset-4 hover:text-accent hover:underline"
                >
                  {t("instagramCta")}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t("location")}
              </dt>
              <dd className="mt-2 text-taupe">{ts("address")}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t("hours")}
              </dt>
              <dd className="mt-3 space-y-2">
                {hourKeys.map((k) => (
                  <div
                    key={k}
                    className="flex justify-between gap-8 border-b border-line pb-2 text-taupe"
                  >
                    <span>{ts(`hours.${k}.days`)}</span>
                    <span className="text-ink">{ts(`hours.${k}.time`)}</span>
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="overflow-hidden rounded-sm border border-line bg-surface-card shadow-luxury">
          <div className="aspect-[16/10] w-full bg-surface-sand">
            <iframe
              title={t("mapIframeTitle")}
              src={siteConfig.mapEmbedUrl}
              className="h-full w-full border-0 grayscale contrast-[0.92]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <form onSubmit={onSubmit} className="space-y-4 p-6 md:p-8">
            <h3 className="font-serif text-xl text-ink">{t("formTitle")}</h3>
            {sent ? (
              <p className="text-sm text-taupe" role="status">
                {t("success")}
              </p>
            ) : (
              <>
                <label className="block text-sm font-medium text-ink">
                  {t("name")}
                  <input
                    required
                    className={fieldClass}
                    name="name"
                    autoComplete="name"
                  />
                </label>
                <label className="block text-sm font-medium text-ink">
                  {t("email")}
                  <input
                    type="email"
                    required
                    className={fieldClass}
                    name="email"
                    autoComplete="email"
                  />
                </label>
                <label className="block text-sm font-medium text-ink">
                  {t("message")}
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className={fieldClass}
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-surface-inverse text-sm font-semibold text-on-inverse transition hover:bg-surface-inverse-soft"
                >
                  {t("submit")}
                </button>
              </>
            )}
          </form>
        </div>
      </FadeIn>
    </div>
  );
}
