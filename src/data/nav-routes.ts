/** Pathnames without locale prefix — use with `next-intl` `Link`. */
export const mainNavRoutes = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/gallery", key: "gallery" },
  { href: "/about", key: "about" },
  { href: "/booking", key: "booking" },
  { href: "/contact", key: "contact" },
] as const;

export type NavKey = (typeof mainNavRoutes)[number]["key"];
