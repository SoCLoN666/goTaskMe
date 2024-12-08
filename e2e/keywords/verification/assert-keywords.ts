import { expect, Locator, Page } from "@playwright/test";
import { ExpectElementType, ExpectUrlType } from "e2e/types/assert-types";

export class AssertKeywords {
  public constructor(protected readonly page: Page) {}

  public expectElement(locator: Locator): ExpectElementType {
    return {
      async toBeVisible(): Promise<void> {
        await expect(locator).toBeVisible();
      },
      async toBeHidden(): Promise<void> {
        await expect(locator).toBeHidden();
      },
      async toContainText(text: string): Promise<void> {
        await expect(locator).toContainText(text);
      },
    };
  }

  public expectUrl(): ExpectUrlType {
    return {
      toBeEqual: (url: string) => {
        expect(this.page.url()).toBe(url);
      },

      toContain: (url: string) => {
        expect(this.page.url()).toContain(url);
      },
    };
  }
}
