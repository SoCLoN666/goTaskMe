import { Locator, Page } from "@playwright/test";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export class CreateNewOrderConfirmationStageIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }

  public readonly discardDraftBtn = this.page.getByRole("button", { name: "Discard draft" });

  public readonly confirmBtn = this.page.locator("button", { hasText: "Confirm" });

  public readonly confirmationError = this.page.locator('[class*="error-body"]');

  public readonly orderForm = this.page.locator("create-order-form");

  public readonly closeForm = this.page
    .locator('[class="ant-btn ant-btn-icon-only ant-btn-color-7 ant-btn-lg --r-xs-max--d-none"]')
    .last();
}
