import { TodosProvider } from "context/todosProvider"
import { AppRoutes } from "./AppRoutes/AppRoutes"
import { GlobalStyle } from "./GlobalStyle"

export const App = () => (
  <TodosProvider>
    <GlobalStyle />
    <AppRoutes />
  </TodosProvider>
)
