import { Page } from "@playwright/test";
import { NewOrderContentTypeIds } from "e2e/core/locators/create-new-order/content-type-stage-ids";

export class NewOrderContentTypeKeywords {
  public static Ids: NewOrderContentTypeIds;

  public static setPage(page: Page): void {
    NewOrderContentTypeKeywords.Ids = new NewOrderContentTypeIds(page);
  }

  public static async selectContentType(title: string): Promise<void> {
    await NewOrderContentTypeKeywords.Ids.selectContentDropdownBtn.click();
    await NewOrderContentTypeKeywords.Ids.selectContentInput.fill(title);
    await NewOrderContentTypeKeywords.Ids.getContentTypeByTitle(title).click();
  }
}
