import { FC } from "react";
import { HomePage } from "./HomePage/HomePage";
import { TodoDetailPage } from "./TodoDetailPage/TodoDetailPage";
type Url = {
  url: string;
  path: string;
  component: FC;
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
    url: "/detail",
    path: "/detail",
    component: TodoDetailPage,
    isExact: true,
  },
};
