"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  CircleAlert,
  Copy,
  Github,
  Linkedin,
  Palette,
  SlidersHorizontal,
  Sparkles,
  Terminal,
} from "lucide-react"

import { DocsNavLink } from "@/components/docs-nav-link"
import { GithubStarLink } from "@/components/github-star-link"
import {
  type BrutPalette,
  type BrutRadius,
  type BrutStrength,
  updateBrutTheme,
  useBrutTheme,
} from "@/lib/brut-theme"
import { componentCatalog } from "@/lib/component-catalog"
import { Alert, AlertDescription, AlertTitle } from "@/registry/brutalist/ui/alert"
import { Badge } from "@/registry/brutalist/ui/badge"
import { Button } from "@/registry/brutalist/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/brutalist/ui/card"
import { Checkbox } from "@/registry/brutalist/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/brutalist/ui/dialog"
import { Input } from "@/registry/brutalist/ui/input"
import { Label } from "@/registry/brutalist/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/brutalist/ui/popover"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/brutalist/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/brutalist/ui/select"
import { Separator } from "@/registry/brutalist/ui/separator"
import { Switch } from "@/registry/brutalist/ui/switch"
import { Textarea } from "@/registry/brutalist/ui/textarea"

const palettes: Array<{ value: BrutPalette; label: string; swatch: string }> = [
  { value: "paper", label: "Paper", swatch: "bg-[#fbfaf6]" },
  { value: "signal", label: "Signal", swatch: "bg-[#f4dd3f]" },
  { value: "sky", label: "Sky", swatch: "bg-[#dcefff]" },
]

const strengths: Array<{ value: BrutStrength; label: string; detail: string }> = [
  { value: "soft", label: "Soft", detail: "1px / 2px" },
  { value: "solid", label: "Solid", detail: "2px / 4px" },
  { value: "loud", label: "Loud", detail: "3px / 7px" },
]

const radii: Array<{ value: BrutRadius; label: string; detail: string }> = [
  { value: "sharp", label: "Sharp", detail: "0" },
  { value: "cut", label: "Cut", detail: "6px" },
  { value: "chunky", label: "Chunky", detail: "14px" },
]

function ShowcaseCard({
  name,
  description,
  className = "",
  children,
}: {
  name: string
  description: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <article
      data-component-name={name.toLowerCase()}
      className={`brut-panel flex min-h-64 flex-col bg-card p-5 ${className}`}
    >
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black tracking-tight uppercase">{name}</h3>
          <p className="mt-1 max-w-xs text-sm font-medium text-muted-foreground">
            {description}
          </p>
        </div>
        <Badge variant="outline">UI</Badge>
      </div>
      <div className="flex flex-1 items-center justify-center">{children}</div>
    </article>
  )
}

export function BrutalistLanding() {
  const { palette, strength, radius } = useBrutTheme()
  const [copied, setCopied] = React.useState(false)

  const copyInstall = async () => {
    await navigator.clipboard.writeText("pnpm dlx shadcn@latest add @brut/button")
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const normalizedQuery = ""

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-40 border-b-[var(--brut-border)] border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1480px] items-center gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-2 font-black tracking-[-0.06em] uppercase">
            <span className="grid size-9 place-items-center border-[var(--brut-border)] border-border bg-primary text-primary-foreground shadow-[3px_3px_0_var(--brut-shadow-color)]">
              B
            </span>
            <span className="hidden text-lg sm:inline">Brut/UI</span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            <DocsNavLink href="/">Home</DocsNavLink>
            <DocsNavLink href="/components">Components</DocsNavLink>
            <DocsNavLink href="/blocks">Blocks</DocsNavLink>
            <DocsNavLink href="/themes">Theme</DocsNavLink>
          </nav>

          <div className="ml-auto">
            <GithubStarLink />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-[1480px] gap-12 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-16 lg:pb-28">
          <div>
            <Badge className="mb-6 bg-accent text-accent-foreground">
              <Sparkles data-icon="inline-start" /> Three flavours. Built for production.
            </Badge>
            <h1 className="max-w-5xl text-[clamp(4rem,11vw,9.5rem)] leading-[0.78] font-black tracking-[-0.085em] uppercase">
              UI that
              <span className="mt-2 block w-fit border-[var(--brut-border)] border-border bg-primary px-3 pb-3 text-primary-foreground shadow-[var(--brut-shadow-x)_var(--brut-shadow-y)_0_var(--brut-shadow-color)] -rotate-1">
                hits back.
              </span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed font-semibold sm:text-xl">
              A production-minded ui component library in three distinct neo-brutalist flavours:
              Paper, Signal, and Sky. Built on top of Shadcn UI.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href="/components" />}
              >
                Browse components <ArrowRight data-icon="inline-end" />
              </Button>
              <Button size="lg" variant="outline" onClick={copyInstall}>
                {copied ? <Check /> : <Copy />}
                {copied ? "Copied" : "Copy install"}
              </Button>
            </div>
          </div>

          <div className="brut-panel relative self-start overflow-hidden bg-card p-6 sm:p-8">
            <div className="absolute top-0 right-0 border-b-[var(--brut-border)] border-l-[var(--brut-border)] border-border bg-secondary px-4 py-2 text-xs font-black uppercase">
              Live system
            </div>
            <Terminal className="mb-8 size-12" strokeWidth={2.5} />
            <div className="font-mono text-sm font-bold sm:text-base">
              <p><span className="text-destructive">$</span> pnpm dlx shadcn@latest</p>
              <p className="mt-2">add @brut/button</p>
              <Separator className="my-6" />
              <p className="text-muted-foreground">✓ base theme merged</p>
              <p className="text-muted-foreground">✓ dependencies installed</p>
              <p className="text-muted-foreground">✓ button.tsx created</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 text-center">
              {[
                ["3", "Flavours"],
                ["3", "Strengths"],
                [String(componentCatalog.length), "Primitives"],
              ].map(([value, label]) => (
                <div key={label} className="border-2 border-border bg-muted p-3">
                  <div className="text-2xl font-black">{value}</div>
                  <div className="text-[0.65rem] font-black tracking-wider uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="tuner-heading" className="border-y-[var(--brut-border)] border-border bg-card">
          <div className="mx-auto grid max-w-[1480px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div>
              <Badge variant="secondary"><SlidersHorizontal data-icon="inline-start" /> Theme tuner</Badge>
              <h2 id="tuner-heading" className="mt-4 text-3xl font-black tracking-tight uppercase sm:text-4xl">
                Three flavours. Your level of force.
              </h2>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              <fieldset>
                <legend className="mb-3 flex items-center gap-2 text-xs font-black tracking-widest uppercase">
                  <Palette className="size-4" /> Flavour
                </legend>
                <div className="flex flex-wrap gap-2">
                  {palettes.map((option) => (
                    <Button
                      key={option.value}
                      size="sm"
                      variant={palette === option.value ? "default" : "outline"}
                      aria-pressed={palette === option.value}
                      onClick={() => updateBrutTheme({ palette: option.value })}
                    >
                      <span className={`size-3 border-2 border-current ${option.swatch}`} />
                      {option.label}
                    </Button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-xs font-black tracking-widest uppercase">Brutalism</legend>
                <div className="flex flex-wrap gap-2">
                  {strengths.map((option) => (
                    <Button
                      key={option.value}
                      size="sm"
                      variant={strength === option.value ? "default" : "outline"}
                      aria-pressed={strength === option.value}
                      onClick={() => updateBrutTheme({ strength: option.value })}
                      title={`${option.label}: ${option.detail}`}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-xs font-black tracking-widest uppercase">Radius</legend>
                <div className="flex flex-wrap gap-2">
                  {radii.map((option) => (
                    <Button
                      key={option.value}
                      size="sm"
                      variant={radius === option.value ? "default" : "outline"}
                      aria-pressed={radius === option.value}
                      onClick={() => updateBrutTheme({ radius: option.value })}
                      title={`${option.label}: ${option.detail}`}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </section>

        <section id="components" className="mx-auto max-w-[1480px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid auto-rows-auto gap-6 md:grid-cols-2 xl:grid-cols-4">
            {(!normalizedQuery || "button".includes(normalizedQuery)) && (
              <ShowcaseCard name="Button" description="Six familiar variants with tactile travel." className="md:col-span-2">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Delete</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "badge".includes(normalizedQuery)) && (
              <ShowcaseCard name="Badge" description="Small labels without losing the system voice.">
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge>New</Badge>
                  <Badge variant="secondary">Stable</Badge>
                  <Badge variant="outline">Beta</Badge>
                  <Badge variant="destructive">Hot</Badge>
                </div>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "checkbox".includes(normalizedQuery)) && (
              <ShowcaseCard name="Checkbox" description="Clear state with generous hit targets.">
                <div className="grid gap-4">
                  <Label className="text-sm normal-case tracking-normal">
                    <Checkbox defaultChecked /> Ship accessible defaults
                  </Label>
                  <Label className="text-sm normal-case tracking-normal opacity-60">
                    <Checkbox disabled /> Disabled option
                  </Label>
                </div>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "input label".includes(normalizedQuery)) && (
              <ShowcaseCard name="Input + Label" description="Focus and invalid states stay impossible to miss." className="md:col-span-2">
                <div className="grid w-full max-w-lg gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="preview-email">Email</Label>
                    <Input id="preview-email" placeholder="you@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="preview-code">Invite code</Label>
                    <Input id="preview-code" aria-invalid defaultValue="WRONG-42" />
                  </div>
                </div>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "switch".includes(normalizedQuery)) && (
              <ShowcaseCard name="Switch" description="Chunky status control with no ambiguity.">
                <div className="flex items-center gap-4">
                  <Switch defaultChecked aria-label="Enable notifications" />
                  <span className="font-black uppercase">On</span>
                </div>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "select dropdown".includes(normalizedQuery)) && (
              <ShowcaseCard name="Select" description="A direct, keyboard-friendly dropdown with a weighted menu.">
                <Select defaultValue="solid">
                  <SelectTrigger className="w-48" aria-label="Brutalism strength">
                    <SelectValue placeholder="Choose strength" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Brutalism</SelectLabel>
                      <SelectItem value="soft">Soft</SelectItem>
                      <SelectItem value="solid">Solid</SelectItem>
                      <SelectItem value="loud">Loud</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "popover".includes(normalizedQuery)) && (
              <ShowcaseCard name="Popover" description="Compact overlays use firm framing without dialog-level weight.">
                <Popover>
                  <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader>
                      <PopoverTitle>Quick settings</PopoverTitle>
                      <PopoverDescription>
                        Change a local preference without leaving the current task.
                      </PopoverDescription>
                    </PopoverHeader>
                    <Label className="mt-1 flex items-center justify-between text-sm normal-case tracking-normal">
                      Show grid <Switch defaultChecked size="sm" />
                    </Label>
                  </PopoverContent>
                </Popover>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "dialog".includes(normalizedQuery)) && (
              <ShowcaseCard name="Dialog" description="Overlays get the strongest visual elevation.">
                <Dialog>
                  <DialogTrigger render={<Button />}>Open dialog</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Make a loud decision</DialogTitle>
                      <DialogDescription>
                        The dialog keeps Base UI behavior, focus management, and keyboard dismissal.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter showCloseButton>
                      <Button>Confirm action</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "card".includes(normalizedQuery)) && (
              <ShowcaseCard name="Card" description="Panels carry more weight than controls." className="md:col-span-2 xl:row-span-2">
                <Card className="w-full max-w-md shadow-none">
                  <CardHeader>
                    <CardTitle>Starter registry</CardTitle>
                    <CardDescription>Everything needed to ship your first primitive.</CardDescription>
                    <CardAction><Badge variant="secondary">v0.1</Badge></CardAction>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border-2 border-border bg-primary p-4 text-primary-foreground">
                        <div className="text-2xl font-black">{componentCatalog.length}</div><div className="text-xs font-black uppercase">Components</div>
                      </div>
                      <div className="border-2 border-border bg-secondary p-4">
                        <div className="text-2xl font-black">A11Y</div><div className="text-xs font-black uppercase">Preserved</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="font-bold">Base UI</span><Button size="sm">Inspect</Button>
                  </CardFooter>
                </Card>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "alert".includes(normalizedQuery)) && (
              <ShowcaseCard name="Alert" description="Information gets structure, not decoration." className="md:col-span-2">
                <div className="grid w-full gap-5">
                  <Alert>
                    <CircleAlert />
                    <AlertTitle>Registry connected</AlertTitle>
                    <AlertDescription>Your theme dependency will install automatically.</AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <CircleAlert />
                    <AlertTitle>Destructive action</AlertTitle>
                    <AlertDescription>This state uses color and structure, never color alone.</AlertDescription>
                  </Alert>
                </div>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "textarea".includes(normalizedQuery)) && (
              <ShowcaseCard name="Textarea" description="A grounded writing surface." className="md:col-span-2">
                <div className="grid w-full max-w-lg gap-2">
                  <Label htmlFor="preview-note">Project note</Label>
                  <Textarea id="preview-note" placeholder="Say something with weight..." />
                </div>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "progress".includes(normalizedQuery)) && (
              <ShowcaseCard name="Progress" description="A compact status rail that still reads clearly.">
                <Progress value={68} className="w-full max-w-xs">
                  <ProgressLabel>Build</ProgressLabel>
                  <ProgressValue />
                </Progress>
              </ShowcaseCard>
            )}

            {(!normalizedQuery || "separator".includes(normalizedQuery)) && (
              <ShowcaseCard name="Separator" description="Structural rhythm uses the active border weight.">
                <div className="w-full max-w-xs text-center font-black uppercase">
                  Components
                  <Separator className="my-5" />
                  Blocks
                </div>
              </ShowcaseCard>
            )}
          </div>

        </section>

        <section id="blocks" className="border-t-[var(--brut-border)] border-border bg-foreground text-background">
          <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-end lg:px-8">
            <div>
              <Badge className="bg-primary text-primary-foreground">5 live compositions</Badge>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] uppercase sm:text-6xl">Blocks, without the beige.</h2>
            </div>
            <div className="max-w-lg">
              <p className="mb-6 text-lg font-semibold text-background/75">
                See complete interfaces assembled from the same components, tokens, and interaction language.
              </p>
              <Button nativeButton={false} render={<Link href="/blocks" />}>
                Explore blocks <ArrowRight data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-[var(--brut-border)] border-border bg-background">
        <div className="mx-auto grid max-w-[1480px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-8">
          <div>
            <Badge variant="outline">About the maker</Badge>
            <h2 id="about-heading" className="mt-5 text-4xl font-black tracking-[-0.05em] uppercase sm:text-6xl">
              Built by Akhil Panwar.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed font-semibold text-muted-foreground">
              BRUT/UI is an open-source design system created to bring expressive
              neo-brutalist character to real production applications—without giving
              up the composability, accessibility, or developer experience of shadcn.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a
                    href="https://www.linkedin.com/in/akhil-panwar-/"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
              >
                <Linkedin data-icon="inline-start" /> LinkedIn
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a
                    href="https://github.com/akhil1o1"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
              >
                <Github data-icon="inline-start" /> GitHub
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-3 px-4 py-6 text-sm font-bold sm:flex-row sm:px-6 lg:px-8">
            <span>BRUT/UI — THREE FLAVOURS. ONE SYSTEM.</span>
            <span>Built on shadcn · Base UI · Tailwind v4</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
