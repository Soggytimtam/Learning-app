const PLAYER_ID = 'demo-player';
const els = {
  gameGrid: document.querySelector('#gameGrid'),
  dialoguePanel: document.querySelector('#dialoguePanel'),
  choicePanel: document.querySelector('#choicePanel'),
  questSteps: document.querySelector('#questSteps'),
  questTitle: document.querySelector('#questTitle'),
  progressBar: document.querySelector('#progressBar'),
  profileSource: document.querySelector('#profileSource'),
  rankLabel: document.querySelector('#rankLabel'),
  shardCount: document.querySelector('#shardCount'),
  lessonLabel: document.querySelector('#lessonLabel'),
  resetGameBtn: document.querySelector('#resetGameBtn'),
  saveProgressBtn: document.querySelector('#saveProgressBtn')
};

const terrain = [
  ['grass','grass','grass','water','water','grass','grass','grass'],
  ['grass','path','path','path','path','path','grass','grass'],
  ['grass','path','grass','grass','grass','path','grass','grass'],
  ['grass','path','grass','stone','grass','path','grass','grass'],
  ['grass','path','grass','grass','grass','path','grass','grass'],
  ['grass','path','path','path','path','path','path','grass'],
  ['grass','grass','grass','grass','grass','grass','path','grass'],
  ['grass','grass','grass','grass','grass','grass','goal','grass']
];

const actors = {
  mayor: { x: 1, y: 1, icon: 'M', label: 'Mayor Myrtle' },
  ap: { x: 5, y: 2, icon: 'A', label: 'Access Point Ranger' },
  buyer: { x: 3, y: 5, icon: 'B', label: 'Buyer Clerk Nia' },
  validator: { x: 6, y: 6, icon: 'V', label: 'Validator Vale' }
};

const initialGame = () => ({
  player: { x: 1, y: 6 },
  started: false,
  questStep: 0,
  shards: [],
  completed: false,
  lesson: 'None yet'
});

let game = initialGame();

const questText = [
  'Speak with Mayor Myrtle to begin your first Peppol assignment.',
  'Visit the Access Point Ranger and answer the routing question.',
  'Visit Buyer Clerk Nia and answer the business-process question.',
  'Return to Validator Vale and diagnose the final issue correctly.'
];

function nearbyActor() {
  return Object.entries(actors).find(([, actor]) => Math.abs(actor.x - game.player.x) + Math.abs(actor.y - game.player.y) <= 1);
}

function progressPercent() {
  if (game.completed) return 100;
  return [0, 35, 65, 85][game.questStep] || 0;
}

function renderQuestLog() {
  els.questTitle.textContent = game.completed ? 'Quest complete: Meadow Investigator' : questText[game.questStep];
  els.progressBar.style.width = `${progressPercent()}%`;
  els.shardCount.textContent = `${game.shards.length} / 3`;
  els.rankLabel.textContent = game.completed ? 'Meadow Investigator' : game.shards.length >= 2 ? 'Junior Analyst' : 'Apprentice';
  els.lessonLabel.textContent = game.lesson;
  els.questSteps.innerHTML = questText.map((step, index) => {
    const className = index < game.questStep || game.completed ? 'done' : index === game.questStep ? 'active' : 'locked';
    return `<li class="${className}">${step}</li>`;
  }).join('');
}

function tileMarker(x, y) {
  if (game.player.x === x && game.player.y === y) return '<div class="marker player">Y</div>';
  for (const actor of Object.values(actors)) {
    if (actor.x === x && actor.y === y) return `<div class="marker npc">${actor.icon}</div>`;
  }
  if (x === 6 && y === 7 && game.completed) return '<div class="marker goal">✓</div>';
  return '';
}

function renderGrid() {
  els.gameGrid.innerHTML = terrain.map((row, y) => row.map((type, x) => `\n    <button class="tile ${type} ${x===6&&y===7 ? 'goal':''}" data-x="${x}" data-y="${y}">\n      ${tileMarker(x,y)}\n    </button>\n  `).join('')).join('');
  els.gameGrid.querySelectorAll('.tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const x = Number(tile.dataset.x);
      const y = Number(tile.dataset.y);
      const dx = x - game.player.x;
      const dy = y - game.player.y;
      if (Math.abs(dx) + Math.abs(dy) === 1) move(dx, dy);
      else if (Math.abs(dx) + Math.abs(dy) === 0) interact();
    });
  });
}

function setDialogue(text, choices = []) {
  els.dialoguePanel.innerHTML = `<p>${text}</p>`;
  els.choicePanel.innerHTML = '';
  for (const choice of choices) {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice.label;
    btn.addEventListener('click', choice.onSelect);
    els.choicePanel.appendChild(btn);
  }
}

function completeShard(key, lesson) {
  if (!game.shards.includes(key)) game.shards.push(key);
  game.lesson = lesson;
}

function interact() {
  const found = nearbyActor();
  if (!found) {
    setDialogue('There is nobody close enough to talk to. Walk next to an NPC and press E.');
    return;
  }
  const [key] = found;
  if (key === 'mayor') {
    game.started = true;
    if (game.questStep === 0) game.questStep = 1;
    setDialogue('Mayor Myrtle: Which corners represent the two business systems in the Peppol network?', [
      { label: 'Corner 1 and Corner 4', onSelect: () => { completeShard('mayor', 'The supplier and buyer business systems are Corner 1 and Corner 4.'); setDialogue('Correct. The businesses live at Corner 1 and Corner 4. Now go see the Access Point Ranger.'); render(); } },
      { label: 'Corner 2 and Corner 3', onSelect: () => setDialogue('Not quite. Corners 2 and 3 are the access points.') }
    ]);
    return;
  }
  if (key === 'ap') {
    if (game.questStep < 1) return setDialogue('Access Point Ranger: Start with Mayor Myrtle first.');
    setDialogue('Access Point Ranger: The participant could not be discovered. What kind of issue is that most likely?', [
      { label: 'Routing / discovery issue', onSelect: () => { completeShard('ap', 'Discovery failures usually point to routing or participant lookup issues.'); if (game.questStep === 1) game.questStep = 2; setDialogue('Exactly. If the participant cannot be discovered, inspect identifiers or discovery metadata. Now visit Buyer Clerk Nia.'); render(); } },
      { label: 'Printer jam in accounts payable', onSelect: () => setDialogue('No. This is a routing/discovery issue.') }
    ]);
    return;
  }
  if (key === 'buyer') {
    if (game.questStep < 2) return setDialogue('Buyer Clerk Nia: You still need the routing clue from the Access Point Ranger.');
    setDialogue('Buyer Clerk Nia: A PDF arrived by email, but no structured data entered the finance system. What should a BA say?', [
      { label: 'That is not Peppol eInvoicing yet', onSelect: () => { completeShard('buyer', 'A PDF by email is not the same as structured Peppol eInvoicing.'); if (game.questStep === 2) game.questStep = 3; setDialogue('Right. A PDF can still be manual. Now return to Validator Vale for the final diagnosis.'); render(); } },
      { label: 'That counts as full automation', onSelect: () => setDialogue('Nope. Receiving a PDF is still not structured exchange.') }
    ]);
    return;
  }
  if (key === 'validator') {
    if (game.questStep < 3) return setDialogue('Validator Vale: Gather the earlier clues before trying the final diagnosis.');
    setDialogue('Validator Vale: The participant is found, but the invoice fails because required values do not match the rules. What category is the problem?', [
      { label: 'Validation / business rule issue', onSelect: () => { completeShard('validator', 'A found receiver plus failed payload checks usually means validation or business rule failure.'); game.completed = true; game.questStep = 4; setDialogue('Quest complete. You separated discovery, business-process, and validation issues like a real junior technical BA. Hit Save progress to store the result.'); render(); } },
      { label: 'Wrong office chair', onSelect: () => setDialogue('Afraid not. This is a payload validation issue.') }
    ]);
  }
}

function render() {
  renderGrid();
  renderQuestLog();
}

function move(dx, dy) {
  const nx = game.player.x + dx;
  const ny = game.player.y + dy;
  if (nx < 0 || ny < 0 || nx >= 8 || ny >= 8) return;
  if (terrain[ny][nx] === 'water') return;
  game.player.x = nx;
  game.player.y = ny;
  renderGrid();
}

async function loadProfile() {
  try {
    const response = await fetch(`/api/profile/${PLAYER_ID}`);
    const profile = await response.json();
    els.profileSource.textContent = `Profile source: ${profile.source}`;
  } catch {
    els.profileSource.textContent = 'Running in local demo mode';
  }
}

async function saveProfile() {
  const payload = {
    displayName: 'Guest Analyst',
    region: 'A-NZ',
    progress: [
      {
        moduleSlug: 'peppol-101',
        completionPercent: progressPercent(),
        status: game.completed ? 'completed' : 'available',
        notes: game.lesson
      }
    ]
  };
  try {
    const response = await fetch(`/api/profile/${PLAYER_ID}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    els.profileSource.textContent = `Profile source: ${result.source}`;
    setDialogue('Progress saved.');
  } catch {
    setDialogue('Could not save to the API, but the quest still works locally.');
  }
}

function resetGame() {
  game = initialGame();
  setDialogue('Quest reset. Walk to Mayor Myrtle and press E to begin again.');
  render();
}

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (key === 'arrowup' || key === 'w') move(0, -1);
  if (key === 'arrowdown' || key === 's') move(0, 1);
  if (key === 'arrowleft' || key === 'a') move(-1, 0);
  if (key === 'arrowright' || key === 'd') move(1, 0);
  if (key === 'e' || key === ' ') { event.preventDefault(); interact(); }
});

els.resetGameBtn.addEventListener('click', resetGame);
els.saveProgressBtn.addEventListener('click', saveProfile);

loadProfile().finally(() => {
  render();
  setDialogue('Welcome to PLAYABLE-MEADOW-V2. Start by walking to Mayor Myrtle on the path and press E.');
});
