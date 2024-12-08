import { Page } from "@playwright/test";
import { CreateNewOrderContentRequirementsStageIds } from "e2e/locators/create-new-order/content-requirements-stage-ids";

export class CreateNewOrderContentRequirementsComponentKeywords {
  public Ids: CreateNewOrderContentRequirementsStageIds;

  public constructor(protected readonly page: Page) {
    this.Ids = new CreateNewOrderContentRequirementsStageIds(page);
  }

  public async fillContentRequirements(text: string): Promise<void> {
    await this.Ids.textBodyElement.click();

    await this.page.keyboard.type(text, { delay: 100 }); // this element is not input, so fill won"t work
  }

  public async goNext(): Promise<void> {
    await this.Ids.nextBtn.click();
  }
}
