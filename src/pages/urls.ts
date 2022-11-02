import { FC } from "react";
import { HomePage } from "./HomePage/HomePage";
import { TodoDetailPage } from "./TodoDetailPage/TodoDetailPage";
type Url = {
  component: FC;
  path: string;
  url: string;
  isExact?: boolean;
};

export const urls: Record<string, Url> = {
  home: {
    url: "/",
    path: "/",
    component: HomePage,
    isExact: true,
  },
  todoDetail: {
    url: "/detail/:id",
    path: "/detail/:id",
    component: TodoDetailPage,
    isExact: true,
  },
};
