import { AuthPageKeywords } from "@e2e-keywords/auth-page";
import { Page } from "@playwright/test";
import { NavigateKeywords } from "e2e/keywords/navigate-to-app";

export class RegisterAccountOperationHandler {
  public constructor(protected readonly page: Page) {
    NavigateKeywords.setPage(page);
    AuthPageKeywords.setPage(page);
  }

  public async openRegisterPage(waitUntil: "load" | "commit" = "load"): Promise<void> {
    await NavigateKeywords.openAppOn("/auth/register", waitUntil);
  }

  public async registerAccount(email: string, password: string): Promise<void> {
    await AuthPageKeywords.selectSignUpWithEmail();
    await AuthPageKeywords.enterEmail(email);
    await AuthPageKeywords.enterPassword(password);
    await AuthPageKeywords.selectContinue();
  }
}
