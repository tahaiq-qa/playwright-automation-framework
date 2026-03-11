import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 5000 },
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: true,
    screenshot: 'on',  // auto screenshot on test failure
    video: 'retain-on-failure',     // record video on failure
    trace: 'retain-on-failure',     // retain trace on failure
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    baseURL: 'https://www.saucedemo.com'
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});