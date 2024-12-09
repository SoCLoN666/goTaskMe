import { Page } from "@playwright/test";
import { SidebarKeywords } from "../keywords/sidebar-keywords";

export class SidebarOperationsHandler {
  public constructor(
    protected readonly page: Page,
    protected readonly sidebarKeyword: SidebarKeywords
  ) {}
}
