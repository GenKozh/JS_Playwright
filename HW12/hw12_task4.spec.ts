import { test, expect } from "@playwright/test";

test("Заповнення форми та перевірка успішної відправки", async ({ page }) => {
  await page.goto("http://formy-project.herokuapp.com/form");

  await page.fill("#first-name", "Sam");
  await page.fill("#last-name", "Robertson");
  await page.fill("#job-title", "Test Automation Engineer");

  await page.check("#radio-button-2");

  await page.check("#checkbox-1");

  await page.selectOption("#select-menu", { label: "5-9" });

  await page.fill("#datepicker", "14/12/2024");

  await page.click("text=Submit");

  await expect(page).toHaveURL(/thanks/);
  await expect(page.locator("body")).toContainText("The form was successfully submitted!");
});
