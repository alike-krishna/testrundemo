import { Page, Locator } from "@playwright/test";

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly noResult: Locator;
  readonly itemList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder("Search store");
    this.searchButton = page.getByRole("button", { name: "Search" });
    this.noResult = page.locator(".no-result");
    this.itemList = page.locator(".product-item");
  }

  async search(searchTestData: string) {
    await this.searchInput.fill(searchTestData);
    await this.searchButton.click();
  }
}
