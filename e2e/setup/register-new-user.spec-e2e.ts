import { test } from "e2e/core/fixtures/pages";
import { EMAIL_ADDRESS, PASSWORD } from "e2e/utils/random-email-generator";

/**
 * This method should be called before test execution, because we need to create a user beforehand
 */
test("register new user @prep", async ({
  RegisterAccountOperator,
  CreateNewOrderOperator,
  AssertOperator,
}, testInfo) => {
  testInfo.annotations.push(
    { type: "email", description: EMAIL_ADDRESS },
    { type: "password", description: PASSWORD }
  );

  await test.step("register new account", async () => {
    await RegisterAccountOperator.openRegisterPage();
    await RegisterAccountOperator.registerAccount(EMAIL_ADDRESS, PASSWORD);
  });

  await test.step("validate user lands on create draft page", async () => {
    await CreateNewOrderOperator.Stage.ContentType.Ids.createOrderGrid.waitFor();

    AssertOperator.expectUrl.toContain("/customer/draft/new");
  });
});
