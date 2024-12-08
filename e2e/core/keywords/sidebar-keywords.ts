import { Page } from "@playwright/test";
import { SidebarIds } from "../locators/sidebar-locators";

export class SidebarKeywords {
  public static Ids: SidebarIds;

  public static setPage(page: Page): void {
    SidebarKeywords.Ids = new SidebarIds(page);
  }
}
