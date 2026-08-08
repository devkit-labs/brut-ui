"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/registry/brutalist/ui/button"

export function CopyBlockCode({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <Button size="sm" variant="outline" onClick={copy}>
      {copied ? <Check /> : <Copy />}
      {copied ? "Copied" : "Copy code"}
    </Button>
  )
}
