import type { Metadata } from "next"

import { BlocksGalleryPage } from "@/components/blocks-gallery-page"

export const metadata: Metadata = {
  title: "Blocks — BRUT/UI",
  description: "Explore production application patterns composed from BRUT/UI components in three flavours.",
}

export default function BlocksPage() {
  return <BlocksGalleryPage />
}
