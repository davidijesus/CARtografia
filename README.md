# CARtografia

CARtografia is a documented concept and navigable prototype for making cartographic evidence easier to review in Brazil's Rural Environmental Registry (CAR) workflows. This repository combines a Docusaurus site with a simulated SiCAR journey.

**Status:** demonstration, not a production service. The interface uses mock cases and simulated operations. It does not authenticate with or exchange data with SiCAR, gov.br or another government system.

## Explore

- [Prototype](https://davidijesus.github.io/CARtografia/login/)
- [Business-plan documentation](https://davidijesus.github.io/CARtografia/docs/business-plan/)
- [Prototype guide](docs/prototipo-cartografia.md)

The prototype starts at `/login` and follows a sample case through cartographic sufficiency, a dossier, an update kit and an institutional request. These outputs are illustrative, not official records or real geospatial analyses.

## Run locally

Use Node.js and npm. From the repository root:

```bash
npm ci
npm run start
```

To check the static build and serve it locally:

```bash
npm run build
npm run serve
```

The Docusaurus configuration uses `/CARtografia/` as its base path. Open the local URL printed by the command and keep that path when testing routes.

## Publish to GitHub Pages

The published site is served from the `gh-pages` branch. After reviewing the build locally, the current manual release command is:

```bash
npm run build
npx gh-pages -d build -b gh-pages --dotfiles
```

This command updates the live site. It is not required for README-only changes.

## Repository map

- `docs/business-plan/`: strategic documentation in Portuguese for the Brazilian context.
- `docs/prototipo-cartografia.md`: demo walkthrough, route list and simulation boundaries.
- `src/pages/`: navigable prototype screens.
- `src/data/` and `src/services/`: mock cases, simulated services and demo state.
- `static/`: images and assets used by the site.

## Scope and attribution

Navigation, sample-case state changes and visual document generation are demonstrative. Authentication, database persistence, geospatial calculations, real uploads and government integrations are not implemented. The prototype is independent and is not an official CAR, SiCAR or gov.br service. Third-party names and visual references remain with their respective owners.

There is no license file in this revision. Do not assume the source or assets are licensed for reuse.
