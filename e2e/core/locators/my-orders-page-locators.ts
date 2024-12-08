import { Locator, Page } from "@playwright/test";

export class MyOrdersPageIds {
  public constructor(protected readonly page: Page) {}

  public newOrderBtn = this.page.getByRole("button", { name: "New order" }).nth(0);

  public getListItem(topic: string): Locator {
    return this.page.locator("nz-list-item", { hasText: topic });
  }
}
