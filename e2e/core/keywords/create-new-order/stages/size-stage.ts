import { Page } from "@playwright/test";
import { NewOrderSizeIds } from "e2e/core/locators/create-new-order/size-stage-ids";

export class NewOrderSizeKeywords {
  private static Ids: NewOrderSizeIds;

  public static setPage(page: Page): void {
    NewOrderSizeKeywords.Ids = new NewOrderSizeIds(page);
  }

  public static async changeNumberOfSlidesTo(amount: number): Promise<void> {
    await NewOrderSizeKeywords.Ids.input.fill(""); // clear
    if (amount < 1) {
      console.warn("amount should not be less then 1. Setting slides amount to 1");
      await NewOrderSizeKeywords.Ids.input.fill("1");
    } else {
      await NewOrderSizeKeywords.Ids.input.fill(amount.toString());
    }
  }

  public static async goNext(): Promise<void> {
    await NewOrderSizeKeywords.Ids.nextBtn.click();
  }
}
