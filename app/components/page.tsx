import type { Metadata } from "next"
import { Suspense } from "react"

import { ComponentsCatalogPage } from "@/components/components-catalog-page"

export const metadata: Metadata = {
  title: "Components — BRUT/UI",
  description: "Browse every component in the BRUT/UI neo-brutalist registry.",
}

export default function ComponentsPage() {
  return (
    <Suspense fallback={<div className="min-h-svh bg-background" />}>
      <ComponentsCatalogPage />
    </Suspense>
  )
}
