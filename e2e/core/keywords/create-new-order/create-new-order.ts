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

  public static get ContentType(): typeof NewOrderContentTypeKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderContentTypeKeywords);
  }

  public static get Service(): typeof NewOrderServiceKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderServiceKeywords);
  }

  public static get Language(): typeof NewOrderLanguageKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderLanguageKeywords);
  }

  public static get Size(): typeof NewOrderSizeKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderSizeKeywords);
  }

  public static get Deadline(): typeof NewOrderDeadlineKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderDeadlineKeywords);
  }

  public static get Topic(): typeof NewOrderTopicKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderTopicKeywords);
  }

  public static get Theme(): typeof NewOrderThemeKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderThemeKeywords);
  }

  public static get ContentRequirements(): typeof NewOrderContentRequirementsKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderContentRequirementsKeywords);
  }

  public static get Confirmation(): typeof NewOrderConfirmationKeywords {
    return CreateNewOrderKeywords.initializeStage(NewOrderConfirmationKeywords);
  }
}
