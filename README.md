# Café del Sol ☕

A Mexican coffee shop landing page — bilingual (Español / English), with rich scroll animations.

## Tech

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion for scroll-linked and reveal animations
- Custom i18n context (Spanish / English)

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — Next.js app router, layout and page
- `components/` — Section components (Hero, Story, Menu, Experience, Testimonials, Visit, Footer)
- `components/LanguageProvider.tsx` — i18n context with persistence
- `lib/translations.ts` — Spanish + English copy

## Brand

Inspired by a fictional specialty roaster in Roma Norte, CDMX — honoring Mexican coffee regions (Chiapas, Oaxaca, Veracruz). Palette mixes cream, terracotta, cocoa and sun-yellow for a warm, earthy feel.
