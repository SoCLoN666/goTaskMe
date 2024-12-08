import { CreateNewOrderKeywords } from "@e2e-keywords/create-new-order/create-new-order";
import { NavigateKeywords } from "@e2e-keywords/navigate-to-app";
import { Page } from "@playwright/test";
import { LanguageTitleType } from "e2e/locators/create-new-order/language-stage-ids";
import { ServiceTitlesTypes } from "e2e/locators/create-new-order/service-stage-ids";

export class CreateNewOrderOperationHandler {
  public keywords: CreateNewOrderKeywords;

  public constructor(
    protected readonly page: Page,
    protected readonly navigateKeywords: NavigateKeywords,
    createNewOrderKeywords: CreateNewOrderKeywords
  ) {
    this.keywords = createNewOrderKeywords;
  }

  public async openPage(waitUntil: "commit" | "load" = "load"): Promise<void> {
    this.navigateKeywords.openAppOn("/customer/draft/new", waitUntil);
  }

  public async createNewOrder(options: {
    contentType: string;
    service: ServiceTitlesTypes;
    language: LanguageTitleType;
    numberOfSlides: number;
    topicName: string;
    theme: string;
    contentRequirements: string;
  }): Promise<void> {
    await this.keywords.contentTypeStage.selectContentType(options.contentType);
    await this.keywords.serviceStage.selectService(options.service);
    await this.keywords.languageStage.selectLanguage(options.language);
    await this.keywords.sizeStage.changeNumberOfSlidesTo(options.numberOfSlides);
    await this.keywords.sizeStage.goNext();
    await this.keywords.deadlineStage.selectDateAndTime();
    await this.keywords.deadlineStage.goNext();
    await this.keywords.topicStage.fillTopicName(options.topicName);
    await this.keywords.topicStage.goNext();
    await this.keywords.themeStage.chooseYourTheme(options.theme);
    await this.keywords.contentRequirementsStage.fillContentRequirements(
      options.contentRequirements
    );
    await this.keywords.contentRequirementsStage.goNext();
    await this.keywords.confirmationStage.confirm();
  }
}
