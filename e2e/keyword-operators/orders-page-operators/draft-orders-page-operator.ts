import { CustomerOrdersPageKeywords } from "@e2e-keywords/customer-orders-page";
import { Page } from "@playwright/test";

export class OrdersDraftsPageOperationsHandler {
  private orderPageK: CustomerOrdersPageKeywords;

  public constructor(protected readonly page: Page) {}

  public get orderPageKeywords(): CustomerOrdersPageKeywords {
    return (this.orderPageK = this.orderPageK ?? new CustomerOrdersPageKeywords(this.page));
  }

  public async discardDraft(topic: string, idx = 0): Promise<void> {
    const threeDotsBtn = this.orderPageKeywords.getListItem(topic, idx).locator("button");
    await threeDotsBtn.hover();

    const discardDraftBtn = this.page.getByText("Discard draft");

    await discardDraftBtn.click();

    await this.page.locator("button", { hasText: "Delete" }).click();
  }
}
