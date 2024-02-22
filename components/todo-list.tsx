import { db } from "@/lib/db"
import { todos } from "@/lib/db/schema"
import TodoItem from "./todo-item"

export default async function TodoList() {
  const todoItems = await db.select().from(todos)
  return (
    <ul>
      {todoItems.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
