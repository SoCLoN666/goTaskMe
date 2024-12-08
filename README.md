# Protosure e2e automation

## Table of Contents

- [Overview](#overview)
- [Core Structure](#core-structure)
  - [Configuration](#configuration)
  - [Structure](#structure)
- [Test Cases](#test-cases)
  - [Writing Test Cases](#writing-test-cases)
  - [Naming Conventions](#naming-conventions)
  - [Organizing Test Cases](#organizing-test-cases)
- [Running Tests](#running-tests)
- [Kewords Example](#keywords-example)
- [Operation Handlers Example](#operation-handlers-example)
- [Locators Example](#locators-example)

## Overview

This automation solution combines modern Keyword-Driden and POM framework. Build upon Playwright framework it facilitate efficient and reliable testing. Framework architrecture is focused on reproducing real application structure using pages and rely on static Keywords that represent smallest user action, like click on specific element. Keyword Operators allows to combine this Keywords and create real user behavior, example login into page or create an order.
This approach allows to write tests faster, since Keyword Operators acts like Facades and reflect real application functionality. Operators, Keywords and Locators are separate small entities that work together, hence this enchences mantainability.

## Core Structure

Most elements that would be needed to write tests are located in `./e2e/core` folder.
You can find there next folders:

- **fixtures** : provide a singleton solution for all pages for reusability in tests
- **keywords** : contains all static Keywords. Entities that shares the logic for Keyword Operators
- **locators** : contains all Locators
- **operation-handlers** : contains all Keyword Operators. Entities which should be used in tests
- **types** : contains typescript types that will be used in this solution

### Configuration

// TO DO: currently we have 2 configs and they have shared constuctions. We can create base-config for reusability and share it to the rest
Framework configuration can be found in `playwright.config.ts`
Most importants parts are:

- **forbidOnly: isCi** : disallow only hook on CI env
- **workers: isCi ? 3 : undefined** : sets up number of parallel runs
- **maxFailures: isCi ? 100 : undefined** : sets up max number of test failures. If on CI 100 tests fails, we terminate the job

```
  use: {
    ...
    headless: true, : runs tests in headless mode
    }

```

### Structure

Important folders:

- **core** : contains the big part of framework architecture needed to write tests
- **tests** : folder with all tests
- **workflows** : contains gitHub Actions yaml file
- **environments.ts** : file that contains all project related envs
- **playwright.config.ts & playwright-setup.config.ts** : framework configurations
- **tsconfig.json** : global project configurations related to typescript

## Test Cases

Right now we support only 1 type of tests:

- functional end-to-end tests

All tests can be found in this folder: `./e2e/tests`

### Writing Test Cases

To start writing tests you will need to follow next steps:

- To write a test you need:
  - go to `./e2e/tests/` folder
  - pick (or create if such folder doesn't exist yet) a folder that will be related to specific place of the app, example: `create new order`
  - create a file with `.spec-e2e.ts` extention and give it meaningful name, ex: `create-new-order.spec-e2e.ts`
  - inside of file you need to make sure you use correct format, it should be as in example below:

```typescript
import { test } from "e2e/core/fixtures/pages"; // import of test and expect from our pre-defined
import { AssertOperationHandler } from "e2e/core/operation-handlers/assert-operator"; // import AssertOperationHandler
import { OrdersDraftsPageOperationsHandler } from "e2e/core/operation-handlers/orders-page-operators/draft-orders-page-operator"; //import OrdersDraftsPage
import { EMAIL_ADDRESS, PASSWORD } from "e2e/utils/random-email-generator"; // import globally storred email address and password

test.describe("draft order functional tests @test", () => {
  test("check draft order is saved in orders page on draft order creation", async ({
    CreateNewOrderOperator, // use CreateNewOrderOperator from fixtures
    LoginInAccountOperator, // use LoginInAccountOperator from fixtures
    DraftOrdersPageOperator, // use DraftOrdersPageOperator from fixtures
    AssertOperator, // use AssertOperator from fixtures
    page,
  }) => {
    /* to do the login, we need to open login page and then do actions like entering email, password and pressing 
        continue button. All of this logic is incapsulated out of the test
    */
    await test.step("login", async () => {
      await LoginInAccountOperator.openPage();
      await LoginInAccountOperator.loginIntoAccount(EMAIL_ADDRESS, PASSWORD);
    });

    // here we create a new oder by selecting such option and passing all stages until completion
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

    // since our email is not validated, we are checking for the error to appear
    await test.step("validate error appear", async () => {
      const confirmationError = CreateNewOrderOperator.Stage.Confirmation.Ids.confirmationError;

      await AssertOperator.expectElement(confirmationError).toBeVisible();
    });

    // now we need to open new tab
    const newPage = await test.step("open new tab", async () => {
      const newPage = await page.context().newPage();

      return newPage;
    });

    // here we will create instances of Keywords Operators that will be able handle the logic on second page
    const DraftOrdersSecondPageOperator = new OrdersDraftsPageOperationsHandler(newPage);

    const AssertOperatorSecondTab = new AssertOperationHandler(newPage);

    // now we open draft orders page
    await test.step("open draft orders page", async () => {
      await DraftOrdersSecondPageOperator.openPage();

      AssertOperatorSecondTab.expectUrl.toContain("/draft");
    });

    // and finally we check that our draft order was succesfully created
    await test.step("validate draft order was created", async () => {
      const draftOrder = DraftOrdersSecondPageOperator.Ids.getListItem("Kusmin, task");

      await AssertOperatorSecondTab.expectElement(draftOrder).toBeVisible();
    });
  });
});
```

### Naming Conventions

- getter for all Locators are called Ids and is written from capital letter for better visibility
- all static Keywords should have Keywords ending, like DraftOrdersKeywords, etc
- all Keyword Operators should have OperationHandler in the ending
- TO DO: this list can go on

### Organizing Test Cases

We have a folder for tests called: `tests`.
We need to make sure to group tests based on the feature or page they belong to, example

- tests
  - login
    - test-suite1.ts
    - test-suite2.ts
  - creare-new-order
    - draft-order
      - test-suite1.ts
      - test-suite2.ts
      - test-suite3.ts

## Running Tests

To execute all tests just run the next command in terminal: `yarn e2e:test:local`

## Keywords Example

```typescript
import { Locator, Page } from "@playwright/test";
import { MyOrdersPageIds } from "../locators/my-orders-page-locators";

export class MyOrdersPageKeywords {
  public static Ids: MyOrdersPageIds; // static access to Locators for MyOrdersPage

  /* IMPORTANT! this method is really important, it sets the page into static class, without calling this method Keywords won't work!!! */
  public static setPage(page: Page) {
    MyOrdersPageKeywords.Ids = new MyOrdersPageIds(page);
  }

  // other static methods to work with small components on the page
  public static async selectAddNewOrder(): Promise<void> {
    await MyOrdersPageKeywords.Ids.newOrderBtn.waitFor();
    await MyOrdersPageKeywords.Ids.newOrderBtn.click();
  }

  public static async openOrder(topic: string, idx = 0): Promise<void> {
    const order = this.getListItem(topic, idx);

    await order.waitFor();
    await order.click();
  }

  public static getListItem(topic: string, idx = 0): Locator {
    return MyOrdersPageKeywords.Ids.getListItem(topic).nth(idx);
  }
}
```

## Operation Handlers Example

```typescript
import { Page } from "@playwright/test";
import { AuthPageKeywords } from "../keywords/auth-page";
import { NavigateKeywords } from "../keywords/navigate-to-app";

export class LoginIntoAccountOperationsHander {
  public constructor(protected readonly page: Page) {
    // IMPORTANT! this is utter important. We call setPage for any Keywords entity we would use and set the page for it !!!
    NavigateKeywords.setPage(page);
    AuthPageKeywords.setPage(page);
  }

  // methods that feclect real user behavior like open the page
  public async openPage(waitUntil: "load" | "commit" = "load"): Promise<void> {
    await NavigateKeywords.openAppOn("/auth/login", waitUntil);
  }

  // or login into account
  public async loginIntoAccount(email: string, password: string): Promise<void> {
    await AuthPageKeywords.selectSignInWithEmail();
    await AuthPageKeywords.enterEmail(email);
    await AuthPageKeywords.enterPassword(password);
    await AuthPageKeywords.selectContinue();

    await this.page.waitForURL("**/orders/open");
  }
}
```

## Locators Example

```typescript
import { Locator, Page } from "@playwright/test";

// just a regular class that provides access to any locator we might need on this page to write our tests
export class MyOrdersPageIds {
  public constructor(protected readonly page: Page) {}

  public newOrderBtn = this.page.getByRole("button", { name: "New order" }).nth(0);

  public getListItem(topic: string): Locator {
    return this.page.locator("nz-list-item", { hasText: topic });
  }
}
```
