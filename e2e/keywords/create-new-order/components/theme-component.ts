import { Page } from "@playwright/test";
import { CreateNewOrderThemeStageIds } from "e2e/locators/create-new-order/theme-stage-ids";
import { CreateNewOrderTopicStageIds } from "e2e/locators/create-new-order/topic-stage-ids";

export class CreateNewOrderThemeComponentKeywords {
  public Ids: CreateNewOrderThemeStageIds;

  public constructor(protected readonly page: Page) {
    this.Ids = new CreateNewOrderThemeStageIds(page);
  }

  public async chooseYourTheme(title: string): Promise<void> {
    await this.Ids.selectThemeFromSearchInput.click();
    await this.page.keyboard.type(title); // this element is not input, we can't use fill
    await this.Ids.getThemeByTitle(title).click();
  }

  public async goNext(): Promise<void> {
    await this.Ids.nextBtn.click();
  }
}
