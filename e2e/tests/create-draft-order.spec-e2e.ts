import { test } from "e2e/core/fixtures/pages";
import { AssertOperationHandler } from "e2e/core/operation-handlers/assert-operator";
import { CustomerOrdersPageOperationsHandler } from "e2e/core/operation-handlers/orders-page-operators/customer-orders-page-operator1";
import { OrdersDraftsPageOperationsHandler } from "e2e/core/operation-handlers/orders-page-operators/draft-orders-page-operator";
import { EMAIL_ADDRESS, PASSWORD } from "e2e/utils/random-email-generator";

test.describe("draft order functional tests @test", () => {
  test("check draft order is saved in orders page on draft order creation", async ({
    CreateNewOrderOperator,
    LoginInAccountOperator,
    DraftOrdersPageOperator,
    AssertOperator,
    page,
  }) => {
    await test.step("login", async () => {
      await LoginInAccountOperator.openPage();
      await LoginInAccountOperator.loginIntoAccount(EMAIL_ADDRESS, PASSWORD);
    });

    await test.step("create new order", async () => {
      await DraftOrdersPageOperator.selectAddNewOrder();
      await CreateNewOrderOperator.createNewOrder({
        contentType: "PowerPoint presentation",
        service: "Writing",
        language: "English (UK)",
        numberOfSlides: 5,
        topicName: "Kusmin, task",
        theme: "English",
        contentRequirements: "requirements",
      });
    });

    await test.step("validate error appear", async () => {
      const confirmationError = CreateNewOrderOperator.Stage.Confirmation.Ids.confirmationError;

      await AssertOperator.expectElement(confirmationError).toBeVisible();
    });

    const newPage = await test.step("open new tab", async () => {
      const newPage = await page.context().newPage();

      return newPage;
    });

    const OrdersPageSecondTabOperator = new CustomerOrdersPageOperationsHandler(newPage);

    const DraftOrdersSecondPageOperator = new OrdersDraftsPageOperationsHandler(newPage);

    const AssertOperatorSecondTab = new AssertOperationHandler(newPage);

    await test.step("open draft orders page", async () => {
      await OrdersPageSecondTabOperator.openPageOn("Drafts");

      AssertOperatorSecondTab.expectUrl.toContain("/draft");
    });

    await test.step("validate draft order was created", async () => {
      const draftOrder = DraftOrdersSecondPageOperator.Ids.getListItem("Kusmin, task");

      await AssertOperatorSecondTab.expectElement(draftOrder).toBeVisible();
    });
  });

  test("check draft order data is correct", async ({
    CreateNewOrderOperator,
    LoginInAccountOperator,
    AssertOperator,
    DraftOrdersPageOperator,
  }) => {
    await test.step("login", async () => {
      await LoginInAccountOperator.openPage();
      await LoginInAccountOperator.loginIntoAccount(EMAIL_ADDRESS, PASSWORD);
    });

    await test.step("open draft opders page", async () => {
      await DraftOrdersPageOperator.openPage();
      await DraftOrdersPageOperator.openOrder("Kusmin, task");
    });

    const orderFormSecondTab = CreateNewOrderOperator.Stage.Confirmation.Ids.orderForm;

    await orderFormSecondTab.waitFor();

    await test.step("validate entered data is correct", async () => {
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
        await AssertOperator.expectElement(orderFormSecondTab).toContainText(substring);
      });
    });
  });

  test("check user can delete draft order", async ({
    LoginInAccountOperator,
    DraftOrdersPageOperator,
    AssertOperator,
  }) => {
    await test.step("login", async () => {
      await LoginInAccountOperator.openPage();
      await LoginInAccountOperator.loginIntoAccount(EMAIL_ADDRESS, PASSWORD);
    });

    await test.step("open draft orders page", async () => {
      await DraftOrdersPageOperator.openPage();

      AssertOperator.expectUrl.toContain("/draft");
    });

    await DraftOrdersPageOperator.discardDraft("Kusmin, task");

    await test.step("validate draft order is removed", async () => {
      const draftOrder = DraftOrdersPageOperator.Ids.getListItem("Kusmin, task");

      await AssertOperator.expectElement(draftOrder).toBeHidden();
    });
  });
});
