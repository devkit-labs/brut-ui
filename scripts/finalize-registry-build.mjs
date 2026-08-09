import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"

const projectRoot = process.cwd()
const publicRegistryDirectory = path.join(projectRoot, "public", "r")
const uiDirectory = path.join(projectRoot, "registry", "brutalist", "ui")
const componentNames = new Set(
  (await readdir(uiDirectory))
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(/\.tsx$/, ""))
)

const qualifyDependencies = (item) => {
  if (!item.registryDependencies) {
    return item
  }

  return {
    ...item,
    registryDependencies: item.registryDependencies.map((dependency) =>
      componentNames.has(dependency) ? `@brut-ui/${dependency}` : dependency
    ),
  }
}

const registryFiles = (await readdir(publicRegistryDirectory)).filter((file) =>
  file.endsWith(".json")
)

await Promise.all(
  registryFiles.map(async (file) => {
    const filePath = path.join(publicRegistryDirectory, file)
    const document = JSON.parse(await readFile(filePath, "utf8"))
    const finalized = Array.isArray(document.items)
      ? { ...document, items: document.items.map(qualifyDependencies) }
      : qualifyDependencies(document)

    await writeFile(filePath, `${JSON.stringify(finalized, null, 2)}\n`)
  })
)

console.log(`Finalized ${registryFiles.length} hosted registry files for the @brut-ui namespace.`)
