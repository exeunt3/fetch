# Next Tasks (derived from spec.md)

## Done in this pass
- Reframed `spec.md` around the operating premise: divergence is the scarce resource. Personae are dedicated cognitive explorers, not flavored experts.
- Renamed Crew → Milieu (plural *milieux*), Run → Commission, Build a crew → Compose a milieu. Protocols are now Open Studio / Seminar / Critique (Residency = later).
- Replaced the cast entirely. Ten new explorers, each with a stated multi-year line of inquiry, artifacts, modes of divergence, open questions, and refusals. Pricing now $50–$300 / session ($55–$260 actual range, weighted around $130).
- Reseeded three milieux around what they cast onto a project (Threshold / Memory of Systems / Standardization Critique).
- Reworked all views in `app/main.js`: home (new hero, operating-premise section, D&G section, featured personae and milieux), browse personae (modes-of-divergence chips, sort by depth/price/newest), persona detail (line-of-inquiry as the page's center of gravity, artifacts, refusals, open questions, stance), milieux index/detail, compose-a-milieu, commission flow (project + divergence multi-select).
- Updated `index.html` (nav labels, title, footer copy) and `styles.css` (line-of-inquiry block, persona tagline, artifact entries, refusals, divergence multi-select).

## Phase 0 polish (still static)
1. Real persona-page layout pass at narrow widths — right rail collapses awkwardly.
2. Add a "Recommended for your project" panel on the commission flow, driven by which divergence qualities are checked.
3. Save composed milieux and commissions to `localStorage`; surface a "My milieux" / "My commissions" section.
4. Add a `/protocol` page that names the future protocol objects from the spec.
5. Visual identity pass: consider an alternate dark register; experiment with subtle paper texture; tighten the typographic scale on detail pages.
6. Accessibility: focus rings on persona cards (currently `<button>`), aria-live on commission results, skip link.
7. Hand-write the longer descriptive copy on each persona's detail page (currently the tagline does most of the work).

## Phase 1 — real app shell (Next.js)
1. Scaffold Next.js + TypeScript + Tailwind + shadcn/ui.
2. Port `personas` and `milieux` to `/data/*.ts` with the new field shape from `spec.md`.
3. Real routes: `/`, `/personae`, `/personae/[id]`, `/milieux`, `/milieux/[id]`, `/compose-milieu`, `/commission`, `/results/[id]`, `/about`, `/protocol`.

## Phase 2 — real LLM calls
1. `/api/commission/single`, `/api/commission/compare`, `/api/commission/milieu` with provider abstraction (OpenAI or Anthropic).
2. Persona system prompt template from `spec.md` — uses lineOfInquiry, yearsInPractice, refusals.
3. Open Studio / Seminar / Critique moderator prompts (no synthesis instruction; preserve divergence).
4. Loading and error states.

## Phase 3 — persistence
1. Supabase tables per `spec.md` data model (`personae`, `milieux`, `commissions`).
2. Optional auth for saved milieux and saved commissions.
