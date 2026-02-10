import { test, expect } from '@playwright/test';

test('Google Search test', async ({ page }) => {
  await page.goto('https://www.google.com');

  // type into the search box
  await page.locator('input[name="q"]').fill('Playwright testing');

  // click search
  await page.keyboard.press('Enter');

  // check results page title
  await expect(page).toHaveTitle(/Playwright/);
});