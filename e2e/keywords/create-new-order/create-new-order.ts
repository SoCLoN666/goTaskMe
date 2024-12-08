import { Page } from "@playwright/test";
import { NewOrderContentRequirementsKeywords } from "./stages/content-requirements-stage";
import { NewOrderContentTypeKeywords } from "./stages/content-type-stage";
import { NewOrderDeadlineKeywords } from "./stages/deadline-stage";
import { NewOrderLanguageKeywords } from "./stages/language-stage";
import { NewOrderConfirmationKeywords } from "./stages/order-confirmation-stage";
import { NewOrderServiceKeywords } from "./stages/service-stage";
import { NewOrderSizeKeywords } from "./stages/size-stage";
import { NewOrderThemeKeywords } from "./stages/theme-stage";
import { NewOrderTopicKeywords } from "./stages/topic-stage";

export class CreateNewOrderKeywords {
  private static page: Page;

  public static setPage(page: Page) {
    CreateNewOrderKeywords.page = page;
  }

  private static initializeStage<T>(stage: T): T {
    (stage as any).setPage(CreateNewOrderKeywords.page);

    return stage;
  }

  public static get ContentTypeStage(): typeof NewOrderContentTypeKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderContentTypeKeywords);
  }

  public static get ServiceStage(): typeof NewOrderServiceKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderServiceKeywords);
  }

  public static get LanguageStage(): typeof NewOrderLanguageKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderLanguageKeywords);
  }

  public static get SizeStage(): typeof NewOrderSizeKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderSizeKeywords);
  }

  public static get DeadlineStage(): typeof NewOrderDeadlineKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderDeadlineKeywords);
  }

  public static get TopicStage(): typeof NewOrderTopicKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderTopicKeywords);
  }

  public static get ThemeStage(): typeof NewOrderThemeKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderThemeKeywords);
  }

  public static get ContentRequirementsStage(): typeof NewOrderContentRequirementsKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderContentRequirementsKeywords);
  }

  public static get ConfirmationStage(): typeof NewOrderConfirmationKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderConfirmationKeywords);
  }
}
