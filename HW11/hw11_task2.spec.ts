import { test, expect } from '@playwright/test';

test('Playwright Homepage Validation', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page.url()).toMatch(/^https:\/\/playwright\.dev/);

    await expect(page.locator('a:has-text("Get started")')).toHaveCount(1);
});