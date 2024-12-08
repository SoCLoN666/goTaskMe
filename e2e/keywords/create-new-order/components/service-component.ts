import { Page } from "@playwright/test";
import {
  CreateNewOrderServiceStageIds,
  ServiceTitlesTypes,
} from "e2e/locators/create-new-order/service-stage-ids";

export class CreateNewOrderServiceComponentKeywords {
  public Ids: CreateNewOrderServiceStageIds;

  public constructor(protected readonly page: Page) {
    this.Ids = new CreateNewOrderServiceStageIds(page);
  }

  public async selectService(serviceTitle: ServiceTitlesTypes): Promise<void> {
    await this.Ids.getServiceByTitle(serviceTitle).click();
  }
}
