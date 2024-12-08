import { NavigateKeywords } from "@e2e-keywords/navigate-to-app";
import { AuthPageKeywords } from "@e2e-keywords/register-account";
import { Page } from "@playwright/test";

export class LoginIntoAccountOperationHander {
  public constructor(
    protected readonly page: Page,
    protected readonly navigateKeywords: NavigateKeywords,
    protected readonly loginIntoAccountKeywords: AuthPageKeywords
  ) {}

  public async openPage(waitUntil: "load" | "commit" = "load"): Promise<void> {
    await this.navigateKeywords.openAppOn("/auth/login", waitUntil);
  }

  public async loginIntoAccount(email: string, password: string): Promise<void> {
    await this.loginIntoAccountKeywords.selectSignInWithEmail();
    await this.loginIntoAccountKeywords.enterEmail(email);
    await this.loginIntoAccountKeywords.enterPassword(password);
    await this.loginIntoAccountKeywords.continue();

    await this.page.waitForURL("**/orders/open");
  }
}
