import type { ServiceCategory } from "./services-types";
import type { GalleryFilterId } from "./gallery-types";

export type GalleryCatalogItem = {
  id: string;
  category: ServiceCategory;
  image: string;
  aspect: "portrait" | "landscape" | "square";
};

export const galleryCatalog: GalleryCatalogItem[] = [
  {
    id: "g1",
    category: "hair",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1522338140700-404f7be3d93a?w=800&q=80",
  },
  {
    id: "g2",
    category: "hair",
    aspect: "landscape",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
  },
  {
    id: "g3",
    category: "bridal",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: "g4",
    category: "nails",
    aspect: "square",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
  },
  {
    id: "g5",
    category: "makeup",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
  {
    id: "g6",
    category: "hair",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1492106087828-71f1a01d2b39?w=800&q=80",
  },
  {
    id: "g7",
    category: "lashes",
    aspect: "square",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
  },
  {
    id: "g8",
    category: "makeup",
    aspect: "landscape",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80",
  },
  {
    id: "g9",
    category: "home",
    aspect: "landscape",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80",
  },
  {
    id: "g10",
    category: "bridal",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    id: "g11",
    category: "nails",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b00b20b1?w=800&q=80",
  },
  {
    id: "g12",
    category: "lashes",
    aspect: "square",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
  },
];

export const galleryFilterIds: { id: GalleryFilterId }[] = [
  { id: "all" },
  { id: "hair" },
  { id: "nails" },
  { id: "makeup" },
  { id: "lashes" },
  { id: "bridal" },
  { id: "home" },
];
