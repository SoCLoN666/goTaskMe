import { Locator, Page } from "@playwright/test";
import { CustomerOrdersPageIds } from "e2e/locators/customer-orders-page-locators";

export class CustomerOrdersPageKeywords {
  private customerPageIds: CustomerOrdersPageIds;

  public constructor(protected readonly page: Page) {
    this.customerPageIds = new CustomerOrdersPageIds(page);
  }

  public get Ids(): CustomerOrdersPageIds {
    return (this.customerPageIds = this.customerPageIds ?? new CustomerOrdersPageIds(this.page));
  }

  public async selectAddNewOrder(): Promise<void> {
    await this.customerPageIds.newOrderBtn.waitFor();
    await this.customerPageIds.newOrderBtn.click();
  }

  public async openOrder(topic: string, idx = 0): Promise<void> {
    const order = this.getListItem(topic, idx);

    await order.waitFor();
    await order.click();
  }

  public getListItem(topic: string, idx = 0): Locator {
    return this.customerPageIds.getListItem(topic).nth(idx);
  }
}
