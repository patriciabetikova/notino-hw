import React, { createContext } from "react";
import { TodoType } from "types/todos";

type TodosContextType = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType
);
