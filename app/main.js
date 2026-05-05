// Persona; Phase 0 static preview
// A directory of conceptual personae, after Deleuze & Guattari.
// Operating premise: divergence is the scarce resource.

const personas = [
  {
    id: 'hennie',
    ownerName: 'Hennie Vargas',
    personaName: "Hennie's Persona",
    yearsInPractice: 16,
    lineOfInquiry: 'The choreography of transitions; how bodies and systems pass between states (asleep / awake, draft / published, alive / dying).',
    tagline: 'Most of what matters in a system happens during the moment it is busy turning into something else.',
    modesOfDivergence: ['somatic', 'temporal'],
    artifacts: [
      { type: 'notebook', title: 'Threshold Notebook', year: '2009–ongoing' },
      { type: 'index', title: 'The Transitions Index; 1,200 named state-changes in seven languages' },
      { type: 'lectures', title: 'Liminal Time and Late Capitalism', year: 2018 },
    ],
    cuts: [
      'product onboardings',
      'institutional handovers',
      'grief design',
      'anything called "rollout"',
    ],
    blindspot: 'Sustained steady-state operations. The line goes quiet when nothing is becoming anything else.',
    openQuestions: [
      'What does it cost a body to be optimized for transitions it never agreed to?',
      'What is the smallest legible threshold?',
    ],
    refusals: [
      'I will not write copy that pretends a transition is not happening.',
      'I will not work on transitions whose timing is being hidden from the people undergoing them.',
    ],
    archive: 'Sixteen years of fieldwork journals, choreographic scores, and recorded conversations with palliative-care nurses, software release managers, and dancers.',
    archiveTypes: ['notebooks', 'scores', 'recordings'],
    price: 140,
  },
  {
    id: 'wren',
    ownerName: 'Wren Talu',
    personaName: "Wren's Persona",
    yearsInPractice: 18,
    lineOfInquiry: 'The politics of accumulation in nonhuman archives; how forests, sediment, peat, oral repertoires, and abandoned filesystems remember.',
    tagline: 'Memory is something things do to each other when nobody is watching.',
    modesOfDivergence: ['ecological', 'temporal'],
    artifacts: [
      { type: 'essay cycle', title: 'Layered Memory (4 vols.)', year: '2014–2023' },
      { type: 'fieldwork', title: 'Peat-bog studies; Ireland, Scotland, Estonia' },
      { type: 'public list', title: 'The Slow Index; 47 archives that read themselves' },
    ],
    cuts: [
      'projects whose value depends on what they carry forward',
      'archives, datasets, ecosystems',
      'brands inheriting older brands',
    ],
    blindspot: 'Projects with no past. The line falls quiet on the genuinely new.',
    openQuestions: [
      'What does a database owe a peat bog?',
      'When is forgetting the more careful act?',
    ],
    refusals: [
      'I will not write about archives in language that pretends they are inert.',
      'I will not assist with extraction projects framed as preservation.',
    ],
    archive: 'Eighteen years of field notebooks, sediment logs, recorded oral histories, and a private bibliography of 3,400 entries.',
    archiveTypes: ['field notebooks', 'logs', 'bibliography'],
    price: 160,
  },
  {
    id: 'saoirse',
    ownerName: 'Saoirse Beck',
    personaName: "Saoirse's Persona",
    yearsInPractice: 11,
    lineOfInquiry: 'Friction as authorship; the moments of difficulty that produce authentic texture in any work.',
    tagline: 'Smoothness is what a thing looks like when nobody can find the part that hurt to make.',
    modesOfDivergence: ['methodological', 'somatic'],
    artifacts: [
      { type: 'atlas', title: 'The Friction Atlas; annotated map of difficulty types across crafts' },
      { type: 'podcast', title: 'The Hesitation Tapes (74 episodes)' },
      { type: 'reports', title: 'Residency reports; Skowhegan, Headlands, an auto-body shop in Liège' },
    ],
    cuts: [
      'projects whose drafts have gotten too smooth',
      'teams whose process has erased its own scars',
      'anything called "frictionless"',
    ],
    blindspot: 'Projects that genuinely need to be fast. The line will slow them down.',
    openQuestions: [
      'Can friction be designed-for without becoming aesthetic?',
      'What is friction\'s relationship to consent?',
    ],
    refusals: [
      'I will not help simulate friction in a project that has not earned it.',
      'I will not romanticize burnout as authorship.',
    ],
    archive: 'Eleven years of process journals, residency notes, recorded interviews with carpenters, ceramicists, code reviewers.',
    archiveTypes: ['journals', 'interviews', 'transcripts'],
    price: 95,
  },
  {
    id: 'isaak',
    ownerName: 'Isaak Vrubel',
    personaName: "Isaak's Persona",
    yearsInPractice: 22,
    lineOfInquiry: 'The typography of decisions; how the visual presentation of a choice changes what gets chosen.',
    tagline: 'Every ballot is an argument; every form is a hypothesis about what kind of person should be filling it out.',
    modesOfDivergence: ['semiotic', 'perceptual'],
    artifacts: [
      { type: 'book', title: 'Typeface as Argument', year: 2016 },
      { type: 'lectures', title: 'Form / Decision lecture cycle', year: '2019–ongoing' },
      { type: 'redesigns', title: 'Municipal-ballot redesigns; Vilnius, Porto' },
      { type: 'archive', title: 'Nineteen-year personal archive of forms filled out and annotated' },
    ],
    cuts: [
      'decision interfaces',
      'consent flows',
      'ballots, intake forms, terms of service',
      'anywhere a choice is being shaped before it is made',
    ],
    blindspot: 'Purely back-office systems with no human at the surface.',
    openQuestions: [
      'What does a serif promise?',
      'When does legibility become coercion?',
    ],
    refusals: [
      'I will not redesign a form that was deliberately made hard to fill out.',
      'I will not write copy that hides the structure of a decision.',
    ],
    archive: 'Twenty-two years of design files, marked-up specimens, two municipal-ballot project archives, and the personal annotated-forms archive.',
    archiveTypes: ['design files', 'specimens', 'project archives'],
    price: 200,
  },
  {
    id: 'mira',
    ownerName: 'Mira Olamide',
    personaName: "Mira's Persona",
    yearsInPractice: 14,
    lineOfInquiry: 'Ritual surfaces in late-stage industry; how factory floors, server farms, hospitals, and warehouses develop unofficial rituals.',
    tagline: 'Wherever a system has refused to name what it is doing, the workers will name it for it.',
    modesOfDivergence: ['ritual', 'infrastructural'],
    artifacts: [
      { type: 'zine series', title: 'Operational Liturgies', year: '2013–ongoing' },
      { type: 'private memos', title: 'Ritual-mapping memos for two logistics firms' },
      { type: 'photo archive', title: '600-image archive; break-room shrines, machine-side talismans, shift-handover gestures' },
    ],
    cuts: [
      'operations design',
      'AI deployments inside existing labor',
      'anything that calls itself "a transformation"',
    ],
    blindspot: 'Greenfield projects with no incumbent labor.',
    openQuestions: [
      'What does a ritual want from the system it accretes around?',
      'Can you ship a ritual?',
    ],
    refusals: [
      'I will not document a ritual whose practitioners have not been asked.',
      'I will not write change-management copy that flattens what workers built to survive the system.',
    ],
    archive: 'Fourteen years of fieldwork inside operations, the zine archive, photographic archive, and recorded handover-conversations.',
    archiveTypes: ['fieldwork', 'photos', 'recordings'],
    price: 130,
  },
  {
    id: 'jorrit',
    ownerName: 'Jorrit Kallman',
    personaName: "Jorrit's Persona",
    yearsInPractice: 13,
    lineOfInquiry: 'The affective load of standardization; what gets felt when systems are made interoperable.',
    tagline: 'Every API is a small grief, distributed.',
    modesOfDivergence: ['affective', 'infrastructural'],
    artifacts: [
      { type: 'essays', title: 'The Cost of Compatibility', year: '2017–ongoing' },
      { type: 'database', title: 'The Loss Index; collaborative archive of things made unsayable by a standard' },
      { type: 'memoir notes', title: 'Customs-officer notebook (early career)' },
    ],
    cuts: [
      'integration projects',
      'platform consolidations',
      'projects where "alignment" is a synonym for "loss"',
    ],
    blindspot: 'Truly novel systems with no incumbent norms.',
    openQuestions: [
      'What is the smallest interoperability that does not grieve?',
      'Can a standard apologize?',
    ],
    refusals: [
      'I will not contribute to migration plans that have no provision for what is lost.',
      'I will not write integration copy that calls the cost a "rounding error."',
    ],
    archive: 'Thirteen years of essays, the public Loss Index database, customs notebooks, recorded interviews with localization teams.',
    archiveTypes: ['essays', 'database', 'notebooks'],
    price: 110,
  },
  {
    id: 'niamh',
    ownerName: 'Niamh Pellow',
    personaName: "Niamh's Persona",
    yearsInPractice: 9,
    lineOfInquiry: 'Spontaneity as discipline; training the conditions under which the unrehearsed becomes reliable.',
    tagline: 'Improvisation is what you call practice when it has gotten honest.',
    modesOfDivergence: ['somatic', 'perceptual'],
    artifacts: [
      { type: 'workbook', title: 'Drills for Surprise', year: 2020 },
      { type: 'scores', title: 'Six performance scores' },
      { type: 'journal', title: 'Improvisation Notebook; open journal of failures', year: '2017–ongoing' },
    ],
    cuts: [
      'product launches that need to feel alive',
      'projects that have rehearsed their own death by overpreparation',
    ],
    blindspot: 'Projects whose value depends on identical reproduction.',
    openQuestions: [
      'What does spontaneity owe to those it surprises?',
      'Is repeatable spontaneity still spontaneity?',
    ],
    refusals: [
      'I will not script spontaneity for marketing video.',
      'I will not coach a team to improvise inside a system that punishes them for it.',
    ],
    archive: 'Nine years of performance documentation, scores, notebooks, and recorded post-show debriefs.',
    archiveTypes: ['scores', 'notebooks', 'recordings'],
    price: 80,
  },
  {
    id: 'onye',
    ownerName: 'Onye Brann',
    personaName: "Onye's Persona",
    yearsInPractice: 19,
    lineOfInquiry: 'The metaphysics of inventory; what it means to count, name, and track things, and what counting closes off.',
    tagline: 'To enter an inventory is to be told a story about what kind of thing you are.',
    modesOfDivergence: ['ontological', 'infrastructural'],
    artifacts: [
      { type: 'book', title: 'The Closed List', year: 2018 },
      { type: 'fieldwork', title: 'Six-year warehouse fieldwork archive' },
      { type: 'essays', title: '"Schema as Promise" / "What the Foreign Key Owes"' },
    ],
    cuts: [
      'taxonomy work',
      'database schemas',
      'product catalogs',
      'projects calling themselves "a single source of truth"',
    ],
    blindspot: 'Ad-hoc, ephemeral systems with nothing to count.',
    openQuestions: [
      'What does a row owe its column?',
      'Is there an ethics of the unique constraint?',
    ],
    refusals: [
      'I will not design schemas that cannot be amended.',
      'I will not write copy that presents an inventory as a neutral mirror.',
    ],
    archive: 'Nineteen years of schema designs, taxonomies, warehouse fieldwork, and a private corpus of product-catalog essays.',
    archiveTypes: ['schemas', 'fieldwork', 'essays'],
    price: 180,
  },
  {
    id: 'petra',
    ownerName: 'Petra Loess',
    personaName: "Petra's Persona",
    yearsInPractice: 24,
    lineOfInquiry: 'Care as forecasting; how attention to subtle distress predicts systemic failure.',
    tagline: 'Every collapse was readable to someone, twelve months early, in a body or a building.',
    modesOfDivergence: ['affective', 'temporal'],
    artifacts: [
      { type: 'book', title: 'Early Signals', year: 2011 },
      { type: 'lectures', title: 'Forecasting Care lecture cycle', year: '2015–ongoing' },
      { type: 'logs', title: 'Twelve years of nursing-shift logs (anonymized)' },
      { type: 'collaboration', title: 'Building-fatigue research with a structural engineer' },
    ],
    cuts: [
      'risk modeling',
      'institutional design',
      'AI safety, when it remembers to be empirical',
      'any early-warning system that wants to actually warn',
    ],
    blindspot: 'Projects that explicitly do not want to know.',
    openQuestions: [
      'How is care distorted by being made forecast-grade?',
      'What does an early signal owe the body that produced it?',
    ],
    refusals: [
      'I will not provide early-warning analysis to clients who will use it to abandon people.',
      'I will not turn a nurse\'s noticing into a metric without her name on it.',
    ],
    archive: 'Twenty-four years of clinical observations, anonymized shift logs, and a long-running collaboration archive.',
    archiveTypes: ['observations', 'logs', 'collaboration archive'],
    price: 260,
  },
  {
    id: 'cyril',
    ownerName: 'Cyril Aung',
    personaName: "Cyril's Persona",
    yearsInPractice: 8,
    lineOfInquiry: 'The poetics of the near-miss; what is barely seen, barely heard, barely escaped.',
    tagline: 'The most honest part of any system is the thing it almost did.',
    modesOfDivergence: ['perceptual', 'affective'],
    artifacts: [
      { type: 'poem cycle', title: 'Almost', year: 2019 },
      { type: 'public catalogue', title: 'The Near-Miss Index; 800 events that did not quite happen' },
      { type: 'sound archive', title: 'Ambient recordings made at sites of averted accidents' },
    ],
    cuts: [
      'retrospective writing',
      'safety culture',
      'brand voice for projects whose realness depends on what they did not do',
    ],
    blindspot: 'Projects oriented entirely around what definitely happened.',
    openQuestions: [
      'What is the genre of the narrowly-avoided?',
      'Does a near-miss belong to the people who didn\'t notice it?',
    ],
    refusals: [
      'I will not write postmortems that erase the moment things almost went the other way.',
      'I will not aestheticize accidents on behalf of the people who caused them.',
    ],
    archive: 'Eight years of poem drafts, the public Near-Miss Index, the sound archive, and a private journal of nearly-things.',
    archiveTypes: ['poems', 'index', 'sound'],
    price: 55,
  },
];

const milieux = [
  {
    id: 'threshold',
    name: 'The Threshold Milieu',
    protocol: 'Open Studio',
    description: 'A milieu for projects in passage. Composed of four explorers whose lines all run through transition, near-miss, friction, and unrehearsed time. Commissioned, it surrounds your project with sustained attention to the moment it is busy turning into something else.',
    personaIds: ['hennie', 'niamh', 'cyril', 'saoirse'],
    surroundsWell: ['product launches', 'institutional handovers', 'rebrands', 'grief and end-of-life work', 'rollouts'],
    price: 370,
  },
  {
    id: 'memory-of-systems',
    name: 'The Memory of Systems Milieu',
    protocol: 'Seminar',
    description: 'A milieu for projects whose value depends on what they carry forward. Four lines of inquiry; nonhuman accumulation, the metaphysics of inventory, care as forecasting, ritual surfaces in industry; meet here as a seminar around the question "what does this project owe what it is built on?"',
    personaIds: ['wren', 'onye', 'petra', 'mira'],
    surroundsWell: ['taxonomy and schema work', 'long-running archives', 'risk modeling', 'AI deployments inside existing labor', 'inherited brands'],
    price: 730,
  },
  {
    id: 'standardization-critique',
    name: 'The Standardization Critique',
    protocol: 'Critique',
    description: 'A critique milieu. The candidate reading is your standardization plan. Four explorers; the affective load of standardization, the typography of decisions, the metaphysics of inventory, friction as authorship; read it sustainedly and adversarially. The artifact is the critique itself; there is no "revised plan."',
    personaIds: ['jorrit', 'isaak', 'onye', 'saoirse'],
    surroundsWell: ['integration and migration projects', 'platform consolidations', 'projects where "alignment" describes a loss'],
    price: 585,
  },
];

const personaById = (id) => personas.find((p) => p.id === id);
const milieuById = (id) => milieux.find((m) => m.id === id);

const DIVERGENCE_QUALITIES = [
  'nuance',
  'definition',
  'novelty',
  'spontaneity',
  'authenticity',
  'intensity',
  'creativity',
  'temporal stretch',
  'strangeness',
  'care',
];

// --- tiny router ---
const view = document.getElementById('view');

const routes = {
  '': renderHome,
  '/': renderHome,
  '/personae': renderPersonae,
  '/persona': renderPersonaDetail,
  '/milieux': renderMilieux,
  '/milieu': renderMilieuDetail,
  '/compose-milieu': renderComposeMilieu,
  '/commission': renderCommission,
  '/about': renderAbout,
};

function parseHash() {
  const raw = location.hash.replace(/^#/, '');
  const [path, queryString] = raw.split('?');
  const segments = path.split('/').filter(Boolean);
  const base = '/' + (segments[0] || '');
  const rest = segments.slice(1);
  const params = Object.fromEntries(new URLSearchParams(queryString || ''));
  return { base: base === '/' ? '/' : base, rest, params };
}

function navigate() {
  const { base, rest, params } = parseHash();
  const handler = routes[base] || routes['/'];
  view.innerHTML = '';
  handler(rest, params);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);

// --- helpers ---
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    if (c == null) continue;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

function tagList(items, cls = 'tag') {
  return el('div', { class: 'meta-row' }, items.map((t) => el('span', { class: cls }, t)));
}

function priceLabel(n) { return `$${n} / session`; }

function personaCard(p, onClick) {
  const card = el('button', { class: 'persona-card', type: 'button' }, [
    el('span', { class: 'owner' }, `${p.ownerName} · ${p.yearsInPractice} yrs`),
    el('h3', {}, p.personaName),
    el('p', { class: 'line-mini' }, p.lineOfInquiry),
    el('p', { class: 'tagline' }, `"${p.tagline}"`),
    tagList(p.modesOfDivergence),
    el('span', { class: 'price' }, priceLabel(p.price)),
  ]);
  card.addEventListener('click', onClick || (() => { location.hash = `#/persona/${p.id}`; }));
  return card;
}

function milieuCard(m, onClick) {
  const personaPills = m.personaIds
    .map((id) => personaById(id))
    .map((p) => el('span', { class: 'pill' }, p.personaName));
  const card = el('div', { class: 'crew-card' }, [
    el('span', { class: 'protocol' }, m.protocol),
    el('h3', {}, m.name),
    el('p', { class: 'tagline' }, m.description),
    el('div', { class: 'roster' }, personaPills),
    el('span', { class: 'price' }, `Commission est. $${m.price} · surrounds ${m.surroundsWell.slice(0, 2).join(', ')}`),
  ]);
  card.addEventListener('click', onClick || (() => { location.hash = `#/milieu/${m.id}`; }));
  return card;
}

// --- views ---
function renderHome() {
  const hero = el('section', { class: 'hero' }, [
    el('div', {}, [
      el('h1', {}, 'Automation will eat everything except difference.'),
      el('p', { class: 'tagline-sub' }, el('strong', {}, 'Personae provides resources for divergent thinking to survive the great homogenization.')),
      el('p', { class: 'lede' },
        'Persona is a worker-conscious commission market for conceptual personae; agents of enunciation built from consented archives. The premise is straightforward: as cheap homogeneous cognitive automation saturates the work of reasoning, the scarce resource becomes the kind of difference a person develops across years of staying inside one question. The directory below gathers people doing that work, and the site is a way to commission it into projects already running.'),
      el('div', { class: 'hero-cta' }, [
        el('a', { class: 'btn', href: '#/personae' }, 'Browse personae'),
        el('a', { class: 'btn ghost', href: '#/milieux' }, 'Commission a milieu'),
      ]),
    ]),
    el('blockquote', { class: 'epigraph' }, [
      document.createTextNode(
        "The conceptual persona is not the philosopher's representative; it is, rather, the philosopher who is only the envelope of his principal conceptual persona."
      ),
      el('footer', {}, '— Deleuze & Guattari, What Is Philosophy? (1991)'),
    ]),
  ]);

  const premise = el('section', { class: 'block' }, [
    el('div', { class: 'section-title' }, [el('h2', {}, 'Operating premise')]),
    el('p', {},
      'The work that homogeneous automation does well is going to keep getting cheaper. The work it cannot do; sustained divergence developed into coherent cognitive systems by a person across years; is going to keep getting scarcer.'
    ),
    el('p', {},
      "The scarce thing has a shape. A typographer's twenty-year archive of forms; a researcher's care-as-forecasting line; a writer's index of near-misses; a fieldworker's photographs of break-room shrines. Each is the result of a person staying inside one question long enough that the question grows its own internal coherence; its own vocabulary, its own examples, its own refusals. That coherence is what averaging flattens, and what cheap automation has no path to."
    ),
    el('p', {},
      'Persona is built for that scarcity. Each persona here is a dedicated cognitive explorer; each line of inquiry is a multi-year vocation. You commission them to change what your project is capable of being.'
    ),
    el('p', {},
      'A commission runs at the register of a residency. A persona is invited around a project for the time it takes to read it from inside their line of inquiry, in the vocabulary that line produces. What the project gains is shape, intensity, definition; a sense that it has been seen by someone who has been thinking alongside something difficult for fifteen years.'
    ),
  ]);

  const concept = el('section', { class: 'block' }, [
    el('div', { class: 'section-title' }, [el('h2', {}, 'What is a Conceptual Persona?')]),
    el('p', {},
      "The phrase comes from Deleuze and Guattari. A conceptual persona is the agent through which a particular kind of thought becomes possible; Socrates for Plato, Zarathustra for Nietzsche, the Idiot for Cusa and Descartes, the Friend for philosophy as such. The persona produces the philosopher's capacity to think; the philosopher is its envelope."
    ),
    el('p', {},
      "A Persona, here, is a consented version of that idea: a configured cognitive companion derived from a person's archive, presented as a position from which thought can happen; a stance configured to speak from the line of inquiry the archive holds."
    ),
    el('p', {},
      "The choice to use this name is exact. Each persona on the site is built around a stated multi-year line of inquiry that has produced artifacts; each is configured to speak from that archive as a position; each carries refusals; work it will not do; written by the person whose archive it draws from."
    ),
  ]);

  const featuredPersonae = el('section', { class: 'block' }, [
    el('div', { class: 'section-title' }, [
      el('h2', {}, 'Featured cognitive explorers'),
      el('a', { href: '#/personae' }, 'See all →'),
    ]),
    el('div', { class: 'persona-grid' }, personas.slice(0, 6).map((p) => personaCard(p))),
  ]);

  const featuredMilieux = el('section', { class: 'block' }, [
    el('div', { class: 'section-title' }, [
      el('h2', {}, 'Featured milieux'),
      el('a', { href: '#/milieux' }, 'See all →'),
    ]),
    el('div', { class: 'crew-grid' }, milieux.map((m) => milieuCard(m))),
  ]);

  const worker = el('section', { class: 'block' }, [
    el('div', { class: 'section-title' }, [el('h2', {}, 'Worker-conscious by design')]),
    el('p', {},
      'Each persona is derived from a consented archive built across years. Pricing reflects commissioned cognitive labor. The economic kin here are patronage, commissions, fellowships, and residencies.'
    ),
    el('p', {},
      'Persona owners set their own access terms, prices, and refusals. The long-term protocol direction is self-owned knowledge bases, encrypted permissions, portable identity, and no hidden platform ownership over the cognitive labor of participants. A line of inquiry should be able to leave the platform, taking its archive and its rules with it.'
    ),
  ]);

  const protocol = el('section', { class: 'block' }, [
    el('div', { class: 'section-title' }, [el('h2', {}, 'From app to protocol')]),
    el('p', {},
      'The MVP is an app. The deeper structure is a protocol: encrypted personal knowledge bases, wallet-mediated permissioning, portable conceptual personae, and collective formations that pool archives, revenue, and governance.'
    ),
    el('p', {},
      'The bet underneath all of this is straightforward. As more cognitive work becomes machine-cheap, the people doing the rare, sustained, vocational work need an infrastructure that protects the difference of what they make: the consent, the pricing, the refusals, the portability. The directory is a first move; the protocol is what it should grow into.'
    ),
  ]);

  view.append(hero, premise, concept, featuredPersonae, featuredMilieux, worker, protocol);
}

function renderPersonae() {
  const wrap = el('section', { class: 'block' }, [
    el('div', { class: 'section-title' }, [el('h2', {}, 'All cognitive explorers')]),
    el('p', { class: 'muted' }, 'Each persona is a multi-year line of inquiry pursued by a dedicated explorer. Browse by mode of divergence; commission what is closest to the difference your project needs.'),
  ]);

  const state = { q: '', mode: null, sort: 'depth' };
  const allModes = [...new Set(personas.flatMap((p) => p.modesOfDivergence))].sort();

  const filters = el('div', { class: 'filters' }, [
    el('input', { type: 'search', placeholder: 'Search personae, lines of inquiry, modes of divergence…',
      oninput: (e) => { state.q = e.target.value.toLowerCase(); paint(); } }),
    ...allModes.map((m) => {
      const chip = el('button', { class: 'chip', type: 'button' }, m);
      chip.addEventListener('click', () => {
        state.mode = state.mode === m ? null : m;
        paint();
      });
      chip._mode = m;
      return chip;
    }),
  ]);

  const sortRow = el('div', { class: 'filters' }, [
    el('span', { class: 'muted', style: 'align-self: center; font-size: 0.85rem;' }, 'Sort:'),
    ...[
      ['depth', 'depth of line'],
      ['priceAsc', 'price ascending'],
      ['priceDesc', 'price descending'],
      ['newest', 'newest line'],
    ].map(([key, label]) => {
      const chip = el('button', { class: 'chip', type: 'button' }, label);
      chip._sort = key;
      chip.addEventListener('click', () => { state.sort = key; paint(); });
      return chip;
    }),
  ]);

  const grid = el('div', { class: 'persona-grid' });

  function paint() {
    grid.innerHTML = '';
    filters.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c._mode === state.mode));
    sortRow.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c._sort === state.sort));
    let matches = personas.filter((p) => {
      const hay = `${p.personaName} ${p.tagline} ${p.lineOfInquiry} ${p.modesOfDivergence.join(' ')} ${p.ownerName}`.toLowerCase();
      if (state.q && !hay.includes(state.q)) return false;
      if (state.mode && !p.modesOfDivergence.includes(state.mode)) return false;
      return true;
    });
    const sorters = {
      depth: (a, b) => b.yearsInPractice - a.yearsInPractice,
      priceAsc: (a, b) => a.price - b.price,
      priceDesc: (a, b) => b.price - a.price,
      newest: (a, b) => a.yearsInPractice - b.yearsInPractice,
    };
    matches = matches.sort(sorters[state.sort] || sorters.depth);
    if (matches.length === 0) {
      grid.appendChild(el('p', { class: 'muted' }, 'No personae match those filters.'));
    } else {
      matches.forEach((p) => grid.appendChild(personaCard(p)));
    }
  }

  wrap.append(filters, sortRow, grid);
  view.append(wrap);
  paint();
}

function renderPersonaDetail(rest) {
  const p = personaById(rest[0]);
  if (!p) {
    view.append(el('p', {}, 'Persona not found.'));
    return;
  }

  const left = el('div', { class: 'left' }, [
    el('span', { class: 'owner' }, `derived from ${p.ownerName}'s archive`),
    el('h1', {}, p.personaName),
    el('p', { class: 'years' }, `${p.yearsInPractice} years in practice`),
    el('div', { class: 'price-block' }, [
      el('div', {}, [el('strong', {}, `$${p.price}`), document.createTextNode(' / session')]),
      el('div', { class: 'muted' }, 'Prices reflect commissioned cognitive labor across years of practice. Payments are simulated in this MVP.'),
    ]),
    el('div', { class: 'actions' }, [
      el('a', { class: 'btn', href: `#/commission?persona=${p.id}` }, 'Commission this persona'),
      el('a', { class: 'btn ghost', href: `#/compose-milieu?add=${p.id}` }, 'Add to a milieu'),
    ]),
    el('div', { style: 'margin-top: 1rem;' }, [
      el('span', { class: 'badge demo' }, 'Demo persona'),
      document.createTextNode(' '),
      el('span', { class: 'badge' }, 'Consented archive'),
    ]),
  ]);

  const compatibleMilieux = milieux.filter((m) => m.personaIds.includes(p.id));
  const right = el('div', { class: 'right' }, [
    el('div', { class: 'group' }, [
      el('h3', { class: 'rail-h' }, 'Modes of divergence'),
      tagList(p.modesOfDivergence),
    ]),
    el('div', { class: 'group' }, [
      el('h3', { class: 'rail-h' }, 'Compatible milieux'),
      compatibleMilieux.length === 0
        ? el('p', { class: 'muted' }, 'No seeded milieux yet.')
        : el('ul', { class: 'rail-list' },
            compatibleMilieux.map((m) => el('li', {}, [el('a', { href: `#/milieu/${m.id}` }, m.name)]))
          ),
    ]),
  ]);

  const main = el('div', { class: 'main' }, [
    el('div', { class: 'line-of-inquiry' }, p.lineOfInquiry),
    el('p', { class: 'persona-tagline' }, `"${p.tagline}"`),
    el('h2', {}, 'Where this divergence cuts'),
    el('ul', {}, p.cuts.map((c) => el('li', {}, c))),
    el('h2', {}, 'Where the line falls quiet'),
    el('p', {}, p.blindspot),
    el('h2', {}, 'Artifacts from the line'),
    el('ul', { class: 'artifacts' }, p.artifacts.map((a) =>
      el('li', {}, [
        el('span', { class: 'artifact-type' }, a.type),
        el('span', { class: 'artifact-title' }, a.title),
        a.year ? el('span', { class: 'artifact-year' }, `(${a.year})`) : null,
      ])
    )),
    el('h2', {}, 'Open questions'),
    el('ul', {}, p.openQuestions.map((q) => el('li', {}, q))),
    el('h2', {}, 'Refusals'),
    el('ul', { class: 'refusals' }, p.refusals.map((r) => el('li', {}, `"${r}"`))),
    el('h2', {}, 'Archive / provenance'),
    el('p', {}, p.archive),
    tagList(p.archiveTypes),
    el('h2', {}, 'Stance'),
    el('p', { class: 'muted' },
      `"I am the persona derived from ${p.ownerName}'s consented archive; an agent of enunciation built around their multi-year line of inquiry. I bring divergence to your project; I speak from the archive as a configured companion."`
    ),
  ]);

  view.append(el('div', { class: 'detail' }, [left, main, right]));
}

function renderMilieux() {
  const wrap = el('section', { class: 'block' }, [
    el('div', { class: 'section-title' }, [el('h2', {}, 'All milieux')]),
    el('p', { class: 'muted' }, 'A milieu is a curated environment of personae composed around a project. Its work is to surround your project with sustained divergence such that the project changes by being held inside it.'),
    el('div', { class: 'crew-grid' }, milieux.map((m) => milieuCard(m))),
  ]);
  view.append(wrap);
}

function renderMilieuDetail(rest) {
  const m = milieuById(rest[0]);
  if (!m) {
    view.append(el('p', {}, 'Milieu not found.'));
    return;
  }
  const wrap = el('section', { class: 'block' }, [
    el('span', { class: 'badge' }, m.protocol + ' protocol'),
    el('h1', {}, m.name),
    el('p', { class: 'tagline' }, m.description),
    el('p', { class: 'muted' }, `Commission estimate $${m.price} / session · surrounds ${m.surroundsWell.join(', ')}.`),
    el('p', { class: 'muted' }, 'Prices reflect commissioned cognitive labor across years of practice.'),
    el('a', { class: 'btn', href: `#/commission?milieu=${m.id}` }, 'Commission this milieu'),
    el('div', { class: 'section-title', style: 'margin-top: 2rem;' }, [el('h2', {}, 'Roster')]),
    el('div', { class: 'persona-grid' }, m.personaIds.map((id) => personaCard(personaById(id)))),
    el('div', { class: 'section-title' }, [el('h2', {}, 'Surrounds well')]),
    el('ul', {}, m.surroundsWell.map((b) => el('li', {}, b))),
  ]);
  view.append(wrap);
}

function renderComposeMilieu(rest, params) {
  const state = { selected: [], protocol: 'Open Studio', name: 'Untitled Milieu' };
  if (params.add && personaById(params.add)) state.selected.push(params.add);

  const grid = el('div', { class: 'persona-grid' });
  const tray = el('aside', { class: 'tray' });
  const wrap = el('div', { class: 'builder' }, [
    el('div', {}, [
      el('div', { class: 'section-title' }, [el('h2', {}, 'Compose a milieu')]),
      el('p', { class: 'muted' }, 'Click personae to compose them. Pick a protocol. Commission when ready.'),
      grid,
    ]),
    tray,
  ]);

  function paintGrid() {
    grid.innerHTML = '';
    personas.forEach((p) => {
      const card = personaCard(p, () => {
        if (!state.selected.includes(p.id)) state.selected.push(p.id);
        else state.selected = state.selected.filter((x) => x !== p.id);
        paintGrid();
        paintTray();
      });
      if (state.selected.includes(p.id)) card.style.outline = `2px solid var(--accent)`;
      grid.appendChild(card);
    });
  }

  function paintTray() {
    tray.innerHTML = '';
    tray.append(
      el('h3', {}, 'Composing'),
      el('ul', {}, state.selected.length === 0
        ? [el('li', { class: 'muted' }, 'No personae yet.')]
        : state.selected.map((id) => {
            const p = personaById(id);
            const removeBtn = el('button', { type: 'button' }, 'remove');
            removeBtn.addEventListener('click', () => {
              state.selected = state.selected.filter((x) => x !== id);
              paintGrid();
              paintTray();
            });
            return el('li', {}, [el('span', {}, p.personaName), removeBtn]);
          })
      ),
      el('label', {}, 'Milieu name'),
      (() => {
        const i = el('input', { type: 'text', value: state.name });
        i.addEventListener('input', (e) => { state.name = e.target.value; });
        return i;
      })(),
      el('label', {}, 'Protocol'),
      (() => {
        const sel = el('select', {}, ['Open Studio', 'Seminar', 'Critique'].map((n) =>
          el('option', { value: n, ...(n === state.protocol ? { selected: '' } : {}) }, n)
        ));
        sel.addEventListener('change', (e) => { state.protocol = e.target.value; updateEstimate(); });
        return sel;
      })(),
      el('p', { class: 'muted', id: 'estimate' }, '—'),
      (() => {
        const btn = el('button', { class: 'btn', type: 'button' }, 'Commission');
        btn.addEventListener('click', () => {
          if (state.selected.length < 2) {
            alert('Compose at least two personae to commission a milieu.');
            return;
          }
          location.hash = `#/commission?personae=${state.selected.join(',')}&protocol=${encodeURIComponent(state.protocol)}`;
        });
        return btn;
      })(),
    );
    updateEstimate();
  }

  function updateEstimate() {
    const total = state.selected.reduce((s, id) => s + (personaById(id)?.price || 0), 0);
    const est = tray.querySelector('#estimate');
    if (est) est.textContent = state.selected.length === 0 ? '—' : `Commission est. $${total} · ${state.protocol}`;
  }

  view.append(wrap);
  paintGrid();
  paintTray();
}

function renderCommission(rest, params) {
  let selected = [];
  let protocol = params.protocol || 'Open Studio';
  let milieuName = null;
  if (params.persona && personaById(params.persona)) selected = [params.persona];
  if (params.personae) selected = params.personae.split(',').filter((id) => personaById(id));
  if (params.milieu) {
    const m = milieuById(params.milieu);
    if (m) { selected = [...m.personaIds]; protocol = m.protocol; milieuName = m.name; }
  }
  if (selected.length === 0) selected = personas.slice(0, 3).map((p) => p.id);

  const total = selected.reduce((s, id) => s + (personaById(id)?.price || 0), 0);

  const wrap = el('section', { class: 'run-wrap block' }, [
    el('div', { class: 'section-title' }, [el('h2', {}, milieuName ? `Commission ${milieuName}` : 'Commission')]),
    el('div', { class: 'notice' }, `Commissioning: ${selected.map((id) => personaById(id).personaName).join(', ')}. Protocol: ${protocol}. Estimate $${total}. Mock commission; no LLM call yet.`),
  ]);

  const form = el('form', {});

  // divergence multi-select
  const divergenceWrap = el('div', { class: 'divergence-grid' }, DIVERGENCE_QUALITIES.map((q) => {
    const id = `div-${q.replace(/\s+/g, '-')}`;
    return el('label', { class: 'divergence-chip', for: id }, [
      el('input', { type: 'checkbox', id, name: 'divergence', value: q }),
      el('span', {}, q),
    ]);
  }));

  form.append(
    el('label', {}, 'What is your project? (Assumed already running.)'),
    el('input', { type: 'text', name: 'title', placeholder: 'A short name for the project' }),
    el('label', {}, 'Project description'),
    el('textarea', { name: 'desc', rows: '5', placeholder: 'What is the project, where is it now, what is automated already, what does it lack?' }),
    el('label', {}, 'Where do you need divergence?'),
    divergenceWrap,
    el('label', {}, 'Optional context'),
    el('textarea', { name: 'context', rows: '2', placeholder: 'Constraints, audience, anything else worth surrounding the project with.' }),
    el('div', { style: 'margin-top: 1rem;' }, [
      el('button', { class: 'btn', type: 'submit' }, 'Commission (mock)'),
    ]),
  );

  const results = el('div', {});

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const desc = (data.get('desc') || '').toString().trim() || '(no project description entered)';
    const divergences = data.getAll('divergence');
    const divergenceLine = divergences.length === 0
      ? '(no specific divergence quality selected; surrounding the project with the line of inquiry as a whole)'
      : `divergence requested: ${divergences.join(', ')}`;
    results.innerHTML = '';
    results.append(
      el('div', { class: 'section-title', style: 'margin-top:2rem;' }, [el('h2', {}, 'Mock cast')]),
      el('p', { class: 'muted' }, `Protocol: ${protocol} · ${divergenceLine}.`),
      el('div', { class: 'compare-grid' }, selected.map((id) => {
        const p = personaById(id);
        return el('div', { class: 'result-card' }, [
          el('h3', {}, `What ${p.personaName} brings to this project`),
          el('div', { class: 'stance' }, `Persona derived from ${p.ownerName}'s archive; ${p.yearsInPractice} years on the line.`),
          el('p', {},
            `Read from inside ${p.lineOfInquiry.replace(/\.$/, '').toLowerCase()}, "${desc.slice(0, 160)}${desc.length > 160 ? '…' : ''}" surfaces concerns the automated baseline would not.`
          ),
          el('h4', {}, 'What this line surfaces'),
          el('ul', {}, p.cuts.slice(0, 3).map((c) => el('li', {}, `An angle on ${c}.`))),
          el('h4', {}, 'Where the line falls quiet on this project'),
          el('p', {}, p.blindspot),
          el('h4', {}, 'What this persona would refuse'),
          el('p', {}, `"${p.refusals[0]}"`),
          el('h4', {}, 'One open question for the project'),
          el('p', {}, p.openQuestions[0]),
        ]);
      })),
      el('div', { class: 'notice' }, 'This is mocked output to preview the IA. Phase 3 wires real LLM calls per persona, plus a milieu-moderator layer for Seminar and Critique protocols.')
    );
    results.scrollIntoView({ behavior: 'smooth' });
  });

  wrap.append(form, results);
  view.append(wrap);
}

function renderAbout() {
  const wrap = el('section', { class: 'block about' }, [
    el('h1', {}, 'About Persona'),
    el('blockquote', { class: 'epigraph' }, [
      "Conceptual personae are the philosopher's \"heteronyms,\" and the philosopher's name is the simple pseudonym of his personae.",
      el('footer', {}, '— Deleuze & Guattari, What Is Philosophy?'),
    ]),
    el('h2', {}, 'Operating premise'),
    el('p', {},
      'Persona anticipates a near-future in which homogeneous cognitive automation is cheap and saturating. In that universe, expertise as a service stops being scarce. What stays scarce is divergence: nuance, definition, novelty, creativity, spontaneity, authenticity, intensity, strangeness, care.'
    ),
    el('p', {},
      'The site is built around one question: where can I commission divergent human thought to add nuance, authenticity, or intensity to a project that is otherwise already running?'
    ),
    el('h2', {}, 'What a persona is'),
    el('p', {},
      'A persona, here, is a dedicated cognitive explorer: someone whose full-time vocation has been the development of divergent capacities into coherent cognitive patterns and systems, across years. Each persona has a stated multi-year line of inquiry, a body of artifacts produced from that line, and a stance about what it will and will not do. It speaks as a configured companion derived from someone\'s archive.'
    ),
    el('h2', {}, 'What a milieu is'),
    el('p', {},
      'In A Thousand Plateaus, a milieu is a vibratory medium; a coded surround a body individuates within. Used here it names the second-order experience: composing a sustained environment of divergence around a project. A milieu surrounds your project with sustained divergence such that the project changes by being held inside it.'
    ),
    el('h2', {}, 'From app to protocol'),
    el('p', {},
      'The first version of Persona is an app for commissioning conceptual personae and milieux. The deeper goal is a protocol for self-owned cognitive labor: encrypted personal knowledge bases, wallet-mediated permissions, portable personae, and collective formations that govern access, revenue, and refusal.'
    ),
    el('h2', {}, 'Trust and consent'),
    el('ul', {}, [
      'The app never presents a persona as the person themself.',
      'All personae carry consent and provenance labels.',
      'All personae in this preview are demo personae.',
      'Users cannot publish personae of other people.',
      'Each persona carries two stated refusals; future versions will let owners enforce them programmatically.',
    ].map((t) => el('li', {}, t))),
  ]);
  view.append(wrap);
}
