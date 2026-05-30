# Ericson Baldino Varoto — Personal Site

Professional portfolio site published at [https://ericvaroto.github.io/ericson-varoto-io/](https://ericvaroto.github.io/ericson-varoto-io/).

## Stack

- **React 18** — UI
- **Vite 6** — dev server and production build
- **TypeScript** — type-safe source
- **Plain CSS** — styling (no UI framework)
- **GitHub Pages** — static hosting via GitHub Actions

No backend, database, or heavy runtime dependencies.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

To preview the same asset paths as production (base path `/ericson-varoto-io/`):

```bash
npm run build
# Windows PowerShell:
$env:VITE_BASE_PATH="/ericson-varoto-io/"; npm run preview
# macOS / Linux:
VITE_BASE_PATH=/ericson-varoto-io/ npm run preview
```

## Build

```bash
npm run build
```

Output is written to `dist/`. TypeScript is checked (`tsc -b`) before Vite bundles the app.

## GitHub Pages deployment

The site is deployed from the **`ericson-varoto-io`** repository (project site, not `username.github.io` root).

1. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to the `main` branch.
3. Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) installs dependencies, builds with `VITE_BASE_PATH=/ericson-varoto-io/`, and publishes `dist/` to Pages.
4. The live URL is `https://ericvaroto.github.io/ericson-varoto-io/`.

[`vite.config.ts`](vite.config.ts) reads `VITE_BASE_PATH` (default `/` for local dev). Asset URLs and CV download links use `import.meta.env.BASE_URL` so they resolve correctly under the project base path.

## Translations

- Portuguese (pt-BR): [`src/i18n/ptBR.ts`](src/i18n/ptBR.ts)
- English (en-US): [`src/i18n/enUS.ts`](src/i18n/enUS.ts)
- Provider and language detection: [`src/i18n/index.tsx`](src/i18n/index.tsx)

Behavior:

- On first visit, language is inferred from `navigator.language` (Portuguese → pt-BR, otherwise en-US).
- The header toggle switches language; the choice is stored in `localStorage` (`ev_lang`).
- `document.documentElement.lang` and page meta (title, description, Open Graph, Twitter) update with the active locale.

## CV files

Résumés live in `public/` and are copied unchanged into `dist/`:

| File | Language |
|------|----------|
| `public/cv-pt-br.pdf` | Portuguese |
| `public/cv-en-us.pdf` | English |

Paths and download filenames are defined in [`src/data/profile.ts`](src/data/profile.ts) (`CV_BY_LANG`). Set `CV_AVAILABLE` to `false` to show a disabled “coming soon” button instead of download links.

Replace the PDFs to update content; keep the filenames unless you also update `profile.ts`.

## SEO and static assets

- [`index.html`](index.html) — default meta tags and `%BASE_URL%`-aware icon/manifest links
- [`public/robots.txt`](public/robots.txt), [`public/sitemap.xml`](public/sitemap.xml)
- [`public/og-image.png`](public/og-image.png) — social preview image (1200×630 PNG; source SVG in [`public/og-image.svg`](public/og-image.svg))
- [`public/manifest.webmanifest`](public/manifest.webmanifest), [`public/favicon.svg`](public/favicon.svg), [`public/apple-touch-icon.svg`](public/apple-touch-icon.svg)

## Privacy

Email, phone, CPF, full address, and other sensitive contact details are **intentionally omitted**. The only public contact channel is [LinkedIn](https://www.linkedin.com/in/ericvaroto/).

## AI-assisted development

This site was built and refined with AI-assisted coding (Cursor and similar tools) for scaffolding, i18n structure, accessibility checks, and technical polish. All professional copy and career facts were provided and reviewed by the owner.

## Updating content

- Narrative text: translation files above
- Skills lists: [`src/components/Skills.tsx`](src/components/Skills.tsx)
- Static constants (name, LinkedIn, CV flags): [`src/data/profile.ts`](src/data/profile.ts)
