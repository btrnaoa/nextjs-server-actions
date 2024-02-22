"use server"

import { db } from "@/lib/db"
import { Todo, todos } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export async function updateTodo(id: Todo["id"], todo: Partial<Todo>) {
  return db.update(todos).set(todo).where(eq(todos.id, id))
}
