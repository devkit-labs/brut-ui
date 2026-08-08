"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ArrowUpRight, Boxes, Search, SlidersHorizontal } from "lucide-react"

import { BrutThemeControls } from "@/components/brut-theme-controls"
import { DocsHeader } from "@/components/docs-header"
import {
  componentCatalog,
  componentCategories,
} from "@/lib/component-catalog"
import { Badge } from "@/registry/brutalist/ui/badge"
import { Button } from "@/registry/brutalist/ui/button"
import { Input } from "@/registry/brutalist/ui/input"

export function ComponentsCatalogPage() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlQuery = searchParams.get("q") ?? ""
  const requestedCategory = searchParams.get("category") ?? "All"
  const urlCategory = componentCategories.includes(requestedCategory) ? requestedCategory : "All"
  const [query, setOptimisticQuery] = React.useOptimistic(urlQuery)
  const [category, setOptimisticCategory] = React.useOptimistic(urlCategory)
  const [, startTransition] = React.useTransition()
  const normalizedQuery = query.trim().toLowerCase()

  const updateUrl = React.useCallback((nextQuery: string, nextCategory: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (nextQuery.trim()) {
      params.set("q", nextQuery)
    } else {
      params.delete("q")
    }

    if (nextCategory === "All") {
      params.delete("category")
    } else {
      params.set("category", nextCategory)
    }

    const queryString = params.toString()
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false })
  }, [pathname, router, searchParams])

  const updateQuery = (nextQuery: string) => {
    startTransition(() => {
      setOptimisticQuery(nextQuery)
      updateUrl(nextQuery, category)
    })
  }

  const updateCategory = (nextCategory: string) => {
    startTransition(() => {
      setOptimisticCategory(nextCategory)
      updateUrl(query, nextCategory)
    })
  }

  const filteredComponents = componentCatalog.filter((item) => {
    const matchesQuery =
      !normalizedQuery ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.slug.includes(normalizedQuery)
    const matchesCategory = category === "All" || item.category === category

    return matchesQuery && matchesCategory
  })

  return (
    <div className="min-h-svh">
      <DocsHeader />

      <main>
        <section className="mx-auto max-w-[1480px] px-4 pt-12 pb-10 sm:px-6 lg:px-8">
          <Badge variant="secondary">
            <Boxes data-icon="inline-start" /> Component registry
          </Badge>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-5xl leading-[0.88] font-black tracking-[-0.065em] uppercase sm:text-7xl">
                Components.
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold text-muted-foreground">
                Every installed primitive in one place. Pick a component to see its live preview and installation command.
              </p>
            </div>
            <Badge variant="outline" className="w-fit text-sm">
              {componentCatalog.length} components
            </Badge>
          </div>
        </section>

        <section className="border-y-[var(--brut-border)] border-border bg-card">
          <div className="mx-auto grid max-w-[1480px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.55fr_1.45fr] lg:px-8">
            <div>
              <Badge variant="outline">
                <SlidersHorizontal data-icon="inline-start" /> Live theme
              </Badge>
              <h2 className="mt-3 text-2xl font-black tracking-tight uppercase">
                Tune every preview.
              </h2>
            </div>
            <BrutThemeControls />
          </div>
        </section>

        <section className="mx-auto max-w-[1480px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="brut-panel mb-10 grid gap-5 bg-card p-5 lg:grid-cols-[minmax(16rem,1fr)_2fr] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Search all components</span>
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Search all components..."
                className="pl-9"
              />
            </label>
            <div className="flex flex-wrap gap-2" aria-label="Filter by category">
              {["All", ...componentCategories].map((option) => (
                <Button
                  key={option}
                  size="sm"
                  variant={category === option ? "default" : "outline"}
                  aria-pressed={category === option}
                  onClick={() => updateCategory(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredComponents.map((item, index) => (
              <Link
                key={item.slug}
                href={`/components/${item.slug}`}
                className="brut-surface brut-focus group flex min-h-40 flex-col bg-card p-5 transition-transform"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-black text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <div className="mt-auto">
                  <Badge variant="outline" className="mb-3 shadow-none">
                    {item.category}
                  </Badge>
                  <h2 className="text-xl font-black tracking-tight uppercase">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

          {filteredComponents.length === 0 && (
            <div className="brut-panel bg-card p-12 text-center">
              <Search className="mx-auto mb-4 size-8" />
              <h2 className="text-xl font-black uppercase">No component found</h2>
              <p className="mt-2 font-medium text-muted-foreground">
                Try a different name or category.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
