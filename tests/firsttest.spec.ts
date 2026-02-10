import { test, expect } from '@playwright/test';
test('Letcode Test', async ({ page }) => {
  await page.goto('https://letcode.in/edit');
  const input = page.locator('input#fullName');
  await input.fill('Playwright testing');
  await expect(input).toHaveValue('Playwright testing');
});