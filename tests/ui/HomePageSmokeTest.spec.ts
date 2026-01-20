import { test, expect } from "@playwright/test";
import { HomePage } from "@pages/HomePage";
import { SignInPage } from "@pages/SignInPage";
import { BasePage } from "@pages/basePage";
import signInData from "@data/SignInData.json";

test.describe("Home Page Smoke Tests after login", () => {
  test("should login as standard_user and verify home page elements", async ({
    page,
  }) => {
    const basePage = new BasePage(page);
    await basePage.gotoHome();

    // Sign in
    const signInPage = new SignInPage(page);
    await signInPage.usernameInput.fill(signInData[0].UserName);
    await signInPage.passwordInput.fill(signInData[0].Password);
    await signInPage.signInButton.click();

    // Home page assertions
    const homePage = new HomePage(page);
    await expect(homePage.homePageTitle).toBeVisible();
    await expect(homePage.cartButton).toBeVisible();
    // Add more assertions as needed for smoke coverage
  });
});
