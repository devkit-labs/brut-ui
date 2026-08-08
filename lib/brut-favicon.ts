export type FaviconPalette = "paper" | "signal" | "sky"

const faviconPalettes: Record<
  FaviconPalette,
  { face: string; glyph: string; border: string; shadow: string; theme: string }
> = {
  paper: {
    face: "#efd34b",
    glyph: "#211d19",
    border: "#211d19",
    shadow: "#211d19",
    theme: "#fbfaf6",
  },
  signal: {
    face: "#17130f",
    glyph: "#f2dc3e",
    border: "#17130f",
    shadow: "#e96850",
    theme: "#f2dc3e",
  },
  sky: {
    face: "#bfe4ff",
    glyph: "#15213d",
    border: "#15213d",
    shadow: "#ea7259",
    theme: "#dcefff",
  },
}

export function updatePaletteFavicon(palette: FaviconPalette) {
  const colors = faviconPalettes[palette]
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")

  if (!context) return

  canvas.width = 64
  canvas.height = 64

  context.fillStyle = colors.shadow
  context.fillRect(13, 11, 44, 44)
  context.fillStyle = colors.border
  context.fillRect(5, 3, 46, 46)
  context.fillStyle = colors.face
  context.fillRect(8, 6, 40, 40)
  context.fillStyle = colors.glyph
  context.font = "900 27px Arial, sans-serif"
  context.textAlign = "center"
  context.textBaseline = "middle"
  context.fillText("B", 28, 27)

  let favicon = document.querySelector<HTMLLinkElement>(
    "link[data-brut-favicon]"
  )

  if (!favicon) {
    favicon = document.createElement("link")
    favicon.rel = "icon"
    favicon.type = "image/png"
    favicon.dataset.brutFavicon = "true"
    document.head.appendChild(favicon)
  }

  favicon.href = canvas.toDataURL("image/png")

  let themeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]'
  )

  if (!themeColor) {
    themeColor = document.createElement("meta")
    themeColor.name = "theme-color"
    document.head.appendChild(themeColor)
  }

  themeColor.content = colors.theme
}
