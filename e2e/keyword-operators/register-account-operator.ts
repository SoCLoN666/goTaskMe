import { AuthPageKeywords } from "@e2e-keywords/register-account";
import { Page } from "@playwright/test";
import { NavigateKeywords } from "@e2e-keywords/navigate-to-app";

export class RegisterAccountOperationHandler {
  public constructor(
    protected readonly page: Page,
    protected readonly navigateKeywords: NavigateKeywords,
    protected readonly registerAccountKeywords: AuthPageKeywords
  ) {}

  public async openRegisterPage(waitUntil: "load" | "commit" = "load"): Promise<void> {
    await this.navigateKeywords.openAppOn("/auth/register", waitUntil);
  }

  public async registerAccount(email: string, password: string): Promise<void> {
    await this.registerAccountKeywords.selectSignUpWithEmail();
    await this.registerAccountKeywords.enterEmail(email);
    await this.registerAccountKeywords.enterPassword(password);
    await this.registerAccountKeywords.continue();
  }
}
