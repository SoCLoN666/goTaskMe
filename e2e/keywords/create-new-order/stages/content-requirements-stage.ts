import { Page } from "@playwright/test";
import { NewOrderContentRequirementsIds } from "e2e/locators/create-new-order/content-requirements-stage-ids";

export class NewOrderContentRequirementsKeywords {
  private static page: Page;

  public static Ids: NewOrderContentRequirementsIds;

  public static setPage(page: Page): void {
    NewOrderContentRequirementsKeywords.page = page;
    NewOrderContentRequirementsKeywords.Ids = new NewOrderContentRequirementsIds(page);
  }

  public static async fillContentRequirements(text: string): Promise<void> {
    await NewOrderContentRequirementsKeywords.Ids.textBodyElement.click();

    await NewOrderContentRequirementsKeywords.page.keyboard.type(text, { delay: 100 }); // this element is not input, so fill won"t work
  }

  public static async goNext(): Promise<void> {
    await NewOrderContentRequirementsKeywords.Ids.nextBtn.click();
  }
}
