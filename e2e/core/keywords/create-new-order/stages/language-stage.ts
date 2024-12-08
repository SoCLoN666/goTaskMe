import { Page } from "@playwright/test";
import { NewOrderLanguageIds } from "e2e/locators/create-new-order/language-stage-ids";
import { NewOrderLanguageTitleType } from "e2e/core/types/create-order-types";

export class NewOrderLanguageKeywords {
  public static Ids: NewOrderLanguageIds;

  public static setPage(page: Page): void {
    NewOrderLanguageKeywords.Ids = new NewOrderLanguageIds(page);
  }

  public static async selectLanguage(languageTitle: NewOrderLanguageTitleType): Promise<void> {
    await NewOrderLanguageKeywords.Ids.getLanguageByTitle(languageTitle).click();
  }
}
