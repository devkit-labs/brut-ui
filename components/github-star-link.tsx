"use client"

import { Github } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/brutalist/ui/tooltip"

export function GithubStarLink() {
  return (
    <TooltipProvider delay={250}>
      <Tooltip>
        <TooltipTrigger
          render={
            <a
              href="https://github.com/devkit-labs/brutalist-ui"
              target="_blank"
              rel="noreferrer"
              className="brut-control brut-focus inline-flex size-9 items-center justify-center bg-card"
              aria-label="View registry source on GitHub"
            />
          }
        >
          <Github className="size-4" />
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={8}>
          Give it a Star
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
