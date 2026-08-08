import type { Metadata } from "next";

import { BrutThemeSession } from "@/components/brut-theme-session";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "BRUT/UI — A Neo-Brutalist shadcn Registry",
  description:
    "Accessible shadcn components restyled as a configurable neo-brutalist design system.",
  openGraph: {
    title: "BRUT/UI — UI That Hits Back",
    description:
      "A configurable neo-brutalist component registry built on shadcn and Base UI.",
    images: [
      {
        url: "/brut-ui-og.png",
        width: 1792,
        height: 896,
        alt: "BRUT/UI neo-brutalist component registry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRUT/UI — UI That Hits Back",
    description:
      "A configurable neo-brutalist component registry built on shadcn and Base UI.",
    images: ["/brut-ui-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-brut-palette="paper"
      data-brut-strength="soft"
      data-brut-radius="cut"
    >
      <body className="antialiased">
        <BrutThemeSession />
        {children}
      </body>
    </html>
  );
}
