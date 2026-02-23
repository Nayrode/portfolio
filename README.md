# Portfolio

Personal portfolio built with [Next.js](https://nextjs.org), featuring animated UI components and open-source contribution highlights.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4, shadcn/ui
- **Animation** — GSAP, Motion, Three.js / React Three Fiber
- **Icons** — Lucide React
- **Theming** — next-themes (dark/light mode)
- **Package manager** — pnpm

## Pages

| Route            | Description               |
| ---------------- | ------------------------- |
| `/`              | Home / landing page       |
| `/contributions` | Open-source contributions |

## Components

- **`StaggeredMenu`** — animated full-screen nav panel (GSAP)
- **`GlassSurface`** — frosted-glass card with SVG displacement filter
- **`LaserFlow`** — WebGL laser beam background (Three.js)
- **`Silk`** — animated silk-like background shader
- **`ModeToggle`** — dark / light theme switcher

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
pnpm build
pnpm start
```
