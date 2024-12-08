import { CustomerOrdersPageKeywords } from "@e2e-keywords/customer-orders-page";
import { NavigateKeywords } from "@e2e-keywords/navigate-to-app";
import { SidebarKeywords } from "@e2e-keywords/sidebar-keywords";
import { Page } from "@playwright/test";

type OrderType = "Active" | "Drafts" | "Closed";

export class CustomerOrdersPageOperationsHandler {
  public constructor(
    protected readonly page: Page,
    protected readonly navigateKeywords: NavigateKeywords,
    protected customerOrdersPageKeywords: CustomerOrdersPageKeywords,
    protected sidebarKeywords: SidebarKeywords
  ) {}

  public async openPageOn(orderType: OrderType, waitUntil: "commit" | "load" = "load") {
    const orderTypePath = this.getPathBasedOnOrderType(orderType);
    this.navigateKeywords.openAppOn(`/customer/orders${orderTypePath}`, waitUntil);

    await this.sidebarKeywords.Ids.sidebarId.waitFor();
  }

  private getPathBasedOnOrderType(orderType: OrderType): string {
    switch (orderType) {
      case "Active":
        return "/open";
      case "Drafts":
        return "/draft";
      case "Closed":
        return "/closed";
    }
  }

  public async selectAddNewOrder(): Promise<void> {
    await this.customerOrdersPageKeywords.selectAddNewOrder();
  }

  public async openOrder(topic: string, idx = 0): Promise<void> {
    await this.customerOrdersPageKeywords.openOrder(topic, idx);
  }

  // public getListItem(topic: string, idx = 0): Locator {
  //   return this.customerOrdersPageKeywords.Ids.getListItem(topic).nth(idx);
  // }
}
