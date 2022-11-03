import { Page } from "components/Page/Page"
import { TodoListItem } from "components/TodoListItem/TodoListItem"
import { TodosContext } from "context/todosContext"
import { FC, useContext } from "react"
import { TodoType } from "types/todos"

export const HomePage: FC = () => {
  const { todos } = useContext(TodosContext)
  return (
    <Page>
      <>
        {!todos?.length ? (
          <p>loading</p>
        ) : (
          <>
            {todos.map((todo: TodoType) => (
              <TodoListItem {...todo} key={todo.id} />
            ))}
            {!!todos?.filter(x => x.checked !== true).length || (
              <p>Congrats, you're done!</p>
            )}
          </>
        )}
      </>
    </Page>
  )
}
