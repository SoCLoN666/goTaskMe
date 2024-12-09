import { test as base } from "@playwright/test";
import { AssertOperationsHandler } from "../operation-handlers/assert-operator";
import { CreateNewOrderOperationsHandler } from "../operation-handlers/create-new-order-operator";
import { LoginIntoAccountOperationsHander } from "../operation-handlers/login-into-account-operator";
import { CustomerOrdersPageOperationsHandler } from "../operation-handlers/orders-page-operators/customer-orders-page-operator1";
import { OrdersDraftsPageOperationsHandler } from "../operation-handlers/orders-page-operators/draft-orders-page-operator";
import { RegisterAccountOperationsHandler } from "../operation-handlers/register-account-operator";
import { SecurityOperationsHandler } from "../operation-handlers/security-page";

type Fixtures = {
  RegisterAccountOperator: RegisterAccountOperationsHandler;
  LoginInAccountOperator: LoginIntoAccountOperationsHander;
  CreateNewOrderOperator: CreateNewOrderOperationsHandler;
  DraftOrdersPageOperator: OrdersDraftsPageOperationsHandler;
  SecurityPageOperator: SecurityOperationsHandler;
  AssertOperator: AssertOperationsHandler;
};

export const test = base.extend<Fixtures>({
  RegisterAccountOperator: async ({ page }, use) => {
    const registerAccountOperator = new RegisterAccountOperationsHandler(page);

    await use(registerAccountOperator);
  },

  LoginInAccountOperator: async ({ page }, use) => {
    const loginIntoAccountOperator = new LoginIntoAccountOperationsHander(page);

    await use(loginIntoAccountOperator);
  },

  CreateNewOrderOperator: async ({ page }, use) => {
    const createNewOrderOperator = new CreateNewOrderOperationsHandler(page);

    await use(createNewOrderOperator);
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
    const assertOperator = new AssertOperationsHandler(page);

    await use(assertOperator);
  },
});
