import { Page } from "@playwright/test";
import { MyOrdersPageKeywords } from "e2e/core/keywords/my-orders-page";
import { MyOrdersPageIds } from "e2e/core/locators/my-orders-page-locators";

export class OrdersDraftsPageOperationsHandler {
  public constructor(protected readonly page: Page) {
    MyOrdersPageKeywords.setPage(page);
  }

  public get Ids(): MyOrdersPageIds {
    return MyOrdersPageKeywords.Ids;
  }

  public async discardDraft(topic: string, idx = 0): Promise<void> {
    const threeDotsBtn = MyOrdersPageKeywords.getListItem(topic, idx).locator("button");
    await threeDotsBtn.hover();

    const discardDraftBtn = this.page.getByText("Discard draft");

    await discardDraftBtn.click();

    await this.page.locator("button", { hasText: "Delete" }).click();
  }
}