import { Locator, Page } from "@playwright/test";

export class CustomerOrdersPageIds {
  public constructor(protected readonly page: Page) {}

  public newOrderBtn = this.page.getByRole("button", { name: "New order" }).nth(0);

  // public listItem = this.page.locator("nz-list-item");

  public getListItem(topic: string): Locator {
    return this.page.locator("nz-list-item", { hasText: topic });
  }
}
