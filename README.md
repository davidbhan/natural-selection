# Natural Selection

This front-end population simulation was built for MATH3911 Game Theory at HKU.
It explains evolutionary stable strategies and shows population changes over time.

[Open the live site](https://davidbhan.github.io/natural-selection/).

## Local setup

Use Node.js 24 LTS and npm. Node.js 22.12 or later in the 22.x release line also works.

```sh
npm ci
npm start
```

Open the local URL printed by Vite. The app uses `/natural-selection/` as its base path.

## Checks

```sh
npm audit
npm test
TEST_SERVER=development npm test
```

The browser tests use Google Chrome. If Chrome is not installed, install it with
`npx playwright install chrome`. `npm test` builds the production site and starts a
local preview server. The second test command checks the development server.
Tests cover every route, navigation, payoff changes, two-strategy and
three-strategy simulations, chart rendering, repeat runs, and static assets.

## Build and publish

```sh
npm run build
npm run preview
```

The build output is in `build/`. The hash routes and `/natural-selection/` asset
paths support the existing GitHub Pages address.

Run `npm run deploy` only when you intend to publish. It builds the site and
pushes `build/` to the `gh-pages` branch.

## Dependency security update

The November 2026 update replaces Create React App 3 with Vite 8. Create React
App's old build dependencies caused many of the security findings. The update
also upgrades `gh-pages` to 6.3 and removes unused UI, chart, and test packages.
React 16 and Material UI 4 remain compatible with the existing app. Material UI 4
is no longer actively maintained; this update does not migrate its component API.

The regenerated npm lockfile has zero known findings in `npm audit` at the time
of the update. An audit checks known package advisories. It does not audit the
local CanvasJS source in `public/canvasjs.min.js`.

JSX source files use `.jsx`. The CanvasJS wrapper imports React as an ES module. The unchanged CanvasJS
vendor file loads as a classic script before the app.
Simulation calculations are unchanged.

## Files

- `src/`: React pages, simulation components, and CSS.
- `public/`: Static assets and the CanvasJS vendor file copied into the build.
- `tests/`: Browser checks for the app.
- `index.html`: Vite entry page.
- `vite.config.mjs`: Base path, JSX mode, and build output.
- `playwright.config.mjs`: Local browser test setup.
