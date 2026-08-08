import type { Metadata } from "next"

import { BlocksGalleryPage } from "@/components/blocks-gallery-page"

export const metadata: Metadata = {
  title: "Blocks — BRUT/UI",
  description: "Explore full interface compositions built with BRUT/UI components.",
}

export default function BlocksPage() {
  return <BlocksGalleryPage />
}
