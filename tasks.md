# Next Tasks (derived from spec.md)

## Completed in this pass
- Established a concrete product spec (`spec.md`).
- Scaffolded MVP UI and local-storage data layer under `app/`.
- Implemented create/read/update/delete flow with keyword search.

## Immediate next tasks
1. Improve edit experience to full-form modal (title/url/tags/notes) instead of title-only prompt.
2. Add validation and error messaging (invalid URL, empty title, duplicate URL warning).
3. Add dedicated tag filters (chip list generated from dataset) and combine with search.
4. Add sort options (newest, oldest, title A–Z).
5. Add import/export JSON for backup.
6. Add basic smoke tests (Playwright or Cypress) covering CRUD + persistence.
7. Polish accessibility (focus states, aria-live updates for create/delete).
