import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, PackagePlus } from "lucide-react"

import { ComponentDocsSidebar } from "@/components/component-docs-sidebar"
import { ComponentPreview } from "@/components/component-preview"
import { CopyInstallCommand } from "@/components/copy-install-command"
import { DocsHeader } from "@/components/docs-header"
import {
  componentCatalog,
  type ComponentCatalogItem,
} from "@/lib/component-catalog"
import { Badge } from "@/registry/brutalist/ui/badge"
import { Separator } from "@/registry/brutalist/ui/separator"

export function ComponentDetailPage({ item }: { item: ComponentCatalogItem }) {
  const index = componentCatalog.findIndex((component) => component.slug === item.slug)
  const previous = index > 0 ? componentCatalog[index - 1] : undefined
  const next = index < componentCatalog.length - 1 ? componentCatalog[index + 1] : undefined
  const command = `pnpm dlx shadcn@latest add @brut/${item.slug}`

  return (
    <div className="min-h-svh">
      <DocsHeader />

      <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[15rem_minmax(0,1fr)]">
        <ComponentDocsSidebar currentSlug={item.slug} />

        <main className="min-w-0 px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
          <Link
            href="/components"
            className="mb-8 inline-flex items-center gap-2 text-sm font-black uppercase lg:hidden"
          >
            <ArrowLeft className="size-4" /> Components
          </Link>

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <Badge variant="secondary">{item.category}</Badge>
              <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] uppercase sm:text-7xl">
                {item.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold text-muted-foreground">
                {item.description}
              </p>
            </div>
            <span className="font-mono text-xs font-black text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {componentCatalog.length}
            </span>
          </div>

          <section aria-labelledby="preview-heading" className="mt-12">
            <div className="mb-4 flex items-center justify-between">
              <h2 id="preview-heading" className="text-xl font-black uppercase">Preview</h2>
              <Badge variant="outline">Live</Badge>
            </div>
            <div className="brut-panel grid min-h-[28rem] place-items-center overflow-hidden bg-card p-6 sm:p-10">
              <ComponentPreview slug={item.slug} />
            </div>
          </section>

          <section aria-labelledby="installation-heading" className="mt-14 max-w-4xl">
            <Badge variant="outline"><PackagePlus data-icon="inline-start" /> Installation</Badge>
            <h2 id="installation-heading" className="mt-4 text-3xl font-black uppercase">
              Add to your project.
            </h2>
            <p className="mt-4 font-medium text-muted-foreground">
              BRUT/UI uses the same installation process as shadcn. Configure the BRUT/UI registry, then add the component with the shadcn CLI.
            </p>
            <div className="brut-surface mt-6 flex items-center gap-4 bg-foreground p-3 pl-5 text-background">
              <code className="min-w-0 flex-1 overflow-x-auto font-mono text-sm font-bold whitespace-nowrap">
                {command}
              </code>
              <CopyInstallCommand command={command} />
            </div>
            <a
              href={item.shadcnUrl}
              target="_blank"
              rel="noreferrer"
              className="brut-control brut-focus mt-6 inline-flex items-center gap-2 bg-card px-4 py-2 text-sm"
            >
              View {item.title} on shadcn <ExternalLink className="size-4" />
            </a>
          </section>

          <Separator className="my-14" />

          <nav aria-label="Previous and next components" className="grid gap-4 sm:grid-cols-2">
            {previous ? (
              <Link href={`/components/${previous.slug}`} className="brut-surface group bg-card p-5">
                <span className="flex items-center gap-2 text-xs font-black tracking-widest text-muted-foreground uppercase">
                  <ArrowLeft className="size-4" /> Previous
                </span>
                <span className="mt-3 block text-xl font-black uppercase">{previous.title}</span>
              </Link>
            ) : <span />}
            {next && (
              <Link href={`/components/${next.slug}`} className="brut-surface group bg-card p-5 text-right">
                <span className="flex items-center justify-end gap-2 text-xs font-black tracking-widest text-muted-foreground uppercase">
                  Next <ArrowRight className="size-4" />
                </span>
                <span className="mt-3 block text-xl font-black uppercase">{next.title}</span>
              </Link>
            )}
          </nav>
        </main>
      </div>
    </div>
  )
}
