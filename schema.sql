CREATE TABLE IF NOT EXISTS player_profiles (
  player_id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  region TEXT DEFAULT 'A-NZ',
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS progress_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  player_id TEXT NOT NULL,
  module_slug TEXT NOT NULL,
  completion_percent INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'locked',
  notes TEXT DEFAULT '',
  updated_at TEXT NOT NULL,
  UNIQUE(player_id, module_slug)
);
