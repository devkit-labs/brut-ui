import type { Metadata } from "next"

import { ThemesPage } from "@/components/themes-page"

export const metadata: Metadata = {
  title: "Themes — BRUT/UI",
  description: "Configure BRUT/UI flavours, brutalism strength, radius, and project-wide design tokens.",
}

export default function ThemePage() {
  return <ThemesPage />
}
