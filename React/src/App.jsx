import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import EmployeePage from "./pages/EmployeePage"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/page" element={<ContactPage />} />
          <Route path="/employee" element={<EmployeePage />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App
