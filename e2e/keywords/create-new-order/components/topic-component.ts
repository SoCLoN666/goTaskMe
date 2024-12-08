import { Page } from "@playwright/test";
import { CreateNewOrderTopicStageIds } from "e2e/locators/create-new-order/topic-stage-ids";

export class CreateNewOrderTopicComponentKeywords {
  public Ids: CreateNewOrderTopicStageIds;

  public constructor(protected readonly page: Page) {
    this.Ids = new CreateNewOrderTopicStageIds(page);
  }

  public async fillTopicName(name: string): Promise<void> {
    await this.Ids.nameYourTopicInput.waitFor();
    await this.Ids.nameYourTopicInput.fill(name); // odd, but fill does not work
  }

  public async goNext(): Promise<void> {
    await this.Ids.nextBtn.click();
  }
}
