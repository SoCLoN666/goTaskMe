import { Page } from "@playwright/test";
import {
  CreateNewOrderLanguageStageIds,
  LanguageTitleType,
} from "e2e/locators/create-new-order/language-stage-ids";

export class CreateNewOrderLanguageComponentKeywords {
  public Ids: CreateNewOrderLanguageStageIds;

  public constructor(protected readonly page: Page) {
    this.Ids = new CreateNewOrderLanguageStageIds(page);
  }

  public async selectLanguage(languageTitle: LanguageTitleType): Promise<void> {
    await this.Ids.getLanguageByTitle(languageTitle).click();
  }
}
