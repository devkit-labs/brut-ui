import {
  Box,
  Braces,
  Focus,
  Layers3,
  MousePointerClick,
  Palette,
  SlidersHorizontal,
} from "lucide-react"

import { BrutThemeControls } from "@/components/brut-theme-controls"
import { DocsHeader } from "@/components/docs-header"
import { Badge } from "@/registry/brutalist/ui/badge"

const palettes = [
  {
    name: "Paper",
    value: "paper",
    description: "Warm off-white canvas, near-black structure, yellow primary, and blue secondary.",
    colors: [
      ["Background", "oklch(0.985 0.004 95)"],
      ["Foreground", "oklch(0.15 0.01 65)"],
      ["Primary", "oklch(0.82 0.18 88)"],
      ["Secondary", "oklch(0.88 0.105 210)"],
    ],
  },
  {
    name: "Signal",
    value: "signal",
    description: "Yellow canvas, pitch-black structure, red secondary, and cool blue accent.",
    colors: [
      ["Background", "oklch(0.91 0.16 96)"],
      ["Foreground", "oklch(0.13 0.01 70)"],
      ["Primary", "oklch(0.15 0.01 70)"],
      ["Secondary", "oklch(0.73 0.2 28)"],
    ],
  },
  {
    name: "Sky",
    value: "sky",
    description: "Light sky-blue canvas, ink-blue structure, saturated blue primary, and yellow secondary.",
    colors: [
      ["Background", "oklch(0.92 0.055 235)"],
      ["Foreground", "oklch(0.16 0.04 255)"],
      ["Primary", "oklch(0.52 0.2 255)"],
      ["Secondary", "oklch(0.88 0.16 92)"],
    ],
  },
] as const

const strengthColumns = [
  { key: "mode", label: "Mode", width: "13%" },
  { key: "border", label: "Border", width: "10%" },
  { key: "controlShadow", label: "Control shadow", width: "16%" },
  { key: "panelShadow", label: "Panel shadow", width: "16%" },
  { key: "sliderTrack", label: "Slider", width: "11%" },
  { key: "hover", label: "Hover", width: "10%" },
  { key: "press", label: "Press", width: "10%" },
  { key: "weight", label: "Weight", width: "14%" },
] as const

const strengthRows = [
  { mode: "Soft", border: "1px", controlShadow: "2px", panelShadow: "4px", sliderTrack: "2px", hover: "-1px", press: "1px", weight: "600" },
  { mode: "Solid", border: "2px", controlShadow: "4px", panelShadow: "7px", sliderTrack: "4px", hover: "-1px", press: "2px", weight: "700" },
  { mode: "Loud", border: "3px", controlShadow: "6px", panelShadow: "9px", sliderTrack: "6px", hover: "-2px", press: "3px", weight: "800" },
] as const

const customTokens = [
  ["--brut-border", "Shared border width", "Component boundaries, dividers, radio indicators, and slider thumbs."],
  ["--brut-slider-track", "Slider track thickness", "Keeps sliders restrained while scaling from 2px to 6px by strength."],
  ["--brut-shadow-x", "Control shadow X offset", "Buttons, inputs, and normal surfaces."],
  ["--brut-shadow-y", "Control shadow Y offset", "Keep paired with the X offset for hard shadows."],
  ["--brut-panel-shadow-x", "Panel shadow X offset", "Cards, dialogs, and high-level containers."],
  ["--brut-panel-shadow-y", "Panel shadow Y offset", "Use only for visually important surfaces."],
  ["--brut-shadow-color", "Hard-shadow color", "Usually follows the palette foreground or border color."],
  ["--brut-hover", "Hover translation", "Moves tactile controls up and left."],
  ["--brut-press", "Pressed translation", "Moves controls into their hard shadow."],
  ["--brut-weight", "Interactive font weight", "Scales label weight with brutalism strength."],
  ["--radius", "Shared corner radius", "Controlled by Sharp, Cut, or Chunky."],
]

const semanticTokens = [
  ["--background / --foreground", "Page canvas and default text."],
  ["--card / --card-foreground", "Cards and elevated content surfaces."],
  ["--popover / --popover-foreground", "Menus, popovers, dialogs, and floating content."],
  ["--primary / --primary-foreground", "Primary actions and strongest emphasis."],
  ["--secondary / --secondary-foreground", "Supporting actions and contrasting regions."],
  ["--muted / --muted-foreground", "Quiet surfaces, metadata, and supporting copy."],
  ["--accent / --accent-foreground", "Highlights and temporary interaction states."],
  ["--destructive", "Irreversible or dangerous actions and invalid states."],
  ["--border / --input / --ring", "Structure, form boundaries, and keyboard focus."],
]

const utilities = [
  [".brut-panel", "High-emphasis container", "Large cards, dialogs, showcase sections"],
  [".brut-surface", "Standard hard-shadow surface", "Cards and grouped content"],
  [".brut-control", "Tactile interactive surface", "Buttons and clickable controls"],
  [".brut-quiet", "Border-on-hover interaction", "Navigation and low-priority actions"],
  [".brut-focus", "Visible keyboard outline", "Custom interactive elements"],
  [".brut-input", "Tactile form field", "Inputs and textareas"],
  [".brut-input-group", "Grouped field boundary", "Input addons and compound fields"],
  [".brut-chip / .brut-toggle", "Flat compact boundary", "Badges, toggles, and dense controls"],
  [".brut-popover", "Floating hard-shadow surface", "Menus, hover cards, and popovers"],
  [".brut-dialog", "High-emphasis overlay", "Dialog and alert-dialog content"],
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="brut-surface overflow-x-auto bg-foreground p-4 text-sm text-background">
      <code>{children}</code>
    </pre>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black tracking-[0.18em] text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-black tracking-[-0.045em] uppercase sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base font-semibold text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export function ThemesPage() {
  return (
    <div className="min-h-svh">
      <DocsHeader />

      <main>
        <section className="mx-auto max-w-[1480px] px-4 pt-12 pb-10 sm:px-6 lg:px-8">
          <Badge variant="secondary">
            <Palette data-icon="inline-start" /> Theme system
          </Badge>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <h1 className="text-5xl leading-[0.88] font-black tracking-[-0.065em] uppercase sm:text-7xl">
                Themes.
              </h1>
              <p className="mt-5 max-w-3xl text-lg font-semibold text-muted-foreground">
                BRUT/UI keeps shadcn&apos;s semantic color contract and adds a small set of tokens for borders, hard shadows, motion, type weight, and radius.
              </p>
            </div>
            <p className="border-l-[var(--brut-border)] border-border pl-4 text-sm font-semibold text-muted-foreground">
              Light mode only. The default combination is Paper, Soft, and Cut.
            </p>
          </div>
        </section>

        <section className="border-y-[var(--brut-border)] border-border bg-card">
          <div className="mx-auto grid max-w-[1480px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.55fr_1.45fr] lg:px-8">
            <div>
              <Badge variant="outline">
                <SlidersHorizontal data-icon="inline-start" /> Live theme
              </Badge>
              <h2 className="mt-3 text-2xl font-black tracking-tight uppercase">
                Test the token matrix.
              </h2>
              <p className="mt-2 max-w-sm text-sm font-semibold text-muted-foreground">
                Changes apply across the app until the browser reloads.
              </p>
            </div>
            <BrutThemeControls />
          </div>
        </section>

        <div className="mx-auto grid max-w-[1480px] gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:px-8">
          <aside className="hidden lg:block">
            <nav aria-label="Theme documentation" className="sticky top-24 grid gap-1 text-sm font-bold">
              {[
                ["Palettes", "#palettes"],
                ["Strength", "#strength"],
                ["Radius", "#radius"],
                ["Custom tokens", "#custom-tokens"],
                ["Semantic colors", "#semantic-colors"],
                ["Utilities", "#utilities"],
                ["Guidelines", "#guidelines"],
                ["Configuration", "#configuration"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="brut-quiet px-3 py-2">
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 space-y-24">
            <section id="palettes" className="scroll-mt-24">
              <SectionHeading
                eyebrow="01 / Palette"
                title="Three purposeful canvases."
                description="Each palette remaps familiar shadcn semantic variables. Components reference roles—not hard-coded colors—so every composition changes as one system."
              />
              <div className="mt-8 grid gap-5 xl:grid-cols-3">
                {palettes.map((palette) => (
                  <article key={palette.value} className="brut-panel bg-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-black uppercase">{palette.name}</h3>
                        <code className="text-xs font-bold text-muted-foreground">data-brut-palette=&quot;{palette.value}&quot;</code>
                      </div>
                      <span className="brut-chip bg-muted px-2 py-1 text-xs uppercase">Palette</span>
                    </div>
                    <p className="mt-4 min-h-16 text-sm font-semibold text-muted-foreground">
                      {palette.description}
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {palette.colors.map(([label, color]) => (
                        <div key={label} className="border-[var(--brut-border)] border-border bg-background p-2">
                          <span
                            className="mb-2 block h-10 border-[var(--brut-border)] border-border"
                            style={{ backgroundColor: color }}
                          />
                          <span className="block text-xs font-black uppercase">{label}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="strength" className="scroll-mt-24">
              <SectionHeading
                eyebrow="02 / Strength"
                title="One dial, coordinated force."
                description="Strength changes border width, slider thickness, both shadow tiers, tactile movement, and interactive type weight together. Do not tune these values independently inside components."
              />
              <div className="brut-panel mt-8 overflow-x-auto bg-card">
                <table className="w-full min-w-[840px] table-fixed border-collapse text-sm">
                  <colgroup>
                    {strengthColumns.map((column) => (
                      <col key={column.key} style={{ width: column.width }} />
                    ))}
                  </colgroup>
                  <thead className="bg-muted text-xs uppercase">
                    <tr>
                      {strengthColumns.map((column, index) => (
                        <th key={column.key} className={`border-b-[var(--brut-border)] border-border px-4 py-3 font-black ${index === 0 ? "text-left" : "text-center"}`}>
                          {column.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {strengthRows.map((row) => (
                      <tr key={row.mode} className="not-last:border-b-[var(--brut-border)] not-last:border-border">
                        {strengthColumns.map((column, index) => (
                          <td key={column.key} className={`px-4 py-3 ${index === 0 ? "text-left font-black" : "text-center font-mono"}`}>
                            {row[column.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="radius" className="scroll-mt-24">
              <SectionHeading
                eyebrow="03 / Radius"
                title="Corners stay coordinated."
                description="Radius affects component shells and their internal parts. Preserve circles for semantic shapes such as radio indicators and avatars."
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {[
                  ["Sharp", "sharp", "0rem", "rounded-none"],
                  ["Cut", "cut", "0.375rem", "rounded-md"],
                  ["Chunky", "chunky", "0.875rem", "rounded-[0.875rem]"],
                ].map(([name, value, size, radiusClass]) => (
                  <article key={value} className="brut-surface bg-card p-5">
                    <div className={`h-20 border-[var(--brut-border)] border-border bg-primary ${radiusClass}`} />
                    <h3 className="mt-4 font-black uppercase">{name}</h3>
                    <code className="text-xs font-bold text-muted-foreground">{size} · {value}</code>
                  </article>
                ))}
              </div>
            </section>

            <section id="custom-tokens" className="scroll-mt-24">
              <SectionHeading
                eyebrow="04 / Custom tokens"
                title="The brutalist layer."
                description="These tokens sit on top of shadcn's semantic theme. Components consume them through shared utilities instead of repeating measurements."
              />
              <div className="brut-panel mt-8 overflow-hidden bg-card">
                {customTokens.map(([token, role, usage], index) => (
                  <div key={token} className={`grid gap-2 p-4 md:grid-cols-[14rem_13rem_1fr] ${index ? "border-t-[var(--brut-border)] border-border" : ""}`}>
                    <code className="font-bold text-primary">{token}</code>
                    <strong>{role}</strong>
                    <span className="text-sm font-semibold text-muted-foreground">{usage}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="semantic-colors" className="scroll-mt-24">
              <SectionHeading
                eyebrow="05 / Semantic colors"
                title="Keep the shadcn contract."
                description="Do not replace semantic variables with palette-specific color names. That keeps copied shadcn compositions compatible with all three BRUT/UI palettes."
              />
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {semanticTokens.map(([token, usage]) => (
                  <div key={token} className="brut-surface bg-card p-4">
                    <code className="font-bold text-primary">{token}</code>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">{usage}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="utilities" className="scroll-mt-24">
              <SectionHeading
                eyebrow="06 / Utilities"
                title="Build hierarchy, not repetition."
                description="The utilities intentionally use different border and shadow treatments. Choose the role that matches the component instead of putting a large hard shadow everywhere."
              />
              <div className="brut-panel mt-8 overflow-hidden bg-card">
                {utilities.map(([name, role, usage], index) => (
                  <div key={name} className={`grid gap-2 p-4 md:grid-cols-[12rem_15rem_1fr] ${index ? "border-t-[var(--brut-border)] border-border" : ""}`}>
                    <code className="font-bold text-primary">{name}</code>
                    <strong>{role}</strong>
                    <span className="text-sm font-semibold text-muted-foreground">{usage}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="guidelines" className="scroll-mt-24">
              <SectionHeading
                eyebrow="07 / Guidelines"
                title="Use force with intent."
                description="A brutalist interface still needs hierarchy, predictable interaction, and accessible focus."
              />
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  [Layers3, "Separate hierarchy", "Use panel shadows for overlays and major containers, normal shadows for controls, and border-only styling for compact items."],
                  [MousePointerClick, "Preserve tactile motion", "Interactive controls move up on hover and collapse into their shadow when pressed. Static surfaces should not move."],
                  [Focus, "Never hide focus", "Use --ring and .brut-focus for a visible outline. A hard shadow is not a replacement for keyboard focus."],
                  [Box, "Compose with semantic roles", "Use bg-card, bg-popover, border-border, and text-muted-foreground so palettes remain interchangeable."],
                ].map(([Icon, title, copy]) => (
                  <article key={title as string} className="brut-surface bg-card p-5">
                    <Icon className="size-6" />
                    <h3 className="mt-5 text-lg font-black uppercase">{title as string}</h3>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">{copy as string}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="configuration" className="scroll-mt-24 pb-16">
              <SectionHeading
                eyebrow="08 / Configuration"
                title="Set the theme at the root."
                description="The three data attributes form the public configuration API. Change them together on the document root; every registry component reads the resulting CSS variables."
              />
              <div className="mt-8 grid gap-6 xl:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-center gap-2 font-black uppercase">
                    <Braces className="size-4" /> HTML
                  </div>
                  <CodeBlock>{`<html
  data-brut-palette="paper"
  data-brut-strength="soft"
  data-brut-radius="cut"
>`}</CodeBlock>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2 font-black uppercase">
                    <Braces className="size-4" /> Component CSS
                  </div>
                  <CodeBlock>{`.custom-surface {
  border: var(--brut-border) solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  box-shadow: var(--brut-shadow-x)
    var(--brut-shadow-y) 0
    var(--brut-shadow-color);
}`}</CodeBlock>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
