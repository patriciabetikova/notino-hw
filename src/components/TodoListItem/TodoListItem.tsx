import { Eye } from "assets/icons/Eye"
import { Trash } from "assets/icons/Trash"
import { Button } from "components/Button/Button"
import { TodosContext } from "context/todosContext"
import { urls } from "pages/urls"
import { useContext } from "react"
import { FC } from "react"
import { TodoType } from "types/todos"
import { Checkmark, STodo } from "./TodoListItem.styled"

export const TodoListItem: FC<TodoType> = ({
  title,
  description,
  checked,
  id,
  withDescription = false,
}) => {
  const { toggleTodo, deleteTodo } = useContext(TodosContext)
  return (
    <STodo>
      <Checkmark checked={checked} onClick={() => toggleTodo(id)} />
      <p onClick={() => toggleTodo(id)}>{title}</p>
      {withDescription && <p>{description}</p>}
      <Button to={urls.todoDetail.url(id)}>
        <Eye />
      </Button>
      <Button onClick={() => deleteTodo(id)}>
        <Trash />
      </Button>
    </STodo>
  )
}
