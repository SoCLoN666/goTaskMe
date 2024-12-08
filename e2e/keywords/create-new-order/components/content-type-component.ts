import { Page } from "@playwright/test";
import { CreateNewOrderContentTypeStageIds } from "e2e/locators/create-new-order/content-type-stage-ids";

export class CreateNewOrderContentTypeComponentKeywords {
  public Ids: CreateNewOrderContentTypeStageIds;

  public constructor(protected readonly page: Page) {
    this.Ids = new CreateNewOrderContentTypeStageIds(page);
  }

  public async selectContentType(title: string): Promise<void> {
    await this.Ids.selectContentDropdownBtn.click();
    await this.Ids.selectContentInput.fill(title);
    await this.Ids.getContentTypeByTitle(title).click();
  }
}
