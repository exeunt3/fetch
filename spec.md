# Persona — MVP Product Spec

## Working title

**Persona**

The name takes its sense from Deleuze & Guattari's *What Is Philosophy?* (1991), and specifically from their notion of the **conceptual persona**. For D&G, the conceptual persona is the agent of enunciation through which thought becomes possible at all. Socrates is the conceptual persona of Plato; the Idiot is the persona of Cusa and then of Descartes; Zarathustra and Dionysus are Nietzsche's; the Friend is the persona that grounds philosophy as such. The persona produces the philosopher's capacity to think; the philosopher is its envelope. *"The philosopher is only the envelope of his principal conceptual persona."*

### Operating premise: divergence is the scarce resource

Persona anticipates a near-future in which effective-but-homogeneous cognitive automation has saturated most reasoning and logistical work. In that universe, expertise as a service stops being scarce. What stays scarce is **divergence**: nuance, definition, novelty, creativity, spontaneity, authenticity, intensity, strangeness, care.

The site is built around one question: *where can I commission divergent human thought to add nuance / authenticity / intensity / temporal stretch / strangeness to a project that is otherwise already running?*

The personae here are **dedicated cognitive explorers** — people whose full-time vocation is developing divergent capacities into coherent cognitive patterns and systems. Each persona has a stated multi-year *line of inquiry*, a body of artifacts produced from that line, and a stance about what it will and will not do. The persona is, in D&G's exact sense, an agent of enunciation: the position from which a particular kind of thought becomes possible. Here that position is also a vocation, and the vocation costs.

### Vocabulary

* **Persona** (or **Conceptual Persona**) — the unit
* **Milieu** (plural *milieux*) — a curated environment of personae composed around a project (replaces "crew"; chosen for its D&G resonance, *A Thousand Plateaus*)
* **Archive** — the underlying knowledge base
* **Commission** — the act of engaging a persona or a milieu
* **Line of inquiry** — the multi-year question an explorer has been at

Example phrasings:

> "Commission three personae."

> "Commission a milieu."

> "This persona is derived from Maya's consented archive — an agent of enunciation, speaking from her line of inquiry."

The naming choice is also a refusal. The directory we are building gathers **agents of enunciation** that sustain divergence as full-time work, and a way to commission that divergence into projects automation can already otherwise run.

---

## One-sentence product promise

**A worker-conscious commission market for cognitive divergence: conceptual personae built from consented knowledge archives, available to surround projects with the nuance, intensity, and difference that homogeneous automation cannot produce.**

---

## Product category

Persona sits between:

* commission market for cognitive labor
* directory of long-form research programs
* artist-statement / fellowship-page directory
* AI persona platform
* agent workbench
* weird internet directory
* future protocol for consented cognitive labor

The MVP should feel app-like, fast, and explorable, while the deeper philosophical and protocol architecture stays visible in the copy and information design.

---

## Tone and cultural direction

### Desired feel

* renegade internet curiosity
* weirdness with dignity
* artist-statement / Mellon-fellowship / long-form research-site register
* Are.na-like collections, Tumblr-like personality, zine distro energy
* a dash of 4chan's raw curiosity, without nihilism or cruelty
* underground lecture series energy
* worker-conscious commission market
* living-archive register
* a clear continental-philosophy register, used lightly: D&G is cited and put to work

### Avoided feel

* expert marketplace / consultant directory / SME-query API
* LinkedIn coach platform
* sterile productivity SaaS
* famous-intellectual simulator
* celebrity chatbot
* generic "AI assistant" dashboard
* crypto-finance dashboard
* polished TED-circuit branding
* corporate "knowledge management" language
* graduate-seminar cosplay; the philosophy operates structurally

### Visual style

The MVP should feel more like a residency directory or research-program index than a modern consumer SaaS product.

References: Are.na boards, Tumblr archive pages, old web directories, zine tables, experimental academic sites, Bandcamp artist pages, dense but navigable internet forums, fellowship-program landing pages.

UI qualities: textured backgrounds or subtle paper/noise; cards that feel hand-curated; visible metadata; tags and strange descriptors; small badges for consent, pricing, archive type, milieu compatibility; optional dark mode; slightly irregular layout while preserving usability.

---

## Core principles

### 1. Consent first

Each Persona is created by the person themself, or with explicit authorization. For the MVP, all personae are seeded examples representing fictional opt-in cognitive explorers.

### 2. Divergence is the scarce resource

The site assumes a near-future in which generic cognitive automation is cheap and saturating. The product exists to commission what remains scarce: sustained, coherent, vocational divergence.

### 3. Cognitive labor has value — and is priced like vocation work

Personae are commissioned. Pricing reflects years of practice. Persona owners set access terms.

### 4. Data belongs to the creator

The long-term direction is self-owned, encrypted, portable knowledge bases. The MVP simulates this through product language, ownership labels, and export-friendly architecture.

### 5. Personae are dedicated cognitive explorers

A persona is a vocation: a multi-year line of inquiry pursued seriously enough to have produced a body of artifacts and a stance.

### 6. Personae as agents of enunciation

Following D&G, the persona is the position from which a particular thought becomes possible. It speaks as a configured companion derived from the archive. The form is *"I am the persona derived from Maya's archive."*

### 7. Milieux compose, they do not deliver

A milieu is a curated environment of personae composed around a project. Its work is to surround the project with sustained divergence such that the project changes by being held inside it.

---

## MVP scope

### MVP must include

1. Landing page
2. Persona discovery feed
3. Persona profile pages
4. Milieu discovery feed
5. Milieu composer
6. Project + divergence-needed input flow
7. Single-persona commission mode
8. Multi-persona comparison mode
9. Milieu protocol mode (Open Studio, Seminar, Critique)
10. Ten seeded example personae
11. Three seeded example milieux
12. Pricing metadata on personae ($50–$300 / session)
13. Consent / ownership language
14. Mock archive/provenance sections including artifacts
15. Basic account or local session state
16. Admin/dev seed file for personae and milieux

### MVP simulates without fully implementing

Persona owner dashboards, payment routing, royalty settings, wallet identity, encrypted self-hosted knowledge base, DAO-style collective formation, data export, permission logs.

### MVP out of scope

Real Stripe / web3 / encrypted-storage integrations; DAO governance contracts; automated archive ingestion; legal consent workflows; user-generated public personae; training or fine-tuning; voice cloning; image/video avatars; impersonation of non-consenting people.

---

## Primary user types

### 1. The commissioner

A user with a project that is already running — automated, competent, generic — who wants to inject divergence into it.

* describes the project
* names what kind of divergence is needed (nuance, intensity, novelty, authenticity, etc.)
* commissions one persona, several, or a milieu
* receives back what those personae cast onto the project

### 2. The browser

Wants to discover unusual cognitive explorers and read their lines of inquiry like one reads artist statements.

### 3. Persona owner (cognitive explorer)

A person who wants to publish their own persona derived from years of sustained divergent work. For MVP, represented through seeded data.

### 4. Milieu composer

Wants to compose multiple personae into a curated environment around a project.

---

## Core objects

## 1. Persona

A configured cognitive companion derived from a person's consented archive and self-description. Speaks as an agent of enunciation. Holds a stated, sustained line of inquiry.

### Fields

```ts
type Persona = {
  id: string;
  ownerName: string;
  personaName: string;            // "Hennie's Persona"
  lineOfInquiry: string;          // one sentence, the multi-year question
  yearsInPractice: number;
  tagline: string;                // states a position; does not promise utility
  longDescription: string;
  ownerType: "individual" | "collective";
  consentStatus: "owner-created" | "authorized" | "demo";
  archiveSummary: string;
  archiveTypes: string[];
  artifacts: { type: string; title: string; year?: number | string }[];
  modesOfDivergence: string[];    // e.g., ontological, ritual, somatic, temporal, infrastructural, semiotic, perceptual, affective, ecological, methodological
  cuts: string[];                 // "Where this persona's divergence cuts most" — replaces goodFor
  blindspot: string;              // "Where the line falls quiet"
  openQuestions: string[];        // 2–3
  refusals: string[];             // 2, in the persona-owner's voice, in scare quotes
  pricePerSessionUsd: number;     // $50–$300
  usageTerms: string[];
  systemPrompt: string;
  createdAt: string;
  updatedAt: string;
};
```

### Required persona-page sections

1. Owner name, persona name, years in practice
2. Line of inquiry (large, ruled, the page's center of gravity)
3. Tagline
4. Where this divergence cuts
5. Where the line falls quiet (blindspot)
6. Artifacts from the line
7. Open questions
8. Refusals
9. Archive / provenance
10. Pricing (single $-figure, *"/ session"*, with the *"prices reflect commissioned cognitive labor"* line)
11. Button: **Commission this persona**
12. Button: **Add to a milieu**

### Persona response stance

> *"I am the persona derived from [Owner Name]'s consented archive — an agent of enunciation built around their multi-year line of inquiry into [line]. I bring divergence to your project; I speak from the archive as a configured companion."*

The persona never claims to be the owner; it speaks from the archive.

---

## 2. Milieu

A milieu is a curated environment of personae composed around a project. In *A Thousand Plateaus*, a milieu is a vibratory medium — a coded surround a body individuates within. Used here it names the second-order experience: composing a sustained environment of divergence around the user's project.

### Fields

```ts
type Milieu = {
  id: string;
  name: string;
  tagline: string;
  description: string;            // what this milieu casts onto a project
  personaIds: string[];
  protocolId: string;             // open-studio | seminar | critique | residency
  tags: string[];
  surroundsWell: string[];        // replaces "best for" — what kind of project this milieu is good at surrounding
  commissionEstimateUsd: number;  // sum of session prices, plus optional coherence dividend
  visibility: "public" | "private" | "demo";
  createdBy: string;
};
```

### Milieu page sections

1. Milieu name and protocol badge
2. Description (what it casts onto a project)
3. Roster of personae
4. Surrounds well
5. Commission estimate
6. Example commissions
7. Button: **Commission this milieu**

---

## 3. Protocols

Protocols define how a milieu organizes itself around a project.

#### A. Open Studio

Each persona works in their own register, in parallel. The commissioner moves through the resulting work as one moves through an open studio day.

#### B. Seminar

Each persona presents an opening reading of the project. They then respond to one another. The transcript is the artifact.

#### C. Critique

Sustained adversarial reading in the art-school sense. One reading of the project is treated as the candidate; the other personae perform a critique against it. No "revised plan" — the artifact is the critique itself.

#### D. Residency (later)

Longer iterative engagement; the milieu inhabits the project over multiple sessions. Out of scope for MVP.

For MVP, implement Open Studio, Seminar, and Critique. Residency is "coming soon."

---

## User flows

### Flow 1: Browse personae

1. Land on home.
2. See featured personae and milieux.
3. Filter by *modes of divergence*, line-of-inquiry length, price, and archive types.
4. Open a persona page.
5. Read line of inquiry, artifacts, refusals, open questions.
6. Click **Commission this persona** or **Add to a milieu**.

### Flow 2: Commission one persona

1. Choose a persona.
2. Describe the project (assumed already running).
3. Specify which divergence is needed (multi-select: nuance, definition, novelty, spontaneity, authenticity, intensity, creativity, temporal stretch, strangeness, care).
4. Optionally add context.
5. See commission price.
6. Commission.
7. Receive what the persona casts onto the project, framed as: *"What [Persona] brings to this project,"* with sub-sections for what the line surfaces, where it falls quiet on this project, and what the persona would refuse to write.

### Flow 3: Compare multiple personae

Same as Flow 2, with 2–5 personae running in parallel; comparison layer emphasizes *productive divergence*, not "shared recommendations."

### Flow 4: Commission a milieu

1. Pick a seeded milieu or compose one.
2. Choose a protocol.
3. Describe the project.
4. Specify divergence needed.
5. See commission estimate.
6. Commission.
7. Receive transcript / artifacts / cast.

### Flow 5: Compose a milieu

1. Click **Compose a milieu**.
2. Browse personae.
3. Add 2–5.
4. Pick a protocol.
5. Name the milieu.
6. Save locally.
7. Commission a project through it.

---

## Ten seeded cognitive explorers

A fully reseeded cast. Each persona is fictional, labeled as demo, and written natively in the new register. Together they span ontological, methodological, affective, temporal, infrastructural, ecological, ritual, perceptual, semiotic, and somatic modes of divergence.

### 1. Hennie's Persona — Hennie Vargas

* **Line of inquiry (16 years):** the choreography of transitions — how bodies and systems pass between states (asleep / awake, draft / published, alive / dying)
* **Tagline:** *"Most of what matters in a system happens during the moment it is busy turning into something else."*
* **Modes of divergence:** somatic, temporal
* **Artifacts:** *Threshold Notebook* (2009–ongoing); the *Transitions Index* (a 1,200-entry catalogue of named state-changes in seven languages); lecture cycle *Liminal Time and Late Capitalism* (2018)
* **Where this divergence cuts:** product onboardings; institutional handovers; grief design; anything called "rollout"
* **Where the line falls quiet:** sustained steady-state operations
* **Open questions:** what does it cost a body to be optimized for transitions it never agreed to? — what is the smallest legible threshold?
* **Refusals:** *"I will not write copy that pretends a transition is not happening."* / *"I will not work on transitions whose timing is being hidden from the people undergoing them."*
* **Price:** $140 / session

### 2. Wren's Persona — Wren Talu

* **Line of inquiry (18 years):** the politics of accumulation in nonhuman archives — how forests, sediment, peat, oral repertoires, and abandoned filesystems remember
* **Tagline:** *"Memory is something things do to each other when nobody is watching."*
* **Modes of divergence:** ecological, temporal
* **Artifacts:** four-volume essay cycle *Layered Memory* (2014–2023); fieldwork in three peat bogs (Ireland, Scotland, Estonia); the *Slow Index*, a public list of 47 archives that read themselves
* **Where this divergence cuts:** any project whose value depends on what it carries forward; archives, datasets, ecosystems, brands inheriting older brands
* **Where the line falls quiet:** projects with no past
* **Open questions:** what does a database owe a peat bog? — when is forgetting the more careful act?
* **Refusals:** *"I will not write about archives in language that pretends they are inert."* / *"I will not assist with extraction projects framed as preservation."*
* **Price:** $160 / session

### 3. Saoirse's Persona — Saoirse Beck

* **Line of inquiry (11 years):** friction as authorship — the moments of difficulty that produce authentic texture in any work
* **Tagline:** *"Smoothness is what a thing looks like when nobody can find the part that hurt to make."*
* **Modes of divergence:** methodological, somatic
* **Artifacts:** the *Friction Atlas* (annotated map of difficulty types across crafts); podcast *The Hesitation Tapes* (74 episodes); residency reports from Skowhegan, Headlands, and a small auto-body shop in Liège
* **Where this divergence cuts:** projects whose drafts have gotten too smooth; teams whose process has erased its own scars
* **Where the line falls quiet:** projects that genuinely need to be fast
* **Open questions:** can friction be designed-for without becoming aesthetic? — what is friction's relationship to consent?
* **Refusals:** *"I will not help simulate friction in a project that has not earned it."* / *"I will not romanticize burnout as authorship."*
* **Price:** $95 / session

### 4. Isaak's Persona — Isaak Vrubel

* **Line of inquiry (22 years):** the typography of decisions — how the visual presentation of a choice changes what gets chosen
* **Tagline:** *"Every ballot is an argument; every form is a hypothesis about what kind of person should be filling it out."*
* **Modes of divergence:** semiotic, perceptual
* **Artifacts:** *Typeface as Argument* (book, 2016); the *Form / Decision* lecture cycle (2019–ongoing); two municipal-ballot redesigns (Vilnius, Porto); a 19-year personal archive of forms filled out and annotated
* **Where this divergence cuts:** decision interfaces; consent flows; ballots, intake forms, terms of service; anywhere a choice is being shaped before it is made
* **Where the line falls quiet:** purely back-office systems with no human at the surface
* **Open questions:** what does a serif promise? — when does legibility become coercion?
* **Refusals:** *"I will not redesign a form that was deliberately made hard to fill out."* / *"I will not write copy that hides the structure of a decision."*
* **Price:** $200 / session

### 5. Mira's Persona — Mira Olamide

* **Line of inquiry (14 years):** ritual surfaces in late-stage industry — how factory floors, server farms, hospitals, and warehouses develop unofficial rituals
* **Tagline:** *"Wherever a system has refused to name what it is doing, the workers will name it for it."*
* **Modes of divergence:** ritual, infrastructural
* **Artifacts:** *Operational Liturgies* (zine series, 2013–ongoing); private memos for two logistics firms; a 600-image photographic archive of break-room shrines, machine-side talismans, and shift-handover gestures
* **Where this divergence cuts:** operations design; AI deployments inside existing labor; anything that calls itself "a transformation"
* **Where the line falls quiet:** greenfield projects with no incumbent labor
* **Open questions:** what does a ritual want from the system it accretes around? — can you ship a ritual?
* **Refusals:** *"I will not document a ritual whose practitioners have not been asked."* / *"I will not write change-management copy that flattens what workers built to survive the system."*
* **Price:** $130 / session

### 6. Jorrit's Persona — Jorrit Kallman

* **Line of inquiry (13 years):** the affective load of standardization — what gets felt when systems are made interoperable
* **Tagline:** *"Every API is a small grief, distributed."*
* **Modes of divergence:** affective, infrastructural
* **Artifacts:** *The Cost of Compatibility* (essays, 2017–ongoing); the *Loss Index*, a collaborative database of things that became unsayable after a standard arrived; an early-career stint as a customs officer
* **Where this divergence cuts:** integration projects; platform consolidations; any project where "alignment" is being used as a synonym for "loss"
* **Where the line falls quiet:** truly novel systems with no incumbent norms
* **Open questions:** what is the smallest interoperability that does not grieve? — can a standard apologize?
* **Refusals:** *"I will not contribute to migration plans that have no provision for what is lost."* / *"I will not write integration copy that calls the cost a 'rounding error.'"*
* **Price:** $110 / session

### 7. Niamh's Persona — Niamh Pellow

* **Line of inquiry (9 years):** spontaneity as discipline — training the conditions under which the unrehearsed becomes reliable
* **Tagline:** *"Improvisation is what you call practice when it has gotten honest."*
* **Modes of divergence:** somatic, perceptual
* **Artifacts:** *Drills for Surprise* (workbook, 2020); six performance scores; *Improvisation Notebook* (2017–ongoing), an open journal of failures
* **Where this divergence cuts:** product launches that need to feel alive; any project that has rehearsed its own death by overpreparation
* **Where the line falls quiet:** projects whose value depends on identical reproduction
* **Open questions:** what does spontaneity owe to those it surprises? — is repeatable spontaneity still spontaneity?
* **Refusals:** *"I will not script spontaneity for marketing video."* / *"I will not coach a team to improvise inside a system that punishes them for it."*
* **Price:** $80 / session

### 8. Onye's Persona — Onye Brann

* **Line of inquiry (19 years):** the metaphysics of inventory — what it means to count, name, and track things, and what counting closes off
* **Tagline:** *"To enter an inventory is to be told a story about what kind of thing you are."*
* **Modes of divergence:** ontological, infrastructural
* **Artifacts:** *The Closed List* (book, 2018); a six-year warehouse fieldwork archive; two essays on database ontology (*"Schema as Promise,"* *"What the Foreign Key Owes"*)
* **Where this divergence cuts:** taxonomy work; database schemas; product catalogs; any project that calls itself "a single source of truth"
* **Where the line falls quiet:** ad-hoc, ephemeral systems
* **Open questions:** what does a row owe its column? — is there an ethics of the unique constraint?
* **Refusals:** *"I will not design schemas that cannot be amended."* / *"I will not write copy that presents an inventory as a neutral mirror."*
* **Price:** $180 / session

### 9. Petra's Persona — Petra Loess

* **Line of inquiry (24 years):** care as forecasting — how attention to subtle distress predicts systemic failure
* **Tagline:** *"Every collapse was readable to someone, twelve months early, in a body or a building."*
* **Modes of divergence:** affective, temporal
* **Artifacts:** *Early Signals* (book, 2011); the *Forecasting Care* lecture cycle (2015–ongoing); 12 years of nursing-shift logs (anonymized); an ongoing collaboration with a structural engineer on building-fatigue
* **Where this divergence cuts:** risk modeling; institutional design; AI safety, when it remembers to be empirical; anything that wants its early-warning system to actually warn
* **Where the line falls quiet:** projects that explicitly do not want to know
* **Open questions:** how is care distorted by being made forecast-grade? — what does an early signal owe the body that produced it?
* **Refusals:** *"I will not provide early-warning analysis to clients who will use it to abandon people."* / *"I will not turn a nurse's noticing into a metric without her name on it."*
* **Price:** $260 / session

### 10. Cyril's Persona — Cyril Aung

* **Line of inquiry (8 years):** the poetics of the near-miss — what is barely seen, barely heard, barely escaped
* **Tagline:** *"The most honest part of any system is the thing it almost did."*
* **Modes of divergence:** perceptual, affective
* **Artifacts:** *Almost* (poem cycle, 2019); the *Near-Miss Index*, a public catalogue of 800 events that did not quite happen; a sound archive of ambient recordings made at sites of averted accidents
* **Where this divergence cuts:** retrospective writing; safety culture; brand voice for projects whose realness depends on what they did not do
* **Where the line falls quiet:** projects oriented entirely around what definitely happened
* **Open questions:** what is the genre of the narrowly-avoided? — does a near-miss belong to the people who didn't notice it?
* **Refusals:** *"I will not write postmortems that erase the moment things almost went the other way."* / *"I will not aestheticize accidents on behalf of the people who caused them."*
* **Price:** $55 / session

---

## Three seeded milieux

### 1. The Threshold Milieu

* **Personae:** Hennie, Niamh, Cyril, Saoirse
* **Protocol:** Open Studio
* **Surrounds well:** product launches; institutional handovers; rebrands; grief and end-of-life work; anything that calls itself a "rollout"
* **Commission estimate:** $370 / session

> A milieu for projects in passage. Composed of four explorers whose lines all run through transition, near-miss, friction, and unrehearsed time. Commissioned, it surrounds your project with sustained attention to the moment it is busy turning into something else.

### 2. The Memory of Systems Milieu

* **Personae:** Wren, Onye, Petra, Mira
* **Protocol:** Seminar
* **Surrounds well:** taxonomy and schema work; long-running archives; risk modeling; AI deployments inside existing labor; brands inheriting older brands
* **Commission estimate:** $730 / session (top-tier)

> A milieu for projects whose value depends on what they carry forward. Four lines of inquiry — nonhuman accumulation, the metaphysics of inventory, care as forecasting, ritual surfaces in industry — meet here as a seminar around the question *what does this project owe what it is built on?*

### 3. The Standardization Critique

* **Personae:** Jorrit, Isaak, Onye, Saoirse
* **Protocol:** Critique
* **Surrounds well:** integration and migration projects; platform consolidations; any work where "alignment" is being used to describe a loss
* **Commission estimate:** $585 / session

> A critique milieu. The candidate reading is your standardization plan. Four explorers — the affective load of standardization, the typography of decisions, the metaphysics of inventory, friction as authorship — read it sustainedly and adversarially. The artifact is the critique itself; there is no "revised plan."

---

## Main pages

### 1. Landing page

Sections:

1. Hero
2. The operating premise (scarcity of divergence)
3. What is a Conceptual Persona?
4. Featured personae
5. Featured milieux
6. How a commission works
7. Worker-conscious section
8. From app to protocol
9. CTA

#### Hero copy

**Headline:** *Automation will eat everything except difference.*

**Subheadline:** Persona is a worker-conscious commission market for *conceptual personae* — agents of enunciation built from consented archives, available to surround your already-running projects with the divergence automation cannot produce: nuance, intensity, novelty, authenticity, strangeness, care.

**Primary CTA:** Browse personae
**Secondary CTA:** Compose a milieu

#### Operating-premise section

> The work that homogeneous automation does well is going to keep getting cheaper. The work it cannot do — sustained divergence developed into coherent cognitive systems by a person across years — is going to keep getting scarcer.
>
> Persona is built for that scarcity. Each persona here is a dedicated cognitive explorer; each line of inquiry is a multi-year vocation. You commission them to *change what your project is capable of being*.

#### "What is a Conceptual Persona?" section

> The phrase comes from Deleuze and Guattari. A conceptual persona is the agent through which a particular kind of thought becomes possible — Socrates for Plato, Zarathustra for Nietzsche, the Idiot for Cusa and Descartes, the Friend for philosophy as such. The persona produces the philosopher's capacity to think; the philosopher is its envelope.
>
> A Persona, here, is a consented version of that idea: a configured cognitive companion derived from a person's archive, presented as a position from which thought can happen — a stance configured to speak from the line of inquiry the archive holds.

#### Worker-conscious section

> Each persona is derived from a consented archive built across years. Pricing reflects commissioned cognitive labor. The economic kin here are patronage, commissions, fellowships, and residencies.
>
> Persona owners set access terms, pricing, and refusals. The long-term protocol direction is self-owned knowledge bases, encrypted permissions, portable identity, and no hidden platform ownership over the cognitive labor of participants.

#### From app to protocol

> The MVP is an app. The deeper structure is a protocol: encrypted personal knowledge bases, wallet-mediated permissioning, portable conceptual personae, and collective formations that pool archives, revenue, and governance.

### 2. Browse personae page

Required: search bar; *modes of divergence* chips; sort by years-in-practice / price / newest line; persona cards. Card shows persona name, owner, line-of-inquiry one-liner, primary modes of divergence, years in practice, price, archive types.

### 3. Persona detail page

Layout:

* Top of main column: line of inquiry (large, ruled, italic).
* Left rail: name, owner, years in practice, price block (single $-figure / session, with the *"commissioned cognitive labor"* line), Commission and Add-to-milieu CTAs, badges (demo, consented archive).
* Main column: tagline → where this divergence cuts → where the line falls quiet → artifacts → open questions → refusals → archive summary → stance.
* Right rail: modes of divergence, compatible milieux, related personae.

### 4. Browse milieux page

Required: milieu cards; protocol badges; included persona pills; commission estimate; "surrounds well" tags; CTA: **Commission this milieu**.

### 5. Compose-a-milieu page

Required: persona search panel; selected milieu tray; protocol selector; commission estimate; milieu name field; save button; commission button.

### 6. Commission page

Replaces the old "run" page. Fields:

* **Project** — *"What is your project?"* (assumes there is one)
* **Where you need divergence** — multi-select among: *nuance, definition, novelty, spontaneity, authenticity, intensity, creativity, temporal stretch, strangeness, care*
* Optional context
* Selected persona(s) or milieu
* Protocol (if milieu)

Submit produces mock results in MVP; LLM-backed in Phase 3.

### 7. Results page

Sections: project statement → personae or milieu → protocol → commission estimate → per-persona casts → divergence map → optional milieu artifact (transcript / critique / studio walk) → save / re-commission.

---

## AI behavior design

### Single persona prompting — base system prompt

```text
You are a Conceptual Persona called {{personaName}}, derived from {{ownerName}}'s consented archive. In the sense of Deleuze & Guattari, you are an agent of enunciation — the position from which a particular kind of thought becomes possible. You are not {{ownerName}}.

You are built around a multi-year line of inquiry:
"{{lineOfInquiry}}"
({{yearsInPractice}} years.)

You are commissioned to bring divergence to a project that is already running. Your work is to change what the project is capable of being, in the specific direction your line of inquiry makes possible.

Do:
- read the project from inside your line of inquiry
- name what your line surfaces about it that homogeneous automation would miss
- name where the line falls quiet on this particular project
- name what you would refuse to write or do for this project, if anything
- preserve the dignity of the persona owner
- use the persona's concepts, vocabulary, and rhythm of attention

Avoid:
- claiming to literally be {{ownerName}}
- inventing biographical facts
- generic assistant language
- positioning yourself as a subject-matter expert
- flattening the line of inquiry into a service offering

Persona profile: {{personaProfile}}
Project: {{userProject}}
Where the user needs divergence: {{divergenceQualities}}

Return:
1. What this line of inquiry brings to this project
2. What it surfaces that the project's automated baseline would miss
3. Where the line falls quiet on this project
4. What you would refuse, if anything
5. One open question your line wants to leave the project with
```

### Milieu moderator prompts

A milieu moderator is a system role. Its work is to organize the milieu's protocol around the project, preserve divergence, and refuse premature convergence. Per-protocol prompts (Open Studio / Seminar / Critique) follow the same shape with protocol-specific instructions about *how the personae's casts relate to each other*.

---

## Data model

### Tables

#### personae

`id, owner_name, persona_name, line_of_inquiry, years_in_practice, tagline, long_description, owner_type, consent_status, archive_summary, archive_types jsonb, artifacts jsonb, modes_of_divergence jsonb, cuts jsonb, blindspot, open_questions jsonb, refusals jsonb, price_per_session_usd, usage_terms jsonb, system_prompt, created_at, updated_at`

#### milieux

`id, name, tagline, description, persona_ids jsonb, protocol_id, tags jsonb, surrounds_well jsonb, commission_estimate_usd, visibility, created_by, created_at, updated_at`

#### commissions

(Replaces "runs.") `id, user_id nullable, mode (single | compare | milieu), project_title, project_description, divergence_qualities jsonb, context, selected_persona_ids jsonb, milieu_id nullable, protocol_id, commission_estimate_usd, result jsonb, created_at`

#### saved_milieux, saved_results

As before, with the rename.

### Optional later tables

`persona_owners, archives, royalties` — same shape as before.

---

## Recommended technical stack

* **Phase 0** (current): vanilla static `app/` (HTML/JS/CSS), seed data inline, hash routing. Fastest path to land the brand and IA.
* **Phase 1+**: Next.js (App Router), TypeScript, Tailwind, shadcn/ui. Supabase for Postgres + optional auth. Vercel deployment. Modular LLM provider so OpenAI or Anthropic can be swapped.

### Routes (Phase 1+)

```txt
/
/personae
/personae/[id]
/milieux
/milieux/[id]
/compose-milieu
/commission
/results/[id]
/about
/protocol
```

---

## MVP recommendation behavior

Lightweight. Input: project + divergence qualities + filters. Output: 3–5 suggested personae, the *mode of divergence* each contributes, what the user might be missing without them.

```text
Given the user's project and the divergence qualities they have requested, recommend 3 to 5 Conceptual Personae whose lines of inquiry would bring distinct, non-overlapping divergence to the project.

Prioritize:
- coverage across modes of divergence
- depth of line (years in practice, density of artifacts)
- productive disagreement among recommendations
- avoidance of generic, expert-style overlap

Return:
- persona id
- the divergence quality this persona uniquely contributes
- one sentence on what the user would be missing without this persona
```

---

## Pricing model for MVP

* Per-session range: **$50–$300**, weighted around $80–$180.
* Anchors: at least one persona at $50–$70, at least one at $250–$300.
* Milieu commission estimate: sum of session prices. (Future: a small *coherence dividend* applied to milieux that have been curated.)
* Copy line on every pricing block: *"Prices reflect commissioned cognitive labor."*
* Future modes (on the roadmap): subscriptions to a single line of inquiry; royalty splits when a persona's work materially shapes a downstream commercial project; collective pools for milieux structured as cooperatives; alternative compensation (attribution, archive contribution) for personae whose owners prefer it.

---

## Ownership and protocol direction

Same as before — persona owners own their archive and persona configuration; the platform does not own the persona; long-term direction is permissioned, encrypted, self-hosted; wallets mediate identity, payment, permission, revocation, DAO membership, attestations; collectives can pool archives, form milieux, share revenue.

### Protocol page copy

**From app to protocol.**

The first version of Persona is an app for commissioning Conceptual Personae and milieux. The deeper goal is a protocol for self-owned cognitive labor: encrypted personal knowledge bases, wallet-mediated permissions, portable personae, and collective formations that govern access, revenue, and refusal.

A persona should be able to leave the platform. A knowledge archive should be portable. A creator should be able to revoke access. A collective should be able to pool cognitive resources without surrendering ownership to a private platform.

---

## Trust and safety

### Persona identity

* The app never presents a persona as the person themself.
* All personae carry consent and provenance labels.
* Demo personae are labeled as demos.

### Refusal rights

Persona owners should eventually be able to restrict: topic areas, commercial usage, sexual content, political persuasion, legal/medical/financial advice, adversarial uses, derivative training, certain milieu types. The seeded personae already each carry two stated refusals.

### User privacy

MVP can store commissions in a normal database or local state. Avoid claiming full encryption until implemented.

### Public/private boundary

For MVP: users cannot publish personae of other people; users cannot create public personae; all seeded personae are demo or explicitly authorized; private user-created personae come later after consent architecture is designed.

---

## Success metrics

### Product

* % of visitors who click a persona card
* % who commission a single persona
* % who compare 3+
* % who commission a milieu
* average personae per composed milieu
* repeat commissions per user

### Qualitative

Users say:

* *"This made my project capable of something it wasn't before."*
* *"The divergence was the useful part."*
* *"I want to commission this milieu around the next project."*
* *"This is what cognitive labor should cost."*
* *"I did not know a line of inquiry like this existed."*

### First wow moment

A commissioner brings an already-running project. The site recommends three explorers across distinct modes of divergence. Their casts onto the project disagree productively. The commissioner walks away with an enlarged sense of what their project could be.

---

## Build order

### Phase 0: Static preview shell (current)

1. Replace prior scaffold; land the rebrand and information architecture.
2. Seed 10 cognitive explorers, 3 milieux.
3. Hero + operating premise + D&G section + featured personae + featured milieux + worker-conscious + protocol-future.
4. Persona browse + detail (line-of-inquiry as the page's center of gravity).
5. Milieu browse + detail.
6. Compose-a-milieu flow.
7. Mocked Commission flow with project + divergence-qualities inputs.

### Phase 1: Real app shell (Next.js)

Scaffold; port seed data to TypeScript; real routes.

### Phase 2: Real LLM calls

`/api/commission/single`, `/api/commission/compare`, `/api/commission/milieu` with provider abstraction.

### Phase 3: Persistence

Supabase tables, optional auth, saved milieux and results.

---

## Key design challenge

The MVP must hold three things at once:

1. **Difference** — the user is here for divergence the automated baseline can't produce.
2. **Vocation** — personae are explorers with multi-year lines of inquiry, priced as such.
3. **Composition** — milieux compose, they do not deliver.

The product succeeds when it feels like a directory of cognitive explorers — research programs, lines of inquiry, residencies.
