import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  action,
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-start";
  const maxDesc =
    align === "center" ? "max-w-2xl mx-auto" : "max-w-xl";

  return (
    <div
      className={`mb-12 md:mb-16 flex flex-col gap-4 ${align === "center" ? "items-center" : "items-start md:flex-row md:items-end md:justify-between gap-8"}`}
    >
      <div className={`space-y-3 ${alignClass}`}>
        {eyebrow ? (
          <p
            className={`text-xs font-medium uppercase tracking-[0.22em] ${dark ? "text-accent" : "text-taupe"}`}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`font-serif text-3xl sm:text-4xl md:text-[2.65rem] leading-[1.12] tracking-tight ${dark ? "text-on-inverse" : "text-ink"}`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`text-base leading-relaxed ${dark ? "text-on-inverse-muted" : "text-taupe"} ${maxDesc}`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
