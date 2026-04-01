# Cloudflare setup

## What this project expects

The starter is built for Cloudflare Workers with static assets and optional D1 + KV bindings.

Files already included:
- `wrangler.jsonc`
- `src/worker.js`
- `public/*`
- `schema.sql`

## 1. Install dependencies

```bash
npm install
```

## 2. Log in to Cloudflare

```bash
npx wrangler login
```

## 3. Create the D1 database

```bash
npx wrangler d1 create peppol-quest
```

Copy the returned `database_id` into `wrangler.jsonc`.

## 4. Create a KV namespace

```bash
npx wrangler kv namespace create CACHE
```

Copy the returned namespace ID into `wrangler.jsonc`.

## 5. Apply the schema

```bash
npx wrangler d1 execute peppol-quest --file=./schema.sql
```

## 6. Run locally

```bash
npm run dev
```

Open the local Worker URL and confirm these endpoints work:
- `/api/health`
- `/api/modules`
- `/api/profile/demo-player`

## 7. Deploy

```bash
npm run deploy
```

## 8. Attach your custom domain

In Cloudflare dashboard:
1. Go to **Workers & Pages**
2. Open the `peppol-quest` project
3. Open **Settings** then **Domains & Routes**
4. Add your custom domain
5. Confirm the DNS record is proxied through Cloudflare

## 9. Suggested next bindings

For the next build phase, add:
- `R2` for artwork, audio, and downloadable worksheets
- `Turnstile` for public forms
- environment secrets for admin-only content tooling

## 10. Known limitations of this starter

- no production auth yet
- no admin CMS yet
- no runtime-tested asset pipeline in this environment
- D1 and KV IDs still need your real Cloudflare values

## Recommended next build phase

1. Replace the plain module cards with an isometric SVG or canvas map
2. Add auth or guest-session tokens
3. Add glossary data and searchable references
4. Add richer module detail pages
5. Add achievement badges and quest unlock logic
