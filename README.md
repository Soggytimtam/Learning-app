# Learning-app

Interactive **Peppol Quest** prototype for learning eInvoicing through a cozy RPG-style world.

## What is in this build

- A world hub with multiple learning zones
- Two playable zones:
  - **Peppol 101 Meadow**
  - **Four Corner City**
- A searchable glossary with plain-English, technical, and BA-focused views
- A visual skill tree for technical BA progression
- Cloudflare Worker + static asset setup
- D1-backed profile saving when the `DB` binding is available, with local/demo fallback

## Local development

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

## Cloudflare notes

This project is configured as a Cloudflare Worker serving static assets from `public/` and API routes from `src/worker.js`.

The front end calls:

- `/api/health`
- `/api/modules`
- `/api/profile/demo-player`

If D1 is not available, the app still runs in demo mode.
