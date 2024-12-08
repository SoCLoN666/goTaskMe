import { Page } from "@playwright/test";
import { AuthPagesIds } from "e2e/locators/auth-page-locators";

export class AuthPageKeywords {
  private authPageIds?: AuthPagesIds;

  public constructor(protected readonly page: Page) {}

  public get Ids(): AuthPagesIds {
    return (this.authPageIds = this.authPageIds ?? new AuthPagesIds(this.page));
  }

  public async selectSignInWithEmail(): Promise<void> {
    await this.Ids.loginIds.signInWithEmailBtn.click();
  }

  public async selectSignUpWithEmail(): Promise<void> {
    await this.Ids.registerAccountIds.signUpWithEmailBtn.click();
  }

  public async enterEmail(email: string): Promise<void> {
    await this.authPageIds.common.emailInput.fill(email);
  }

  public async enterPassword(password: string): Promise<void> {
    await this.authPageIds.common.passwordInput.fill(password);
  }

  public async continue(): Promise<void> {
    await this.authPageIds.common.continueBtn.click();
  }

  public async selectTemsAndConditions(): Promise<void> {}

  public async selectPrivacyPolicy(): Promise<void> {}

  public async selectRefundPolicy(): Promise<void> {}
}
