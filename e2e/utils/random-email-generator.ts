import path from "path";
import * as fs from "fs";

export const EMAIL_ADDRESS = getGeneratedEmail();
export const PASSWORD = "password123";

function generateEmailId(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateEmailDomain(): string {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const array = Array.from({ length: 6 });

  return array.map(() => characters[Math.floor(Math.random() * characters.length)]).join("");
}

export function generateAndGetEmailAddress(): string {
  const emailId = generateEmailId();
  const emailDomail = generateEmailDomain();
  const emailAddress = emailId + "@" + emailDomail + ".com";

  return emailAddress;
}

function getGeneratedEmail(): string {
  return process.env.EMAIL_ADDRESS;
}
