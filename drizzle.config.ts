import type { Config } from "drizzle-kit"

export default {
  driver: "better-sqlite",
  dbCredentials: {
    url: "todos.db",
  },
  schema: "./lib/db/schema.ts",
} satisfies Config
