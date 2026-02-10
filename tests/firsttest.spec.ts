import { test, expect } from '@playwright/test';

test('Google Search test', async ({ page }) => {
  await page.goto('https://letcode.in/edit');

  // type into the search box
  await page.locator('input[id="fullName"]').fill('Playwright testing');

  // assert that the search box contains the text
  await expect(page.getByRole('button', { name: 'Enter your full Name' })).toContainText('Playwright testing'); 

});