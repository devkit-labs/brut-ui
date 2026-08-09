export const componentSlugs = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "attachment",
  "avatar",
  "badge",
  "breadcrumb",
  "bubble",
  "button",
  "button-group",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "combobox",
  "command",
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "empty",
  "field",
  "hover-card",
  "input",
  "input-group",
  "input-otp",
  "item",
  "kbd",
  "label",
  "marker",
  "menubar",
  "native-select",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "questionnaire",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "slider",
  "spinner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toast",
  "toggle",
  "toggle-group",
  "tooltip",
] as const

export type ComponentSlug = (typeof componentSlugs)[number]

const categoryBySlug: Partial<Record<ComponentSlug, string>> = {
  accordion: "Layout",
  alert: "Feedback",
  "alert-dialog": "Overlay",
  "aspect-ratio": "Layout",
  attachment: "AI",
  avatar: "Data display",
  badge: "Feedback",
  breadcrumb: "Navigation",
  bubble: "AI",
  button: "Action",
  "button-group": "Action",
  calendar: "Form",
  card: "Layout",
  carousel: "Layout",
  chart: "Data display",
  checkbox: "Form",
  collapsible: "Layout",
  combobox: "Form",
  command: "Overlay",
  "context-menu": "Overlay",
  dialog: "Overlay",
  drawer: "Overlay",
  "dropdown-menu": "Overlay",
  empty: "Feedback",
  field: "Form",
  "hover-card": "Overlay",
  input: "Form",
  "input-group": "Form",
  "input-otp": "Form",
  item: "Data display",
  kbd: "Data display",
  label: "Form",
  marker: "AI",
  menubar: "Navigation",
  "native-select": "Form",
  "navigation-menu": "Navigation",
  pagination: "Navigation",
  popover: "Overlay",
  progress: "Feedback",
  questionnaire: "AI",
  "radio-group": "Form",
  resizable: "Layout",
  "scroll-area": "Layout",
  select: "Form",
  separator: "Layout",
  sheet: "Overlay",
  sidebar: "Navigation",
  skeleton: "Feedback",
  slider: "Form",
  spinner: "Feedback",
  switch: "Form",
  table: "Data display",
  tabs: "Navigation",
  textarea: "Form",
  toast: "Feedback",
  toggle: "Action",
  "toggle-group": "Action",
  tooltip: "Overlay",
}

export function formatComponentName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

export type ComponentCatalogItem = {
  slug: ComponentSlug
  title: string
  category: string
  description: string
  shadcnUrl: string
}

export const componentCatalog: ComponentCatalogItem[] = componentSlugs.map(
  (slug) => {
    const title = formatComponentName(slug)

    return {
      slug,
      title,
      category: categoryBySlug[slug] ?? "Component",
      description: `${title} with familiar shadcn behaviour, accessible interactions, and the complete BRUT/UI visual system.`,
      shadcnUrl: `https://ui.shadcn.com/docs/components/${slug}`,
    }
  }
)

export const componentCategories = Array.from(
  new Set(componentCatalog.map((item) => item.category))
).sort()

export function getComponent(slug: string) {
  return componentCatalog.find((item) => item.slug === slug)
}
