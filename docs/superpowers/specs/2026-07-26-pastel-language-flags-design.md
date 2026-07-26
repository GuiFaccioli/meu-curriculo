# Pastel language flag selector design

## Goal
Replace the paired language flag assets with individual United States, Spain, and Brazil flags rendered in a two-color pastel style consistent with the portfolio system.

## Scope
- Keep the existing three language choices and locale behavior.
- Replace only the flag visuals and any related asset references.
- Do not change the language-switcher interaction model or selected-state behavior.

## Presentation
- English uses an individual United States flag.
- Spanish uses an individual Spain flag.
- Portuguese uses an individual Brazil flag.
- Each flag uses two restrained pastel colors that preserve a recognizable country silhouette.
- The selected language remains identified by the existing thin outline rather than a filled control.

## Implementation
- Create lightweight local SVG assets rather than retaining large PNG files.
- Update `localeOptions` to reference the new assets.
- Keep image dimensions and accessible button labels unchanged.
- Verify the flags remain readable at the current 1.7rem size in both themes.

## Verification
- Check all three locale controls render their individual flags.
- Confirm selection, keyboard focus, and language switching still work.
- Run lint and production build.