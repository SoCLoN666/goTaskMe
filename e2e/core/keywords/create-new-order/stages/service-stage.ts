import { Page } from "@playwright/test";
import {
  NewOrderServiceIds,
  ServiceTitlesTypes,
} from "e2e/core/locators/create-new-order/service-stage-ids";

export class NewOrderServiceKeywords {
  public static Ids: NewOrderServiceIds;

  public static setPage(page: Page): void {
    NewOrderServiceKeywords.Ids = new NewOrderServiceIds(page);
  }

  public static async selectService(serviceTitle: ServiceTitlesTypes): Promise<void> {
    await NewOrderServiceKeywords.Ids.getServiceByTitle(serviceTitle).click();
  }
}
