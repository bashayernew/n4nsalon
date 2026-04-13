/**
 * Hair mask showcase — structural data only.
 *
 * User-facing copy lives in `messages/en.json` and `messages/ar.json` under
 * `hairMasks.items.{id}` (name, preview, description).
 *
 * To add a mask:
 * 1. Append an entry here with a unique `id` and `image` URL.
 * 2. Add `hairMasks.items.{id}` in BOTH `messages/en.json` and `messages/ar.json`.
 *
 * Conceptually each mask has name_en / name_ar and description_en / description_ar;
 * in this codebase those are the same keys (`name`, `preview`, `description`)
 * in each locale file — the standard next-intl pattern.
 */
export type HairMaskCatalogEntry = {
  id: string;
  image: string;
};

export const hairMaskCatalog: HairMaskCatalogEntry[] = [
  {
    id: "hm-argan",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=82",
  },
  {
    id: "hm-keratin",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=900&q=82",
  },
  {
    id: "hm-scalp",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=82",
  },
  {
    id: "hm-rose",
    image:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=900&q=82",
  },
];
