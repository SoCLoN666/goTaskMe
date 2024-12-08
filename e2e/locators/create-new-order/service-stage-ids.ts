import { Locator, Page } from "@playwright/test";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export type ServiceTitlesTypes = "Writing" | "Rewriting" | "Editing";

export class CreateNewOrderServiceStageIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }

  public getServiceByTitle(title: ServiceTitlesTypes): Locator {
    return this.page.getByText(title, { exact: true });
  }
}
