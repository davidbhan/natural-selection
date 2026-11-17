import { test, expect } from '@playwright/test';

// Exercise real browser rendering, including the bundled CanvasJS library.
test.beforeEach(async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {
    if (response.url().startsWith('http://127.0.0.1:4173/') && response.status() >= 400) {
      errors.push(`${response.status()} ${response.url()}`);
    }
  });
  page.runtimeErrors = errors;
});

test.afterEach(async ({ page }) => {
  expect(page.runtimeErrors).toEqual([]);
});

const routes = [
  ['', 'Evolutionary Game Theory'],
  ['home', 'Evolutionary Game Theory'],
  ['hawkdove', 'The Hawk Dove Game'],
  ['hawkdovesimulation', 'Calculating the Optimal Strategies'],
  ['hawkdovesandbox', 'Hawk Dove Game ESS Calculator'],
  ['ess', 'Rules of the Simulation'],
  ['esssandbox', 'Evolutionary Stable Strategy Sandbox'],
  ['fakefighting', 'Scaring Away the Doves'],
  ['fakefightingsimulation', 'Mock Fighting Simulation'],
  ['fakefightingsandbox', 'Mock Fighting Sandbox'],
  ['conclusion', 'Continue your learning'],
];

for (const [route, title] of routes) {
  test(`loads #/${route}`, async ({ page }) => {
    await page.goto(`./#/${route}`);
    const target = route === 'conclusion'
      ? page.getByRole('button', { name: title, exact: true })
      : page.getByRole('heading', { name: title, exact: true });
    await expect(target).toBeVisible();
  });
}

test('begin link opens the Hawk Dove page', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: 'Begin', exact: true }).click();
  await expect(page).toHaveURL(/#\/hawkdove$/);
  await expect(page.getByText('The Hawk Dove Game', { exact: true })).toBeVisible();
});

test('calculator updates when payoffs change', async ({ page }) => {
  await page.goto('./#/hawkdovesandbox');
  const table = page.locator('table').first();
  const initial = await table.innerText();
  await page.getByLabel('Value', { exact: true }).fill('20');
  await expect(table).not.toHaveText(initial);
  await expect(table).toContainText('20');
});

for (const route of ['ess', 'esssandbox', 'fakefightingsimulation', 'fakefightingsandbox']) {
  test(`runs simulation on ${route}`, async ({ page }) => {
    await page.goto(`./#/${route}`);
    if (route.endsWith('sandbox')) {
      await page.locator('#population').fill('40');
      await page.locator('#rounds').fill('5');
    }
    await page.locator('button').filter({ hasText: /^Run Simulation$/ }).click();
    const results = page.locator('table').last();
    await expect(results).toContainText('Hawks');
    await expect(page.locator('.canvasjs-chart-container')).toHaveCount(2);
    await expect(page.locator('canvas').first()).toBeVisible();
    const rows = results.locator('tbody tr');
    if (route.endsWith('sandbox')) {
      await expect(rows).toHaveCount(5);
      const values = await rows.first().locator('td').allTextContents();
      const populations = values.slice(0, route === 'esssandbox' ? 2 : 3).map(Number);
      expect(populations.reduce((a, b) => a + b, 0)).toBe(40);
      await page.locator('#rounds').fill('3');
      await page.locator('button').filter({ hasText: /^Run Simulation$/ }).click();
      await expect(rows).toHaveCount(3);
    } else {
      expect(await rows.count()).toBeGreaterThan(0);
    }
  });
}

test('static assets work below the GitHub Pages base path', async ({ request }) => {
  for (const asset of ['favicon.ico', 'manifest.json', 'robots.txt', 'canvasjs.min.js']) {
    const response = await request.get(asset);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).not.toContain('text/html');
  }
});
