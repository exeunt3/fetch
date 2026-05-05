const STORAGE_KEY = 'fetch_items_v1';

const form = document.getElementById('item-form');
const itemsEl = document.getElementById('items');
const emptyEl = document.getElementById('empty');
const searchEl = document.getElementById('search');
const editDialog = document.getElementById('edit-dialog');
const editForm = document.getElementById('edit-form');
const editCancelButton = document.getElementById('edit-cancel');
const marketplaceEl = document.getElementById('marketplace-grid');

const personaSeeds = [
  { id: 'mae-larkspur', displayName: 'Mae Larkspur', fylgjaName: 'Fylgja of Maintenance Ontology', tagline: 'Nothing is abstract once you have to maintain it at 2:13 a.m.', domainTags: ['infrastructure philosophy', 'ethics of maintenance'], pricing: { singleRunUsd: 7 } },
  { id: 'iren-voss', displayName: 'Iren Voss', fylgjaName: 'Fylgja of Procedural Intimacy', tagline: 'Every institution has a hidden choreography of permission.', domainTags: ['political ontology', 'governance design'], pricing: { singleRunUsd: 6 } },
  { id: 'sora-kel', displayName: 'Sora Kel', fylgjaName: 'Fylgja of Ritual Systems', tagline: 'Ritual is a compression format for shared attention.', domainTags: ['ritual theory', 'collective cognition'], pricing: { singleRunUsd: 8 } },
  { id: 'davian-rook', displayName: 'Davian Rook', fylgjaName: 'Fylgja of Friction Cartography', tagline: 'Friction is not failure; it is where ontology leaks.', domainTags: ['process philosophy', 'systems diagnostics'], pricing: { singleRunUsd: 7 } },
  { id: 'lina-moravec', displayName: 'Lina Moravec', fylgjaName: 'Fylgja of Situated Computation', tagline: 'Code is always local, even when distributed.', domainTags: ['philosophy of technology', 'feminist STS'], pricing: { singleRunUsd: 8 } },
  { id: 'niko-ardent', displayName: 'Niko Ardent', fylgjaName: 'Fylgja of Ordinary Phenomenology', tagline: 'If users keep improvising, your model of experience is wrong.', domainTags: ['phenomenology', 'everyday systems'], pricing: { singleRunUsd: 6 } },
  { id: 'tamsin-quill', displayName: 'Tamsin Quill', fylgjaName: 'Fylgja of Posthuman Reciprocity', tagline: 'Ethics begins where dependency is acknowledged.', domainTags: ['posthuman ethics', 'ecological systems ethics'], pricing: { singleRunUsd: 9 } },
  { id: 'oren-pale', displayName: 'Oren Pale', fylgjaName: 'Fylgja of Counter-Metrics', tagline: 'What you cannot afford to measure is often what matters most.', domainTags: ['measurement epistemology', 'organizational governance'], pricing: { singleRunUsd: 7 } },
  { id: 'yara-venn', displayName: 'Yara Venn', fylgjaName: 'Fylgja of Boundary Ethics', tagline: 'Most harm appears first as an ignored boundary condition.', domainTags: ['feminist systems theory', 'service justice'], pricing: { singleRunUsd: 8 } },
  { id: 'elio-drax', displayName: 'Elio Drax', fylgjaName: 'Fylgja of Archive Drift', tagline: 'Every archive thinks over time, whether you intend it or not.', domainTags: ['archive theory', 'knowledge infrastructure'], pricing: { singleRunUsd: 7 } },
];

let items = loadItems();
let filter = '';

function loadItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function normalizeTags(raw) {
  return raw
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function matches(item, q) {
  if (!q) return true;
  const query = q.toLowerCase();
  return [item.title, item.url, item.notes, item.tags.join(' ')].join(' ').toLowerCase().includes(query);
}

function renderMarketplace() {
  if (!marketplaceEl) return;
  marketplaceEl.innerHTML = '';
  personaSeeds.forEach((persona) => {
    const card = document.createElement('article');
    card.className = 'persona-card';
    card.innerHTML = `
      <h3>${persona.displayName}</h3>
      <div class="persona-name">${persona.fylgjaName}</div>
      <p>${persona.tagline}</p>
      <div class="item-meta">${persona.domainTags.join(' · ')}</div>
      <div class="persona-footer">From $${persona.pricing.singleRunUsd}/run</div>
    `;
    marketplaceEl.appendChild(card);
  });
}

function render() {
  const visible = items.filter((item) => matches(item, filter));
  itemsEl.innerHTML = '';
  visible.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></strong>
      <div class="item-meta">${item.tags.join(', ') || 'No tags'}</div>
      <p>${item.notes || ''}</p>
      <div class="actions">
        <button data-action="edit" data-id="${item.id}">Edit</button>
        <button data-action="delete" data-id="${item.id}">Delete</button>
      </div>
    `;
    itemsEl.appendChild(li);
  });
  emptyEl.hidden = visible.length > 0;
}

function openEditDialog(item) {
  editForm.elements.id.value = item.id;
  editForm.elements.title.value = item.title;
  editForm.elements.url.value = item.url;
  editForm.elements.tags.value = item.tags.join(', ');
  editForm.elements.notes.value = item.notes || '';
  editDialog.showModal();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  items.unshift({
    id: crypto.randomUUID(),
    title: String(data.get('title')).trim(),
    url: String(data.get('url')).trim(),
    tags: normalizeTags(String(data.get('tags') || '')),
    notes: String(data.get('notes') || '').trim(),
  });
  saveItems();
  form.reset();
  render();
});

editForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(editForm);
  const id = String(data.get('id'));
  const index = items.findIndex((item) => item.id === id);
  if (index < 0) {
    editDialog.close();
    return;
  }

  items[index] = {
    ...items[index],
    title: String(data.get('title')).trim(),
    url: String(data.get('url')).trim(),
    tags: normalizeTags(String(data.get('tags') || '')),
    notes: String(data.get('notes') || '').trim(),
  };

  saveItems();
  editDialog.close();
  render();
});

editCancelButton.addEventListener('click', () => {
  editDialog.close();
});

searchEl.addEventListener('input', (e) => {
  filter = e.target.value;
  render();
});

itemsEl.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;
  const id = button.dataset.id;
  const action = button.dataset.action;
  const index = items.findIndex((i) => i.id === id);
  if (index < 0) return;

  if (action === 'delete') {
    items.splice(index, 1);
    saveItems();
    render();
  } else if (action === 'edit') {
    openEditDialog(items[index]);
  }
});

renderMarketplace();
render();
