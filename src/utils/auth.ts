import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export async function login(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login();
}
