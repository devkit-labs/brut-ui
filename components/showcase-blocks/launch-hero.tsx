import { ArrowRight, CheckCircle2, Menu, Radio, Sparkles } from "lucide-react"

import { Badge } from "@/registry/brutalist/ui/badge"
import { Button } from "@/registry/brutalist/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/brutalist/ui/card"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/brutalist/ui/progress"
import { Separator } from "@/registry/brutalist/ui/separator"

const checks = ["Zero setup", "Live collaboration", "Exports anywhere"]

export function LaunchHeroBlock() {
  return (
    <div className="min-w-[20rem] bg-background p-4 sm:p-7 lg:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center gap-4 border-b-[var(--brut-border)] border-border pb-5">
          <div className="brut-surface grid size-10 place-items-center bg-primary text-lg font-black text-primary-foreground">
            P
          </div>
          <span className="text-xl font-black tracking-[-0.05em] uppercase">Punchlist</span>
          <nav className="ml-auto hidden items-center gap-6 text-sm font-black uppercase md:flex">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </nav>
          <Button className="ml-auto hidden md:inline-flex">Join beta</Button>
          <Button size="icon" variant="outline" className="ml-auto md:hidden" aria-label="Open menu">
            <Menu />
          </Button>
        </header>

        <div className="grid gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-16">
          <div>
            <Badge variant="secondary">
              <Sparkles data-icon="inline-start" /> Public beta is open
            </Badge>
            <h2 className="mt-6 max-w-3xl text-5xl leading-[0.88] font-black tracking-[-0.07em] uppercase sm:text-7xl">
              Ship work people remember.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold text-muted-foreground sm:text-xl">
              One loud workspace for ambitious teams to plan launches, collect feedback, and keep momentum visible.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                Start building <ArrowRight data-icon="inline-end" />
              </Button>
              <Button size="lg" variant="outline">Watch the tour</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {checks.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm font-bold">
                  <CheckCircle2 className="size-4 text-primary" /> {item}
                </span>
              ))}
            </div>
          </div>

          <Card className="rotate-1 bg-card">
            <CardHeader className="border-b-[var(--brut-border)] border-border">
              <div className="flex items-center justify-between gap-3">
                <Badge><Radio data-icon="inline-start" /> Launch room</Badge>
                <span className="font-mono text-xs font-black">LIVE / 04</span>
              </div>
              <CardTitle className="mt-5 text-2xl uppercase">Project afterburner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <Progress value={76}>
                <ProgressLabel className="font-black uppercase">Launch readiness</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Separator />
              {[
                ["Landing page", "Approved", "bg-secondary"],
                ["Press kit", "In review", "bg-primary"],
                ["Launch email", "Drafting", "bg-accent text-accent-foreground"],
              ].map(([name, status, color]) => (
                <div key={name} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                  <span className={`size-3 border-[var(--brut-border)] border-border ${color}`} />
                  <span className="font-black">{name}</span>
                  <span className="font-mono text-xs font-bold text-muted-foreground">{status}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
