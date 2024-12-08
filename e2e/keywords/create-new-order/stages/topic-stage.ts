import { Page } from "@playwright/test";
import { NewOrderTopicIds } from "e2e/locators/create-new-order/topic-stage-ids";

export class NewOrderTopicKeywords {
  public static Ids: NewOrderTopicIds;

  public static setPage(page: Page): void {
    NewOrderTopicKeywords.Ids = new NewOrderTopicIds(page);
  }

  public static async fillTopicName(name: string): Promise<void> {
    await NewOrderTopicKeywords.Ids.nameYourTopicInput.waitFor();
    await NewOrderTopicKeywords.Ids.nameYourTopicInput.fill(name); // odd, but fill does not work
  }

  public static async goNext(): Promise<void> {
    await NewOrderTopicKeywords.Ids.nextBtn.click();
  }
}
