import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/page" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App
