const PLAYER_ID = 'demo-player';
const STORAGE_KEY = 'peppol-quest-world-hub-v2';

const zoneBlueprints = {
  'peppol-101': {
    eyebrow: 'Foundation Zone',
    mapHeading: 'Peppol 101 Meadow',
    hubTip: 'A strong BA translates business pain into a process story before jumping into technical detail.',
    wordOfDay: {
      term: 'Peppol',
      meaning: 'A network and rule set that lets businesses exchange structured documents like invoices.'
    },
    completionTitle: 'Meadow cleared!',
    completionText:
      'You now understand the four-corner basics, why PDFs are not the same as eInvoicing, and how to separate discovery issues from validation issues.',
    badges: ['Corner model', 'Structured data thinking', 'Issue triage'],
    terrain: [
      ['grass', 'grass', 'grass', 'water', 'water', 'grass', 'grass', 'grass'],
      ['grass', 'path', 'path', 'path', 'path', 'path', 'grass', 'grass'],
      ['grass', 'path', 'grass', 'grass', 'grass', 'path', 'grass', 'grass'],
      ['grass', 'path', 'grass', 'stone', 'grass', 'path', 'grass', 'grass'],
      ['grass', 'path', 'grass', 'grass', 'grass', 'path', 'grass', 'grass'],
      ['grass', 'path', 'path', 'path', 'path', 'path', 'path', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'path', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'goal', 'grass']
    ],
    start: { x: 1, y: 6 },
    actors: {
      mayor: { x: 1, y: 1, icon: '🌿', name: 'Mayor Myrtle', role: 'Starter guide' },
      ap: { x: 5, y: 2, icon: '📡', name: 'Access Point Ranger', role: 'Routing scout' },
      buyer: { x: 3, y: 5, icon: '🧾', name: 'Buyer Clerk Nia', role: 'Process reality check' },
      validator: { x: 6, y: 6, icon: '🔎', name: 'Validator Vale', role: 'Rule detective' }
    },
    steps: [
      'Speak with Mayor Myrtle to understand which corners hold the supplier and buyer business systems.',
      'Visit the Access Point Ranger and identify what type of problem discovery failures usually indicate.',
      'Visit Buyer Clerk Nia and explain why a PDF by email is not the same thing as structured Peppol eInvoicing.',
      'Return to Validator Vale and classify a failed invoice with mismatched required values.'
    ],
    shardMeta: {
      mayor: { title: 'Four-corner basics', summary: 'The business systems are Corners 1 and 4.' },
      ap: { title: 'Discovery clue', summary: 'Participant lookup failures usually indicate a routing or discovery problem.' },
      buyer: { title: 'Structured data clue', summary: 'A PDF by email may still be manual and is not the same as structured exchange.' },
      validator: { title: 'Validation clue', summary: 'Found receiver plus failed rules usually means validation or business-rule failure.' }
    }
  },
  'four-corner-city': {
    eyebrow: 'Architecture Zone',
    mapHeading: 'Four Corner City',
    hubTip: 'When a handoff fails, ask which corner currently owns the message and which corner expected to receive it next.',
    wordOfDay: {
      term: 'Four-corner model',
      meaning: 'The supplier and buyer sit at the edges, while access points carry the message in the middle.'
    },
    completionTitle: 'City route mastered!',
    completionText:
      'You mapped the sender-to-receiver journey and practised identifying where ownership changes hands between business systems and access points.',
    badges: ['Ownership mapping', 'Process tracing', 'Handoff diagnosis'],
    terrain: [
      ['grass', 'grass', 'path', 'path', 'path', 'grass', 'grass', 'grass'],
      ['grass', 'stone', 'stone', 'path', 'stone', 'stone', 'grass', 'grass'],
      ['grass', 'path', 'grass', 'path', 'grass', 'path', 'path', 'grass'],
      ['grass', 'path', 'grass', 'path', 'grass', 'grass', 'path', 'grass'],
      ['grass', 'path', 'path', 'path', 'stone', 'grass', 'path', 'grass'],
      ['grass', 'grass', 'grass', 'path', 'path', 'path', 'path', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'path', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'goal', 'grass']
    ],
    start: { x: 2, y: 0 },
    actors: {
      sender: { x: 1, y: 1, icon: '🏢', name: 'Sender Sage', role: 'Supplier-side guide' },
      ada: { x: 5, y: 1, icon: '📮', name: 'Access Point Ada', role: 'Middle-mile guide' },
      rowan: { x: 6, y: 4, icon: '🏬', name: 'Receiver Rowan', role: 'Buyer-side guide' },
      archivist: { x: 6, y: 6, icon: '🗺️', name: 'Archivist Ember', role: 'Architecture coach' }
    },
    steps: [
      'Speak with Sender Sage and identify where the supplier business system lives in the four-corner model.',
      'Visit Access Point Ada and choose the correct journey order for a Peppol document.',
      'Talk to Receiver Rowan and decide who owns a failed handoff after the sender system has already handed the message to its access point.',
      'Return to Archivist Ember and explain why the model matters to a BA during incident diagnosis.'
    ],
    shardMeta: {
      sender: { title: 'Corner 1 clue', summary: 'The supplier business system is Corner 1.' },
      ada: { title: 'Journey clue', summary: 'The path is Corner 1 → Corner 2 → Corner 3 → Corner 4.' },
      rowan: { title: 'Ownership clue', summary: 'Once the sender hands off to its AP, the next operational question sits with Corner 2.' },
      archivist: { title: 'BA clue', summary: 'The model helps a BA isolate responsibility, dependencies, and next questions.' }
    }
  }
};

const fallbackModules = [
  {
    slug: 'peppol-101',
    title: 'Peppol 101 Meadow',
    zone: 'Starter Plains',
    type: 'Foundation',
    level: 1,
    status: 'available',
    summary: 'Learn the four-corner basics, why structured eInvoicing beats PDFs, and how Peppol fits into real business operations.',
    skills: ['Value framing', 'Stakeholder mapping', 'Current vs future state']
  },
  {
    slug: 'four-corner-city',
    title: 'Four Corner City',
    zone: 'Interchange Borough',
    type: 'Architecture',
    level: 2,
    status: 'available',
    summary: 'Walk the buyer-supplier-access-point journey and learn where ownership changes hands between systems.',
    skills: ['Process mapping', 'Issue ownership', 'Operating model understanding']
  },
  {
    slug: 'syntax-dungeon',
    title: 'Syntax Dungeon',
    zone: 'Crystal Caves',
    type: 'Technical BA',
    level: 3,
    status: 'locked',
    summary: 'Planned zone: translate business requirements into invoice fields, XML elements, and mapping logic.',
    skills: ['Field mapping', 'Document literacy', 'Requirement tracing']
  },
  {
    slug: 'rules-tribunal',
    title: 'Rules Tribunal',
    zone: 'Sunstone Court',
    type: 'Validation',
    level: 4,
    status: 'locked',
    summary: 'Planned zone: practise reading business rules, designing tests, and explaining why payloads fail.',
    skills: ['Acceptance criteria', 'Test design', 'Rule interpretation']
  },
  {
    slug: 'discovery-forest',
    title: 'Discovery Forest',
    zone: 'Registry Wilds',
    type: 'Interoperability',
    level: 5,
    status: 'locked',
    summary: 'Planned zone: participant IDs, capability lookup, SMP/SML discovery, and receiver readiness.',
    skills: ['Identifier logic', 'Metadata diagnosis', 'Root-cause analysis']
  },
  {
    slug: 'as4-port-city',
    title: 'AS4 Port City',
    zone: 'Harbor of Trust',
    type: 'Transport',
    level: 6,
    status: 'locked',
    summary: 'Planned zone: secure message delivery, access point responsibilities, and payload-vs-transport thinking.',
    skills: ['Integration reasoning', 'Transport basics', 'Escalation thinking']
  },
  {
    slug: 'a-nz-localisation-lab',
    title: 'A-NZ Localisation Lab',
    zone: 'Trans-Tasman Institute',
    type: 'Regional Specialist',
    level: 7,
    status: 'locked',
    summary: 'Planned zone: PINT A-NZ, GST-aware design decisions, and localisation analysis for Australia and New Zealand.',
    skills: ['Gap analysis', 'Localisation analysis', 'Regional requirements']
  },
  {
    slug: 'incident-detective-mode',
    title: 'Incident Detective Mode',
    zone: 'Clocktower Ops',
    type: 'Capstone',
    level: 8,
    status: 'locked',
    summary: 'Planned zone: realistic triage, evidence gathering, and recommendation writing across mixed stakeholders.',
    skills: ['Incident diagnosis', 'Stakeholder communication', 'Recommendation writing']
  }
];

const glossaryTerms = [
  { term: 'Peppol', category: 'Core concept', plain: 'A shared network and rule set for exchanging business documents electronically.', technical: 'A four-corner interoperability framework governed through OpenPeppol specifications and local implementations.', ba: 'Think of it as the agreed operating model and standards layer that lets trading partners exchange structured documents reliably.' },
  { term: 'eInvoicing', category: 'Core concept', plain: 'Sending invoice data directly between systems instead of retyping or emailing files.', technical: 'Structured electronic invoice exchange between systems using agreed schemas, identifiers, and transport rules.', ba: 'It matters because it changes process design, controls, timing, exception handling, and the data model.' },
  { term: 'PINT A-NZ', category: 'Regional', plain: 'A Peppol invoice format tailored for Australia and New Zealand needs.', technical: 'The Peppol International invoice specification with Australia-New Zealand localisation rules and expectations.', ba: 'This is where local tax, policy, and implementation realities show up in scope and acceptance criteria.' },
  { term: 'Access Point', category: 'Network role', plain: 'A provider that sends and receives Peppol messages on behalf of a business.', technical: 'A Peppol network endpoint responsible for secure message delivery between participants.', ba: 'When incidents happen, the AP is often a key dependency and can change who owns the next troubleshooting step.' },
  { term: 'SMP', category: 'Discovery', plain: 'A place where systems can check what documents a participant can receive.', technical: 'Service Metadata Publisher: stores participant capabilities, document identifiers, and supported processes.', ba: 'Useful when you need to prove whether a receiver was configured to accept the document type in scope.' },
  { term: 'SML', category: 'Discovery', plain: 'A lookup layer that helps locate where a participant’s metadata lives.', technical: 'Service Metadata Locator: discovery infrastructure used to find the relevant SMP for a participant.', ba: 'When discovery fails, you may need to ask whether the participant can be located before debating payload quality.' },
  { term: 'CustomizationID', category: 'Document structure', plain: 'A label that tells systems which invoice ruleset the document follows.', technical: 'A document identifier used to declare the customization or business rules applied to the payload.', ba: 'This often appears in mapping and test conversations because the same business story may require different rulesets.' },
  { term: 'ProfileID', category: 'Document structure', plain: 'A label showing which business process the document belongs to.', technical: 'A business process identifier paired with document rules to signal expected interaction behaviour.', ba: 'Helps connect a payload to the process scenario your project is actually trying to support.' },
  { term: 'Validation', category: 'Quality', plain: 'Checking whether a document follows the required rules.', technical: 'Schema, code list, and business rule evaluation against the payload content.', ba: 'Validation failures are where requirements, mapping, and test design all collide.' },
  { term: 'Four-corner model', category: 'Architecture', plain: 'Supplier system and buyer system on the outside, access points in the middle.', technical: 'Corner 1 and Corner 4 are participant business systems; Corner 2 and Corner 3 are access points.', ba: 'This model helps you decide ownership, dependencies, escalation paths, and who should answer the next question.' }
];

const skillTracks = [
  { title: 'Business Analyst Foundations', nodes: [
    { label: 'Value framing', description: 'Explain why eInvoicing matters in business terms.', unlockedBy: ['peppol-101'] },
    { label: 'Current vs future state', description: 'Describe how work changes from PDFs to structured exchange.', unlockedBy: ['peppol-101'] },
    { label: 'Stakeholder mapping', description: 'Identify who owns which step of the operating model.', unlockedBy: ['peppol-101', 'four-corner-city'] }
  ]},
  { title: 'Technical BA Skills', nodes: [
    { label: 'Issue triage', description: 'Separate discovery, process, and validation problems.', unlockedBy: ['peppol-101'] },
    { label: 'Process mapping', description: 'Trace a message across corners and handoff points.', unlockedBy: ['four-corner-city'] },
    { label: 'Ownership analysis', description: 'Decide which corner should act next when delivery fails.', unlockedBy: ['four-corner-city'] }
  ]},
  { title: 'A-NZ Specialist Path', nodes: [
    { label: 'Regional scoping', description: 'Anticipate what A-NZ localisation changes in requirements.', unlockedBy: ['a-nz-localisation-lab'] },
    { label: 'GST-aware design', description: 'Understand where local tax context affects invoice design.', unlockedBy: ['a-nz-localisation-lab'] }
  ]},
  { title: 'Consulting & Strategy', nodes: [
    { label: 'Executive summary', description: 'Turn technical lessons into clear decision-ready language.', unlockedBy: ['peppol-101'] },
    { label: 'Roadmap thinking', description: 'Sequence learning zones into a sensible adoption journey.', unlockedBy: ['peppol-101', 'four-corner-city'] }
  ]}
];

const rankThresholds = [
  { min: 0, label: 'Apprentice' },
  { min: 3, label: 'Junior Analyst' },
  { min: 6, label: 'Quest Mapper' },
  { min: 9, label: 'Technical BA' },
  { min: 12, label: 'Peppol Pathfinder' }
];

const els = {
  screens: {
    hub: document.querySelector('#screen-hub'),
    zone: document.querySelector('#screen-zone'),
    glossary: document.querySelector('#screen-glossary'),
    skills: document.querySelector('#screen-skills')
  },
  navButtons: Array.from(document.querySelectorAll('.nav-btn')),
  navLogo: document.querySelector('.nav-logo'),
  navRank: document.querySelector('#navRank'),
  navShards: document.querySelector('#navShards'),
  zoneGrid: document.querySelector('#zoneGrid'),
  resumeQuestBtn: document.querySelector('#resumeQuestBtn'),
  resetAllBtn: document.querySelector('#resetAllBtn'),
  wordOfDay: document.querySelector('#wordOfDay'),
  hubTip: document.querySelector('#hubTip'),
  rankLabel: document.querySelector('#rankLabel'),
  zoneCompletionLabel: document.querySelector('#zoneCompletionLabel'),
  profileSource: document.querySelector('#profileSource'),
  backToMap: document.querySelector('#backToMap'),
  zoneEyebrow: document.querySelector('#zoneEyebrow'),
  zoneTopbarName: document.querySelector('#zoneTopbarName'),
  mapHeading: document.querySelector('#mapHeading'),
  currentQuestText: document.querySelector('#currentQuestText'),
  progressFill: document.querySelector('#progressFill'),
  zoneProgressMeter: document.querySelector('#zoneProgressMeter'),
  zoneRankLabel: document.querySelector('#zoneRankLabel'),
  shardCount: document.querySelector('#shardCount'),
  gameGrid: document.querySelector('#gameGrid'),
  npcHeader: document.querySelector('#npcHeader'),
  npcAvatar: document.querySelector('#npcAvatar'),
  npcName: document.querySelector('#npcName'),
  npcRole: document.querySelector('#npcRole'),
  dialoguePanel: document.querySelector('#dialoguePanel'),
  choicePanel: document.querySelector('#choicePanel'),
  questSteps: document.querySelector('#questSteps'),
  zoneProfileSource: document.querySelector('#zoneProfileSource'),
  shardList: document.querySelector('#shardList'),
  resetZoneBtn: document.querySelector('#resetZoneBtn'),
  saveZoneBtn: document.querySelector('#saveZoneBtn'),
  completionOverlay: document.querySelector('#completionOverlay'),
  completionTitle: document.querySelector('#completionTitle'),
  completionText: document.querySelector('#completionText'),
  completionBadges: document.querySelector('#completionBadges'),
  completionContinue: document.querySelector('#completionContinue'),
  glossarySearch: document.querySelector('#glossarySearch'),
  glossaryGrid: document.querySelector('#glossaryGrid'),
  viewButtons: Array.from(document.querySelectorAll('.view-btn')),
  skillTree: document.querySelector('#skillTree')
};

const state = {
  activeScreen: 'hub',
  modules: [...fallbackModules],
  profileSource: 'demo',
  glossaryView: 'plain',
  glossaryQuery: '',
  player: {
    currentZone: 'peppol-101',
    completedZones: [],
    zoneResults: {}
  }
};

function cloneZoneState(zoneKey) {
  const blueprint = zoneBlueprints[zoneKey];
  return {
    zoneKey,
    player: { ...blueprint.start },
    questStep: 0,
    shards: [],
    completed: false,
    lastLesson: 'None yet'
  };
}

function ensureZoneState(zoneKey) {
  if (!state.player.zoneResults[zoneKey]) {
    state.player.zoneResults[zoneKey] = cloneZoneState(zoneKey);
  }
  return state.player.zoneResults[zoneKey];
}

function totalShards() {
  return Object.values(state.player.zoneResults).reduce((sum, zoneState) => sum + zoneState.shards.length, 0);
}

function completedPlayableCount() {
  return Object.keys(zoneBlueprints).filter((zoneKey) => state.player.zoneResults[zoneKey]?.completed).length;
}

function currentRank() {
  const score = totalShards();
  let rank = rankThresholds[0].label;
  for (const threshold of rankThresholds) {
    if (score >= threshold.min) rank = threshold.label;
  }
  return rank;
}

function saveLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.player));
}

function loadLocal() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && typeof saved === 'object') {
      state.player = {
        currentZone: saved.currentZone || 'peppol-101',
        completedZones: Array.isArray(saved.completedZones) ? saved.completedZones : [],
        zoneResults: saved.zoneResults || {}
      };
    }
  } catch {}
  Object.keys(zoneBlueprints).forEach((zoneKey) => ensureZoneState(zoneKey));
}

function mergeModules(remoteModules) {
  if (!Array.isArray(remoteModules) || !remoteModules.length) return;
  const bySlug = new Map(remoteModules.map((module) => [module.slug, module]));
  state.modules = fallbackModules.map((module) => {
    const remote = bySlug.get(module.slug);
    return remote ? { ...module, ...remote } : module;
  });
}

async function loadRemoteData() {
  try {
    const [modulesResponse, profileResponse] = await Promise.all([
      fetch('/api/modules'),
      fetch(`/api/profile/${PLAYER_ID}`)
    ]);

    if (modulesResponse.ok) {
      const modulesPayload = await modulesResponse.json();
      mergeModules(modulesPayload.modules);
    }

    if (profileResponse.ok) {
      const profile = await profileResponse.json();
      state.profileSource = profile.source || 'demo';
      if (Array.isArray(profile.progress)) {
        for (const entry of profile.progress) {
          const zoneState = state.player.zoneResults[entry.moduleSlug];
          if (!zoneState) continue;
          zoneState.completed = entry.status === 'completed' || Number(entry.completionPercent) >= 100;
          if (zoneState.completed && !state.player.completedZones.includes(entry.moduleSlug)) {
            state.player.completedZones.push(entry.moduleSlug);
          }
        }
      }
    }
  } catch {
    state.profileSource = 'local demo';
  }
}

function zoneProgressPercent(zoneState) {
  if (zoneState.completed) return 100;
  return [8, 30, 58, 82][zoneState.questStep] || 0;
}

function showScreen(screenKey) {
  state.activeScreen = screenKey;
  Object.entries(els.screens).forEach(([key, screen]) => {
    screen.classList.toggle('active', key === screenKey);
  });
  els.navButtons.forEach((button) => {
    const active = button.dataset.nav === screenKey;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function moduleForZone(zoneKey) {
  return state.modules.find((module) => module.slug === zoneKey) || fallbackModules.find((module) => module.slug === zoneKey);
}

function zoneStatusLabel(module, zoneState) {
  if (zoneState?.completed) return 'Completed';
  if (zoneBlueprints[module.slug]) return 'Playable now';
  return module.status === 'locked' ? 'Locked' : 'Roadmap';
}

function renderHubCards() {
  els.zoneGrid.innerHTML = state.modules.map((module) => {
    const zoneState = state.player.zoneResults[module.slug];
    const playable = Boolean(zoneBlueprints[module.slug]);
    const statusLabel = zoneStatusLabel(module, zoneState);
    const progress = zoneState ? zoneProgressPercent(zoneState) : 0;
    return `
      <article class="zone-card ${playable ? '' : 'locked'}" role="listitem">
        <div class="zone-card-top">
          <span class="zone-badge">${module.type}</span>
          <span class="zone-level">Level ${module.level}</span>
        </div>
        <div>
          <p class="eyebrow">${module.zone}</p>
          <h3>${module.title}</h3>
          <p>${module.summary}</p>
        </div>
        <div class="zone-skills">
          ${(module.skills || []).slice(0, 3).map((skill) => `<span>${skill}</span>`).join('')}
        </div>
        <div class="zone-card-actions">
          <span class="zone-status">${statusLabel}${playable ? ` · ${progress}%` : ''}</span>
          <button class="${playable ? 'primary' : 'secondary'} small" data-zone-open="${module.slug}" ${playable ? '' : 'disabled'}>
            ${zoneState?.completed ? 'Replay zone' : playable ? 'Enter zone' : 'Coming later'}
          </button>
        </div>
      </article>
    `;
  }).join('');

  els.zoneGrid.querySelectorAll('[data-zone-open]').forEach((button) => {
    button.addEventListener('click', () => openZone(button.dataset.zoneOpen));
  });
}

function renderWordOfDay() {
  const currentZone = zoneBlueprints[state.player.currentZone] || zoneBlueprints['peppol-101'];
  els.wordOfDay.innerHTML = `
    <p class="tip-label">Word of the day</p>
    <h3>${currentZone.wordOfDay.term}</h3>
    <p>${currentZone.wordOfDay.meaning}</p>
  `;
  els.hubTip.textContent = currentZone.hubTip;
}

function renderProfileSummary() {
  const rank = currentRank();
  els.navRank.textContent = rank;
  els.navShards.textContent = String(totalShards());
  els.rankLabel.textContent = rank;
  els.zoneCompletionLabel.textContent = `${completedPlayableCount()} / ${Object.keys(zoneBlueprints).length}`;
  els.profileSource.textContent = state.profileSource;
}

function setNpcHeader(actor) {
  if (!actor) {
    els.npcHeader.classList.remove('visible');
    els.npcAvatar.textContent = '✦';
    els.npcName.textContent = 'Dialogue';
    els.npcRole.textContent = '';
    return;
  }
  els.npcHeader.classList.add('visible');
  els.npcAvatar.textContent = actor.icon;
  els.npcName.textContent = actor.name;
  els.npcRole.textContent = actor.role;
}

function setDialogue(text, choices = [], actor = null) {
  setNpcHeader(actor);
  els.dialoguePanel.innerHTML = `<p>${text}</p>`;
  els.choicePanel.innerHTML = '';
  choices.forEach((choice) => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    button.textContent = choice.label;
    button.addEventListener('click', choice.onSelect);
    els.choicePanel.appendChild(button);
  });
}

function updateCompletion(zoneKey) {
  if (!state.player.completedZones.includes(zoneKey)) {
    state.player.completedZones.push(zoneKey);
  }
  saveLocal();
  renderHub();
  renderSkillTree();
}

function collectShard(zoneKey, shardKey, lesson) {
  const zoneState = ensureZoneState(zoneKey);
  if (!zoneState.shards.includes(shardKey)) zoneState.shards.push(shardKey);
  zoneState.lastLesson = lesson;
  saveLocal();
}

function handlePeppol101(actorKey) {
  const zoneState = ensureZoneState('peppol-101');
  const blueprint = zoneBlueprints['peppol-101'];
  const actor = blueprint.actors[actorKey];

  if (actorKey === 'mayor') {
    if (zoneState.questStep === 0) zoneState.questStep = 1;
    setDialogue('Mayor Myrtle: A supplier says, “I sent the invoice.” The buyer says, “I never received it.” In Peppol, which corners represent the two business systems?', [
      { label: 'Corner 1 and Corner 4', onSelect: () => { collectShard('peppol-101', 'mayor', blueprint.shardMeta.mayor.summary); setDialogue('Correct. The businesses live at Corner 1 and Corner 4. Corners 2 and 3 are the access points that carry the message between them. Now go see the Access Point Ranger.', [], actor); renderZone(); } },
      { label: 'Corner 2 and Corner 3', onSelect: () => setDialogue('Not quite. Corners 2 and 3 are the access points, not the business systems.', [], actor) }
    ], actor);
    saveLocal();
    return;
  }

  if (actorKey === 'ap') {
    if (zoneState.questStep < 1) {
      setDialogue('Access Point Ranger: Start with Mayor Myrtle first so you have the basic map in your head.', [], actor);
      return;
    }
    setDialogue('Access Point Ranger: The participant could not be discovered. What kind of issue is that most likely?', [
      { label: 'Routing or discovery issue', onSelect: () => { collectShard('peppol-101', 'ap', blueprint.shardMeta.ap.summary); if (zoneState.questStep === 1) zoneState.questStep = 2; setDialogue('Exactly. If the participant cannot be discovered, a BA should check identifiers, discovery metadata, or receiver capability setup before blaming the invoice content.', [], actor); renderZone(); } },
      { label: 'Printer jam in accounts payable', onSelect: () => setDialogue('Nope. That would be a local paper-process problem, not a discovery problem in the network.', [], actor) }
    ], actor);
    saveLocal();
    return;
  }

  if (actorKey === 'buyer') {
    if (zoneState.questStep < 2) {
      setDialogue('Buyer Clerk Nia: You still need the discovery clue from the Access Point Ranger first.', [], actor);
      return;
    }
    setDialogue('Buyer Clerk Nia: A PDF arrived by email, but no structured data entered the finance system. What should a BA say?', [
      { label: 'That is not Peppol eInvoicing yet', onSelect: () => { collectShard('peppol-101', 'buyer', blueprint.shardMeta.buyer.summary); if (zoneState.questStep === 2) zoneState.questStep = 3; setDialogue('Right. A PDF may still be a manual document workflow. Peppol eInvoicing means structured software-to-software data exchange, not just “an invoice that arrived electronically.”', [], actor); renderZone(); } },
      { label: 'That counts as full automation', onSelect: () => setDialogue('Not yet. It is still a document handoff rather than structured exchange into the system.', [], actor) }
    ], actor);
    saveLocal();
    return;
  }

  if (actorKey === 'validator') {
    if (zoneState.questStep < 3) {
      setDialogue('Validator Vale: Gather the earlier clues before you try the final diagnosis.', [], actor);
      return;
    }
    setDialogue('Validator Vale: The participant is found, but the invoice fails because required values do not match the rules. What category is the problem?', [
      { label: 'Validation or business-rule issue', onSelect: () => { collectShard('peppol-101', 'validator', blueprint.shardMeta.validator.summary); zoneState.completed = true; zoneState.questStep = 4; updateCompletion('peppol-101'); showCompletion('peppol-101'); renderZone(); } },
      { label: 'Wrong office chair', onSelect: () => setDialogue('Funny, but this one is a payload validation issue.', [], actor) }
    ], actor);
    saveLocal();
  }
}

function handleFourCornerCity(actorKey) {
  const zoneState = ensureZoneState('four-corner-city');
  const blueprint = zoneBlueprints['four-corner-city'];
  const actor = blueprint.actors[actorKey];

  if (actorKey === 'sender') {
    if (zoneState.questStep === 0) zoneState.questStep = 1;
    setDialogue('Sender Sage: In the four-corner model, where does the supplier business system live?', [
      { label: 'Corner 1', onSelect: () => { collectShard('four-corner-city', 'sender', blueprint.shardMeta.sender.summary); setDialogue('Correct. The supplier system is Corner 1, handing the message to its access point in Corner 2.', [], actor); renderZone(); } },
      { label: 'Corner 3', onSelect: () => setDialogue('Not quite. Corner 3 is the receiver-side access point, not the supplier system.', [], actor) }
    ], actor);
    saveLocal();
    return;
  }

  if (actorKey === 'ada') {
    if (zoneState.questStep < 1) {
      setDialogue('Access Point Ada: Start with Sender Sage so the city map makes sense first.', [], actor);
      return;
    }
    setDialogue('Access Point Ada: Which path shows the normal journey of a Peppol document?', [
      { label: 'Corner 1 → Corner 2 → Corner 3 → Corner 4', onSelect: () => { collectShard('four-corner-city', 'ada', blueprint.shardMeta.ada.summary); if (zoneState.questStep === 1) zoneState.questStep = 2; setDialogue('Exactly. Supplier business system to supplier access point, then to buyer access point, then into the buyer business system.', [], actor); renderZone(); } },
      { label: 'Corner 1 → Corner 4 → Corner 2 → Corner 3', onSelect: () => setDialogue('No. The business systems do not jump over the access points in the middle.', [], actor) }
    ], actor);
    saveLocal();
    return;
  }

  if (actorKey === 'rowan') {
    if (zoneState.questStep < 2) {
      setDialogue('Receiver Rowan: You still need the route order from Access Point Ada first.', [], actor);
      return;
    }
    setDialogue('Receiver Rowan: The sender system already handed the message to its access point, but the next handoff fails. Which corner owns that handoff?', [
      { label: 'Corner 2', onSelect: () => { collectShard('four-corner-city', 'rowan', blueprint.shardMeta.rowan.summary); if (zoneState.questStep === 2) zoneState.questStep = 3; setDialogue('Yes. Once the supplier system has handed off, the next operational question sits with the sender-side access point in Corner 2.', [], actor); renderZone(); } },
      { label: 'Corner 1', onSelect: () => setDialogue('Not the best answer. Corner 1 already completed its handoff in this scenario.', [], actor) }
    ], actor);
    saveLocal();
    return;
  }

  if (actorKey === 'archivist') {
    if (zoneState.questStep < 3) {
      setDialogue('Archivist Ember: Collect the city clues first, then come back for the final reflection.', [], actor);
      return;
    }
    setDialogue('Archivist Ember: Why does the four-corner model matter to a BA during incident diagnosis?', [
      { label: 'It shows where ownership changes and who should answer the next question', onSelect: () => { collectShard('four-corner-city', 'archivist', blueprint.shardMeta.archivist.summary); zoneState.completed = true; zoneState.questStep = 4; updateCompletion('four-corner-city'); showCompletion('four-corner-city'); renderZone(); } },
      { label: 'It is mostly decorative architecture jargon', onSelect: () => setDialogue('No. It is useful precisely because it clarifies responsibility and escalation paths.', [], actor) }
    ], actor);
    saveLocal();
  }
}

function nearbyActor(zoneState, blueprint) {
  return Object.entries(blueprint.actors).find(([, actor]) => Math.abs(actor.x - zoneState.player.x) + Math.abs(actor.y - zoneState.player.y) <= 1);
}

function tileMarker(zoneState, blueprint, x, y) {
  if (zoneState.player.x === x && zoneState.player.y === y) return '<div class="marker player">Y</div>';
  for (const actor of Object.values(blueprint.actors)) {
    if (actor.x === x && actor.y === y) return `<div class="marker npc">${actor.icon}</div>`;
  }
  if (x === 6 && y === 7 && zoneState.completed) return '<div class="marker goal">✓</div>';
  return '';
}

function renderZoneGrid() {
  const zoneKey = state.player.currentZone;
  const blueprint = zoneBlueprints[zoneKey];
  const zoneState = ensureZoneState(zoneKey);
  els.gameGrid.innerHTML = blueprint.terrain.map((row, y) => row.map((type, x) => `
    <button class="tile ${type} ${x === 6 && y === 7 ? 'goal' : ''}" data-x="${x}" data-y="${y}" aria-label="Tile ${x + 1}, ${y + 1}">
      ${tileMarker(zoneState, blueprint, x, y)}
    </button>
  `).join('')).join('');

  els.gameGrid.querySelectorAll('.tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const x = Number(tile.dataset.x);
      const y = Number(tile.dataset.y);
      const dx = x - zoneState.player.x;
      const dy = y - zoneState.player.y;
      const distance = Math.abs(dx) + Math.abs(dy);
      if (distance === 1) movePlayer(dx, dy);
      else if (distance === 0) interact();
    });
  });
}

function renderQuestLog() {
  const zoneKey = state.player.currentZone;
  const blueprint = zoneBlueprints[zoneKey];
  const zoneState = ensureZoneState(zoneKey);
  const progress = zoneProgressPercent(zoneState);
  els.zoneEyebrow.textContent = blueprint.eyebrow;
  els.zoneTopbarName.textContent = moduleForZone(zoneKey)?.title || blueprint.mapHeading;
  els.mapHeading.textContent = blueprint.mapHeading;
  els.currentQuestText.textContent = zoneState.completed ? 'Zone complete — replay any conversation or return to the map.' : blueprint.steps[Math.min(zoneState.questStep, blueprint.steps.length - 1)];
  els.progressFill.style.width = `${progress}%`;
  els.zoneProgressMeter.setAttribute('aria-valuenow', String(progress));
  els.zoneRankLabel.textContent = currentRank();
  els.shardCount.textContent = String(zoneState.shards.length);
  els.zoneProfileSource.textContent = `Profile source: ${state.profileSource}`;
  els.questSteps.innerHTML = blueprint.steps.map((step, index) => {
    const className = zoneState.completed || index < zoneState.questStep ? 'done' : index === zoneState.questStep ? 'active' : 'locked';
    return `<li class="${className}">${step}</li>`;
  }).join('');

  if (!zoneState.shards.length) {
    els.shardList.innerHTML = '<div class="empty-state">No shards yet. Talk to the first guide to begin.</div>';
  } else {
    els.shardList.innerHTML = zoneState.shards.map((shardKey) => {
      const shard = blueprint.shardMeta[shardKey];
      return `<article class="shard-pill"><strong>${shard.title}</strong><span>${shard.summary}</span></article>`;
    }).join('');
  }
}

function renderZone() {
  renderZoneGrid();
  renderQuestLog();
  renderProfileSummary();
}

function renderHub() {
  renderHubCards();
  renderWordOfDay();
  renderProfileSummary();
}

function renderGlossary() {
  const view = state.glossaryView;
  const query = state.glossaryQuery.trim().toLowerCase();
  els.viewButtons.forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active);
    button.setAttribute('aria-checked', active ? 'true' : 'false');
  });
  const filtered = glossaryTerms.filter((entry) => `${entry.term} ${entry.category} ${entry.plain} ${entry.technical} ${entry.ba}`.toLowerCase().includes(query));
  if (!filtered.length) {
    els.glossaryGrid.innerHTML = '<div class="empty-state">No glossary terms matched your search.</div>';
    return;
  }
  els.glossaryGrid.innerHTML = filtered.map((entry) => `
    <article class="glossary-card">
      <span class="term-meta">${entry.category}</span>
      <h3>${entry.term}</h3>
      <p>${entry[view]}</p>
    </article>
  `).join('');
}

function renderSkillTree() {
  const completed = new Set(state.player.completedZones);
  els.skillTree.innerHTML = skillTracks.map((track) => {
    const nodes = track.nodes.map((node) => {
      const unlocked = node.unlockedBy.some((zoneKey) => completed.has(zoneKey));
      return `
        <article class="skill-node ${unlocked ? 'unlocked' : 'locked'}">
          <div class="skill-node-title"><span>${node.label}</span><span>${unlocked ? 'Unlocked' : 'Locked'}</span></div>
          <p>${node.description}</p>
        </article>
      `;
    }).join('');
    return `<section class="skill-track shell-card"><h3>${track.title}</h3><div class="skill-nodes">${nodes}</div></section>`;
  }).join('');
}

function showCompletion(zoneKey) {
  const blueprint = zoneBlueprints[zoneKey];
  els.completionTitle.textContent = blueprint.completionTitle;
  els.completionText.textContent = blueprint.completionText;
  els.completionBadges.innerHTML = blueprint.badges.map((badge) => `<span class="completion-badge">${badge}</span>`).join('');
  els.completionOverlay.hidden = false;
}

function hideCompletion() { els.completionOverlay.hidden = true; }

function openZone(zoneKey) {
  if (!zoneBlueprints[zoneKey]) return;
  state.player.currentZone = zoneKey;
  ensureZoneState(zoneKey);
  showScreen('zone');
  renderZone();
  const zoneState = ensureZoneState(zoneKey);
  if (zoneState.completed) setDialogue('You have already cleared this zone. Replay the conversations, or return to the world map and choose another area.');
  else if (zoneState.questStep === 0 && !zoneState.shards.length) setDialogue('Walk to the first guide and press E to begin the zone quest.');
  else setDialogue(`Welcome back to ${moduleForZone(zoneKey)?.title || zoneBlueprints[zoneKey].mapHeading}. Continue from your current quest step.`);
  saveLocal();
}

function resetZone(zoneKey = state.player.currentZone) {
  state.player.zoneResults[zoneKey] = cloneZoneState(zoneKey);
  state.player.completedZones = state.player.completedZones.filter((key) => key !== zoneKey);
  hideCompletion();
  renderZone();
  renderHub();
  renderSkillTree();
  setDialogue('Zone reset. Walk to the first guide and press E to begin again.');
  saveLocal();
}

function resetAllProgress() {
  state.player = { currentZone: 'peppol-101', completedZones: [], zoneResults: {} };
  Object.keys(zoneBlueprints).forEach((zoneKey) => ensureZoneState(zoneKey));
  hideCompletion();
  renderHub();
  renderGlossary();
  renderSkillTree();
  saveLocal();
}

function movePlayer(dx, dy) {
  if (state.activeScreen !== 'zone') return;
  const zoneKey = state.player.currentZone;
  const blueprint = zoneBlueprints[zoneKey];
  const zoneState = ensureZoneState(zoneKey);
  const nextX = zoneState.player.x + dx;
  const nextY = zoneState.player.y + dy;
  if (nextX < 0 || nextY < 0 || nextX >= 8 || nextY >= 8) return;
  if (blueprint.terrain[nextY][nextX] === 'water') return;
  zoneState.player.x = nextX;
  zoneState.player.y = nextY;
  saveLocal();
  renderZoneGrid();
}

function interact() {
  if (state.activeScreen !== 'zone') return;
  const zoneKey = state.player.currentZone;
  const blueprint = zoneBlueprints[zoneKey];
  const zoneState = ensureZoneState(zoneKey);
  const found = nearbyActor(zoneState, blueprint);
  if (!found) {
    setDialogue('There is nobody close enough to talk to. Move next to a guide and press E.');
    return;
  }
  const [actorKey] = found;
  if (zoneKey === 'peppol-101') handlePeppol101(actorKey);
  if (zoneKey === 'four-corner-city') handleFourCornerCity(actorKey);
}

function buildSavePayload() {
  return {
    displayName: 'Guest Analyst',
    region: 'A-NZ',
    progress: state.modules.filter((module) => zoneBlueprints[module.slug]).map((module) => {
      const zoneState = ensureZoneState(module.slug);
      return {
        moduleSlug: module.slug,
        completionPercent: zoneProgressPercent(zoneState),
        status: zoneState.completed ? 'completed' : 'available',
        notes: zoneState.lastLesson || ''
      };
    })
  };
}

async function saveProfile() {
  try {
    const response = await fetch(`/api/profile/${PLAYER_ID}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(buildSavePayload())
    });
    const result = await response.json();
    state.profileSource = result.source || state.profileSource;
    renderProfileSummary();
    renderQuestLog();
    setDialogue('Progress saved. Your zone progress is now synced to the profile endpoint.');
  } catch {
    setDialogue('Could not save to the API, but your progress is still saved locally in this browser.');
  }
}

function attachEvents() {
  els.navLogo.addEventListener('click', () => { showScreen('hub'); renderHub(); });
  els.navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showScreen(button.dataset.nav);
      if (button.dataset.nav === 'hub') renderHub();
      if (button.dataset.nav === 'glossary') renderGlossary();
      if (button.dataset.nav === 'skills') renderSkillTree();
    });
  });
  els.resumeQuestBtn.addEventListener('click', () => openZone(state.player.currentZone));
  els.resetAllBtn.addEventListener('click', resetAllProgress);
  els.backToMap.addEventListener('click', () => { hideCompletion(); showScreen('hub'); renderHub(); });
  els.resetZoneBtn.addEventListener('click', () => resetZone());
  els.saveZoneBtn.addEventListener('click', saveProfile);
  els.completionContinue.addEventListener('click', () => { hideCompletion(); showScreen('hub'); renderHub(); });
  els.glossarySearch.addEventListener('input', (event) => { state.glossaryQuery = event.target.value; renderGlossary(); });
  els.viewButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.glossaryView = button.dataset.view;
      renderGlossary();
    });
  });
  document.addEventListener('keydown', (event) => {
    if (state.activeScreen !== 'zone') return;
    const key = event.key.toLowerCase();
    if (key === 'arrowup' || key === 'w') movePlayer(0, -1);
    if (key === 'arrowdown' || key === 's') movePlayer(0, 1);
    if (key === 'arrowleft' || key === 'a') movePlayer(-1, 0);
    if (key === 'arrowright' || key === 'd') movePlayer(1, 0);
    if (key === 'e' || key === ' ') {
      event.preventDefault();
      interact();
    }
  });
}

async function init() {
  loadLocal();
  attachEvents();
  await loadRemoteData();
  renderHub();
  renderGlossary();
  renderSkillTree();
  showScreen('hub');
}

init();
