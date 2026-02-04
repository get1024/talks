# talks

[简体中文](README_CN.md)

A pnpm monorepo that manages all of my Slidev projects.

## Structure

- `packages/*` holds individual Slidev decks (one deck per folder).
- Each deck is a standard Slidev project with its own `slides.md` and theme assets.

## Prerequisites

- Node.js (LTS recommended)
- `pnpm` (this repo uses a workspace)

## Install

```bash
pnpm install
```

## Common Commands

From the repo root:

- Install dependencies for all workspaces:

```bash
pnpm install
```

- Build all decks:

```bash
pnpm packages:build
```

- Build all decks with `--base` paths (for static hosting):

```bash
pnpm packages:build-base
```

From a deck folder (example: `packages/2025-12-03-reaserch-on-design-methods`):

- Start the Slidev dev server:

```bash
pnpm dev
```

- Build the deck:

```bash
pnpm build
```

- Build for static hosting with a base path:

```bash
pnpm build-base
```

- Export slides to PDF/images:

```bash
pnpm export
```

## Adding A New Slidev Deck

1. Create a new folder under `packages/` (for example, `packages/2026-02-10-my-talk`).
2. Initialize a Slidev project in that folder.
3. Make sure the folder is picked up by the workspace (`packages/*`).

That's it. The root scripts will automatically include the new deck.
