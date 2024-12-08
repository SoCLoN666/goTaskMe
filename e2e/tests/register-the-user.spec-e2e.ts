import { test } from "@e2e-fixtures";
import { EMAIL_ADDRESS, PASSWORD } from "e2e/utils/random-email-generator";
import { CustomerOrdersPageOperationsHandler } from "@e2e-keywords-operator/orders-page-operators/customer-orders-page-operator";
import { CustomerOrdersPageKeywords } from "@e2e-keywords/customer-orders-page";
import { NavigateKeywords } from "@e2e-keywords/navigate-to-app";
import { AssertOperationHandler } from "@e2e-keywords-operator/assert-operator";
import { CreateNewOrderOperationHandler } from "@e2e-keywords-operator/create-new-order-operator";
import { CreateNewOrderKeywords } from "@e2e-keywords/create-new-order/create-new-order";
import { SidebarKeywords } from "@e2e-keywords/sidebar-keywords";
import { OrdersDraftsPageOperationsHandler } from "@e2e-keywords-operator/orders-page-operators/draft-orders-page-operator";

test.describe.configure({ mode: "serial" });

test.describe.only("test suite", () => {
  test.only("test", async ({
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

    await CreateNewOrderOperator.keywords.contentTypeStage.Ids.createOrderGrid.waitFor();

    AssertOperator.expectUrl.toContain("/customer/draft/new");
  });

  test.skip("test 2", async ({
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

    const confirmationError =
      CreateNewOrderOperator.keywords.confirmationStage.Ids.confirmationError;

    await AssertOperator.expectElement(confirmationError).toBeVisible();

    const newPage = await page.context().newPage();

    const OrdersPageSecondTabOperator = new CustomerOrdersPageOperationsHandler(
      newPage,
      new NavigateKeywords(newPage),
      new CustomerOrdersPageKeywords(newPage),
      new SidebarKeywords(newPage)
    );

    const CreateNewOrderSecondTabOperator = new CreateNewOrderOperationHandler(
      newPage,
      new NavigateKeywords(newPage),
      new CreateNewOrderKeywords(newPage)
    );

    const DraftOrdersSecondPageOperator = new OrdersDraftsPageOperationsHandler(newPage);

    const AssertOperatorSecondTab = new AssertOperationHandler(newPage);

    await OrdersPageSecondTabOperator.openPageOn("Drafts");

    AssertOperatorSecondTab.expectUrl.toContain("/draft");

    await OrdersPageSecondTabOperator.openOrder("Kusmin, task");

    const confirmationStageIds = CreateNewOrderSecondTabOperator.keywords.confirmationStage.Ids;
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

    await CreateNewOrderSecondTabOperator.keywords.confirmationStage.closeDraft();

    await DraftOrdersSecondPageOperator.discardDraft("Kusmin, task");

    const draftOrder =
      DraftOrdersSecondPageOperator.orderPageKeywords.Ids.getListItem("Kusmin, task");

    await page.waitForTimeout(2000);

    AssertOperatorSecondTab.expectElement(draftOrder).toBeHidden();
  });

  test.only("test3", async ({ SecurityPageOperator, LoginInAccountOperator, AssertOperator }) => {
    await LoginInAccountOperator.openPage();
    await LoginInAccountOperator.loginIntoAccount(EMAIL_ADDRESS, PASSWORD);

    await SecurityPageOperator.openPage();
    await SecurityPageOperator.deactivateAccount();

    AssertOperator.expectUrl.toContain("/login");
  });
});
