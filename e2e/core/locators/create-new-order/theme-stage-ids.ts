import { Locator, Page } from "@playwright/test";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export class NewOrderThemeIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }

  public readonly selectThemeFromSearchInput = this.page.locator("nz-form-control", {
    has: this.page.getByText("Choose your theme"),
  });

  public getThemeByTitle(title: string): Locator {
    return this.page
      .locator("nz-option-item", { hasText: title })
      .or(this.page.locator("div.ant-select-item-option", { hasText: title }));
  }

  public readonly nextBtn = this.nextButton;
}
