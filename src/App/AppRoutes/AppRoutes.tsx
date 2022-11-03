import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as R from "ramda"
import { urls } from "../../pages/urls"

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {R.values(urls).map(x => (
        <Route element={<x.component />} path={x.path} key={x.path} />
      ))}
    </Routes>
  </BrowserRouter>
)
