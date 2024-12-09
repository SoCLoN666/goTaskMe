import { defineConfig, devices } from "@playwright/test";
import { isCi } from "e2e/environment";
import path from "path";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  forbidOnly: isCi,
  retries: isCi ? 2 : 0,
  testMatch: "*.spec-e2e.ts",
  workers: isCi ? 3 : undefined,
  maxFailures: isCi ? 10 : undefined,
  reporter: "html",
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
  globalSetup: path.resolve(__dirname, "e2e/setup/global-setup.ts"),
});
