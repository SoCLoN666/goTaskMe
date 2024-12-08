import { NavigateKeywords } from "e2e/keywords/navigate-to-app";
import { SettingsSecurityKeywords } from "e2e/keywords/settings-page/settings-security-page";
import { Page } from "@playwright/test";

export class SecurityOperationsHandler {
  private page: Page;

  public constructor(page: Page) {
    this.page = page;
    NavigateKeywords.setPage(page);
    SettingsSecurityKeywords.setPage(page);
  }

  public async openPage(waitUntil: "commit" | "load" = "load"): Promise<void> {
    await NavigateKeywords.openAppOn("/customer/user/settings/security", waitUntil);
    await SettingsSecurityKeywords.Ids.DeactivateAccountBtn.waitFor();
  }

  public async deactivateAccount(): Promise<void> {
    await SettingsSecurityKeywords.selectDeactivateAccount();
    await SettingsSecurityKeywords.enterPasswordInDeactivateAccountInput();
    await SettingsSecurityKeywords.selectNext();
    await SettingsSecurityKeywords.confirmDeactivation();

    await this.page.waitForURL("**/auth/login");
  }
}
