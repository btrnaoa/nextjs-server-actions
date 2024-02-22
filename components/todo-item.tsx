import { db } from "@/lib/db"
import { todos } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import TodoCheckbox from "./todo-checkbox"

interface TodoItemProps {
  id: string
  name: string
  done: boolean
}

export default function TodoItem({ id, name, done }: TodoItemProps) {
  return (
    <li>
      <form
        action={async () => {
          "use server"

          await db.delete(todos).where(eq(todos.id, id))
          revalidatePath("/todos")
        }}
      >
        <label>
          <TodoCheckbox id={id} done={done} />
          {name}
        </label>
        <button type="submit">Delete</button>
      </form>
    </li>
  )
}
