import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"

const projectRoot = process.cwd()
const manifestPath = path.join(projectRoot, "registry.json")
const publicRegistryDirectory = path.join(projectRoot, "public", "r")
const publicManifestPath = path.join(publicRegistryDirectory, "registry.json")
const uiDirectory = path.join(projectRoot, "registry", "brutalist", "ui")

const packageName = (specifier) => {
  if (specifier.startsWith("@")) {
    return specifier.split("/").slice(0, 2).join("/")
  }

  return specifier.split("/")[0]
}

const titleCase = (value) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

const manifest = JSON.parse(await readFile(manifestPath, "utf8"))
const existingItems = new Map(manifest.items.map((item) => [item.name, item]))
const sourceFiles = (await readdir(uiDirectory))
  .filter((file) => file.endsWith(".tsx"))
  .sort((a, b) => a.localeCompare(b))
const sourceNames = new Set(sourceFiles.map((file) => file.replace(/\.tsx$/, "")))

for (const name of existingItems.keys()) {
  if (name !== "base" && !sourceNames.has(name)) {
    existingItems.delete(name)
  }
}

for (const file of sourceFiles) {
  const name = file.replace(/\.tsx$/, "")

  if (existingItems.has(name)) {
    continue
  }

  const source = await readFile(path.join(uiDirectory, file), "utf8")
  const importSpecifiers = Array.from(
    source.matchAll(/from\s+["']([^"']+)["']/g),
    (match) => match[1]
  )
  const registryDependencies = new Set()
  const dependencies = new Set()

  for (const specifier of importSpecifiers) {
    const localUiMatch = specifier.match(/^@\/registry\/brutalist\/ui\/(.+)$/)

    if (localUiMatch && localUiMatch[1] !== name) {
      registryDependencies.add(localUiMatch[1])
      continue
    }

    if (specifier === "@/lib/utils") {
      registryDependencies.add("utils")
      continue
    }

    if (!specifier.startsWith(".") && !specifier.startsWith("@/")) {
      const dependency = packageName(specifier)

      if (!dependency.startsWith("react") && dependency !== "next") {
        dependencies.add(dependency)
      }
    }
  }

  existingItems.set(name, {
    name,
    type: "registry:ui",
    title: titleCase(name),
    description: `The BRUT/UI ${titleCase(name)} component with the current shadcn behavior and API.`,
    ...(dependencies.size ? { dependencies: [...dependencies].sort() } : {}),
    ...(registryDependencies.size
      ? { registryDependencies: [...registryDependencies].sort() }
      : {}),
    files: [
      {
        path: `registry/brutalist/ui/${file}`,
        type: "registry:ui",
        target: `@ui/${file}`,
      },
      {
        path: "registry/brutalist/styles/brutalist.css",
        type: "registry:file",
        target: "@components/styles/brutalist.css",
      },
    ],
  })
}

const baseItem = existingItems.get("base")
const componentItems = [...existingItems.values()]
  .filter((item) => item.name !== "base")
  .sort((a, b) => a.name.localeCompare(b.name))

manifest.items = [baseItem, ...componentItems]

const serializedManifest = `${JSON.stringify(manifest, null, 2)}\n`

await mkdir(publicRegistryDirectory, { recursive: true })
await Promise.all([
  writeFile(manifestPath, serializedManifest),
  writeFile(publicManifestPath, serializedManifest),
])

console.log(`Synced ${componentItems.length} component entries in registry.json and public/r/registry.json.`)
