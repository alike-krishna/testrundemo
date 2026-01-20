import { test, expect, Locator } from "@playwright/test";
import { clear } from "node:console";
import { SearchPage } from "@pages/SearchPage.js";
import searchData from "@data/SearchData.json";
import { login } from "@utils/auth";

test.describe("Search functionality - data driven", () => {
  for (const data of searchData) {
    test(`Search functionality (valid/invalid/partial keywords, special characters). @regression "${data.keyword}"`, async ({
      page,
    }) => {
      await login(page);
      const searchPage = new SearchPage(page);
      await searchPage.search(data.keyword);

      if (data.expectResults) {
        const count = await searchPage.itemList.count();
        expect(count).toBeGreaterThan(0);
      } else {
        await expect(searchPage.noResult).toContainText("No products found.");
      }
    });
  }
});
