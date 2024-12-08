import { test } from "@e2e-fixtures";
import { EMAIL_ADDRESS, PASSWORD } from "e2e/utils/random-email-generator";
import { CustomerOrdersPageOperationsHandler } from "e2e/operation-handlers/orders-page-operators/customer-orders-page-operator";
import { AssertOperationHandler } from "e2e/operation-handlers/assert-operator";
import { CreateNewOrderOperationHandler } from "e2e/operation-handlers/create-new-order-operator";
import { OrdersDraftsPageOperationsHandler } from "e2e/operation-handlers/orders-page-operators/draft-orders-page-operator";

test("create draft order @test", async ({
  CreateNewOrderOperator,
  LoginInAccountOperator,
  OrdersPageOperator,
  AssertOperator,
  page,
}) => {
  await LoginInAccountOperator.openPage();
  await LoginInAccountOperator.loginIntoAccount(EMAIL_ADDRESS, PASSWORD);
  await OrdersPageOperator.selectAddNewOrder();
  await CreateNewOrderOperator.createNewOrder({
    contentType: "PowerPoint presentation",
    service: "Writing",
    language: "English (UK)",
    numberOfSlides: 5,
    topicName: "Kusmin, task",
    theme: "English",
    contentRequirements: "requirements",
  });

  const confirmationError = CreateNewOrderOperator.Stage.ConfirmationStage.Ids.confirmationError;

  await AssertOperator.expectElement(confirmationError).toBeVisible();

  const newPage = await page.context().newPage();

  const OrdersPageSecondTabOperator = new CustomerOrdersPageOperationsHandler(newPage);

  const CreateNewOrderSecondTabOperator = new CreateNewOrderOperationHandler(newPage);

  const DraftOrdersSecondPageOperator = new OrdersDraftsPageOperationsHandler(newPage);

  const AssertOperatorSecondTab = new AssertOperationHandler(newPage);

  await OrdersPageSecondTabOperator.openPageOn("Drafts");

  AssertOperatorSecondTab.expectUrl.toContain("/draft");

  await OrdersPageSecondTabOperator.openOrder("Kusmin, task");

  const confirmationStageIds = CreateNewOrderSecondTabOperator.Stage.ConfirmationStage.Ids;
  const orderFormSecondTab = confirmationStageIds.orderForm;

  await orderFormSecondTab.waitFor();

  const expectedSubstringInOrder = [
    "PowerPoint presentation",
    "Writing",
    "English (UK)",
    "5",
    "Kusmin, task",
    "English",
    "requirements",
  ];

  expectedSubstringInOrder.forEach(async (substring) => {
    await AssertOperatorSecondTab.expectElement(orderFormSecondTab).toContainText(substring);
  });

  await CreateNewOrderSecondTabOperator.closeDraft();

  await DraftOrdersSecondPageOperator.discardDraft("Kusmin, task");

  const draftOrder = DraftOrdersSecondPageOperator.Ids.getListItem("Kusmin, task");

  await AssertOperatorSecondTab.expectElement(draftOrder).toBeHidden();
});
