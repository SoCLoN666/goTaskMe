import { CreateNewOrderKeywords } from "e2e/keywords/create-new-order/create-new-order";
import { NavigateKeywords } from "e2e/keywords/navigate-to-app";
import { Page } from "@playwright/test";
import { ServiceTitlesTypes } from "e2e/locators/create-new-order/service-stage-ids";
import { NewOrderLanguageTitleType } from "e2e/types/create-order-types";

export class CreateNewOrderOperationHandler {
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
    await CreateNewOrderKeywords.ContentTypeStage.selectContentType(options.contentType);
    await CreateNewOrderKeywords.ServiceStage.selectService(options.service);
    await CreateNewOrderKeywords.LanguageStage.selectLanguage(options.language);
    await CreateNewOrderKeywords.SizeStage.changeNumberOfSlidesTo(options.numberOfSlides);
    await CreateNewOrderKeywords.SizeStage.goNext();
    await CreateNewOrderKeywords.DeadlineStage.selectDateAndTime();
    await CreateNewOrderKeywords.DeadlineStage.goNext();
    await CreateNewOrderKeywords.TopicStage.fillTopicName(options.topicName);
    await CreateNewOrderKeywords.TopicStage.goNext();
    await CreateNewOrderKeywords.ThemeStage.chooseYourTheme(options.theme);
    await CreateNewOrderKeywords.ContentRequirementsStage.fillContentRequirements(
      options.contentRequirements
    );
    await CreateNewOrderKeywords.ContentRequirementsStage.goNext();
    await CreateNewOrderKeywords.ConfirmationStage.confirm();
  }

  public async closeDraft(): Promise<void> {
    await this.page
      .locator('[class="ant-btn ant-btn-icon-only ant-btn-color-7 ant-btn-lg --r-xs-max--d-none"]')
      .last()
      .click();
  }
}
