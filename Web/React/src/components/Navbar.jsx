import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} width={70} height={70} alt="Logo Restoran" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ps-4" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item m-3">
              <Link to='/' className="nav-link"><b>Film</b></Link>
            </li>
            <li className="nav-item m-3">
              <Link to='/categories' className="nav-link"><b>Kategori</b></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
  </>
  )
}



