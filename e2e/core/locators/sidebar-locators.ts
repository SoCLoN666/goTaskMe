import { Page } from "@playwright/test";

export class SidebarIds {
  public sidebarId = this.page.locator("sidebar");

  public constructor(protected readonly page: Page) {}
}
