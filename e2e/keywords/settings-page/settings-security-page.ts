import { Page } from "@playwright/test";
import { PASSWORD } from "e2e/utils/random-email-generator";

export class SettingsSecurityKeywords {
  private static page: Page;

  public static setPage(page: Page) {
    SettingsSecurityKeywords.page = page;
  }

  public static get Ids() {
    return {
      DeactivateAccountBtn: SettingsSecurityKeywords.page.getByText("Deactivate account"),
      DeactivateAccountInput: SettingsSecurityKeywords.page.getByPlaceholder("Enter your password"),
      NextBtn: SettingsSecurityKeywords.page.getByRole("button", {
        name: "Next",
        exact: true,
      }),
      // ConfirmDeactivationBtn: SettingsSecurityKeywords.page.locator(
      //   '[class="ant-btn ant-btn-primary ant-btn-lg ng-star-inserted"]',
      //   { hasText: "Deactivate" }
      // ),
      ConfirmDeactivationBtn: SettingsSecurityKeywords.page.getByRole("button", {
        name: "Deactivate",
        exact: true,
      }),
    };
  }

  public static async selectDeactivateAccount(): Promise<void> {
    await this.Ids.DeactivateAccountBtn.waitFor();
    await SettingsSecurityKeywords.page.waitForTimeout(500);
    await this.Ids.DeactivateAccountBtn.click({ force: true });
  }

  public static async enterPasswordInDeactivateAccountInput(): Promise<void> {
    await this.Ids.DeactivateAccountInput.fill(PASSWORD);
  }

  public static async selectNext(): Promise<void> {
    await this.Ids.NextBtn.click();
  }

  public static async confirmDeactivation(): Promise<void> {
    await this.Ids.ConfirmDeactivationBtn.waitFor();
    await this.Ids.ConfirmDeactivationBtn.click({ force: true });
  }
}
