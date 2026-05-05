const STORAGE_KEY = 'fetch_items_v1';

const form = document.getElementById('item-form');
const itemsEl = document.getElementById('items');
const emptyEl = document.getElementById('empty');
const searchEl = document.getElementById('search');
const editDialog = document.getElementById('edit-dialog');
const editForm = document.getElementById('edit-form');
const editCancelButton = document.getElementById('edit-cancel');

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

render();
