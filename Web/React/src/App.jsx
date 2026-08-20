import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import MoviesPage from "./pages/MoviesPage"
import CategoryPage from "./pages/CategoryPage"

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/categories" element={<CategoryPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}