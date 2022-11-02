import { Trash } from "assets/icons/Trash";
import { Button } from "components/Button/Button";
import { TodosContext } from "context/todosContext";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoType } from "types/todos";
import { SWrapper, Card, Row, ButtonsWrapper } from "./ToodDetail.styled";

export const TodoDetail: FC<TodoType> = (p) => {
  const navigate = useNavigate();
  const { toggleTodo, deleteTodo } = useContext(TodosContext);
  return (
    <SWrapper>
      <Card>
        <Row>
          <p>Title: </p>
          <p>{p.title}</p>
        </Row>
        <Row>
          <p>Description: </p>
          <p>{p.description}</p>
        </Row>
        <Row>
          <p>Done: </p>
          <p>{p.checked ? "✔" : "✗"}</p>
        </Row>
      </Card>

      <ButtonsWrapper>
        <Button onClick={() => toggleTodo(p.id)}>
          {!p.checked ? "✔" : "✗"}
        </Button>
        <Button
          onClick={() => {
            deleteTodo(p.id);
            navigate("/");
          }}
        >
          <Trash />
        </Button>
      </ButtonsWrapper>
    </SWrapper>
  );
};
