import { Page } from "@playwright/test";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export class CreateNewOrderDeadlineStageIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }

  public readonly datePickerBtn = this.page.locator("nz-date-picker");

  public readonly timePickerBtn = this.page.locator("nz-time-picker");

  public readonly dateRangePopup = this.page.locator("date-range-popup");

  public readonly lastDateInDateRangePopup = this.dateRangePopup
    .locator("date-table")
    .locator("tbody")
    .locator("tr")
    .locator("td")
    .last();

  public readonly nextBtn = this.nextButton;
}
