import { Page } from "@playwright/test";
import { CreateNewOrderSizeStageIds } from "e2e/locators/create-new-order/size-stage-ids";

export class CreateNewOrderSizeComponentKeywords {
  private sizeStageIds: CreateNewOrderSizeStageIds;

  public constructor(protected readonly page: Page) {
    this.sizeStageIds = new CreateNewOrderSizeStageIds(page);
  }

  public get Ids(): CreateNewOrderSizeStageIds {
    return (this.sizeStageIds = this.sizeStageIds ?? new CreateNewOrderSizeStageIds(this.page));
  }

  public async changeNumberOfSlidesTo(amount: number): Promise<void> {
    await this.Ids.input.fill(""); // clear
    if (amount < 1) {
      console.warn("amount should not be less then 1. Setting slides amount to 1");
      await this.Ids.input.fill("1");
    } else {
      await this.Ids.input.fill(amount.toString());
    }
  }

  public async goNext(): Promise<void> {
    await this.Ids.nextBtn.click();
  }
}
