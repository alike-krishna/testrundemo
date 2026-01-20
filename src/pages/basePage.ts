import { Page, Locator } from "@playwright/test";
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoHome() {
    //await this.page.goto("https://demo.nopcommerce.com/");
    await this.page.goto("https://roboticqa.com/");
  }

  async fillAction(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async clickAction(locator: Locator) {
    await locator.click();
  }
}
