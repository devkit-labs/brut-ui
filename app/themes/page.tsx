import type { Metadata } from "next"

import { ThemesPage } from "@/components/themes-page"

export const metadata: Metadata = {
  title: "Themes — BRUT/UI",
  description: "Configure BRUT/UI palettes, strength, radius, and custom neo-brutalist design tokens.",
}

export default function ThemePage() {
  return <ThemesPage />
}
