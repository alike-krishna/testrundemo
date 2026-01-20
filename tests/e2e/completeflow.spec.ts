import { test, expect } from "@playwright/test";

//👉 E2E tests validate complete flows from start to finish, not just isolated features.
test("User searches for a product → navigates to product detail → adds to cart → checks out. @e2e", async ({
  page,
}) => {});

test("User registers → logs in → adds product to wishlist → logs out. @e2e", async ({
  page,
}) => {});

test("User changes currency → searches product → verifies updated price → adds to cart. @e2e", async ({
  page,
}) => {});

test("User navigates via top menu → selects category → adds product → verifies cart update. @e2e", async ({
  page,
}) => {});
