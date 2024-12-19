import { test, expect } from '@playwright/test';

test.describe('Login/logout tests', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  test('Invalid login attempt', async ({ page }) => {
    await page.goto(baseUrl);

    await page.fill('#username', 'invalidUser');
    await page.fill('#password', 'invalidPass');
    await page.click('button[type="submit"]');

    const errorMessage = await page.locator('#flash');
    await expect(errorMessage).toHaveText(/Your username is invalid!/i);
  });

  test('Successful login and logout', async ({ page }) => {
    await page.goto(baseUrl);

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    const secureAreaHeader = await page.locator('h2');
    await expect(secureAreaHeader).toHaveText('Secure Area');

    await page.click('a[href="/logout"]');

    const loginHeader = await page.locator('h2');
    await expect(loginHeader).toHaveText('Login Page');
  });
});
