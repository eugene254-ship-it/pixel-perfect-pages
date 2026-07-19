import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: ".",
  fullyParallel: false,
  retries: 0,
  reporter: [["list"]],
  expect: {
    toHaveScreenshot: {
      threshold: 0.15,
      maxDiffPixelRatio: 0.02,
      animations: "disabled",
    },
  },
  use: {
    baseURL: process.env.ATLAS_BASE_URL ?? "http://localhost:8080",
    viewport: { width: 1280, height: 1800 },
    locale: "en-US",
    timezoneId: "UTC",
    colorScheme: "dark",
    launchOptions: { args: ["--force-prefers-reduced-motion"] },
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});