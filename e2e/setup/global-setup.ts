import { generateAndGetEmailAddress } from "e2e/utils/random-email-generator";
import fs from "fs";
import path from "path";

async function globalSetup() {
  const email = generateAndGetEmailAddress();
  const password = "password123";
  const data = { email, password };

  // Save the data to a file
  const tempFilePath = path.resolve(__dirname, "../temp.json");
  fs.writeFileSync(tempFilePath, JSON.stringify(data, null, 2));

  console.log(`Generated Email: ${email}`);
}

export default globalSetup;
