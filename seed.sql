INSERT OR IGNORE INTO player_profiles (player_id, display_name, region, updated_at)
VALUES ('demo-player', 'Guest Analyst', 'A-NZ', CURRENT_TIMESTAMP);

INSERT OR IGNORE INTO progress_entries (player_id, module_slug, completion_percent, status, notes, updated_at)
VALUES
  ('demo-player', 'peppol-101', 25, 'available', 'Met Mayor Myrtle and learned why PDFs are not true eInvoices.', CURRENT_TIMESTAMP),
  ('demo-player', 'four-corner-city', 0, 'available', 'Unlocked city gates after drafting the first process map.', CURRENT_TIMESTAMP),
  ('demo-player', 'syntax-dungeon', 0, 'locked', '', CURRENT_TIMESTAMP),
  ('demo-player', 'rules-tribunal', 0, 'locked', '', CURRENT_TIMESTAMP),
  ('demo-player', 'discovery-forest', 0, 'locked', '', CURRENT_TIMESTAMP),
  ('demo-player', 'as4-port-city', 0, 'locked', '', CURRENT_TIMESTAMP),
  ('demo-player', 'a-nz-localisation-lab', 0, 'locked', '', CURRENT_TIMESTAMP),
  ('demo-player', 'incident-detective-mode', 0, 'locked', '', CURRENT_TIMESTAMP);
