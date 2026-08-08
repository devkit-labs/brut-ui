import { readFile } from "node:fs/promises"
import path from "node:path"
import { Blocks, Layers3, SlidersHorizontal } from "lucide-react"

import { AuthGatewayBlock } from "@/components/showcase-blocks/auth-gateway"
import { BlockShowcase } from "@/components/block-showcase"
import { BrutThemeControls } from "@/components/brut-theme-controls"
import { DocsHeader } from "@/components/docs-header"
import { LaunchHeroBlock } from "@/components/showcase-blocks/launch-hero"
import { OperationsDashboardBlock } from "@/components/showcase-blocks/operations-dashboard"
import { PricingDeckBlock } from "@/components/showcase-blocks/pricing-deck"
import { ProjectBoardBlock } from "@/components/showcase-blocks/project-board"
import { Badge } from "@/registry/brutalist/ui/badge"

const blockDefinitions = [
  {
    slug: "launch-hero",
    filename: "launch-hero.tsx",
    title: "Launch Hero",
    description: "A complete product opening with navigation, calls to action, launch status, and proof points.",
    components: ["Button", "Badge", "Card", "Progress"],
    preview: <LaunchHeroBlock />,
  },
  {
    slug: "auth-gateway",
    filename: "auth-gateway.tsx",
    title: "Auth Gateway",
    description: "A high-trust sign-in composition with security messaging and a strong split-panel layout.",
    components: ["Input", "Label", "Checkbox", "Alert"],
    preview: <AuthGatewayBlock />,
  },
  {
    slug: "operations-dashboard",
    filename: "operations-dashboard.tsx",
    title: "Operations Dashboard",
    description: "Dense reporting that stays readable through hierarchy, structured tables, and status signals.",
    components: ["Card", "Table", "Select", "Progress"],
    preview: <OperationsDashboardBlock />,
  },
  {
    slug: "pricing-deck",
    filename: "pricing-deck.tsx",
    title: "Pricing Deck",
    description: "A decisive three-tier pricing section with one clear recommendation and scannable benefits.",
    components: ["Card", "Button", "Badge", "Separator"],
    preview: <PricingDeckBlock />,
  },
  {
    slug: "project-board",
    filename: "project-board.tsx",
    title: "Project Board",
    description: "A responsive kanban-style workspace built from task cards, progress, ownership, and states.",
    components: ["Card", "Avatar", "Checkbox", "Progress"],
    preview: <ProjectBoardBlock />,
  },
]

async function readBlockSource(filename: string) {
  const filePath = path.join(process.cwd(), "components", "showcase-blocks", filename)
  return (await readFile(filePath, "utf8")).trim()
}

export async function BlocksGalleryPage() {
  const blocks = await Promise.all(
    blockDefinitions.map(async (block) => ({
      ...block,
      code: await readBlockSource(block.filename),
    }))
  )

  return (
    <div className="min-h-svh">
      <DocsHeader />

      <main>
        <section className="mx-auto max-w-[1480px] px-4 pt-12 pb-10 sm:px-6 lg:px-8">
          <Badge variant="secondary"><Blocks data-icon="inline-start" /> Component compositions</Badge>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-5xl leading-[0.88] font-black tracking-[-0.065em] uppercase sm:text-7xl">
                Blocks.
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold text-muted-foreground">
                Full interface ideas assembled from BRUT/UI primitives. Preview the composition, then inspect or copy the code.
              </p>
            </div>
            <Badge variant="outline" className="w-fit text-sm">{blocks.length} showcases</Badge>
          </div>
        </section>

        <section className="border-y-[var(--brut-border)] border-border bg-card">
          <div className="mx-auto grid max-w-[1480px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.55fr_1.45fr] lg:px-8">
            <div>
              <Badge variant="outline"><SlidersHorizontal data-icon="inline-start" /> Live theme</Badge>
              <h2 className="mt-3 text-2xl font-black tracking-tight uppercase">Tune every block.</h2>
              <p className="mt-2 max-w-sm text-sm font-semibold text-muted-foreground">
                Palette, border strength, shadow depth, and radius update every composition together.
              </p>
            </div>
            <BrutThemeControls />
          </div>
        </section>

        <section className="mx-auto max-w-[1480px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="brut-panel flex flex-col gap-4 bg-card p-5 lg:flex-row lg:items-center">
            <div className="flex items-center gap-3 lg:mr-auto">
              <Layers3 className="size-5" />
              <span className="font-black uppercase">Jump to a block</span>
            </div>
            <nav aria-label="Block previews" className="flex flex-wrap gap-2">
              {blocks.map((block, index) => (
                <a key={block.slug} href={`#${block.slug}`} className="brut-quiet px-3 py-2 text-sm">
                  {String(index + 1).padStart(2, "0")} {block.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-[1480px] space-y-20 px-4 pb-24 sm:px-6 lg:px-8">
          {blocks.map((block, index) => (
            <BlockShowcase
              key={block.slug}
              slug={block.slug}
              index={index + 1}
              title={block.title}
              description={block.description}
              components={block.components}
              code={block.code}
            >
              {block.preview}
            </BlockShowcase>
          ))}
        </div>
      </main>

      <footer className="border-t-[var(--brut-border)] border-border bg-background">
        <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-3 px-4 py-6 text-sm font-bold sm:flex-row sm:px-6 lg:px-8">
          <span>BRUT/UI — COMPOSE LOUDER.</span>
          <span>Showcase blocks · not registry items</span>
        </div>
      </footer>
    </div>
  )
}
