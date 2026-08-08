"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"
import "../styles/brutalist.css"

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "brut-separator shrink-0 data-horizontal:h-[var(--brut-border)] data-horizontal:w-full data-vertical:w-[var(--brut-border)] data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
