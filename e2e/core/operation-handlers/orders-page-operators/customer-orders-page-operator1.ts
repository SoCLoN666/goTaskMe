import { Page } from "@playwright/test";
import { MyOrdersPageKeywords } from "e2e/core/keywords/my-orders-page";
import { NavigateKeywords } from "e2e/core/keywords/navigate-to-app";
import { SidebarKeywords } from "e2e/core/keywords/sidebar-keywords";
import { MyOrdersPageIds } from "e2e/core/locators/my-orders-page-locators";
import { OrderType } from "e2e/core/types/create-order-types";
import { WaitUntilType } from "e2e/core/types/wait-until";

export class CustomerOrdersPageOperationsHandler {
  public constructor(protected readonly page: Page) {
    NavigateKeywords.setPage(page);
    SidebarKeywords.setPage(page);
    MyOrdersPageKeywords.setPage(page);
  }

  public get Ids(): MyOrdersPageIds {
    return MyOrdersPageKeywords.Ids;
  }

  public async openPageOn(orderType: OrderType, waitUntil: WaitUntilType = "load") {
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
