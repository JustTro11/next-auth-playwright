// @ts-check
const { test, expect } = require("@playwright/test");

test.use({
  storageState: "storageState.json",
});

test("sign in through github", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByText("Signed in as")).not.toBeEmpty();
});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
