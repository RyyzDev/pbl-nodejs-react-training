import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import MoviesPage from "./pages/MoviesPage"
import CategoryPage from "./pages/CategoryPage"

import { ProtectedRoute } from "./components/ProtectedRoute"

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <ProtectedRoute allowedRoles={['admin', 'user']}>
              <MoviesPage />
            </ProtectedRoute>
          } />
          <Route path="/categories" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <CategoryPage/>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}