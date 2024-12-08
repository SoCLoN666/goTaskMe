import { Locator, Page } from "@playwright/test";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export type LanguageTitleType = "English (US)" | "English (UK)" | "Spanish (ES)" | "French (FR)";

export class CreateNewOrderLanguageStageIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }

  public getLanguageByTitle(title: LanguageTitleType): Locator {
    return this.page.getByText(title, { exact: true });
  }
}
