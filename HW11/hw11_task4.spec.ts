import { test, expect } from '@playwright/test';
  
  test('Playwright Get Started Link Validation', async ({ page }) => {
      await page.goto('https://playwright.dev/');
  
      await expect(page).toHaveTitle(/Playwright/);
  
      await page.locator('a:has-text("Get started")').click();
  
      await expect(page).toHaveURL(/\/docs/);
  });
