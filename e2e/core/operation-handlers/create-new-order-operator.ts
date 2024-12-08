import { Page } from "@playwright/test";
import { NewOrderLanguageTitleType } from "e2e/core/types/create-order-types";
import { CreateNewOrderKeywords } from "../keywords/create-new-order/create-new-order";
import { NavigateKeywords } from "../keywords/navigate-to-app";
import { ServiceTitlesTypes } from "../locators/create-new-order/service-stage-ids";

export class CreateNewOrderOperationsHandler {
  public constructor(protected readonly page: Page) {
    NavigateKeywords.setPage(page);
    CreateNewOrderKeywords.setPage(page);
  }

  public get Stage(): typeof CreateNewOrderKeywords {
    return CreateNewOrderKeywords;
  }

  public async openPage(waitUntil: "commit" | "load" = "load"): Promise<void> {
    NavigateKeywords.openAppOn("/customer/draft/new", waitUntil);
  }

  public async createNewOrder(options: {
    contentType: string;
    service: ServiceTitlesTypes;
    language: NewOrderLanguageTitleType;
    numberOfSlides: number;
    topicName: string;
    theme: string;
    contentRequirements: string;
  }): Promise<void> {
    await CreateNewOrderKeywords.ContentType.selectContentType(options.contentType);
    await CreateNewOrderKeywords.Service.selectService(options.service);
    await CreateNewOrderKeywords.Language.selectLanguage(options.language);
    await CreateNewOrderKeywords.Size.changeNumberOfSlidesTo(options.numberOfSlides);
    await CreateNewOrderKeywords.Size.goNext();
    await CreateNewOrderKeywords.Deadline.selectDateAndTime();
    await CreateNewOrderKeywords.Deadline.goNext();
    await CreateNewOrderKeywords.Topic.fillTopicName(options.topicName);
    await CreateNewOrderKeywords.Topic.goNext();
    await CreateNewOrderKeywords.Theme.chooseYourTheme(options.theme);
    await CreateNewOrderKeywords.ContentRequirements.fillContentRequirements(
      options.contentRequirements
    );
    await CreateNewOrderKeywords.ContentRequirements.goNext();
    await CreateNewOrderKeywords.Confirmation.confirm();
  }

  public async closeDraft(): Promise<void> {
    await this.page
      .locator('[class="ant-btn ant-btn-icon-only ant-btn-color-7 ant-btn-lg --r-xs-max--d-none"]')
      .last()
      .click();
  }
}
