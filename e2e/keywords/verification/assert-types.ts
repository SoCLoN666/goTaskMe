export type ExpectElementType = {
  toBeVisible(): Promise<void>;
  toBeHidden(): Promise<void>;
  toContainText(text: string): Promise<void>;
};

export type ExpectUrlType = {
  toBeEqual(url: string): void;
  toContain(url: string): void;
};
