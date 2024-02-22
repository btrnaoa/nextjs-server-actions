import { db } from "@/lib/db"
import { todos } from "@/lib/db/schema"
import { revalidatePath } from "next/cache"

export default function TodoForm() {
  const addTodo = async (formData: FormData) => {
    "use server"

    const name = formData.get("todo")?.toString()
    if (name) {
      await db.insert(todos).values({ name })
      revalidatePath("/todos")
    }
  }

  return (
    <form action={addTodo}>
      <input name="todo" type="text" className="dark:text-black" />
      <button type="submit">Add</button>
    </form>
  )
}
