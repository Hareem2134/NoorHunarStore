// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: '.env' });

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL environment variable is not set in .env file");
}

export default defineConfig({
  schema: "./shared/schema.ts",
  out: "./drizzle", // You can use 'migrations' or 'drizzle', both are fine
  dialect: "postgresql", // This is the correct new syntax
  dbCredentials: {
    url: process.env.POSTGRES_URL, // This is the correct new syntax
  },
});