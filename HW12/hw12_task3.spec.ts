import { test, expect } from '@playwright/test';

test('Interact with dropdown inside iframe and submit form', async ({ page }) => {
  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');

  const iframe = page.frame({ name: 'iframeResult' });
  if (!iframe) throw new Error('Iframe not found');

  await iframe.selectOption('#cars', 'saab');

  const selectedValue = await iframe.locator('#cars').inputValue();
  expect(selectedValue).toBe('saab');

  const [navigation] = await Promise.all([
    page.waitForNavigation(), // Wait for navigation
    iframe.click('input[type="submit"]'), // Trigger form submission
  ]);

  const frameUrl = iframe.url();
  expect(frameUrl).toContain('action_page.php');
});
