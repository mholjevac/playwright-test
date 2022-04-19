import { test, expect } from '@playwright/test'

test('Simple basic test', async ({ page }) => {
  // here goes the test code
  await page.goto('https://example.com')
})
