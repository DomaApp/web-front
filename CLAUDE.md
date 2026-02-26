# Klipp Landing Page

Landing page for the **Klipp** mobile app (`com.husur.klipp`).
Dark/glass aesthetic (Notion/Linear/Vercel style).

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## Tech Stack

- **Vite 7** + **React 19** + **Tailwind CSS v4** (`@tailwindcss/vite` — no PostCSS, no tailwind.config.js)
- **Inter** font via Google Fonts CDN
- Zero external component libraries

## Adding Screenshots

Replace the placeholder files in `src/assets/screenshots/`:

| File | Used in | Recommended size |
|------|---------|-----------------|
| `screen1.png` | Hero + Screenshots center | 390×844px |
| `screen2.png` | Screenshots left | 390×844px |
| `screen3.png` | Screenshots right | 390×844px |

PNGs will be auto-imported and displayed inside iPhone frame components.

## Color Tokens (defined in `src/index.css` `@theme`)

| Token | Value | Tailwind class |
|-------|-------|----------------|
| `--color-blue-primary` | `#2B7FFF` | `text-blue-primary`, `bg-blue-primary` |
| `--color-blue-light` | `#8EC5FF` | `text-blue-light`, `bg-blue-light` |
| `--color-gray-subtitle` | `#D1D5DC` | `text-gray-subtitle` |

Use slash syntax for opacity: `bg-blue-primary/20` (not `bg-opacity-*`).

## Component Map

| Component | Purpose |
|-----------|---------|
| `IPhoneMockup` | Pure CSS iPhone 15 Pro frame — props: `src`, `alt`, `size` (sm/md/lg) |
| `StoreButton` | App Store / Google Play badge — props: `store` (apple/google), `href` |
| `Navbar` | Sticky, scroll-aware, mobile hamburger |
| `Hero` | Full-height hero with headline + phone mockup |
| `Features` | 6-card feature grid |
| `Screenshots` | 3-phone showcase |
| `Testimonials` | 3 review cards |
| `DownloadCTA` | Centered CTA with glass card |
| `Footer` | 4-column links + store badges |

## Tailwind v4 Notes

- No `tailwind.config.js` — v4 ignores it entirely
- Use `@import "tailwindcss"` (not `@tailwind base/components/utilities`)
- `bg-opacity-*` removed — use slash syntax: `bg-blue-primary/20`
- Custom utilities defined in `@layer components` in `src/index.css`
- `glass-card` and `btn-store` are custom component classes

## Store Links

Update href values in `StoreButton` calls (currently `#app-store` / `#play-store`):
- Hero.jsx: both buttons
- DownloadCTA.jsx: both buttons
- Footer.jsx: mini badges at bottom
