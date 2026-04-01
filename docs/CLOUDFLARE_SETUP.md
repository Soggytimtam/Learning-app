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

## 4. Apply the schema

```bash
npx wrangler d1 execute peppol-quest --file=./schema.sql
```

## 5. Run locally

```bash
npm run dev
```

## 6. Deploy

```bash
npm run deploy
```
