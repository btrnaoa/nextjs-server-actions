"use client"

import { updateTodo } from "@/actions"
import { useState } from "react"

interface TodoCheckboxProps {
  id: string
  done: boolean
}

export default function TodoCheckbox({ id, done }: TodoCheckboxProps) {
  const [checked, setChecked] = useState(done)

  const handleChange = async () => {
    await updateTodo(id, { done: !checked })
    setChecked(!checked)
  }

  return <input type="checkbox" checked={checked} onChange={handleChange} />
}
