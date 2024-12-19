import { test, expect } from '@playwright/test';

test('Activate and deactivate checkboxes', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/radio.html');

  const checkbox1 = '#vfb-6-0';
  const checkbox2 = '#vfb-6-1';
  const checkbox3 = '#vfb-6-2';

  await page.check(checkbox1);
  await page.check(checkbox2);
  await page.check(checkbox3);

  await expect(page.locator(checkbox1)).toBeChecked();
  await expect(page.locator(checkbox2)).toBeChecked();
  await expect(page.locator(checkbox3)).toBeChecked();

  await page.uncheck(checkbox1);
  await page.uncheck(checkbox2);
  await page.uncheck(checkbox3);

  await expect(page.locator(checkbox1)).not.toBeChecked();
  await expect(page.locator(checkbox2)).not.toBeChecked();
  await expect(page.locator(checkbox3)).not.toBeChecked();
});
