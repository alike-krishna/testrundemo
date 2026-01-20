import { Page, Locator } from "@playwright/test";
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillAction(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async clickAction(locator: Locator) {
    await locator.click();
  }
}
