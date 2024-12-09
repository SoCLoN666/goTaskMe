import { Page } from "@playwright/test";
import { NavigateKeywords } from "../keywords/navigate-to-app";
import { SettingsSecurityKeywords } from "../keywords/settings-page/settings-security-page";

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
