# BRUT/UI

A configurable neo-brutalist component registry built on shadcn, Base UI, React, Next.js, TypeScript, and Tailwind CSS v4.

[Website](https://github.com/devkit-labs/brutalist-ui) · [Repository](https://github.com/devkit-labs/brutalist-ui) · [Issues](https://github.com/devkit-labs/brutalist-ui/issues)

## What it includes

- Installable shadcn-compatible UI components
- Paper, Signal, and Sky palettes
- Soft, Solid, and Loud brutalism strengths
- Sharp, Cut, and Chunky radius modes
- Accessible Base UI behavior and component APIs
- Component previews, theme documentation, and composed block showcases

The registry source of truth lives in `registry/brutalist/`. Generated registry items are written to `public/r/`.

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

BRUT/UI keeps shadcn's semantic color variables and adds project-wide brutalist tokens. Configure the theme on the document root:

```html
<html
  data-brut-palette="paper"
  data-brut-strength="soft"
  data-brut-radius="cut"
>
```

See the `/themes` page for the complete installed-token reference and usage guidelines.

## Repository

BRUT/UI is maintained by [DevKit Labs](https://github.com/devkit-labs) at [devkit-labs/brutalist-ui](https://github.com/devkit-labs/brutalist-ui).
