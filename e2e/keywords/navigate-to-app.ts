import { Page } from "@playwright/test";
import { appUrl } from "e2e/environment";

export class NavigateKeywords {
  public constructor(protected readonly page: Page) {}

  public async openAppOn(endpoint: string, waitUntil: "load" | "commit"): Promise<void> {
    await this.page.goto(appUrl + endpoint, { waitUntil });
  }
}
