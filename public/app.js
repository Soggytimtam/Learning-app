const state = {
  modules: [],
  lore: null,
  profile: null,
  selectedModule: null
};

const els = {
  worldMap: document.querySelector('#worldMap'),
  loreBlock: document.querySelector('#loreBlock'),
  skillList: document.querySelector('#skillList'),
  moduleDialog: document.querySelector('#moduleDialog'),
  moduleDetails: document.querySelector('#moduleDetails'),
  focusText: document.querySelector('#focusText'),
  progressBar: document.querySelector('#progressBar'),
  profileSource: document.querySelector('#profileSource'),
  loadProfileBtn: document.querySelector('#loadProfileBtn'),
  saveProgressBtn: document.querySelector('#saveProgressBtn')
};

const PLAYER_ID = 'demo-player';

function setFocus(module, completionPercent = 0) {
  if (!module) return;
  els.focusText.textContent = module.title;
  els.progressBar.style.width = `${completionPercent}%`;
  els.skillList.innerHTML = module.skills.map((skill) => `<li>${skill}</li>`).join('');
}

function renderLore(lore) {
  const entries = [...lore.history.slice(0, 2), ...lore.signals.slice(0, 1)];
  els.loreBlock.innerHTML = entries
    .map((entry) => `<div class="lore-entry">${entry}</div>`)
    .join('');
}

function progressFor(slug) {
  return state.profile?.progress?.find((entry) => entry.moduleSlug === slug) || null;
}

function showModule(module) {
  const progress = progressFor(module.slug);
  els.moduleDetails.innerHTML = `
    <p class="eyebrow">${module.zone} · Level ${module.level}</p>
    <h2>${module.title}</h2>
    <p>${module.summary}</p>
    <h3>Skills trained</h3>
    <ul class="skill-list">${module.skills.map((skill) => `<li>${skill}</li>`).join('')}</ul>
    <h3>Quest line</h3>
    <ul class="skill-list">${module.quests.map((quest) => `<li>${quest}</li>`).join('')}</ul>
    <h3>Current status</h3>
    <p>${progress ? `${progress.status} · ${progress.completionPercent}% complete` : module.status}</p>
  `;
  els.moduleDialog.showModal();
  setFocus(module, progress?.completionPercent || 0);
}

function renderModules() {
  els.worldMap.innerHTML = state.modules
    .map((module) => {
      const progress = progressFor(module.slug);
      const status = progress?.status || module.status;
      const completion = progress?.completionPercent || 0;
      return `
        <button class="module-card ${status}" data-module="${module.slug}">
          <div class="zone-tile" aria-hidden="true"></div>
          <div class="module-chip">${module.type}</div>
          <h3>${module.title}</h3>
          <p>${module.summary}</p>
          <strong>${completion}% complete</strong>
        </button>
      `;
    })
    .join('');

  els.worldMap.querySelectorAll('[data-module]').forEach((button) => {
    button.addEventListener('click', () => {
      const module = state.modules.find((entry) => entry.slug === button.dataset.module);
      state.selectedModule = module;
      showModule(module);
    });
  });
}

async function fetchModules() {
  const response = await fetch('/api/modules');
  const data = await response.json();
  state.modules = data.modules;
  state.lore = data.lore;
  renderLore(state.lore);
}

async function loadProfile() {
  const saved = localStorage.getItem('peppol-quest-profile');
  if (saved) {
    state.profile = JSON.parse(saved);
  }

  const response = await fetch(`/api/profile/${PLAYER_ID}`);
  const data = await response.json();
  state.profile = data;
  els.profileSource.textContent = `Profile source: ${data.source}`;
  localStorage.setItem('peppol-quest-profile', JSON.stringify(data));
}

async function saveProfile() {
  const baseProgress = state.profile?.progress || [];
  const firstModule = state.modules[0];
  const updatedProgress = baseProgress.length
    ? baseProgress.map((entry, index) =>
        index === 0
          ? {
              ...entry,
              status: 'available',
              completionPercent: Math.min(100, Number(entry.completionPercent || 0) + 10)
            }
          : entry
      )
    : [{ moduleSlug: firstModule.slug, completionPercent: 10, status: 'available', notes: 'Started journey' }];

  const payload = {
    displayName: 'Guest Analyst',
    region: 'A-NZ',
    progress: updatedProgress
  };

  const response = await fetch(`/api/profile/${PLAYER_ID}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  state.profile = { ...(state.profile || {}), ...payload, source: result.source };
  els.profileSource.textContent = `Profile source: ${result.source}`;
  localStorage.setItem('peppol-quest-profile', JSON.stringify(state.profile));
  renderModules();
  setFocus(firstModule, updatedProgress[0]?.completionPercent || 0);
}

async function init() {
  await fetchModules();
  await loadProfile();
  renderModules();
  setFocus(state.modules[0], progressFor(state.modules[0].slug)?.completionPercent || 0);

  els.loadProfileBtn.addEventListener('click', loadProfile);
  els.saveProgressBtn.addEventListener('click', saveProfile);
}

init().catch((error) => {
  console.error(error);
  els.profileSource.textContent = 'Failed to load starter content';
});
