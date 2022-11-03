import { HomePage } from "./HomePage/HomePage"
import { TodoDetailPage } from "./TodoDetailPage/TodoDetailPage"

export const urls = {
  home: {
    url: "/",
    path: "/",
    component: HomePage,
    isExact: true,
  },
  todoDetail: {
    url: (id: string) => `/detail/${id}`,
    path: "/detail/:id",
    component: TodoDetailPage,
    isExact: true,
  },
}
