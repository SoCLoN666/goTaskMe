import { SidebarKeywords } from "@e2e-keywords/sidebar-keywords";
import { Page } from "@playwright/test";

export class SidebarOperationsHandler {
  public constructor(
    protected readonly page: Page,
    protected readonly sidebarKeyword: SidebarKeywords
  ) {}
}
