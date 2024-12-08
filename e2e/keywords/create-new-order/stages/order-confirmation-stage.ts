import { Page } from "@playwright/test";
import { NewOrderConfirmationIds } from "e2e/locators/create-new-order/order-confirmation-stage-ids";

export class NewOrderConfirmationKeywords {
  public static Ids: NewOrderConfirmationIds;

  public static setPage(page: Page): void {
    NewOrderConfirmationKeywords.Ids = new NewOrderConfirmationIds(page);
  }

  public static async confirm(): Promise<void> {
    await NewOrderConfirmationKeywords.Ids.confirmBtn.click();
  }
}
