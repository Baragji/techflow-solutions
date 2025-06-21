# TechRix Website Rebuild Plan v1.1 (21 Jun 2025)

> **Formålet med denne revision**: Indarbejde alle præciseringspunkter (design‑tokens‑format, CI‑workflow‑detaljer, komponent‑interfaces og MkDocs‑versioner), så AI‑assistenten kan eksekvere planen uden opklarende spørgsmål.

---

## 1 · Projektmål

* **Visuel paritet** 1‑til‑1 med den gamle 400 k‑kr. side (ingen kompromiser i look & feel).
* **Radikal forenkling** – ingen runtime‑afhængigheder; kun minimale build‑time‑værktøjer.
* **Micro‑service/komponent‑isolation** for nem vedligeholdelse og uafhængig udvikling.
* **Statisk hosting** på global CDN (Cloudflare Pages / Vercel) for sub‑second load‑tider.

## 2 · Principper

1. **No Code Before Blueprint** – mappestruktur, versions‑matrix og design‑system skal være godkendt, før én eneste linje kode skrives.
2. **Færrest mulige afhængigheder** – Node LTS 20 .x + Astro 4 .x (build‑time). Ingen React, Tailwind eller tredjeparts‑UI‑libs.
3. **Standards‑first** – HTML5, CSS3 (Grid/Flexbox, CSS Custom Properties), ES‑modules.
4. **Dokumentér alt** – ADR’er, README’er og API‑kontrakter for hver „service“.

## 3 · Mål‑Arkitektur

```
repo‑root/
├── apps/
│   └── web/           # Astro‑site (statisk output)
├── packages/          # Micro‑services (ren HTML/CSS/JS pr. sektion)
│   ├── hero/
│   ├── navigation/
│   ├── services/
│   ├── about/
│   ├── contact/
│   └── footer/
├── docs/              # MkDocs‑site til intern dokumentation
└── .github/           # CI (lint, build, lighthouse)
```

### Micro‑service‑koncept

* Hver pakke eksporterer en **render()**‑funktion, der returnerer præ‑computed HTML + inline CSS.
* Ingen delt global state; kun props ind → markup ud.
* Tidszone‑agnostisk, ingen server‑side logik.

### Afhængigheds‑matrix (låses i `tool‑versions.yml`)

| Værktøj         | Version           |
| --------------- | ----------------- |
| Node.js         | 20.11.x LTS       |
| Node.js         | 22.x (Current)    |
| npm             | 10.x              |
| Astro           | 4.x               |
| Prettier        | 3.x (dev)         |
| ESLint          | 9.x (dev)         |
| **Python**      | 3.12.x (dev docs) |
| MkDocs          | ≥ 1.6 (dev docs)  |
| mkdocs‑material | ≥ 9.5 (theme)     |

---

## 4 · Leverancer *før* coding

1. **Informations‑arkitektur** & endelig mappe‑/fil‑struktur.
2. **Version‑matrix** for alle værktøjer samt „Lock File“ (`tool‑versions.yml`).
3. **Design‑system** (Figma) ➜ `design‑tokens.css`  \_(farver, typografi & layout inspireret af **obsidianagency.com**)
   \*\*Token‑format‑eksempel:

````css
/* Generated from obsidianagency.com screenshots – extracted dominant colours */
:root {
  /* Brand Colours */
  --color-primary-500: #5247e2; /* Deep Violet */
  --color-primary-400: #5c51e7; /* Slightly lighter violet */
  --color-primary-050: #c8d2fc; /* Periwinkle light tint */

  /* Neutrals */
  --color-neutral-900: #1c1d21; /* Charcoal */
  --color-neutral-700: #252424; /* Dark grey */
  --color-neutral-100: #f6f6f6; /* Light grey */
  --color-neutral-000: #ffffff; /* Pure white */

  /* Functional colours (approx.) */
  --color-success-500: #40c057; /* Green */
  --color-warning-500: #ffd43b; /* Yellow */
  --color-error-500: #ff6b6b;  /* Red */

  /* Navigation glassmorphism */
  --glass-bg: rgba(142, 142, 142, 0.35);
  --glass-blur: 20px;

  /* Typography */
  --font-family-sans: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.25rem;    /* 20px */
  --font-size-xl: 2.5rem;     /* 40px headings */

  /* Elevation & Radius */
  --radius-lg: 24px;          /* Large cards */
  --radius-sm: 6px;           /* Buttons */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 6px 20px rgba(0,0,0,0.12);

  /* Spacing scale */
  --space-1: .25rem; /* 4px */
  --space-2: .5rem;  /* 8px */
  --space-3: 1rem;   /* 16px */
  --space-4: 1.5rem; /* 24px */
  --space-5: 2rem;   /* 32px */
}
```css
   /* exporteret via Style‑Dictionary */
   :root {
     /* Farver */
     --color‑primary‑500: #0066ff;
     --color‑neutral‑100: #f7f9fc;

     /* Typografi */
     --font‑size‑base: 1rem;
     --font‑family‑sans: "Inter", system‑ui, sans‑serif;

     /* Radius & spacing */
     --radius‑sm: 4px;
     --space‑md: 1rem;
   }
````

4. **Komponent‑specs** (initielt‐skema pr. komponent):

   | Komponent     | Props                                           | Breakpoints          | Animation‑states           |
   | ------------- | ----------------------------------------------- | -------------------- | -------------------------- |
   | `Hero`        | `title: string`, `highlights: string[]`         | `md ≥ 768px` (2‑kol) | `typingStart`, `typingEnd` |
   | `ServiceCard` | `icon: string`, `title: string`, `desc: string` | fluid grid           | `hover`, `focus`           |
   | …             | …                                               | …                    | …                          |
5. **Accept‑kriterier** pr. feature (Definition of Done).

---

## 5 · Implementations‑roadmap

| Fase                                     | Varighed             | Vigtige output                                 |
| ---------------------------------------- | -------------------- | ---------------------------------------------- |
| 0. Kick‑off & Audit                      | 2 dage               | Formelt scope, aktiv‑liste, brand‑assets       |
| 1. Blueprint & Docs                      | 4 dage               | Godkendt mappe‑træ, versions‑matrix, ADR #1‑#3 |
| 2. Design Tokens & Styleguide            | 3 dage               | `design‑tokens.css`, Figma styles              |
| 3. Framework Setup                       | 1 dag                | Astro baseline + **CI‑workflow** (se nedenfor) |
| 4. Komponent‑implementering (Greenfield) | 8 dage               | Hero, Nav, Services, About, Contact, Footer    |
| 5. Integration & QA                      | 3 dage               | Lighthouse ≥ 95, axe ≥ 90                      |
| 6. Content Freeze & UAT                  | 2 dage               | Stakeholder‑godkendelse                        |
| 7. Deployment & Handover                 | 1 dag                | Prod‑deploy på Cloudflare Pages, dokumentation |
| **Total**                                | **≈ 24 person‑dage** | \~5 kalenderuger                               |

### CI‑workflow‑detaljer (GitHub Actions)

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:

jobs:
  build‑test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [20, 22]
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js ${{ matrix.node }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
          cache: "npm"
      - run: npm ci
      - run: npm run lint           # eslint . --ext .js,.ts,.astro
      - run: npm run build          # astro build
      - run: npx @lhci/cli autorun  # Lighthouse CI
```

---

## 6 · Kvalitets‑gates

* **Performance**: FCP < 1 s (3G), LCP < 2.5 s.
* **Tilgængelighed**: WCAG 2.1 AA, axe‑score ≥ 90.
* **SEO**: Lighthouse‑SEO ≥ 90.
* **Code‑Sundhed**: ESLint 0 errors, 100 % typer dækket, hvis TypeScript vælges.

---

## 7 · Dokumentation

* `docs/` → MkDocs‑site med **mkdocs‑material**.
  `requirements.txt`:

  ```
  mkdocs>=1.6
  mkdocs-material>=9.5
  ```
* `python‑version` pin: **3.12.x**.
* ADR‑skabelon for hver arkitekturbeslutning.
* Inline JSDoc + Astro Preview (Storybook‑lignende) pr. komponent.

---

## 8 · Roller & Ansvar

| Rolle         | Navn        | Ansvar                             |
| ------------- | ----------- | ---------------------------------- |
| Product Owner | Yousef      | Scope, prioritering, accept        |
| Tech Lead     | *AI Assist* | Arkitektur, code reviews, CI‑setup |
| UI Designer   | TBD         | Visuel design, Figma               |
| QA Engineer   | TBD         | Testplan, automatiserede tests     |

---

## 9 · Næste skridt (Action Items)

1. **Review & godkend** denne v1.1‑plan
2. Lever **design‑assets** (logo‑SVG, farve‑palette, typografi‑valg).
3. Book **kick‑off‑møde** (60 min) → fastlæg fasernes kalender.
