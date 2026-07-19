import { test, expect } from "@playwright/test";

const routes = [
  { path: "/",                name: "home" },
  { path: "/mission-control", name: "mission-control" },
  { path: "/ecosystems",      name: "ecosystems" },
  { path: "/exchange",        name: "exchange" },
  { path: "/intelligence",    name: "intelligence" },
  { path: "/knowledge",       name: "knowledge" },
  { path: "/labs",            name: "labs" },
  { path: "/investment",      name: "investment" },
  { path: "/community",       name: "community" },
  { path: "/governance",      name: "governance" },
  { path: "/analytics",       name: "analytics" },
  { path: "/developers",      name: "developers" },
  { path: "/settings",        name: "settings" },
];

for (const r of routes) {
  test(`visual: ${r.name}`, async ({ page }) => {
    await page.goto(r.path, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="page-ready"]', { timeout: 10_000 });
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot(`${r.name}.png`, { fullPage: false });
  });
}