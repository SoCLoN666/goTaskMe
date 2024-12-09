import { generateAndGetEmailAddress } from "e2e/utils/random-email-generator";
import fs from "fs";
import path from "path";

async function globalSetup() {
  const email = generateAndGetEmailAddress();
  const password = "password123";
  const data = { email, password };

  const setupDir = path.resolve(__dirname, "../setup");
  const tempDir = path.resolve(setupDir, "temp");

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
    console.log(`Created directory: ${tempDir}`);
  }

  const tempFilePath = path.resolve(tempDir, "temp.json");
  fs.writeFileSync(tempFilePath, JSON.stringify(data, null, 2));

  console.log(`Generated Email: ${email}`);
}

export default globalSetup;
