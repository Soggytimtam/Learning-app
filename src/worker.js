import { modules, lore } from './data/modules.js';

function json(data, init = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...(init.headers || {})
    }
  });
}

async function readBody(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

async function getProfile(env, playerId) {
  if (!env.DB) {
    return {
      playerId,
      displayName: 'Guest Analyst',
      region: 'A-NZ',
      source: 'demo',
      progress: modules.map((module, index) => ({
        moduleSlug: module.slug,
        completionPercent: index === 0 ? 34 : 0,
        status: index <= 1 ? 'available' : 'locked',
        notes: ''
      }))
    };
  }

  const profile = await env.DB.prepare(
    'SELECT player_id, display_name, region, updated_at FROM player_profiles WHERE player_id = ?'
  ).bind(playerId).first();

  if (!profile) {
    const now = new Date().toISOString();
    await env.DB.prepare(
      'INSERT INTO player_profiles (player_id, display_name, region, updated_at) VALUES (?, ?, ?, ?)'
    ).bind(playerId, 'Guest Analyst', 'A-NZ', now).run();
  }

  const rows = await env.DB.prepare(
    'SELECT module_slug, completion_percent, status, notes, updated_at FROM progress_entries WHERE player_id = ? ORDER BY id ASC'
  ).bind(playerId).all();

  return {
    playerId,
    displayName: profile?.display_name || 'Guest Analyst',
    region: profile?.region || 'A-NZ',
    source: 'd1',
    progress: rows.results.length
      ? rows.results.map((row) => ({
          moduleSlug: row.module_slug,
          completionPercent: row.completion_percent,
          status: row.status,
          notes: row.notes,
          updatedAt: row.updated_at
        }))
      : modules.map((module, index) => ({
          moduleSlug: module.slug,
          completionPercent: index === 0 ? 0 : 0,
          status: index === 0 ? 'available' : 'locked',
          notes: ''
        }))
  };
}

async function upsertProgress(env, playerId, payload) {
  const now = new Date().toISOString();

  if (!env.DB) {
    return { ok: true, source: 'demo', saved: payload };
  }

  await env.DB.prepare(
    'INSERT OR IGNORE INTO player_profiles (player_id, display_name, region, updated_at) VALUES (?, ?, ?, ?)'
  ).bind(playerId, payload.displayName || 'Guest Analyst', payload.region || 'A-NZ', now).run();

  if (Array.isArray(payload.progress)) {
    for (const entry of payload.progress) {
      await env.DB.prepare(
        `INSERT INTO progress_entries (player_id, module_slug, completion_percent, status, notes, updated_at)
         VALUES (?, ?, ?, ?, ?, ?)
         ON CONFLICT(player_id, module_slug)
         DO UPDATE SET completion_percent=excluded.completion_percent,
                       status=excluded.status,
                       notes=excluded.notes,
                       updated_at=excluded.updated_at`
      )
        .bind(
          playerId,
          entry.moduleSlug,
          Number(entry.completionPercent || 0),
          entry.status || 'available',
          entry.notes || '',
          now
        )
        .run();
    }
  }

  return { ok: true, source: 'd1' };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname === '/api/health') {
      return json({ ok: true, app: env.APP_NAME || 'Peppol Quest', hasD1: Boolean(env.DB) });
    }

    if (pathname === '/api/modules') {
      return json({ modules, lore });
    }

    const profileMatch = pathname.match(/^\/api\/profile\/([^/]+)$/);
    if (profileMatch && request.method === 'GET') {
      const profile = await getProfile(env, decodeURIComponent(profileMatch[1]));
      return json(profile);
    }

    if (profileMatch && request.method === 'POST') {
      const payload = await readBody(request);
      if (!payload) return json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
      const result = await upsertProgress(env, decodeURIComponent(profileMatch[1]), payload);
      return json(result, { status: 200 });
    }

    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response('Not found', { status: 404 });
  }
};
