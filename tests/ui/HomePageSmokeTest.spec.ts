import { test, expect } from "@playwright/test";
import { HomePage } from "@pages/HomePage";
import { login } from "@utils/auth";

test.describe("Home Page Smoke Tests after login", () => {
  test("should login as standard_user and verify home page elements", async ({
    page,
  }) => {
    await login(page);
    // Home page assertions
    const homePage = new HomePage(page);
    await expect(homePage.homePageTitle).toBeVisible();
    await expect(homePage.cartButton).toBeVisible();
    // Add more assertions as needed for smoke coverage
  });
});
