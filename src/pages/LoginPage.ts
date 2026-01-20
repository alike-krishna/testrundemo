import { Page, Locator } from "@playwright/test";
import signInData from "@data/SignInData.json";

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  constructor(private page: Page) {
    this.usernameInput = page.getByRole("textbox", {
      name: /Username or Email/i,
    });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.signInButton = page.getByRole("button", { name: "Sign In" });
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async login() {
    const { UserName, Password } = signInData[0];
    await this.usernameInput.fill(UserName);
    await this.passwordInput.fill(Password);
    await this.signInButton.click();
  }
}
