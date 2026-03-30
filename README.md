# keanu.wiki

Hi, I'm Keanu! This is the source code for my personal website. Check it out at [keanu-thakalath.github.io](https://keanu-thakalath.github.io/).

## Features

- **Blog** — Markdown-based posts with support for external links, RSS feed (`/rss.xml`), and a JSON API (`/api/posts`)
- **Voice Training Course (Ruten)** — Structured multi-week curriculum with in-browser audio recording, progress tracking, and daily practice workflows
- **Portfolio** — Projects, interests, resume, and more

## Tech Stack

- [SvelteKit](https://svelte.dev/) with static adapter
- [mdsvex](https://mdsvex.pngwn.io/) for Markdown processing
- TypeScript
- GitHub Actions + GitHub Pages for CI/CD

## Development

```sh
npm install
npm run dev
```

## Building

```sh
npm run build
npm run preview   # preview the production build locally
```

## Linting & Type Checking

```sh
npm run lint      # prettier + eslint
npm run format    # auto-format
npm run check     # svelte-check + tsc
```
