// import { Locator, Page } from "@playwright/test";

// export class CreateNewOrderIds {
//   public constructor(protected readonly page: Page) {}

//   public reaterOrderGrid = this.page.locator("create-order-grid");

//   private nextBtn = this.page.getByRole("button", { name: "Next" });

//   public get ContentTypeStageIds() {
//     return {
//       selectContentDropdownBtn: this.page.locator('[id="product"]'),
//       getContentTypeByTitle: (title: string): Locator => this.getContentTypeByTitle(title),
//     };
//   }

//   public get ServiceStageIds() {
//     return {
//       writing: this.page.getByLabel("Writing"),
//       rewriting: this.page.getByLabel("Rewriting"),
//       editing: this.page.getByLabel("Editing"),
//     };
//   }

//   public get LanguageStageIds() {
//     return {
//       englishUS: this.page.getByLabel("English (US)"),
//       englishUK: this.page.getByLabel("English (UK)"),
//       spanishES: this.page.getByLabel("Spanish (ES)"),
//       frenchFR: this.page.getByLabel("French (FR)"),
//     };
//   }

//   public get SizeStageIds() {
//     return {
//       minusBtn: this.page.locator("button", { has: this.page.locator('[name="minus"]') }),
//       plusBtn: this.page.locator("button", { has: this.page.locator('[name="plus"]') }),
//       nextBtn: this.nextBtn,
//     };
//   }

//   public get DeadlineStageIds() {
//     const dateRangePopup = this.page.locator("date-range-popup");

//     return {
//       datePickerBtn: this.page.locator("nz-date-picker"),
//       timePickerBtn: this.page.locator("nz-time-picker"),
//       dateRangePopup: dateRangePopup,
//       lastDateInDateRangePopup: dateRangePopup
//         .locator("date-table")
//         .locator("tbody")
//         .locator("tr")
//         .locator("td")
//         .last(),
//       nextBtn: this.nextBtn,
//     };
//   }

//   public get TopicStageIds() {
//     return {
//       nameYourTopicInput: this.page.getByLabel("Name your topic"),
//       saveBtn: this.page.getByRole("button", { name: "Save" }),
//     };
//   }

//   public get ThemeStageIds() {
//     return {
//       selectThemeFromSearchInput: this.page.locator("nz-form-control", {
//         has: this.page.getByText("Choose your theme"),
//       }),
//       getThemeByTitle: (title: string): Locator => this.getThemeByTitle(title),
//     };
//   }

//   public get ContentRequirementsStageIds() {
//     const textEditorId = this.page.locator("wysiwyg-text-editor");

//     return {
//       textBodyElement: textEditorId.locator('[class="angular-editor-textarea"]'),
//       nextBtn: this.nextBtn,
//     };
//   }

//   public get OrderConfirmationStageIds() {
//     return {
//       discardDraftBtn: this.page.getByRole("button", { name: "Discard draft" }),
//       confirmBtn: this.page.getByRole("button", { name: "Confirm" }),
//     };
//   }

//   private getContentTypeByTitle(title: string): Locator {
//     return this.page.locator('input[name="topic"]', { hasText: title });
//   }

//   private getThemeByTitle(title: string): Locator {
//     return this.page
//       .locator("nz-option-item", { hasText: title })
//       .or(this.page.locator("div.ant-select-item-option", { hasText: title }));
//   }
// }
