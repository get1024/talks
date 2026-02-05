# talks

[简体中文](README_CN.md)

A pnpm monorepo that manages all of my Slidev projects (Slidev decks).

## Quick Start (Run An Existing Deck)

From the repo root:

```bash
pnpm install
```

Run a specific deck:

```bash
cd path/to/specific/slidev-deck
pnpm dev
```

Then open:

- http://localhost:3030/

## Structure

- `packages/*` holds individual Slidev decks (one deck per folder).
- Each deck is a standard Slidev project with its own `slides.md` and theme assets.

## Concepts (For Monorepo Newcomers)

- This repo is a pnpm workspace (see `pnpm-workspace.yaml`). It lets you manage multiple decks in one repository.
- Each folder under `packages/*` is an independent Node.js project with its own `package.json`.
- You usually install dependencies once from the repo root with `pnpm install`.
- You can run commands either inside a deck folder, or from the repo root by targeting a specific deck.

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

- Run a specific deck without `cd`:

```bash
pnpm -C packages/<deck-folder> dev
```

```bash
pnpm --filter <deck-package-name> dev
```

- Run a specific deck with `cd`:

```bash
cd path/to/specific/slidev-deck
pnpm dev
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

This is the beginner-friendly, step-by-step way to add a new deck into this monorepo.

1. Create a new folder under `packages/` (for example, `packages/2026-02-10-my-talk`).
2. Initialize a Slidev project in that folder.
3. Install dependencies from the repo root.
4. Run the deck.

Example:

```bash
cd packages
mkdir 2026-02-10-my-talk
cd 2026-02-10-my-talk
pnpm create slidev@latest .
```

Back to repo root:

```bash
cd ../..
pnpm install
```

Run it:

```bash
pnpm -C packages/2026-02-10-my-talk dev
```

Notes:

- The workspace already includes `packages/*`, so new folders under `packages/` are picked up automatically.
- If you use `pnpm --filter`, the value is the deck's `name` in its `package.json` (usually the same as the folder name).

That's it. The root scripts will automatically include the new deck.

## Troubleshooting

- Port already in use: stop the existing dev server process, or run Slidev with a different port from inside the deck folder.
- Command not found (`pnpm`): install pnpm first, then re-run `pnpm install` at the repo root.
