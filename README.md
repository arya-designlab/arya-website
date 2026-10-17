# Arya — The Making Table

A complete static website with four main destinations, top navigation, an eleven-part MoniFlow story, original SVG artwork, and a connected eight-phase agent/skill explorer. Seventeen source records are retained internally without visitor-facing document controls. Built with semantic HTML, CSS, and JavaScript modules; no runtime dependencies or install step.

## Local preview

Requires Node.js 20 or newer. From this folder:

```sh
npm run preview
```

Open **http://127.0.0.1:4173**. This serves the existing completed build. Press Control-C to stop. After editing source files, run `npm run build` and refresh the browser; `npm run dev` builds and starts the preview together. `npm run check` verifies routes, local references, headings, IDs, anchors, and content constraints.

## Files and hosting

- `src/pages.mjs`: page structure and copy; `src/data.mjs`: phases and artifact metadata.
- `src/components.mjs`, `src/artwork.mjs`: shared interface elements and original SVGs.
- `src/app.mjs`, `src/styles.css`: interactions and responsive visual system.
- `public/assets`: optimized copies of actual MoniFlow captures and locally hosted licensed fonts.
- `public/artifacts`: unchanged copies of selected project records. Originals remain outside this project.
- `dist`: generated site; `qa`: review captures and verification notes.

Vercel settings are included: build command `npm run build`, output folder `dist`, clean URLs. No environment variables are required. The project builds independently of the original MoniFlow folders. Nothing has been deployed.

## Confirm before deployment

Confirm the preferred public name (Arya N M / Arya Narippatta), current Optiblack role, Kochi location, and `arya.naripata@gmail.com`. These use the Stage 1 sources provisionally. The Robin and Emily Boston visual references were unavailable. A production domain and deployment approval are still needed.

## Validation

See `qa/verification.md` for the functional, responsive, evidence, and live-backend checks. Browser checks do not establish full accessibility conformance or physical-device compatibility.
