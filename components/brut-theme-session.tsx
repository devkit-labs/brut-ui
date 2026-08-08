"use client"

import * as React from "react"

import { applyCurrentBrutTheme, useBrutTheme } from "@/lib/brut-theme"

export function BrutThemeSession() {
  const theme = useBrutTheme()

  React.useEffect(() => {
    applyCurrentBrutTheme()
  }, [theme])

  return null
}
