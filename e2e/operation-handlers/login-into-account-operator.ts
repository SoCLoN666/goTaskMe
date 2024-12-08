import { NavigateKeywords } from "e2e/keywords/navigate-to-app";
import { AuthPageKeywords } from "@e2e-keywords/auth-page";
import { Page } from "@playwright/test";

export class LoginIntoAccountOperationHander {
  public constructor(protected readonly page: Page) {
    NavigateKeywords.setPage(page);
    AuthPageKeywords.setPage(page);
  }

  public async openPage(waitUntil: "load" | "commit" = "load"): Promise<void> {
    await NavigateKeywords.openAppOn("/auth/login", waitUntil);
  }

  public async loginIntoAccount(email: string, password: string): Promise<void> {
    await AuthPageKeywords.selectSignInWithEmail();
    await AuthPageKeywords.enterEmail(email);
    await AuthPageKeywords.enterPassword(password);
    await AuthPageKeywords.selectContinue();

    await this.page.waitForURL("**/orders/open");
  }
}
