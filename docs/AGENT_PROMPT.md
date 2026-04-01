# Build prompt for a full-stack coding agent

Build a production-ready web app called **Peppol Quest**.

## Product goal
Create a cozy, original, miniature-fantasy learning RPG website that teaches Peppol, PINT A-NZ, validation rules, identifiers, AS4 concepts, incident diagnostics, and technical business analysis skills. The experience should feel playful, tactile, warm, story-rich, and easy for beginners, while still giving advanced users genuinely useful technical depth.

## Creative direction
Design the interface with an original look that evokes:
- charming toy-town environments
- soft isometric or near-isometric map views
- chunky cards, layered terrain, rounded shapes, warm light, hand-crafted UI
- bright grass, parchment panels, sparkling water, stone paths, tiny buildings, badge icons

Do **not** copy characters, maps, assets, compositions, names, or exact UI from Nintendo or any protected game. Take inspiration only from the broad feeling: cozy, readable, whimsical, miniature, inviting, adventure-forward.

## Audience
- beginner learners who feel intimidated by Peppol
- aspiring technical business analysts
- product analysts and implementation consultants in Australia and New Zealand

## Core learning zones
Implement these world zones as explorable learning modules:
1. Peppol 101 Meadow
2. Four Corner City
3. Syntax Dungeon
4. Rules Tribunal
5. Discovery Forest
6. AS4 Port City
7. A-NZ Localisation Lab
8. Incident Detective Mode
9. Origins of Interoperability
10. Signals to Systems

## Required product features
### Front end
- responsive landing page with explorable world map
- per-module detail pages or modal panels
- progress tracker with save state
- skill tree UI for BA, Technical BA, A-NZ Specialist, Strategy
- quest cards with objectives and rewards
- glossary popovers for terms like BIS, PINT, AS4, SMP, SML, EndpointID, CustomizationID, ProfileID
- optional plain English mode toggle
- optional show XML toggle for technical views
- cozy audio toggle placeholder and accessibility settings drawer

### Backend
- Cloudflare-native backend using Workers
- REST or JSON endpoints for modules, quests, glossary, profile, progress, and settings
- D1 for player progress, notes, and achievement state
- KV for caching static API payloads and session-like lightweight state
- R2-ready content layer for images, audio, or downloadable worksheets
- optional Turnstile-ready form endpoints for future signup/contact forms

### Data model
Create tables or collections for:
- users or guest profiles
- modules
- quests
- glossary entries
- progress states
- achievements
- notes
- localisation variants

### Curriculum depth
For each module include:
- beginner explanation
- technical explanation
- BA relevance
- sample scenario
- one practical exercise
- one boss-style incident or challenge
- one deliverable template, such as process map, rule test case, incident summary, or gap analysis

### A-NZ specialist support
Include dedicated content handling for:
- PINT A-NZ context
- GST-aware examples
- local authority and provider ecosystem context
- Australia and New Zealand implementation differences where relevant

### Visual system
Build a consistent design system with:
- terrain tiles
- card variants by module type
- whimsical badges
- readable typography
- soft shadows
- high-contrast accessibility mode
- subtle motion, never overwhelming

## Technical implementation requirements
- use a Cloudflare-friendly stack
- keep the app performant on mobile and desktop
- support static asset delivery plus dynamic Worker APIs
- separate content data from UI components
- use environment bindings for D1, KV, R2, Turnstile secrets, and app vars
- include deployment docs and seed data
- include a sample SQL schema
- include example API payloads

## Cloudflare integration requirements
- compatible with Cloudflare Workers and optionally Pages
- wrangler config checked in
- D1 binding for progress persistence
- KV binding for cache
- clear setup steps for domain attachment
- health endpoint returning environment capability flags
- simple fallback mode when Cloudflare bindings are absent

## Quality bar
- original art direction only
- beginner-friendly copy
- maintainable code layout
- clear comments in tricky logic only
- no overly complex abstraction unless justified
- prepare the app for future auth and multiplayer collaboration

## Deliverables
- working front-end and backend code
- README with setup and deployment
- schema and seed data
- Cloudflare setup guide
- mock content for all core modules
- at least one polished home page and module interaction flow
