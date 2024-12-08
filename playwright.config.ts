import { defineConfig, devices } from "@playwright/test";
import { isCi } from "e2e/environment";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  forbidOnly: isCi,
  retries: isCi ? 2 : 0,
  testMatch: "*.spec-e2e.ts",
  maxFailures: isCi ? 10 : undefined,
  workers: isCi ? 3 : undefined,
  reporter: [
    [
      "html",
      {
        open: "never",
        outputFolder: process.env.TEST_TAG ? "./test-report" : "./setup-test-report",
      },
    ],
  ],
  expect: {
    timeout: 30000,
  },

  use: {
    headless: true,
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
