import { Locator, Page } from "@playwright/test";
import { MyOrdersPageIds } from "../locators/my-orders-page-locators";

export class MyOrdersPageKeywords {
  public static Ids: MyOrdersPageIds;

  public static setPage(page: Page) {
    MyOrdersPageKeywords.Ids = new MyOrdersPageIds(page);
  }

  public static async selectAddNewOrder(): Promise<void> {
    await MyOrdersPageKeywords.Ids.newOrderBtn.waitFor();
    await MyOrdersPageKeywords.Ids.newOrderBtn.click();
  }

  public static async openOrder(topic: string, idx = 0): Promise<void> {
    const order = this.getListItem(topic, idx);

    await order.waitFor();
    await order.click();
  }

  public static getListItem(topic: string, idx = 0): Locator {
    return MyOrdersPageKeywords.Ids.getListItem(topic).nth(idx);
  }
}
