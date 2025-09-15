import { Routes, Route } from "react-router-dom"
import { HomePage, LikesPage, SavedPage } from "./pages"
import { PATH } from "./components/PATH"

const App = () => {
  return (
    <Routes>
      <Route path={PATH.home} element={<HomePage />} />
      <Route path={PATH.like} element={<LikesPage />} />
      <Route path={PATH.saved} element={<SavedPage />} />
    </Routes>
  )
}

export default App
