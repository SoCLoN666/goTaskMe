import { generateAndGetEmailAddress } from "e2e/utils/random-email-generator";

async function globalSetup() {
  const email = generateAndGetEmailAddress();

  process.env.EMAIL_ADDRESS = email;
}

export default globalSetup;
