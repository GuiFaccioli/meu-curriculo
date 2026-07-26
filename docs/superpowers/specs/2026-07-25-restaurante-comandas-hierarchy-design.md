# Restaurante Comandas project hierarchy design

## Goal
Make the Restaurante Comandas card clearly distinguish project context, its primary stack, and its implementation differentiators without reintroducing technology badges.

## Scope
- Keep the global technical-skills section unchanged except for limiting it to the approved Front-end list: JavaScript, TypeScript, React, Next.js, Vite, HTML5, CSS3, and Tailwind CSS.
- Update the project card and its printable curriculum equivalent.\n- Make the header flush with the viewport top and span its full width.
- Preserve Portuguese, English, and Spanish localization.

## Header presentation
The header will remain sticky at 	op: 0, span the viewport width, and use square outer edges so it reads as a full-width application bar. The inner navigation content remains constrained to the existing content width for readable alignment.

## Technical skills presentation
The global technical skills section will retain its category component but expose only one Front-end category containing the approved eight technologies. Other global skill categories will not render.

## Presentation
The project card will have three labeled sections:

1. **Project overview** — the existing project description.
2. **Primary stack** — the existing concise technology summary.
3. **Implementation differentiators** — the existing bullet list of operational and architectural capabilities.

Labels use the existing mono/metadata visual language, while the content remains in the existing body styles. The card stays responsive and centered, with no nested cards or technology chips.

## Data and components
- Add localized labels for the three sections.
- Pass labels into `ProjectCard` rather than hard-coding Portuguese UI copy.
- Keep `technologySummary` optional so future projects can still render their technology list when no summary is supplied.
- Mirror the structure in the static Portuguese curriculum.

## Verification
- Confirm the three concepts are visually distinct in the project card.
- Verify Portuguese, English, and Spanish rendering.
- Run lint and production build.