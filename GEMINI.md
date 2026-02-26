# Gemini Project Context: Klipp Landing Page

This project is a high-performance landing page for the **Klipp** mobile app (`com.husur.klipp`). It features a modern dark/glass aesthetic (similar to Notion/Linear/Vercel) and is optimized for both visual impact and technical efficiency.

## Project Overview

- **Purpose:** Showcase the Klipp mobile app and drive downloads via App Store and Google Play.
- **Visual Style:** Dark theme, glassmorphism (`glass-card`), high-quality iPhone 15 Pro mockups.
- **Target Platform:** Web (Mobile-first responsive design).

## Tech Stack

- **Framework:** React 19 (Functional components, Hooks).
- **Build Tool:** Vite 7.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`).
  - **Note:** Tailwind v4 does not use `tailwind.config.js`. Configuration is done via `@theme` in `src/index.css`.
- **Deployment:** GitHub Pages (via `gh-pages` package).

## Core Commands (RTK Optimized)

**Golden Rule:** Always prefix commands with `rtk` for token efficiency.

### Development
```bash
rtk npm run dev      # Start local development server (http://localhost:5173)
rtk npm run lint     # Run ESLint check
rtk npm run test     # Run unit tests once
rtk npm run test:watch # Run tests in watch mode
```

### Build & Deploy
```bash
rtk npm run build    # Create production build in dist/
rtk npm run deploy   # Build and deploy to GitHub Pages
```

### Git Operations
```bash
rtk git status       # Compact status
rtk git diff         # Compact diff
rtk git add . && rtk git commit -m "feat: description" && rtk git push
```

## Development Conventions

### Styling (Tailwind v4 & Inline Styles)
- **CSS Variables:** Custom tokens are defined in `src/index.css` (e.g., `--color-blue-primary`).
- **Inline Styles:** Used in some components (like `Hero.jsx`) for complex gradients and specific positioning.
- **Glassmorphism:** Use the `.glass-card` utility class for semi-transparent blurred backgrounds.
- **Opacity:** Use slash syntax: `bg-blue-primary/20`.

### Components
- **IPhoneMockup:** Pure CSS iPhone 15 Pro frame. Props: `src`, `alt`, `size` (sm, md, lg).
- **StoreButton:** Standardized store badges. Props: `store` (apple, google), `href`.
- **Navbar:** Sticky navigation with glass effect.

### Asset Management
- **Screenshots:** Real app screenshots should be placed in `src/assets/screenshots/` (`screen1.png`, `screen2.png`, `screen3.png`). Recommended size: **390×844px**.
- **Badges:** App Store and Google Play SVG badges are in `src/assets/`.

## Deployment Logic

The project is hosted on GitHub Pages at `https://DomaApp.github.io/web-front/`.
- `vite.config.js` has `base: '/web-front/'`.
- Deployment is automated via `npm run deploy` which runs `predeploy` (build) then pushes `dist/` to the `gh-pages` branch.

## Dependabot
- Configured to check for `npm` updates every **Monday at 08:00 (Europe/Paris)**.
- Configuration file: `.github/dependabot.yml`.
