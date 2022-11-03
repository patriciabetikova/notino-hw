import { Trash } from "assets/icons/Trash"
import { Button } from "components/Button/Button"
import { TodosContext } from "context/todosContext"
import React, { FC, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TodoType } from "types/todos"
import { Card, Row, ButtonsWrapper } from "./ToodDetail.styled"
import { urls } from "pages/urls"

type TodoDetailProps = { todo: TodoType }

export const TodoDetail: FC<TodoDetailProps> = React.memo(({ todo }) => {
  const navigate = useNavigate()
  const { toggleTodo, deleteTodo } = useContext(TodosContext)
  return (
    <>
      <Card>
        <Row>
          <p>Title: </p>
          <p>{todo.title}</p>
        </Row>
        <Row>
          <p>Description: </p>
          <p>{todo.description}</p>
        </Row>
        <Row>
          <p>Completed: </p>
          <p>{todo.checked ? "✔" : "✗"}</p>
        </Row>
      </Card>

      <ButtonsWrapper>
        <Button to={urls.home.url}>⬅</Button>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button onClick={() => toggleTodo(todo.id)}>
            {!todo.checked ? "✔" : "✗"}
          </Button>
          <Button
            onClick={() => {
              deleteTodo(todo.id)
              navigate("/")
            }}
          >
            <Trash />
          </Button>
        </div>
      </ButtonsWrapper>
    </>
  )
})
