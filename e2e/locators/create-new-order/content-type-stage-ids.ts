import { Locator, Page } from "@playwright/test";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export class CreateNewOrderContentTypeStageIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }
  public selectContentDropdownBtn = this.page.locator('[id="product"]');

  public readonly selectContentInput = this.selectContentDropdownBtn.locator("input");

  public getContentTypeByTitle(title: string): Locator {
    return this.page.getByText(title, { exact: true });
  }
}
