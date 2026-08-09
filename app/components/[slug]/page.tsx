import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ComponentDetailPage } from "@/components/component-detail-page"
import {
  componentSlugs,
  getComponent,
} from "@/lib/component-catalog"
import { getComponentPreviewSource } from "@/lib/component-preview-source"

type ComponentPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return componentSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ComponentPageProps): Promise<Metadata> {
  const { slug } = await params
  const item = getComponent(slug)

  if (!item) {
    return {}
  }

  return {
    title: `${item.title} — BRUT/UI`,
    description: item.description,
  }
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params
  const item = getComponent(slug)

  if (!item) {
    notFound()
  }

  const previewCode = await getComponentPreviewSource(item.slug)

  return <ComponentDetailPage item={item} previewCode={previewCode} />
}

export const dynamicParams = false
