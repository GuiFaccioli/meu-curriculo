# Restaurante Comandas project hierarchy design

## Goal
Make the Restaurante Comandas card clearly distinguish project context, its primary stack, and its implementation differentiators without reintroducing technology badges.

## Scope
- Keep the global technical-skills section unchanged.
- Update only the project card and its printable curriculum equivalent.
- Preserve Portuguese, English, and Spanish localization.

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