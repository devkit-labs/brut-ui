import type { ReactNode } from "react"
import { Code2, Eye } from "lucide-react"

import { CopyBlockCode } from "@/components/copy-block-code"
import { Badge } from "@/registry/brutalist/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/brutalist/ui/tabs"

export function BlockShowcase({
  slug,
  index,
  title,
  description,
  components,
  code,
  children,
}: {
  slug: string
  index: number
  title: string
  description: string
  components: string[]
  code: string
  children: ReactNode
}) {
  return (
    <section id={slug} className="scroll-mt-24">
      <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs font-black text-muted-foreground">
              {String(index).padStart(2, "0")}
            </span>
            <Badge variant="secondary">Composition</Badge>
          </div>
          <h2 className="text-3xl font-black tracking-[-0.04em] uppercase sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 font-semibold text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {components.map((component) => (
            <Badge key={component} variant="outline" className="shadow-none">
              {component}
            </Badge>
          ))}
        </div>
      </div>

      <Tabs defaultValue="preview">
        <TabsList className="brut-surface h-auto bg-card p-1">
          <TabsTrigger
            value="preview"
            className="h-9 px-4 font-black uppercase data-active:bg-primary data-active:text-primary-foreground"
          >
            <Eye /> Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="h-9 px-4 font-black uppercase data-active:bg-primary data-active:text-primary-foreground"
          >
            <Code2 /> Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-5">
          <div className="brut-panel overflow-hidden bg-card">
            <div className="flex items-center justify-between border-b-[var(--brut-border)] border-border bg-muted px-4 py-2 font-mono text-xs font-black uppercase">
              <span>Live preview</span>
              <span className="text-muted-foreground">Responsive</span>
            </div>
            <div className="overflow-x-auto">{children}</div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-5">
          <div className="brut-panel overflow-hidden bg-foreground text-background">
            <div className="flex items-center justify-between gap-4 border-b-[var(--brut-border)] border-background/35 px-4 py-3">
              <span className="font-mono text-xs font-black tracking-wider uppercase">
                {slug}.tsx
              </span>
              <CopyBlockCode code={code} />
            </div>
            <pre className="max-h-[38rem] overflow-auto p-5 text-xs leading-6 sm:p-7 sm:text-sm">
              <code>{code}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
