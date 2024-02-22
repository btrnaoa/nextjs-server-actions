import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { nanoid } from "nanoid"

export const todos = sqliteTable("todos", {
  id: text("id")
    .$defaultFn(() => nanoid())
    .primaryKey(),
  name: text("name").notNull(),
  done: integer("done", { mode: "boolean" }).notNull().default(false),
})

export type Todo = typeof todos.$inferSelect
