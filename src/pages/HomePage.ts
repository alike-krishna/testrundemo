import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly homePageTitle: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageTitle = page.getByText("RoboticQA Cart", { exact: true });
    this.cartButton = page.locator(
      "//button[@class='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 rounded-md px-3 relative text-white hover:bg-purple-800/50']//*[name()='svg']",
    );
  }
}
