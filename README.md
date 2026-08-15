# BRUT/UI

A configurable neo-brutalist component registry built on shadcn, Base UI, React, Next.js, TypeScript, and Tailwind CSS v4.

[Website](https://www.brut-ui.site/) · [Repository](https://github.com/devkit-labs/brut-ui) · [Issues](https://github.com/devkit-labs/brut-ui/issues)

## What it includes

- Installable shadcn-compatible UI components
- Paper, Signal, and Sky flavours
- Soft, Solid, and Loud brutalism strengths
- Sharp, Cut, and Chunky radius modes
- Accessible Base UI behavior and component APIs
- Component previews, theme documentation, and composed block showcases

The registry source of truth lives in `registry/brutalist/`. Generated registry items are written to `public/r/`.

## Installation

Add the BRUT/UI namespace to your project's `components.json`:

```json
{
  "registries": {
    "@brut-ui": "https://www.brut-ui.site/r/{name}.json"
  }
}
```

Then install the base theme and any components you need:

```bash
pnpm dlx shadcn@latest add @brut-ui/base
pnpm dlx shadcn@latest add @brut-ui/button @brut-ui/input
```

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the site. Local registry items are available at URLs such as `http://localhost:3000/r/button.json`.

## Validation

```bash
pnpm typecheck
pnpm lint
pnpm registry:build
pnpm registry:validate
pnpm build
```

## Theme configuration

BRUT/UI keeps shadcn's semantic color variables and adds project-wide brutalist tokens. Installing the theme gives you **Paper + Soft + Cut by default**, so no root attributes are required for the default appearance.

To select a different combination, set any of the public theme attributes on the document root:

```html
<html
  data-brut-palette="paper"
  data-brut-strength="soft"
  data-brut-radius="cut"
>
```

Available values:

- `data-brut-palette`: `paper`, `signal`, or `sky`
- `data-brut-strength`: `soft`, `solid`, or `loud`
- `data-brut-radius`: `sharp`, `cut`, or `chunky`

Omit an attribute to keep its default value: Paper, Soft, or Cut respectively.

See the `/themes` page for the complete installed-token reference and usage guidelines.

## Repository

BRUT/UI is maintained by [DevKit Labs](https://github.com/devkit-labs) at [devkit-labs/brut-ui](https://github.com/devkit-labs/brut-ui).
