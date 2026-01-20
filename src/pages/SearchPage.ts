import { Page, Locator } from "@playwright/test";

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly noResult: Locator;
  readonly itemList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder("Search products...");
    this.noResult = page.getByText("No products found.", { exact: true });
    this.itemList = page.getByRole("heading", { name: "Smart Fitness Watch" });
  }

  async search(searchTestData: string) {
    await this.searchInput.fill(searchTestData);
  }
}
