const STORAGE_KEY = 'fetch_items_v1';

const form = document.getElementById('item-form');
const itemsEl = document.getElementById('items');
const emptyEl = document.getElementById('empty');
const searchEl = document.getElementById('search');

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
  } else if (action === 'edit') {
    const nextTitle = prompt('Edit title', items[index].title);
    if (!nextTitle) return;
    items[index].title = nextTitle.trim();
  }
  saveItems();
  render();
});

render();
