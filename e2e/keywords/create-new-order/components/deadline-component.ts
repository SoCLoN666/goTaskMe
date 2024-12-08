import { Page } from "@playwright/test";
import { CreateNewOrderDeadlineStageIds } from "e2e/locators/create-new-order/deadline-stage-ids";
import { CreateNewOrderSizeStageIds } from "e2e/locators/create-new-order/size-stage-ids";

export class CreateNewOrderDeadlineComponentKeywords {
  public Ids: CreateNewOrderDeadlineStageIds;

  public constructor(protected readonly page: Page) {
    this.Ids = new CreateNewOrderDeadlineStageIds(page);
  }

  /**
   * TO DO: this is simple method that selects only last available day from dropdown
   * to make it work with any specified data, more code needs to be added
   * since test task does not require that, i think this would be to much of extra work over this
   */
  public async selectDateAndTime(): Promise<void> {
    await this.Ids.datePickerBtn.click();
    await this.Ids.lastDateInDateRangePopup.click(); // default time is automatically selected, so i skiped that step
  }

  public async goNext(): Promise<void> {
    await this.Ids.nextBtn.click();
  }
}
