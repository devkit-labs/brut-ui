import Link from "next/link"
import { Github } from "lucide-react"

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-[var(--brut-border)] border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1480px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-black tracking-[-0.06em] uppercase"
        >
          <span className="grid size-9 place-items-center border-[var(--brut-border)] border-border bg-primary text-primary-foreground shadow-[3px_3px_0_var(--brut-shadow-color)]">
            B
          </span>
          <span className="text-lg">Brut/UI</span>
        </Link>

        <nav aria-label="Documentation navigation" className="ml-2 hidden items-center gap-1 sm:flex">
          <Link className="brut-quiet px-3 py-2 text-sm" href="/components">
            Components
          </Link>
          <Link className="brut-quiet px-3 py-2 text-sm" href="/#blocks">
            Blocks
          </Link>
        </nav>

        <a
          href="https://github.com/akhil1o1/brutalism-ui"
          target="_blank"
          rel="noreferrer"
          className="brut-control brut-focus ml-auto inline-flex size-9 items-center justify-center bg-card"
          aria-label="View registry source on GitHub"
        >
          <Github className="size-4" />
        </a>
      </div>
    </header>
  )
}
