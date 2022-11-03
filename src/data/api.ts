import { get } from "common/request"
import { TodoType } from "types/todos"

export const todoRequest = {
  todosList: () => get("todos") as Promise<TodoType[]>,
}
