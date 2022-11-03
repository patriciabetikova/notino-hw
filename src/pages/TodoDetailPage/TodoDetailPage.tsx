import { Page } from "components/Page/Page"
import { FC } from "react"
import { TodoDetail } from "components/TodoDetail/TodoDetail"
import { useContext } from "react"
import { TodosContext } from "context/todosContext"
import { useParams } from "react-router-dom"

export const TodoDetailPage: FC = () => {
  const { id } = useParams()
  const { todos } = useContext(TodosContext)
  const todo = todos?.find(x => x.id === id)

  return (
    <Page>
      {todo ? (
        <TodoDetail todo={todo} />
      ) : !!todos.length ? (
        <p>Todo not found</p>
      ) : (
        <p>loading...</p>
      )}
    </Page>
  )
}
