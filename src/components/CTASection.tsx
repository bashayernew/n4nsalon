import { Link } from "@/i18n/navigation";
import { FadeIn } from "./FadeIn";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel = "Book an appointment",
  primaryHref = "/booking",
  secondaryLabel = "View services",
  secondaryHref = "/services",
  dark = true,
}: CTASectionProps) {
  const secondaryIsExternal = secondaryHref.startsWith("http");
  return (
    <section
      className={
        dark
          ? "bg-surface-inverse text-on-inverse"
          : "bg-surface-sand/70 text-ink ring-1 ring-line"
      }
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <FadeIn>
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="max-w-xl space-y-5">
              {eyebrow ? (
                <p
                  className={
                    dark
                      ? "text-[11px] font-semibold uppercase tracking-[0.28em] text-accent"
                      : "text-[11px] font-semibold uppercase tracking-[0.28em] text-taupe"
                  }
                >
                  {eyebrow}
                </p>
              ) : null}
              <h2 className="font-serif text-[1.75rem] font-medium leading-[1.15] tracking-tight md:text-3xl lg:text-[2.25rem]">
                {title}
              </h2>
              {description ? (
                <p
                  className={
                    dark
                      ? "leading-relaxed text-on-inverse-muted md:text-[1.0625rem]"
                      : "leading-relaxed text-taupe"
                  }
                >
                  {description}
                </p>
              ) : null}
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href={primaryHref}
                className={
                  dark
                    ? "inline-flex min-h-[3rem] min-w-[200px] items-center justify-center rounded-sm bg-surface-card px-8 text-sm font-semibold tracking-[0.04em] text-ink shadow-soft transition hover:bg-surface-sand active:scale-[0.99]"
                    : "inline-flex min-h-[3rem] min-w-[200px] items-center justify-center rounded-sm bg-surface-inverse px-8 text-sm font-semibold tracking-wide text-on-inverse shadow-soft transition hover:bg-surface-inverse-soft"
                }
              >
                {primaryLabel}
              </Link>
              {secondaryIsExternal ? (
                <a
                  href={secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-[3rem] min-w-[160px] items-center justify-center rounded-sm border px-6 text-sm font-medium transition ${
                    dark
                      ? "border-line-inverse text-on-inverse hover:border-accent/50 hover:text-accent"
                      : "border-line-strong text-ink hover:border-ink/40"
                  }`}
                >
                  {secondaryLabel}
                </a>
              ) : (
                <Link
                  href={secondaryHref}
                  className={`inline-flex min-h-[3rem] min-w-[160px] items-center justify-center rounded-sm border px-6 text-sm font-medium transition ${
                    dark
                      ? "border-line-inverse text-on-inverse hover:border-accent/50 hover:text-accent"
                      : "border-line-strong text-ink hover:border-ink/40"
                  }`}
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
