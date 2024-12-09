import { Page } from "@playwright/test";
import { AuthPagesIds } from "../locators/auth-page-locators";

export class AuthPageKeywords {
  public static Ids: AuthPagesIds;

  public static setPage(page: Page): void {
    AuthPageKeywords.Ids = new AuthPagesIds(page);
  }

  public static async selectSignInWithEmail(): Promise<void> {
    await AuthPageKeywords.Ids.loginIds.signInWithEmailBtn.click();
  }

  public static async selectSignUpWithEmail(): Promise<void> {
    await AuthPageKeywords.Ids.registerAccountIds.signUpWithEmailBtn.click();
  }

  public static async enterEmail(email: string): Promise<void> {
    await AuthPageKeywords.Ids.common.emailInput.fill(email);
  }

  public static async enterPassword(password: string): Promise<void> {
    await AuthPageKeywords.Ids.common.passwordInput.fill(password);
  }

  public static async selectContinue(): Promise<void> {
    await AuthPageKeywords.Ids.common.continueBtn.click();
  }

  public static async selectTemsAndConditions(): Promise<void> {}

  public static async selectPrivacyPolicy(): Promise<void> {}

  public static async selectRefundPolicy(): Promise<void> {}
}
