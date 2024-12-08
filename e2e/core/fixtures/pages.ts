import { test as base } from "@playwright/test";
import { AssertOperationHandler } from "../operation-handlers/assert-operator";
import { CreateNewOrderOperationHandler } from "../operation-handlers/create-new-order-operator";
import { LoginIntoAccountOperationHander } from "../operation-handlers/login-into-account-operator";
import { CustomerOrdersPageOperationsHandler } from "../operation-handlers/orders-page-operators/customer-orders-page-operator";
import { OrdersDraftsPageOperationsHandler } from "../operation-handlers/orders-page-operators/draft-orders-page-operator";
import { RegisterAccountOperationHandler } from "../operation-handlers/register-account-operator";
import { SecurityOperationsHandler } from "../operation-handlers/security-page";

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
    const registerAccountOperator = new RegisterAccountOperationHandler(page);

    await use(registerAccountOperator);
  },

  LoginInAccountOperator: async ({ page }, use) => {
    const loginIntoAccountOperator = new LoginIntoAccountOperationHander(page);

    await use(loginIntoAccountOperator);
  },

  CreateNewOrderOperator: async ({ page }, use) => {
    const createNewOrderOperator = new CreateNewOrderOperationHandler(page);

    await use(createNewOrderOperator);
  },

  OrdersPageOperator: async ({ page }, use) => {
    const ordersPageOperator = new CustomerOrdersPageOperationsHandler(page);

    await use(ordersPageOperator);
  },

  DraftOrdersPageOperator: async ({ page }, use) => {
    const draftOrdersPageOperator = new OrdersDraftsPageOperationsHandler(page);

    await use(draftOrdersPageOperator);
  },

  SecurityPageOperator: async ({ page }, use) => {
    const secirityPageOperator = new SecurityOperationsHandler(page);

    await use(secirityPageOperator);
  },

  AssertOperator: async ({ page }, use) => {
    const assertOperator = new AssertOperationHandler(page);

    await use(assertOperator);
  },
});
