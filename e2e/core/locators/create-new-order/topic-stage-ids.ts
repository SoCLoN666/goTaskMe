import { Page } from "@playwright/test";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export class NewOrderTopicIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }

  public readonly nameYourTopicInput = this.page
    .locator("create-order-form-input-card", { hasText: "Topic" })
    .locator("input");

  public readonly saveBtn = this.page.getByRole("button", { name: "Save" });

  public readonly nextBtn = this.nextButton;
}
