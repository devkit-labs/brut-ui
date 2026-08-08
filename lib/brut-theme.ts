import * as React from "react"

import { updatePaletteFavicon } from "@/lib/brut-favicon"

export type BrutPalette = "paper" | "signal" | "sky"
export type BrutStrength = "soft" | "solid" | "loud"
export type BrutRadius = "sharp" | "cut" | "chunky"

export type BrutTheme = {
  palette: BrutPalette
  strength: BrutStrength
  radius: BrutRadius
}

export const DEFAULT_BRUT_THEME: BrutTheme = {
  palette: "paper",
  strength: "soft",
  radius: "cut",
}

let currentTheme = DEFAULT_BRUT_THEME
const listeners = new Set<() => void>()

function applyTheme(theme: BrutTheme) {
  if (typeof document === "undefined") {
    return
  }

  const root = document.documentElement
  root.dataset.brutPalette = theme.palette
  root.dataset.brutStrength = theme.strength
  root.dataset.brutRadius = theme.radius
  updatePaletteFavicon(theme.palette)
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return currentTheme
}

function getServerSnapshot() {
  return DEFAULT_BRUT_THEME
}

export function useBrutTheme() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function updateBrutTheme(update: Partial<BrutTheme>) {
  currentTheme = { ...currentTheme, ...update }
  applyTheme(currentTheme)

  listeners.forEach((listener) => listener())
}

export function applyCurrentBrutTheme() {
  applyTheme(currentTheme)
}
