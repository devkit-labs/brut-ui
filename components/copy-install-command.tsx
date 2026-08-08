"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/registry/brutalist/ui/button"

export function CopyInstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = React.useState(false)

  async function copyCommand() {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <Button
      size="icon-sm"
      variant="outline"
      onClick={copyCommand}
      aria-label="Copy installation command"
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  )
}
