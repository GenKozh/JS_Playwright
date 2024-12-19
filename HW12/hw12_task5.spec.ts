import { test, expect } from "@playwright/test";

test("Перевірка фільтрації та додавання товару в корзину", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");

  await page.click("#entry_217832 a");

  await page.click("a[href*='path=57']");

  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57");

  const minPriceInput = page.locator("#mz-filter-panel-0-0 input[name='mz_fp[min]']");
  const maxPriceInput = page.locator("#mz-filter-panel-0-0 input[name='mz_fp[max]']");
  await minPriceInput.fill("");
  await minPriceInput.type("135");
  await maxPriceInput.fill("");
  await maxPriceInput.type("165");

  const products = await page.locator(".product-layout").count();
  expect(products).toBe(8);
  
  const htcProduct = page.locator(".product-layout:has-text('HTC Touch HD')");
  await expect(htcProduct).toBeVisible();

  await htcProduct.locator("button[title='Add to Cart']").click();

  await page.click(".cart"); // Відкриття корзини
  const cartTotal = await page.locator(".table-bordered .text-right:has-text('$146.00')").isVisible();
  expect(cartTotal).toBe(true);
});
