import { Page } from "@playwright/test";

export class CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {}

  public readonly createOrderGrid = this.page.locator("create-order-grid");

  protected readonly nextButton = this.page.locator("button", { hasText: "Next" });
}
