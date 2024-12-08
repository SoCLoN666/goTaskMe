import { Page } from "@playwright/test";
import { CreateNewOrderConfirmationStageIds } from "e2e/locators/create-new-order/order-confirmation-stage-ids";

export class CreateNewOrderConfirmationComponentKeywords {
  public Ids: CreateNewOrderConfirmationStageIds;

  public constructor(protected readonly page: Page) {
    this.Ids = new CreateNewOrderConfirmationStageIds(page);
  }

  public async confirm(): Promise<void> {
    await this.Ids.confirmBtn.click();
  }

  public async closeDraft(): Promise<void> {
    await this.Ids.closeForm.click();
  }
}
