import { TodosContext } from "context/todosContext";
import { todoRequest } from "data/api";
import { useData } from "hooks/useData";
import React from "react";
import { TodoType } from "types/todos";
import { AppRoutes } from "./AppRoutes/AppRoutes";
import { GlobalStyle } from "./GlobalStyle";
import * as R from "ramda";

export const App = () => {
  const [todos, setTodos] = React.useState<TodoType[] | undefined>(undefined);

  const [data] = useData(() => todoRequest.todosList(), {
    skip: () => !!todos?.length,
  });

  React.useEffect(() => {
    if (data) setTodos(data);
  }, [data]);

  const deleteTodo = (id: string) =>
    setTodos((prev) => [...prev!.filter((x: TodoType) => x.id !== id)]);

  const toggleTodo = (id: string) =>
    setTodos((prev) =>
      R.over(
        // @ts-expect-error
        R.lensPath([R.findIndex(R.propEq("id", id), prev), "checked"]),
        R.not,
        prev
      )
    );
  return (
    // @ts-expect-error
    <TodosContext.Provider value={{ todos, setTodos, deleteTodo, toggleTodo }}>
      <GlobalStyle />
      <AppRoutes />
    </TodosContext.Provider>
  );
};
