import { TodosContext } from "./todosContext"
import { FC, ReactNode } from "react"
import * as R from "ramda"
import { todoRequest } from "data/api"
import { useData } from "hooks/useData"
import { TodoType } from "types/todos"

type TodosProviderProps = {
  children: ReactNode
}

export const TodosProvider: FC<TodosProviderProps> = ({ children }) => {
  const [todos, { setData: setTodos, isLoading }] = useData(
    todoRequest.todosList,
  )

  const deleteTodo = (id: string) =>
    setTodos(prev => [...prev!.filter((x: TodoType) => x.id !== id)])

  const toggleTodo = (id: string) =>
    setTodos(prev =>
      R.over(
        R.lensPath([R.findIndex(R.propEq("id", id), prev!), "checked"]),
        R.not,
        prev,
      ),
    )

  return (
    <TodosContext.Provider
      value={{
        todos: todos || [],
        setTodos,
        isLoading,
        deleteTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
