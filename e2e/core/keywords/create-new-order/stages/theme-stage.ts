import { Page } from "@playwright/test";
import { NewOrderThemeIds } from "e2e/core/locators/create-new-order/theme-stage-ids";

export class NewOrderThemeKeywords {
  private static page: Page;

  public static Ids: NewOrderThemeIds;

  public static setPage(page: Page): void {
    NewOrderThemeKeywords.page = page;
    NewOrderThemeKeywords.Ids = new NewOrderThemeIds(page);
  }

  public static async chooseYourTheme(title: string): Promise<void> {
    await NewOrderThemeKeywords.Ids.selectThemeFromSearchInput.click();
    await NewOrderThemeKeywords.page.keyboard.type(title); // this element is not input, we can't use fill
    await NewOrderThemeKeywords.Ids.getThemeByTitle(title).click();
  }

  public static async goNext(): Promise<void> {
    await NewOrderThemeKeywords.Ids.nextBtn.click();
  }
}
