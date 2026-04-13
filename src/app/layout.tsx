import type { ReactNode } from "react";
import "./globals.css";

/** Root shell — real `html`/`body` live in `[locale]/layout.tsx` (next-intl pattern). */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
