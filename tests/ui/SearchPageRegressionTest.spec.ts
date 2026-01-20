import { test, expect, Locator } from "@playwright/test";
import { clear } from "node:console";
import { BasePage } from "@pages/basePage.js";
import { SearchPage } from "@pages/SearchPage.js";
import searchData from "@data/SearchData.json";

test.describe("Search functionality - data driven", () => {
  for (const data of searchData) {
    test(`Search functionality (valid/invalid/partial keywords, special characters). @regression "${data.keyword}"`, async ({
      page,
    }) => {
      const basePage = new BasePage(page);
      await basePage.gotoHome();
      const searchPage = new SearchPage(page);
      await searchPage.search(data.keyword);

      if (data.expectResults) {
        const count = await searchPage.itemList.count();
        expect(count).toBeGreaterThan(0);
      } else {
        await expect(searchPage.noResult).toContainText(
          "No products were found that matched your criteria."
        );
      }
    });
  }
});
