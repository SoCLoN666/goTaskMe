import { test as base } from "@playwright/test";
import { RegisterAccountOperationHandler } from "@e2e-keywords-operator/register-account-operator";
import { NavigateKeywords } from "@e2e-keywords/navigate-to-app";
import { AuthPageKeywords } from "@e2e-keywords/register-account";
import { AssertOperationHandler } from "@e2e-keywords-operator/assert-operator";
import { CreateNewOrderOperationHandler } from "@e2e-keywords-operator/create-new-order-operator";
import { CreateNewOrderKeywords } from "@e2e-keywords/create-new-order/create-new-order";
import { LoginIntoAccountOperationHander } from "@e2e-keywords-operator/login-into-account-operator";
import { CustomerOrdersPageOperationsHandler } from "@e2e-keywords-operator/orders-page-operators/customer-orders-page-operator";
import { CustomerOrdersPageKeywords } from "@e2e-keywords/customer-orders-page";
import { SidebarKeywords } from "@e2e-keywords/sidebar-keywords";
import { OrdersDraftsPageOperationsHandler } from "@e2e-keywords-operator/orders-page-operators/draft-orders-page-operator";
import { SecurityOperationsHandler } from "@e2e-keywords-operator/security-page";

type Fixtures = {
  RegisterAccountOperator: RegisterAccountOperationHandler;
  LoginInAccountOperator: LoginIntoAccountOperationHander;
  CreateNewOrderOperator: CreateNewOrderOperationHandler;
  OrdersPageOperator: CustomerOrdersPageOperationsHandler;
  DraftOrdersPageOperator: OrdersDraftsPageOperationsHandler;
  SecurityPageOperator: SecurityOperationsHandler;
  AssertOperator: AssertOperationHandler;
};

export const test = base.extend<Fixtures>({
  RegisterAccountOperator: async ({ page }, use) => {
    const registerAccountOperator = new RegisterAccountOperationHandler(
      page,
      new NavigateKeywords(page),
      new AuthPageKeywords(page)
    );

    await use(registerAccountOperator);
  },

  LoginInAccountOperator: async ({ page }, use) => {
    const loginIntoAccountOperator = new LoginIntoAccountOperationHander(
      page,
      new NavigateKeywords(page),
      new AuthPageKeywords(page)
    );

    await use(loginIntoAccountOperator);
  },

  CreateNewOrderOperator: async ({ page }, use) => {
    const createNewOrderOperator = new CreateNewOrderOperationHandler(
      page,
      new NavigateKeywords(page),
      new CreateNewOrderKeywords(page)
    );

    await use(createNewOrderOperator);
  },

  OrdersPageOperator: async ({ page }, use) => {
    const ordersPageOperator = new CustomerOrdersPageOperationsHandler(
      page,
      new NavigateKeywords(page),
      new CustomerOrdersPageKeywords(page),
      new SidebarKeywords(page)
    );

    await use(ordersPageOperator);
  },

  DraftOrdersPageOperator: async ({ page }, use) => {
    const draftOrdersPageOperator = new OrdersDraftsPageOperationsHandler(page);

    await use(draftOrdersPageOperator);
  },

  SecurityPageOperator: async ({ page }, use) => {
    const secirityPageOperator = new SecurityOperationsHandler(page, new NavigateKeywords(page));

    await use(secirityPageOperator);
  },

  AssertOperator: async ({ page }, use) => {
    const assertOperator = new AssertOperationHandler(page);

    await use(assertOperator);
  },
});
