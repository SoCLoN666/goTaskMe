import { Page } from "@playwright/test";
import { MyOrdersPageKeywords } from "e2e/core/keywords/my-orders-page";
import { MyOrdersPageIds } from "e2e/core/locators/my-orders-page-locators";
import { WaitUntilType } from "e2e/core/types/wait-until";
import { CustomerOrdersPageOperationsHandler } from "./customer-orders-page-operator";

export class OrdersDraftsPageOperationsHandler extends CustomerOrdersPageOperationsHandler {
  public constructor(protected readonly page: Page) {
    super(page);
    MyOrdersPageKeywords.setPage(page);
  }

  public get Ids(): MyOrdersPageIds {
    return MyOrdersPageKeywords.Ids;
  }

  public async openPage(waitUntil: WaitUntilType = "load"): Promise<void> {
    await super.openPageOn("Drafts", waitUntil);
  }

  public async selectAddNewOrder(): Promise<void> {
    await super.selectAddNewOrder();
  }

  public async openOrder(topic: string, idx = 0): Promise<void> {
    await super.openOrder(topic, idx);
  }

  public async discardDraft(topic: string, idx = 0): Promise<void> {
    const threeDotsBtn = MyOrdersPageKeywords.getListItem(topic, idx).locator("button");
    await threeDotsBtn.hover();

    const discardDraftBtn = this.page.getByText("Discard draft");

    await discardDraftBtn.click();

    await this.page.locator("button", { hasText: "Delete" }).click();
  }
}
