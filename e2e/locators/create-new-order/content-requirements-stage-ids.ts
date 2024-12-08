import { Page } from "@playwright/test";
import { CreateNewOrderCommonIds } from "./create-new-order-common";

export class CreateNewOrderContentRequirementsStageIds extends CreateNewOrderCommonIds {
  public constructor(protected readonly page: Page) {
    super(page);
  }

  public readonly contentRequirementsTextEditorId = this.page.locator("wysiwyg-text-editor");

  public readonly textBodyElement = this.contentRequirementsTextEditorId.locator(
    '[class="angular-editor-textarea"]'
  );

  public readonly nextBtn = this.nextButton;
}
