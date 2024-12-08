import { Page } from "@playwright/test";
import { NewOrderDeadlineIds } from "e2e/core/locators/create-new-order/deadline-stage-ids";

export class NewOrderDeadlineKeywords {
  public static Ids: NewOrderDeadlineIds;

  public static setPage(page: Page): void {
    NewOrderDeadlineKeywords.Ids = new NewOrderDeadlineIds(page);
  }

  /**
   * TO DO: this is simple method that selects only last available day from dropdown
   * to make it work with any specified data, more code needs to be added
   * since test task does not require that, i think this would be to much of extra work over this
   */
  public static async selectDateAndTime(): Promise<void> {
    await NewOrderDeadlineKeywords.Ids.datePickerBtn.click();
    await NewOrderDeadlineKeywords.Ids.lastDateInDateRangePopup.click(); // default time is automatically selected, so i skiped that step
  }

  public static async goNext(): Promise<void> {
    await NewOrderDeadlineKeywords.Ids.nextBtn.click();
  }
}
