# HK Towing — Project Instructions

## What This Is
Single-page marketing website for HK Towing, a towing company in Greenville, SC.
Live at **hk-towing.com** and **shereefelias.github.io/hk-towing/**.

## Tech Stack
- React 19 + TypeScript + Vite
- Plain CSS (one `.css` file per component, no CSS framework)
- Lucide React for icons
- Deployed via GitHub Actions to GitHub Pages

## Branch Strategy
- `develop` — work here, never deploy directly from this branch
- `main` — production; GitHub Actions auto-deploys on every push
- Always commit to `develop` first, then merge to `main` to go live
- Use `/deploy` skill to merge and push to production

## Project Structure
```
src/
  components/
    Navbar.tsx / Navbar.css     — fixed top nav, logo, links, phone CTA
    Hero.tsx / Hero.css         — full-screen banner with truck photo
    Services.tsx / Services.css — 6-card services grid
    About.tsx / About.css       — company story + truck photo
    Contact.tsx / Contact.css   — phone, email, address, map, Instagram QR
    Footer.tsx / Footer.css     — links, contact, copyright
  index.css                     — global CSS variables and resets
  App.tsx                       — assembles all sections in order
public/
  images/                       — logo, truck photo, Instagram QR
  CNAME                         — hk-towing.com (do not edit)
```

## CSS Variables (index.css)
```css
--black: #0a0a0a
--yellow: #F5C400
--yellow-dark: #d4a900
--white: #ffffff
--gray: #f4f4f4
--text: #1a1a1a
```

## Image Rules
All images live in `public/images/`. Always reference them with:
```tsx
src={`${import.meta.env.BASE_URL}images/filename.ext`}
```
Never use plain `/images/filename` — it breaks on GitHub Pages due to the `/hk-towing/` base path.

## Business Info (if content needs updating)
- **Phone:** (864) 686-0012 — `tel:+18646860012`
- **Email:** hani@hk-towing.com
- **Address:** 1321 White Horse Road, Greenville, SC
- **Instagram:** https://www.instagram.com/hktowingrecovering/
- **Hours:** 24/7

## Deployment
GitHub Actions triggers on push to `main` — builds with `npm run build` and deploys `dist/` to GitHub Pages. Takes ~1–2 minutes to go live.

**Merging develop → main is done manually by the repo owner only. Do not merge or push to main.**

Use `/preview` to run local dev server at http://localhost:5173/hk-towing/
