# Restaurante Comandas Hierarchy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clarify the Restaurant Comandas project card, make the header full-width and flush to the viewport top, and limit global skills to the approved Front-end list.

**Architecture:** Preserve the existing data-driven portfolio. Add localized project section labels through `interfaceCopy`, pass them to `ProjectCard`, and scope CSS changes to the top navigation and project-card sections. The static curriculum mirrors the Portuguese project grouping.

**Tech Stack:** React 19, TypeScript, Vite, CSS.

## Global Constraints
- The global skills section renders exactly four approved groups: Front-end; Back-end e arquitetura; Bancos de dados; and Engenharia de software assistida por IA.\n- Testes e qualidade does not render.
- Project card labels are localized for Portuguese, English, and Spanish.
- Do not reintroduce technology badges for Restaurante Comandas.
- Header stays sticky, flush to the top, and spans the viewport width.

---

### Task 1: Simplify global skills and localize project labels

**Files:**
- Modify: `src/data/resume.ts`
- Modify: `src/data/localization.ts`

**Interfaces:**
- Produces `interfaceCopy[locale].projectLabels` with `overview`, `stack`, and `differentiators` strings.
- Keeps `getLocalizedResumeData(locale).skills` compatible with `SkillCategory`.

- [ ] **Step 1: Limit the Portuguese skills data**

Set `resumeData.skills` to exactly four groups: `Front-end` with `JavaScript`, `TypeScript`, `React`, `Next.js`, `Vite`, `HTML5`, `CSS3`, `Tailwind CSS`; `Back-end e arquitetura` with `Node.js`, `Express`, `Next.js App Router`; `Bancos de dados` with `PostgreSQL`, `Neon`, `Prisma`; and `Engenharia de software assistida por IA` with `Engenharia de contexto`, `Prompt engineering`, `Orquestração de agentes`, `Superpowers`, `SDD`. Do not include `Testes e qualidade`.

- [ ] **Step 2: Add localized labels**

Add PT labels `Visão do projeto`, `Stack principal`, and `Diferenciais implementados`; add equivalent English and Spanish labels to `interfaceCopy`.

- [ ] **Step 3: Keep translated skills aligned**

Make `translatedSkills.en` and `translatedSkills.es` each return the same four groups with localized titles and the matching technology names. Do not return a testing-and-quality group.

- [ ] **Step 4: Verify type checking**

Run: `npm.cmd run build`
Expected: TypeScript compilation succeeds.

### Task 2: Render explicit project information sections

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/ProjectCard.tsx`

**Interfaces:**
- `ProjectCard` receives localized project labels from `App`.
- The optional `technologySummary` continues to fall back to the technology list for future projects.

- [ ] **Step 1: Pass labels from App**

Pass `copy.projectLabels` to each `ProjectCard`.

- [ ] **Step 2: Add semantic section labels**

Render the project description beneath the overview label, the technology summary beneath the stack label, and highlights beneath the differentiators label. Use heading elements that preserve document hierarchy.

- [ ] **Step 3: Preserve fallback behavior**

When a project lacks `technologySummary`, render its existing technologies beneath the stack label.

- [ ] **Step 4: Verify linting**

Run: `npm.cmd run lint`
Expected: no lint errors.

### Task 3: Apply layout hierarchy and mirror static curriculum

**Files:**
- Modify: `src/App.css`
- Modify: `public/curriculo-guilherme-faccioli.html`

**Interfaces:**
- CSS exposes no new reusable API; it styles the existing top-nav and project-card markup.

- [ ] **Step 1: Make the header full-width**

Set `.top-nav` to sticky at `top: 0`, full viewport width, without outer rounded corners; add an inner-width strategy so navigation content remains aligned with the page.

- [ ] **Step 2: Style project labels**

Create a small mono metadata label style and spacing rules that visually separate overview, stack, and differentiators without nested cards or badges.

- [ ] **Step 3: Mirror Portuguese printable hierarchy**

Add the three Portuguese labels before the corresponding description, stack summary, and highlights in `public/curriculo-guilherme-faccioli.html`.

- [ ] **Step 4: Verify production output**

Run: `npm.cmd run build`
Expected: production bundle succeeds.

### Task 4: Final verification

**Files:**
- Verify: `src/App.tsx`
- Verify: `src/components/ProjectCard.tsx`
- Verify: `src/App.css`

- [ ] **Step 1: Check the rendered structure**

Confirm the header is flush at the viewport top and the project card shows the three labeled concepts without technology squares.

- [ ] **Step 2: Verify all locales**

Switch the app to PT, EN, and ES and confirm labels and the reduced skills section render correctly.

- [ ] **Step 3: Run complete checks**

Run: `npm.cmd run lint; npm.cmd run build`
Expected: both commands exit successfully.