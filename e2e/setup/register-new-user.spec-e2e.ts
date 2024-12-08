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

  await RegisterAccountOperator.openRegisterPage();

  await RegisterAccountOperator.registerAccount(EMAIL_ADDRESS, PASSWORD);

  await CreateNewOrderOperator.Stage.ContentTypeStage.Ids.createOrderGrid.waitFor();

  AssertOperator.expectUrl.toContain("/customer/draft/new");
});
