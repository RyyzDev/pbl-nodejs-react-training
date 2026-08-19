import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import EmployeePage from "./pages/EmployeePage"
import GuestPage from "./pages/GuestPage"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menus" element={<MenuPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/guests" element={<GuestPage />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App
