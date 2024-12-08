import { Locator, Page } from "@playwright/test";
import { NewOrderLanguageTitleType } from "e2e/types/create-order-types";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export class NewOrderLanguageIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }

  public getLanguageByTitle(title: NewOrderLanguageTitleType): Locator {
    return this.page.getByText(title, { exact: true });
  }
}
