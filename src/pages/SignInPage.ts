import { Page, Locator } from "@playwright/test";
import { LoginPage } from "@pages/LoginPage";

export class SignInPage extends LoginPage {
  readonly websiteLogo: Locator;
  readonly websitePageTitle: Locator;
  readonly h3Heading: Locator;
  readonly paragraphSignInText: Locator;
  readonly paragraphCredentialsText: Locator;
  readonly standardUserText: Locator;
  readonly slowUserText: Locator;
  readonly invalidUserText: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly accountCreationText: Locator;
  readonly createAccountButton: Locator;
  readonly downloadLink: Locator;
  readonly paragraphConenctText: Locator;
  readonly youtubeLink: Locator;
  readonly facebookLink: Locator;
  readonly instagramLink: Locator;
  readonly roboticQAwebLink: Locator;
  readonly homePageTitle: Locator;
  constructor(page: Page) {
    super(page);
    this.websiteLogo = page.locator("a.inline-block.mb-6");
    this.websitePageTitle = page.getByText(
      "Your ultimate playground for mastering Selenium and Playwright automation.",
    );
    this.h3Heading = page.getByRole("heading", { name: /Welcome Back/i });
    this.paragraphSignInText = page.getByText(
      "Sign in to continue to RoboticQA Cart",
    );
    this.paragraphCredentialsText = page.locator(
      'p:has-text("Test Credentials")',
    );
    this.standardUserText = page.locator('p:has-text("Standard User")');
    this.slowUserText = page.getByText("Slow User (10s)");
    this.invalidUserText = page.getByText("Invalid User");
    this.usernameInput = page.getByRole("textbox", {
      name: /Username or Email/i,
    });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.signInButton = page.getByRole("button", { name: "Sign In" });
    this.accountCreationText = page.getByText("Don't have an account?");
    this.createAccountButton = page.getByRole("button", { name: /Sign up/i });
    this.downloadLink = page.getByText("Download Feature File");
    this.paragraphConenctText = page.getByText(
      "Connect with RoboticQA Academy",
    );
    this.youtubeLink = page.locator(
      "//a[@href='https://www.youtube.com/@roboticqa']",
    );
    this.facebookLink = page.locator(
      "//a[@href='https://www.facebook.com/roboticqa']",
    );
    this.instagramLink = page.locator(
      "//a[@href='https://www.instagram.com/roboticqa_academy/']",
    );
    // Target the RoboticQA link in the 'Connect with RoboticQA Academy' section by its unique class
    this.roboticQAwebLink = page.locator(
      "a.text-purple-300[href='https://roboticqa.com']",
    );
    this.homePageTitle = page.getByRole("heading", {
      name: "Practice E-commerce Site",
    });
  }
}
