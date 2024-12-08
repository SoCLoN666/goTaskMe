import { ExpectElementType, ExpectUrlType } from "e2e/core/types/assert-types";
import { Locator, Page } from "@playwright/test";
import { AssertKeywords } from "../keywords/verification/assert-keywords";

export class AssertOperationHandler {
  private assertKeywords: AssertKeywords;

  public constructor(protected readonly page: Page) {
    this.assertKeywords = new AssertKeywords(page);
  }

  public expectElement(locator: Locator): ExpectElementType {
    return this.assertKeywords.expectElement(locator);
  }

  public get expectUrl(): ExpectUrlType {
    return this.assertKeywords.expectUrl();
  }
}
