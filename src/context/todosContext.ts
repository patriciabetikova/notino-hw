import React, { createContext } from "react"
import { TodoType } from "types/todos"

type TodosContextType = {
  todos: TodoType[]
  isLoading: boolean
  setTodos: React.Dispatch<React.SetStateAction<TodoType[] | undefined>>
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
}

// satistfy typescript typechecker with this typecast
// initial value is never used, as it is always provided in the provider
// thus, making this less verbose
export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType,
)
