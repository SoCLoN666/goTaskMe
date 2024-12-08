import { test } from "@e2e-fixtures";
import { EMAIL_ADDRESS, PASSWORD } from "e2e/utils/random-email-generator";

/**
 * this should be called only after registration of new user, either way it will fail, cause no user exists
 */
test("delete test user @cleanup", async ({
  SecurityPageOperator,
  LoginInAccountOperator,
  AssertOperator,
}) => {
  await LoginInAccountOperator.openPage();
  await LoginInAccountOperator.loginIntoAccount(EMAIL_ADDRESS, PASSWORD);

  await SecurityPageOperator.openPage();
  await SecurityPageOperator.deactivateAccount();

  AssertOperator.expectUrl.toContain("/login");
});
