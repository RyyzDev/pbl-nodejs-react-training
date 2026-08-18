import 'bootstrap/dist/css/bootstrap.min.css'
import LogoResto from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-dark-subtle">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={LogoResto} width={70} height={70} me-10 alt="Logo Restoran" />
            <strong className="navbar-text text-decoration-underline">Restoran Kitchen</strong>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ps-4" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to='/'><a className="nav-link active" aria-current="page" href="#"><b>Beranda</b></a></Link>
            </li>
            <li className="nav-item">
              <Link to='/menu'><a className="nav-link active" href="#"><b>Menu</b></a></Link>
            </li>
            <li className="nav-item">
              <Link to='/contact'><a className="nav-link" href="#"><b>Kontak</b></a></Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav> 
  </>
  )
}



