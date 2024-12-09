import { Page } from "@playwright/test";
import { appUrl } from "e2e/environment";

export class NavigateKeywords {
  private static page: Page;

  public static async setPage(page: Page) {
    NavigateKeywords.page = page;
  }

  public static async openAppOn(endpoint: string, waitUntil: "load" | "commit"): Promise<void> {
    await NavigateKeywords.page.goto(appUrl + endpoint, { waitUntil });
  }
}
