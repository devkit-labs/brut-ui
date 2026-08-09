import { readFile } from "node:fs/promises"
import path from "node:path"

import type { ComponentSlug } from "@/lib/component-catalog"

const previewSourcePath = path.join(
  process.cwd(),
  "components",
  "component-preview.tsx"
)

export async function getComponentPreviewSource(slug: ComponentSlug) {
  const source = await readFile(previewSourcePath, "utf8")
  const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const casePattern = new RegExp(
    `(^[ \\t]*case "${escapedSlug}":[\\s\\S]*?)(?=^[ \\t]*(?:case "|default:))`,
    "m"
  )
  const match = source.match(casePattern)

  if (!match) {
    return `// Preview source is unavailable for ${slug}.`
  }

  const caseBody = match[1]
    .trimEnd()
    .split("\n")
    .slice(1)
    .join("\n")
    .trim()
  let jsx = caseBody.replace(/^return\s+/, "").replace(/;\s*$/, "")

  if (jsx.startsWith("(") && jsx.endsWith(")")) {
    jsx = jsx.slice(1, -1).trim()
  }

  const lines = jsx.split("\n")
  const commonIndent = Math.min(
    ...lines
      .filter((line) => line.trim())
      .map((line) => line.match(/^\s*/)?.[0].length ?? 0)
  )

  return lines
    .map((line) => line.slice(Math.min(commonIndent, line.search(/\S|$/))))
    .join("\n")
}
