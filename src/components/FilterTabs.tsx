"use client";

import { useTranslations } from "next-intl";
import type { GalleryFilterId } from "@/data/gallery-types";

type FilterTabsProps = {
  filters: { id: GalleryFilterId; label: string }[];
  active: GalleryFilterId;
  onChange: (id: GalleryFilterId) => void;
};

export function FilterTabs({ filters, active, onChange }: FilterTabsProps) {
  const t = useTranslations("gallery");
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label={t("filterAria")}
    >
      {filters.map((f) => {
        const selected = active === f.id;
        return (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(f.id)}
            className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition ${
              selected
                ? "border-ink bg-surface-inverse text-on-inverse"
                : "border-line bg-surface-card text-taupe hover:border-line-strong"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
