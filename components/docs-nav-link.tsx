"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function DocsNavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      data-active={isActive ? "" : undefined}
      className={cn(
        "brut-quiet px-3 py-2 text-sm data-active:border-border data-active:bg-primary data-active:text-primary-foreground",
        className
      )}
    >
      {children}
    </Link>
  )
}
