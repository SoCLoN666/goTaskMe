import { Page } from "@playwright/test";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export class NewOrderSizeIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }

  public readonly minusBtn = this.page.locator("button", {
    has: this.page.locator('[name="minus"]'),
  });

  public readonly plusBtn = this.page.locator("button", {
    has: this.page.locator('[name="plus"]'),
  });

  public readonly input = this.page
    .locator("create-order-form-input-card", { hasText: "Slides" })
    .locator("input");

  public readonly nextBtn = this.nextButton;
}
