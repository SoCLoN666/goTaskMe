import { Page } from "@playwright/test";

export class AuthPagesIds {
  public constructor(protected readonly page: Page) {}

  public get common() {
    return {
      emailInput: this.page.getByPlaceholder("Enter your email"),
      passwordInput: this.page.getByPlaceholder("Enter your password"),
      continueBtn: this.page.getByRole("button", { name: "Continue" }),
    };
  }

  public get loginIds() {
    return {
      signInWithEmailBtn: this.page.getByRole("button", { name: "Sign in with email" }),
    };
  }

  public get registerAccountIds() {
    return {
      signUpWithEmailBtn: this.page.getByRole("button", { name: "Sign up with email" }),
    };
  }
}
