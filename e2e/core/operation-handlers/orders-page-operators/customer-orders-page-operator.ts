import { MyOrdersPageKeywords } from "@e2e-keywords/my-orders-page";
import { NavigateKeywords } from "e2e/keywords/navigate-to-app";
import { SidebarKeywords } from "e2e/keywords/sidebar-keywords";
import { Page } from "@playwright/test";
import { OrderType } from "e2e/core/types/create-order-types";

export class CustomerOrdersPageOperationsHandler {
  public constructor(protected readonly page: Page) {
    NavigateKeywords.setPage(page);
    SidebarKeywords.setPage(page);
    MyOrdersPageKeywords.setPage(page);
  }

  public async openPageOn(orderType: OrderType, waitUntil: "commit" | "load" = "load") {
    const orderTypePath = this.getPathBasedOnOrderType(orderType);
    NavigateKeywords.openAppOn(`/customer/orders${orderTypePath}`, waitUntil);

    await SidebarKeywords.Ids.sidebarId.waitFor();
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
    await MyOrdersPageKeywords.selectAddNewOrder();
  }

  public async openOrder(topic: string, idx = 0): Promise<void> {
    await MyOrdersPageKeywords.openOrder(topic, idx);
  }
}
