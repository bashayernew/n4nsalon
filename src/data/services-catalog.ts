import type { ServiceCategory } from "./services-types";

/** Structural service data only — all copy lives in messages/{locale}.json */
export type ServiceCatalogEntry = {
  id: string;
  category: ServiceCategory;
  featured?: boolean;
};

export const servicesCatalog: ServiceCatalogEntry[] = [
  { id: "hair-1", category: "hair", featured: true },
  { id: "hair-2", category: "hair", featured: true },
  { id: "hair-3", category: "hair" },
  { id: "nails-1", category: "nails", featured: true },
  { id: "nails-2", category: "nails" },
  { id: "makeup-1", category: "makeup", featured: true },
  { id: "makeup-2", category: "makeup" },
  { id: "lashes-1", category: "lashes" },
  { id: "lashes-2", category: "lashes" },
  { id: "bridal-1", category: "bridal", featured: true },
  { id: "bridal-2", category: "bridal" },
  { id: "home-1", category: "home", featured: true },
];

export function catalogByCategory(category: ServiceCategory) {
  return servicesCatalog.filter((s) => s.category === category);
}
