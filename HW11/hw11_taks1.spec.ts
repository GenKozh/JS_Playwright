import { test, expect } from '@playwright/test';

test('Example Domain Page Validation', async ({ page }) => {
    await page.goto('https://example.com/');

    await expect(page).toHaveTitle('Example Domain');

    await expect(page.url()).toContain('example.com');

    await expect(page.locator('body')).toContainText('This domain is for use in illustrative examples');

    await expect(page.locator('h1')).toHaveText('Example Domain');
});
