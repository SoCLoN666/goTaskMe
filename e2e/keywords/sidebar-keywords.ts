import { Page } from "@playwright/test";
import { SidebarIds } from "e2e/locators/sidebar-locators";

export class SidebarKeywords {
  private sidebarIds: SidebarIds;

  public constructor(protected readonly page: Page) {
    this.sidebarIds = new SidebarIds(page);
  }

  public get Ids(): SidebarIds {
    return (this.sidebarIds = this.sidebarIds ?? new SidebarIds(this.page));
  }
}
