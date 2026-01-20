import { test, expect } from "@playwright/test";
import { SignInPage } from "@pages/SignInPage";

test.describe("Sign In Page functionality Smoke Tests", async () => {
  test(`verify Sign In page web element visibility tests . @smoke`, async ({
    page,
  }) => {
    const signInPage = new SignInPage(page);
    await signInPage.goto();
    await expect(signInPage.websiteLogo).toBeVisible();
    await expect(signInPage.websitePageTitle).toBeVisible();
    await expect(signInPage.h3Heading).toBeVisible();
    await expect(signInPage.paragraphSignInText).toBeVisible();
    await expect(signInPage.paragraphCredentialsText).toBeVisible();
    await expect(signInPage.standardUserText).toBeVisible();
    await expect(signInPage.slowUserText).toBeVisible();
    await expect(signInPage.invalidUserText).toBeVisible();
    await expect(signInPage.usernameInput).toBeVisible();
    await expect(signInPage.passwordInput).toBeVisible();
    await expect(signInPage.signInButton).toBeVisible();
    await expect(signInPage.accountCreationText).toBeVisible();
    await expect(signInPage.createAccountButton).toBeVisible();
    await expect(signInPage.downloadLink).toBeVisible();
    await expect(signInPage.paragraphConenctText).toBeVisible();
    await expect(signInPage.youtubeLink).toBeVisible();
    await expect(signInPage.facebookLink).toBeVisible();
    await expect(signInPage.instagramLink).toBeVisible();
    await expect(signInPage.roboticQAwebLink).toBeVisible();
  });
});
