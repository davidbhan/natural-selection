import { defineConfig } from '@playwright/test';

const development = process.env.TEST_SERVER === 'development';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: 'http://127.0.0.1:4173/natural-selection/',
    browserName: 'chromium',
    channel: 'chrome',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: development
      ? 'npm start -- --port 4173 --strictPort'
      : 'npm run build && npm run preview -- --port 4173 --strictPort',
    url: 'http://127.0.0.1:4173/natural-selection/',
    reuseExistingServer: false,
  },
});
