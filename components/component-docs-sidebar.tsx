"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import {
  componentCatalog,
  type ComponentSlug,
} from "@/lib/component-catalog"

const storageKey = "brut-ui:component-sidebar-scroll"
let savedScrollTop = 0

function rememberScrollPosition(scrollTop: number) {
  savedScrollTop = scrollTop

  try {
    window.sessionStorage.setItem(storageKey, String(scrollTop))
  } catch {
    // In-memory persistence still works when storage is unavailable.
  }
}

export function ComponentDocsSidebar({ currentSlug }: { currentSlug: ComponentSlug }) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const scrollContainer = scrollContainerRef.current

    if (!scrollContainer) {
      return
    }

    let scrollTop = savedScrollTop

    try {
      const storedScrollTop = window.sessionStorage.getItem(storageKey)
      if (storedScrollTop !== null) {
        scrollTop = Number(storedScrollTop) || 0
      }
    } catch {
      // Fall back to the value retained by this client bundle.
    }

    scrollContainer.scrollTop = scrollTop
  }, [])

  return (
    <aside className="hidden border-r-[var(--brut-border)] border-border px-5 py-8 lg:block">
      <div
        ref={scrollContainerRef}
        onScroll={(event) => rememberScrollPosition(event.currentTarget.scrollTop)}
        className="sticky top-24 max-h-[calc(100svh-7rem)] overflow-y-auto pr-2"
      >
        <Link
          href="/components"
          className="mb-5 flex items-center gap-2 text-xs font-black tracking-widest uppercase"
        >
          <ArrowLeft className="size-4" /> All components
        </Link>
        <nav aria-label="Component pages" className="grid gap-0.5">
          {componentCatalog.map((component) => (
            <Link
              key={component.slug}
              href={`/components/${component.slug}`}
              aria-current={component.slug === currentSlug ? "page" : undefined}
              onClick={() => rememberScrollPosition(scrollContainerRef.current?.scrollTop ?? 0)}
              className="rounded-[calc(var(--radius)*0.65)] border-2 border-transparent px-2 py-1.5 text-sm font-bold hover:border-border hover:bg-muted aria-[current=page]:border-border aria-[current=page]:bg-primary aria-[current=page]:text-primary-foreground"
            >
              {component.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
