import type { Metadata } from "next";

import { BrutThemeSession } from "@/components/brut-theme-session";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "BRUT/UI — A Neo-Brutalist shadcn Registry",
  description:
    "Three production-minded neo-brutalist UI flavours built on accessible shadcn components.",
  openGraph: {
    title: "BRUT/UI — Three Flavours of Neo-Brutalist UI",
    description:
      "Paper, Signal, and Sky: a configurable neo-brutalist component registry built for production applications.",
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
    title: "BRUT/UI — Three Flavours of Neo-Brutalist UI",
    description:
      "Paper, Signal, and Sky: a configurable neo-brutalist component registry built for production applications.",
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
