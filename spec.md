# Product Spec: Fetch

## Vision
Fetch is a lightweight web app for collecting, organizing, and quickly retrieving links and notes.

## Target Users
- Individual users who save research links.
- Small teams curating resource collections.

## Core User Stories
1. As a user, I can add an item with title, URL, tags, and optional notes.
2. As a user, I can view all items in a clean list.
3. As a user, I can filter items by tag and search by keyword.
4. As a user, I can edit or delete an item.
5. As a user, my data persists between sessions.

## MVP Scope
- Client-side single-page app.
- Local storage persistence.
- Basic responsive layout.
- Accessibility-friendly form labels and keyboard support.

## Non-Goals (MVP)
- Authentication.
- Multi-user sync.
- Backend API.

## Technical Direction
- Vanilla HTML/CSS/JS (no build tooling required).
- Modular JS by feature (`storage`, `render`, `filters`).

## Definition of Done (MVP)
- Users can create/read/update/delete items.
- Search and tag filtering work together.
- Data is saved in local storage.
- Empty and error states are visible and helpful.
- Basic mobile responsiveness and accessible semantics.
