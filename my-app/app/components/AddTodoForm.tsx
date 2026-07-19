'use client'

import { useActionState , useRef , useEffect } from "react"
import {AddTodo} from '@/app/actions/todo-actions'

const initialstate = {error : ""}

export default function AddTodoForm(){
   const [state, formAction, isPending] = useActionState(AddTodo, initialstate)
    const formRef = useRef<HTMLFormElement>(null)

 useEffect(() => {
    if (!state?.error) {
      formRef.current?.reset()
    }
  }, [state])
    return(
        <form ref={formRef} action={formAction} className="flex gap-2">
      <input
        type="text"
        name="title"
        placeholder="Add a new todo..."
        className="flex-1 border rounded px-3 py-2"
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isPending ? "Adding..." : "Add"}
      </button>
    </form>
    )
}