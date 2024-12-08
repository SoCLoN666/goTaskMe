import { test } from "e2e/core/fixtures/pages";
import { EMAIL_ADDRESS, PASSWORD } from "e2e/utils/random-email-generator";

/**
 * this should be called only after registration of new user, either way it will fail, cause no user exists
 */
test("delete test user @cleanup", async ({
  SecurityPageOperator,
  LoginInAccountOperator,
  AssertOperator,
}) => {
  await test.step("login into account", async () => {
    await LoginInAccountOperator.openPage();
    await LoginInAccountOperator.loginIntoAccount(EMAIL_ADDRESS, PASSWORD);
  });

  await test.step("deactivate account", async () => {
    await SecurityPageOperator.openPage();
    await SecurityPageOperator.deactivateAccount();
  });

  await test.step("validate user lands on login page", async () => {
    AssertOperator.expectUrl.toContain("/login");
  });
});
