"use client"

import { Palette } from "lucide-react"

import {
  type BrutPalette,
  type BrutRadius,
  type BrutStrength,
  updateBrutTheme,
  useBrutTheme,
} from "@/lib/brut-theme"
import { Button } from "@/registry/brutalist/ui/button"

const palettes: Array<{ value: BrutPalette; label: string; swatch: string }> = [
  { value: "paper", label: "Paper", swatch: "bg-[#fbfaf6]" },
  { value: "signal", label: "Signal", swatch: "bg-[#f4dd3f]" },
  { value: "sky", label: "Sky", swatch: "bg-[#dcefff]" },
]

const strengths: Array<{ value: BrutStrength; label: string; detail: string }> = [
  { value: "soft", label: "Soft", detail: "1px / 2px" },
  { value: "solid", label: "Solid", detail: "2px / 4px" },
  { value: "loud", label: "Loud", detail: "3px / 6px" },
]

const radii: Array<{ value: BrutRadius; label: string; detail: string }> = [
  { value: "sharp", label: "Sharp", detail: "0" },
  { value: "cut", label: "Cut", detail: "6px" },
  { value: "chunky", label: "Chunky", detail: "14px" },
]

export function BrutThemeControls() {
  const { palette, strength, radius } = useBrutTheme()

  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <fieldset>
        <legend className="mb-3 flex items-center gap-2 text-xs font-black tracking-widest uppercase">
          <Palette className="size-4" /> Palette
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
        <legend className="mb-3 text-xs font-black tracking-widest uppercase">
          Brutalism
        </legend>
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
        <legend className="mb-3 text-xs font-black tracking-widest uppercase">
          Radius
        </legend>
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
  )
}
