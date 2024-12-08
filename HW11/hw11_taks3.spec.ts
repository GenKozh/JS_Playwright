import { test, expect } from '@playwright/test';

test('Google Search Validation', async ({ page }) => {
    await page.goto('https://www.google.com');

    const searchInput = page.locator('input[name="q"]');
    await searchInput.fill('Playwright');

    await searchInput.press('Enter');

    await expect(page).toHaveURL(/search\?q=Playwright/);
    await expect(page.locator('#search')).toContainText('Playwright');
});
