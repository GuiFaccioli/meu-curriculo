# GTM container export template

This project uses Google Tag Manager for all analytics delivery. The website still
must emit events through `window.dataLayer`; the exported GTM JSON only recreates
the container configuration.

## What this template contains

- Google Tag base
- GA4 Event - `portfolio_click`
- GA4 Event - `section_toggle`
- GA4 Event - `section_view`
- GA4 Event - `engagement_time_checkpoint`
- Custom Event triggers
- Data Layer variables, when configured in the container

## Exporting the current container

In Google Tag Manager:

1. Open the container.
2. Go to **Admin**.
3. Click **Export Container**.
4. Select the workspace and the version you want to export.
5. Download the JSON export file.

## Where to store the exported JSON in this project

Save the exported file here:

`docs/tracking/gtm-container-export.json`

Keep the file in sync with the current container version whenever the GTM setup changes.

## Importing into another GTM container

In a different Google Tag Manager account or container:

1. Open the target container.
2. Go to **Admin**.
3. Click **Import Container**.
4. Upload the JSON export file.
5. Choose how to apply the import.

## Merge vs Overwrite

### Merge

- Adds the imported items into the target container.
- Keeps existing container objects when there is no conflict.
- Safer when the target container already has useful tags, triggers, or variables.

### Overwrite

- Replaces the chosen workspace content with the imported container definition.
- Useful when you want the exported file to become the new source of truth.
- Riskier because it can remove existing configuration in the target workspace.

## What to review after importing

After importing the JSON into another container, review and update:

- GA4 Measurement ID
- GTM ID used by the project
- `VITE_GTM_ID` in Vercel or the hosting provider
- event names
- Data Layer variables
- triggers
- GA4 Event tags

## Validation checklist

After importing or updating the container, validate with:

- **GTM Preview**
- **GA4 DebugView**
- **Realtime** in GA4
- browser console with `window.dataLayer`

## Important note

The JSON export automates the GTM container setup, but it does not replace the app code.
The site still needs to send events into `window.dataLayer` from the React application.

Without the code-side emission, the container has nothing to listen to.
