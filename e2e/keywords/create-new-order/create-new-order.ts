import { Page } from "@playwright/test";
import { CreateNewOrderContentRequirementsComponentKeywords } from "./components/content-requirements-component";
import { CreateNewOrderContentTypeComponentKeywords } from "./components/content-type-component";
import { CreateNewOrderDeadlineComponentKeywords } from "./components/deadline-component";
import { CreateNewOrderLanguageComponentKeywords } from "./components/language-component";
import { CreateNewOrderConfirmationComponentKeywords } from "./components/order-confirmation-component";
import { CreateNewOrderServiceComponentKeywords } from "./components/service-component";
import { CreateNewOrderSizeComponentKeywords } from "./components/size-component";
import { CreateNewOrderThemeComponentKeywords } from "./components/theme-component";
import { CreateNewOrderTopicComponentKeywords } from "./components/topic-component";

export class CreateNewOrderKeywords {
  private contentTypeStageComponent: CreateNewOrderContentTypeComponentKeywords;

  private serviceStageComponent: CreateNewOrderServiceComponentKeywords;

  private languageStageComponent: CreateNewOrderLanguageComponentKeywords;

  private sizeStageComponent: CreateNewOrderSizeComponentKeywords;

  private deadlineStageComponent: CreateNewOrderDeadlineComponentKeywords;

  private topicStageComponent: CreateNewOrderTopicComponentKeywords;

  private themeStageComponent: CreateNewOrderThemeComponentKeywords;

  private contentRequirementsStageComponent: CreateNewOrderContentRequirementsComponentKeywords;

  private confirmationStageComponent: CreateNewOrderConfirmationComponentKeywords;

  public constructor(protected readonly page: Page) {}

  public get contentTypeStage(): CreateNewOrderContentTypeComponentKeywords {
    return (this.contentTypeStageComponent =
      this.contentTypeStageComponent ?? new CreateNewOrderContentTypeComponentKeywords(this.page));
  }

  public get serviceStage(): CreateNewOrderServiceComponentKeywords {
    return (this.serviceStageComponent =
      this.serviceStageComponent ?? new CreateNewOrderServiceComponentKeywords(this.page));
  }

  public get languageStage(): CreateNewOrderLanguageComponentKeywords {
    return (this.languageStageComponent =
      this.languageStageComponent ?? new CreateNewOrderLanguageComponentKeywords(this.page));
  }

  public get sizeStage(): CreateNewOrderSizeComponentKeywords {
    return (this.sizeStageComponent =
      this.sizeStageComponent ?? new CreateNewOrderSizeComponentKeywords(this.page));
  }

  public get deadlineStage(): CreateNewOrderDeadlineComponentKeywords {
    return (this.deadlineStageComponent =
      this.deadlineStageComponent ?? new CreateNewOrderDeadlineComponentKeywords(this.page));
  }

  public get topicStage(): CreateNewOrderTopicComponentKeywords {
    return (this.topicStageComponent =
      this.topicStageComponent ?? new CreateNewOrderTopicComponentKeywords(this.page));
  }

  public get themeStage(): CreateNewOrderThemeComponentKeywords {
    return (this.themeStageComponent =
      this.themeStageComponent ?? new CreateNewOrderThemeComponentKeywords(this.page));
  }

  public get contentRequirementsStage(): CreateNewOrderContentRequirementsComponentKeywords {
    return (this.contentRequirementsStageComponent =
      this.contentRequirementsStageComponent ??
      new CreateNewOrderContentRequirementsComponentKeywords(this.page));
  }

  public get confirmationStage(): CreateNewOrderConfirmationComponentKeywords {
    return (this.confirmationStageComponent =
      this.confirmationStageComponent ??
      new CreateNewOrderConfirmationComponentKeywords(this.page));
  }
}
